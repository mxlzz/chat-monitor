// Synthetic experiment only. No browser, network, GitHub API or ChatGPT access.
import test from 'node:test';
import assert from 'node:assert/strict';

const createChat = (alias) => ({ alias, turn: 1, report: 'UNKNOWN', finished: false,
  draft: false, connected: true, armed: false, due: null, remaining: 2, sent: null });
class FixtureMonitor {
  constructor() { this.chats = new Map(['A','B','C'].map(a => [a, createChat(a)])); this.now = 0; this.paused = false; this.outbox = []; }
  get(a) { const c = this.chats.get(a); if (!c) throw new Error('unknown alias'); return c; }
  report(a, turn, status) { const c = this.get(a); if (turn !== c.turn) return; c.report = status; if (status !== 'READY') c.due = null; this.schedule(c); }
  finish(a, turn) { const c = this.get(a); if (turn !== c.turn) return; c.finished = true; this.schedule(c); }
  arm(a) { const c = this.get(a); c.armed = true; this.schedule(c); }
  disarm(a) { const c = this.get(a); c.armed = false; c.due = null; }
  eligible(c) { return !this.paused && c.connected && c.finished && !c.draft && c.report === 'READY' && !c.sent; }
  schedule(c) { if (c.armed && c.remaining > 0 && this.eligible(c) && c.due === null) c.due = this.now + 30; }
  request(a, mode = 'manual') { const c = this.get(a); if (!this.eligible(c) || (mode === 'auto' && (!c.armed || c.remaining <= 0 || c.due === null || c.due > this.now))) return false;
    c.due = null; c.sent = 'PENDING'; if (mode === 'auto') c.remaining--; this.outbox.push({ alias:a, turn:c.turn, mode, text:'Continuá', key:a+":"+c.turn }); return true; }
  tick(now) { this.now = now; for (const c of this.chats.values()) if (c.due !== null && c.due <= now) this.request(c.alias,'auto'); }
  human(a) { const c = this.get(a); c.due = null; c.turn++; c.report = 'UNKNOWN'; c.finished = false; c.sent = null; }
  setDraft(a, value) { const c = this.get(a); c.draft = value; c.due = null; if (!value) this.schedule(c); }
  ack(a, turn, success) { const c = this.get(a); if (c.turn !== turn || c.sent !== 'PENDING') return; if (success) this.human(a); else { c.sent = 'UNKNOWN'; c.armed = false; } }
  pause() { this.paused = true; for (const c of this.chats.values()) { c.due = null; c.armed = false; } }
  disconnect(a) { const c = this.get(a); c.connected = false; c.due = null; c.armed = false; if (c.sent) c.sent = 'UNKNOWN'; }
  restart() { for (const c of this.chats.values()) { c.due = null; c.armed = false; c.connected = false; c.finished = false; if (c.sent) c.sent = 'UNKNOWN'; } }
}
function ready(m,a,turn=1) { m.report(a,turn,'READY'); m.finish(a,turn); }
test('publication READY alone cannot send', () => { const m=new FixtureMonitor(); m.arm('A'); m.report('A',1,'READY'); m.tick(100); assert.equal(m.outbox.length,0); });
test('manual request selects only one of three chats', () => { const m=new FixtureMonitor(); for(const a of ['A','B','C']) ready(m,a); assert.equal(m.request('B'),true); assert.deepEqual(m.outbox.map(x=>x.alias),['B']); });
test('automatic mode is opt-in and respects delay', () => { const m=new FixtureMonitor(); ready(m,'A'); ready(m,'B'); m.arm('A'); m.tick(29); assert.equal(m.outbox.length,0); m.tick(30); assert.deepEqual(m.outbox.map(x=>x.alias),['A']); });
test('manual request wins against scheduled duplicate', () => { const m=new FixtureMonitor(); ready(m,'A'); m.arm('A'); m.tick(29); assert.equal(m.request('A'),true); m.tick(30); assert.equal(m.request('A'),false); assert.equal(m.outbox.length,1); });
test('human intervention cancels old turn; stale report ignored', () => { const m=new FixtureMonitor(); ready(m,'A'); m.arm('A'); m.human('A'); ready(m,'A',1); m.tick(60); assert.equal(m.outbox.length,0); });
test('draft blocks manual and automatic requests', () => { const m=new FixtureMonitor(); ready(m,'A'); m.arm('A'); m.setDraft('A',true); m.tick(60); assert.equal(m.request('A'),false); assert.equal(m.outbox.length,0); });
test('non-ready statuses cancel pending automation', () => { for(const status of ['WAITING','BLOCKED','ERROR','AUDIT_REQUIRED','COMPLETED','UNKNOWN']) { const m=new FixtureMonitor(); ready(m,'A'); m.arm('A'); m.report('A',1,status); m.tick(100); assert.equal(m.outbox.length,0,status); } });
test('pause prevents queued automation across all chats', () => { const m=new FixtureMonitor(); for(const a of ['A','B','C']) { ready(m,a); m.arm(a); } m.pause(); m.tick(100); assert.equal(m.outbox.length,0); });
test('individual disarm does not affect another chat', () => { const m=new FixtureMonitor(); for(const a of ['A','B']) { ready(m,a); m.arm(a); } m.disarm('A'); m.tick(30); assert.deepEqual(m.outbox.map(x=>x.alias),['B']); });
test('uncertain delivery is not retried', () => { const m=new FixtureMonitor(); ready(m,'A'); m.arm('A'); m.tick(30); m.ack('A',1,false); m.tick(90); assert.equal(m.request('A'),false); assert.equal(m.outbox.length,1); });
test('finite auto limit per session', () => { const m=new FixtureMonitor(); m.arm('A'); for(let turn=1;turn<=3;turn++) { ready(m,'A',turn); m.tick(turn*30); m.ack('A',turn,true); } assert.equal(m.outbox.length,2); });
test('disconnect and simulated restart fail closed', () => { const m=new FixtureMonitor(); ready(m,'A'); ready(m,'B'); m.arm('A'); m.arm('B'); m.request('B'); m.disconnect('A'); m.restart(); m.tick(90); assert.equal(m.request('B'),false); assert.equal(m.outbox.length,1); assert.equal(m.get('B').sent,'UNKNOWN'); });
test('unknown alias rejected', () => { const m=new FixtureMonitor(); assert.throws(()=>m.request('X'),/unknown alias/); assert.equal(m.outbox.length,0); });

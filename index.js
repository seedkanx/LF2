const _0x5ac0f7 = _0x1c8c;
(function (_0xf15d23, _0x45e31c) {
  const _0x2942c8 = _0x1c8c,
    _0x493284 = _0xf15d23();
  while (!![]) {
    try {
      const _0x429363 =
        -parseInt(_0x2942c8(0x214)) / 0x1 +
        parseInt(_0x2942c8(0x2c3)) / 0x2 +
        parseInt(_0x2942c8(0x36c)) / 0x3 +
        -parseInt(_0x2942c8(0x223)) / 0x4 +
        -parseInt(_0x2942c8(0x38a)) / 0x5 +
        parseInt(_0x2942c8(0x37d)) / 0x6 +
        parseInt(_0x2942c8(0x2c5)) / 0x7;
      if (_0x429363 === _0x45e31c) break;
      else _0x493284["push"](_0x493284["shift"]());
    } catch (_0x2a4e12) {
      _0x493284["push"](_0x493284["shift"]());
    }
  }
})(_0x4740, 0xe96f4);
const http = require(_0x5ac0f7(0x2e8)),
  { spawn } = require(_0x5ac0f7(0x32c)),
  {
    app,
    BrowserWindow,
    Menu,
    ipcMain,
    shell,
    session,
    dialog,
    screen,
  } = require(_0x5ac0f7(0x293)),
  fs = require("fs"),
  path = require("path"),
  S1Eg = require(_0x5ac0f7(0x374)),
  version = _0x5ac0f7(0x275),
  GAME_VERSION = 0x870;
let client = null,
  RHvE = null,
  Zut9 = null,
  SERVER_PORT = 0x1f90,
  unable_debug_alerted = ![];
const MSG_CHANNEL = 0x1,
  RECV_BATCH = 0x1000;
let _cbPump = null,
  _next_player_id = 0x1,
  _control_names = ["-", "-", "-", "-"],
  _latency = 0x3;
const MAX_PLAYERS = 0x8;
let RESEND_INTERVAL_MS = 0x96,
  TIMEOUT_INTERVAL_MS = 0x2710,
  sent_seq = new Map(),
  ack_seq = new Map(),
  received_seq = new Map(),
  last_sent_msgs = new Map(),
  last_sent_time = new Map(),
  last_received_time = new Map();
function resetReliableMessageState() {
  ((sent_seq = new Map()),
    (ack_seq = new Map()),
    (received_seq = new Map()),
    (last_sent_msgs = new Map()),
    (last_sent_time = new Map()),
    (last_received_time = new Map()));
}
function resetMessageStateFromPlayer(_0x1d75ce) {
  const _0x39a117 = _0x5ac0f7;
  (sent_seq["delete"](_0x1d75ce),
    ack_seq[_0x39a117(0x1f3)](_0x1d75ce),
    received_seq[_0x39a117(0x1f3)](_0x1d75ce),
    last_sent_msgs["delete"](_0x1d75ce),
    last_sent_time[_0x39a117(0x1f3)](_0x1d75ce),
    last_received_time[_0x39a117(0x1f3)](_0x1d75ce));
}
function _toBigInt(_0x1d2f15) {
  try {
    return BigInt(_0x1d2f15);
  } catch {
    return null;
  }
}
try {
  S1Eg[_0x5ac0f7(0x326)]();
} catch (_0x3c58ae) {
  a73P(_0x5ac0f7(0x34a) + _0x3c58ae);
}
let MM = null,
  NM = null,
  NU = null,
  lobby_created = null,
  lobby_joined = null,
  lobby_game_started = ![],
  _playerList = [],
  _playerNames = new Map(),
  _playerName = "",
  _playerId = "",
  _playerCountry = "-",
  _playerIdInLobby = "",
  _creatorId = "",
  _lobbyId = "";
const KICK_TAG = _0x5ac0f7(0x291),
  LEFT_TAG = "LEFT",
  REQUEST_CHECKIN_TAG = _0x5ac0f7(0x1f2),
  RESPONSE_CHECKIN_TAG = _0x5ac0f7(0x383),
  PLAYER_LIST_TAG = _0x5ac0f7(0x224),
  PING_TAG = "PING",
  PONG_TAG = _0x5ac0f7(0x392),
  START_GAME_TAG = _0x5ac0f7(0x22c),
  NIL_TAG = _0x5ac0f7(0x233),
  CLIENT_MSG_TAG = _0x5ac0f7(0x237);
let unread_messages = [];
try {
  ((client = S1Eg["init"](0x3195f2)),
    (MM = client[_0x5ac0f7(0x315)]),
    (NM = client["networking_messages"]),
    (NU = client[_0x5ac0f7(0x285)]),
    setupMessageListening());
} catch (_0x35a070) {
  a73P(_0x5ac0f7(0x241) + _0x35a070);
}
(app[_0x5ac0f7(0x2ab)][_0x5ac0f7(0x390)](_0x5ac0f7(0x321)),
  app[_0x5ac0f7(0x2ab)][_0x5ac0f7(0x390)]("disable-renderer-backgrounding"),
  app[_0x5ac0f7(0x2ab)][_0x5ac0f7(0x390)](_0x5ac0f7(0x2e0)));
function sWbi(_0x557038, _0x96528c = 0x2) {
  const _0x2c5cde = _0x5ac0f7;
  return JSON["stringify"](
    _0x557038,
    (_0x119436, _0xeb6504) =>
      typeof _0xeb6504 === _0x2c5cde(0x2b3)
        ? _0xeb6504[_0x2c5cde(0x1f0)]()
        : _0xeb6504,
    _0x96528c,
  );
}
const a7vm = [
  { id: "U1RBR0VfMV9FQVNZ", name: _0x5ac0f7(0x24c), desc: _0x5ac0f7(0x308) },
  {
    id: _0x5ac0f7(0x2c6),
    name: _0x5ac0f7(0x2f2),
    desc: "Q2xlYXIgU3RhZ2UgMSBvbiBOb3JtYWw=",
  },
  { id: _0x5ac0f7(0x341), name: _0x5ac0f7(0x2a7), desc: _0x5ac0f7(0x21f) },
  {
    id: "U1RBR0VfMV9DUkFaWQ==",
    name: _0x5ac0f7(0x24e),
    desc: "Q2xlYXIgU3RhZ2UgMSBvbiBDcmF6eQ==",
  },
  { id: _0x5ac0f7(0x348), name: _0x5ac0f7(0x2ce), desc: _0x5ac0f7(0x297) },
  {
    id: _0x5ac0f7(0x268),
    name: "U3RhZ2UgMiDigJMgTm9ybWFs",
    desc: _0x5ac0f7(0x26e),
  },
  {
    id: _0x5ac0f7(0x1f4),
    name: "U3RhZ2UgMiDigJMgRGlmZmljdWx0",
    desc: _0x5ac0f7(0x26c),
  },
  { id: _0x5ac0f7(0x336), name: _0x5ac0f7(0x2a5), desc: _0x5ac0f7(0x367) },
  { id: _0x5ac0f7(0x211), name: _0x5ac0f7(0x362), desc: _0x5ac0f7(0x227) },
  { id: _0x5ac0f7(0x322), name: _0x5ac0f7(0x2b8), desc: _0x5ac0f7(0x34c) },
  {
    id: _0x5ac0f7(0x2f1),
    name: "U3RhZ2UgMyDigJMgRGlmZmljdWx0",
    desc: _0x5ac0f7(0x316),
  },
  {
    id: _0x5ac0f7(0x320),
    name: _0x5ac0f7(0x286),
    desc: "Q2xlYXIgU3RhZ2UgMyBvbiBDcmF6eQ==",
  },
  { id: _0x5ac0f7(0x228), name: _0x5ac0f7(0x361), desc: _0x5ac0f7(0x2ff) },
  { id: _0x5ac0f7(0x206), name: _0x5ac0f7(0x2ee), desc: _0x5ac0f7(0x299) },
  {
    id: "U1RBR0VfNF9ESUZGSUNVTFQ=",
    name: _0x5ac0f7(0x287),
    desc: _0x5ac0f7(0x33b),
  },
  {
    id: _0x5ac0f7(0x2bf),
    name: _0x5ac0f7(0x1f9),
    desc: "Q2xlYXIgU3RhZ2UgNCBvbiBDcmF6eQ==",
  },
  { id: _0x5ac0f7(0x1fa), name: _0x5ac0f7(0x2af), desc: _0x5ac0f7(0x24b) },
  { id: _0x5ac0f7(0x339), name: _0x5ac0f7(0x262), desc: _0x5ac0f7(0x234) },
  { id: _0x5ac0f7(0x208), name: _0x5ac0f7(0x271), desc: _0x5ac0f7(0x31d) },
  { id: _0x5ac0f7(0x231), name: _0x5ac0f7(0x2e6), desc: _0x5ac0f7(0x295) },
  { id: _0x5ac0f7(0x294), name: "RGF2aXMgR29sZA==", desc: _0x5ac0f7(0x22a) },
  { id: _0x5ac0f7(0x379), name: _0x5ac0f7(0x29f), desc: _0x5ac0f7(0x24d) },
  { id: "R09MRF9ERU5OSVM=", name: _0x5ac0f7(0x33d), desc: _0x5ac0f7(0x27b) },
  { id: _0x5ac0f7(0x209), name: _0x5ac0f7(0x399), desc: _0x5ac0f7(0x23d) },
  {
    id: _0x5ac0f7(0x343),
    name: "RmlyZW4gR29sZA==",
    desc: "Q2xlYXIgU3RhZ2UgNSBvbiBEaWZmaWN1bHQgdXNpbmcgRmlyZW4gKGh1bWFuLWNvbnRyb2xsZWQp",
  },
  { id: _0x5ac0f7(0x387), name: _0x5ac0f7(0x2b5), desc: _0x5ac0f7(0x371) },
  { id: _0x5ac0f7(0x370), name: _0x5ac0f7(0x284), desc: _0x5ac0f7(0x269) },
  {
    id: _0x5ac0f7(0x2d0),
    name: _0x5ac0f7(0x2c1),
    desc: "Q2xlYXIgU3RhZ2UgNSBvbiBEaWZmaWN1bHQgdXNpbmcgSGVucnkgKGh1bWFuLWNvbnRyb2xsZWQp",
  },
  {
    id: _0x5ac0f7(0x333),
    name: _0x5ac0f7(0x2a9),
    desc: "Q2xlYXIgU3RhZ2UgNSBvbiBEaWZmaWN1bHQgdXNpbmcgSm9obiAoaHVtYW4tY29udHJvbGxlZCk=",
  },
  {
    id: _0x5ac0f7(0x253),
    name: _0x5ac0f7(0x20a),
    desc: "Q2xlYXIgU3RhZ2UgNSBvbiBEaWZmaWN1bHQgdXNpbmcgRGVlcCAoaHVtYW4tY29udHJvbGxlZCk=",
  },
  {
    id: "R09MRF9CQVQ=",
    name: _0x5ac0f7(0x28f),
    desc: "Q2xlYXIgU3RhZ2UgNSBvbiBEaWZmaWN1bHQgdXNpbmcgQmF0IChodW1hbi1jb250cm9sbGVkKQ==",
  },
  { id: _0x5ac0f7(0x2d8), name: _0x5ac0f7(0x24a), desc: _0x5ac0f7(0x30f) },
  { id: _0x5ac0f7(0x26b), name: "RmlyemVuIEdvbGQ=", desc: _0x5ac0f7(0x366) },
  { id: _0x5ac0f7(0x31f), name: _0x5ac0f7(0x312), desc: _0x5ac0f7(0x26f) },
  { id: _0x5ac0f7(0x283), name: _0x5ac0f7(0x393), desc: _0x5ac0f7(0x2ef) },
  { id: "U0lMVkVSX1dPT0RZ", name: "V29vZHkgU2lsdmVy", desc: _0x5ac0f7(0x2db) },
  {
    id: _0x5ac0f7(0x395),
    name: _0x5ac0f7(0x2a8),
    desc: "Q2xlYXIgU3RhZ2UgNSBvbiBOb3JtYWwgdXNpbmcgRGVubmlzIChodW1hbi1jb250cm9sbGVkKSB3aXRoIGF0IGxlYXN0IG9uZSBvdGhlciBwbGF5ZXIgKGh1bWFuIG9yIENQVSk=",
  },
  {
    id: _0x5ac0f7(0x35d),
    name: _0x5ac0f7(0x261),
    desc: "Q2xlYXIgU3RhZ2UgNSBvbiBOb3JtYWwgdXNpbmcgRnJlZXplIChodW1hbi1jb250cm9sbGVkKSB3aXRoIGF0IGxlYXN0IG9uZSBvdGhlciBwbGF5ZXIgKGh1bWFuIG9yIENQVSk=",
  },
  {
    id: _0x5ac0f7(0x2d3),
    name: _0x5ac0f7(0x1f6),
    desc: "Q2xlYXIgU3RhZ2UgNSBvbiBOb3JtYWwgdXNpbmcgRmlyZW4gKGh1bWFuLWNvbnRyb2xsZWQpIHdpdGggYXQgbGVhc3Qgb25lIG90aGVyIHBsYXllciAoaHVtYW4gb3IgQ1BVKQ==",
  },
  { id: _0x5ac0f7(0x205), name: "TG91aXMgU2lsdmVy", desc: _0x5ac0f7(0x280) },
  { id: _0x5ac0f7(0x2b1), name: _0x5ac0f7(0x37b), desc: _0x5ac0f7(0x277) },
  { id: _0x5ac0f7(0x22d), name: _0x5ac0f7(0x25e), desc: _0x5ac0f7(0x1f8) },
  {
    id: _0x5ac0f7(0x2d6),
    name: _0x5ac0f7(0x28c),
    desc: "Q2xlYXIgU3RhZ2UgNSBvbiBOb3JtYWwgdXNpbmcgSm9obiAoaHVtYW4tY29udHJvbGxlZCkgd2l0aCBhdCBsZWFzdCBvbmUgb3RoZXIgcGxheWVyIChodW1hbiBvciBDUFUp",
  },
  { id: _0x5ac0f7(0x32f), name: _0x5ac0f7(0x340), desc: _0x5ac0f7(0x32d) },
  {
    id: _0x5ac0f7(0x335),
    name: _0x5ac0f7(0x282),
    desc: "Q2xlYXIgU3RhZ2UgNSBvbiBOb3JtYWwgdXNpbmcgQmF0IChodW1hbi1jb250cm9sbGVkKSB3aXRoIGF0IGxlYXN0IG9uZSBvdGhlciBwbGF5ZXIgKGh1bWFuIG9yIENQVSk=",
  },
  {
    id: _0x5ac0f7(0x23a),
    name: "TG91aXNFWCBTaWx2ZXI=",
    desc: "Q2xlYXIgU3RhZ2UgNSBvbiBOb3JtYWwgdXNpbmcgTG91aXNFWCAoaHVtYW4tY29udHJvbGxlZCkgd2l0aCBhdCBsZWFzdCBvbmUgb3RoZXIgcGxheWVyIChodW1hbiBvciBDUFUp",
  },
  {
    id: "U0lMVkVSX0ZJUlpFTg==",
    name: _0x5ac0f7(0x1fd),
    desc: _0x5ac0f7(0x30d),
  },
  {
    id: _0x5ac0f7(0x2cc),
    name: _0x5ac0f7(0x2ea),
    desc: "Q2xlYXIgU3RhZ2UgNSBvbiBOb3JtYWwgdXNpbmcgSnVsaWFuIChodW1hbi1jb250cm9sbGVkKSB3aXRoIGF0IGxlYXN0IG9uZSBvdGhlciBwbGF5ZXIgKGh1bWFuIG9yIENQVSk=",
  },
  { id: _0x5ac0f7(0x26a), name: "RGF2aXMgQnJvbnpl", desc: _0x5ac0f7(0x207) },
  {
    id: _0x5ac0f7(0x2ed),
    name: _0x5ac0f7(0x38e),
    desc: "Q2xlYXIgU3RhZ2UgNSBvbiBFYXN5IHVzaW5nIFdvb2R5IChodW1hbi1jb250cm9sbGVkKSB3aXRoIGF0IGxlYXN0IHR3byBvdGhlciBwbGF5ZXJzIChodW1hbiBvciBDUFUp",
  },
  { id: _0x5ac0f7(0x36a), name: _0x5ac0f7(0x33e), desc: _0x5ac0f7(0x232) },
  {
    id: _0x5ac0f7(0x328),
    name: "RnJlZXplIEJyb256ZQ==",
    desc: _0x5ac0f7(0x276),
  },
  {
    id: _0x5ac0f7(0x288),
    name: _0x5ac0f7(0x225),
    desc: "Q2xlYXIgU3RhZ2UgNSBvbiBFYXN5IHVzaW5nIEZpcmVuIChodW1hbi1jb250cm9sbGVkKSB3aXRoIGF0IGxlYXN0IHR3byBvdGhlciBwbGF5ZXJzIChodW1hbiBvciBDUFUp",
  },
  { id: _0x5ac0f7(0x247), name: "TG91aXMgQnJvbnpl", desc: _0x5ac0f7(0x36f) },
  {
    id: "QlJPTlpFX1JVRE9MRg==",
    name: _0x5ac0f7(0x2cb),
    desc: _0x5ac0f7(0x30e),
  },
  {
    id: "QlJPTlpFX0hFTlJZ",
    name: _0x5ac0f7(0x202),
    desc: "Q2xlYXIgU3RhZ2UgNSBvbiBFYXN5IHVzaW5nIEhlbnJ5IChodW1hbi1jb250cm9sbGVkKSB3aXRoIGF0IGxlYXN0IHR3byBvdGhlciBwbGF5ZXJzIChodW1hbiBvciBDUFUp",
  },
  { id: _0x5ac0f7(0x27f), name: "Sm9obiBCcm9uemU=", desc: _0x5ac0f7(0x2e3) },
  {
    id: "QlJPTlpFX0RFRVA=",
    name: _0x5ac0f7(0x314),
    desc: "Q2xlYXIgU3RhZ2UgNSBvbiBFYXN5IHVzaW5nIERlZXAgKGh1bWFuLWNvbnRyb2xsZWQpIHdpdGggYXQgbGVhc3QgdHdvIG90aGVyIHBsYXllcnMgKGh1bWFuIG9yIENQVSk=",
  },
  { id: _0x5ac0f7(0x397), name: _0x5ac0f7(0x29d), desc: _0x5ac0f7(0x289) },
  { id: _0x5ac0f7(0x2cf), name: _0x5ac0f7(0x2bc), desc: _0x5ac0f7(0x3a1) },
  {
    id: "QlJPTlpFX0ZJUlpFTg==",
    name: _0x5ac0f7(0x238),
    desc: _0x5ac0f7(0x36e),
  },
  { id: _0x5ac0f7(0x342), name: _0x5ac0f7(0x28a), desc: _0x5ac0f7(0x33f) },
  { id: _0x5ac0f7(0x378), name: _0x5ac0f7(0x29b), desc: _0x5ac0f7(0x2be) },
  {
    id: _0x5ac0f7(0x357),
    name: _0x5ac0f7(0x384),
    desc: "Q2xlYXIgU3Vydml2YWwgU3RhZ2UgMjAgb24gRGlmZmljdWx0",
  },
  {
    id: _0x5ac0f7(0x381),
    name: "U3Vydml2YWwgMzAg4oCTIEhvbGRpbmcgdGhlIExpbmU=",
    desc: _0x5ac0f7(0x350),
  },
  { id: "U1VSVklWQUxfNDA=", name: _0x5ac0f7(0x251), desc: _0x5ac0f7(0x219) },
  { id: _0x5ac0f7(0x256), name: _0x5ac0f7(0x353), desc: _0x5ac0f7(0x245) },
  {
    id: "U1VSVklWQUxfNjA=",
    name: _0x5ac0f7(0x296),
    desc: "Q2xlYXIgU3Vydml2YWwgU3RhZ2UgNjAgb24gRGlmZmljdWx0",
  },
  { id: "U1VSVklWQUxfNzA=", name: _0x5ac0f7(0x396), desc: _0x5ac0f7(0x2d1) },
  { id: "U1VSVklWQUxfODA=", name: _0x5ac0f7(0x2cd), desc: _0x5ac0f7(0x375) },
  { id: _0x5ac0f7(0x319), name: _0x5ac0f7(0x21a), desc: _0x5ac0f7(0x337) },
  {
    id: _0x5ac0f7(0x2b0),
    name: "U3Vydml2YWwgMTAwIOKAkyBUaGUgSW1tb3J0YWw=",
    desc: "Q2xlYXIgU3Vydml2YWwgU3RhZ2UgMTAwIG9uIERpZmZpY3VsdA==",
  },
  { id: _0x5ac0f7(0x298), name: _0x5ac0f7(0x2e7), desc: _0x5ac0f7(0x39f) },
  {
    id: _0x5ac0f7(0x229),
    name: _0x5ac0f7(0x2ae),
    desc: "Q2xlYXIgU3RhZ2UgNSBvbiBIYXJkIG9yIGFib3ZlIHdpdGggMyBodW1hbi1jb250cm9sbGVkIHBsYXllcnM=",
  },
  {
    id: _0x5ac0f7(0x2c2),
    name: "U3F1YWQgQ2xlYXIgKDRQIE5vcm1hbCsp",
    desc: "Q2xlYXIgU3RhZ2UgNSBvbiBOb3JtYWwgb3IgYWJvdmUgd2l0aCA0IG9yIDUgaHVtYW4tY29udHJvbGxlZCBwbGF5ZXJz",
  },
  { id: _0x5ac0f7(0x317), name: _0x5ac0f7(0x351), desc: _0x5ac0f7(0x358) },
  { id: "Q09PUF84UA==", name: _0x5ac0f7(0x2dd), desc: _0x5ac0f7(0x235) },
  { id: _0x5ac0f7(0x306), name: _0x5ac0f7(0x2eb), desc: _0x5ac0f7(0x2c7) },
  { id: "TU9ERV9WUzI=", name: "VlMgTWFzdGVy", desc: _0x5ac0f7(0x376) },
  {
    id: "TU9ERV9CQVRUTEUx",
    name: "QmF0dGxlIFZldGVyYW4=",
    desc: _0x5ac0f7(0x3a3),
  },
  { id: _0x5ac0f7(0x2f9), name: _0x5ac0f7(0x25a), desc: _0x5ac0f7(0x20f) },
  {
    id: _0x5ac0f7(0x303),
    name: _0x5ac0f7(0x3a2),
    desc: "V2luIGEgMS1vbi0xIENoYW1waW9uc2hpcCBvbiBEaWZmaWN1bHQ=",
  },
  {
    id: _0x5ac0f7(0x27e),
    name: "MiBvbiAyIENoYW1waW9u",
    desc: "V2luIGEgMi1vbi0yIENoYW1waW9uc2hpcCBvbiBEaWZmaWN1bHQ=",
  },
];
(ipcMain[_0x5ac0f7(0x203)](_0x5ac0f7(0x254), () => {
  const _0x11fadc = _0x5ac0f7;
  if (client == null) return null;
  let _0x421b5e = client[_0x11fadc(0x360)]["getSteamId"]()[_0x11fadc(0x242)];
  if (_0x421b5e == 0x0) return null;
  let _0x3ceab3 = [];
  function _0x3ae66f(_0x54e17d) {
    const _0x42d5e2 = _0x11fadc;
    if (typeof Buffer !== _0x42d5e2(0x27c))
      return Buffer[_0x42d5e2(0x28e)](_0x54e17d, "ba" + _0x42d5e2(0x32b) + "4")[
        _0x42d5e2(0x1f0)
      ]("ut" + "f8");
    return decodeURIComponent(escape(atob(_0x54e17d)));
  }
  for (let _0x27954b = 0x0; _0x27954b < a7vm["length"]; _0x27954b++) {
    const _0x1647e6 = a7vm[_0x27954b];
    ((_0x1647e6["id"] = _0x3ae66f(_0x1647e6["id"])),
      (_0x3ceab3[_0x27954b] = {
        id: _0x1647e6["id"],
        done: client[_0x11fadc(0x265)][_0x11fadc(0x2ec)](_0x1647e6["id"]),
      }));
  }
  const _0x100023 = client[_0x11fadc(0x24f)][_0x11fadc(0x29c)](),
    _0x2611ad = client[_0x11fadc(0x360)]["getName"]();
  return (
    (_playerId = _0x421b5e[_0x11fadc(0x1f0)]()),
    (_playerCountry = "" + client["localplayer"][_0x11fadc(0x368)]()),
    (_playerName = _0x2611ad),
    _playerName[_0x11fadc(0x272)]("☎", "●"),
    _playerNames[_0x11fadc(0x201)](_0x421b5e[_0x11fadc(0x1f0)](), _playerName),
    {
      n: "" + _0x421b5e,
      aa: _0x3ceab3,
      isD: _0x100023,
      rn: "" + _0x2611ad,
      ipc: "" + client[_0x11fadc(0x360)]["getIpCountry"](),
      env: sWbi(process[_0x11fadc(0x2d5)]),
    }
  );
}),
  ipcMain[_0x5ac0f7(0x203)]("set-achievement", (_0x538d1a, _0x650a2a) => {
    const _0x363fd1 = _0x5ac0f7;
    if (client == null) return null;
    client[_0x363fd1(0x265)]["activate"](_0x650a2a);
  }),
  ipcMain["handle"](_0x5ac0f7(0x37a), () => {}),
  ipcMain["handle"](_0x5ac0f7(0x2dc), () => {
    const _0x38fdbe = _0x5ac0f7;
    if (client == null) return ![];
    const _0x147140 = client[_0x38fdbe(0x360)]["getSteamId"]()["accountId"];
    if (_0x147140 == 0x0) return ![];
    return client[_0x38fdbe(0x31a)][_0x38fdbe(0x32a)](0x3195f2);
  }),
  ipcMain[_0x5ac0f7(0x203)]("C522", () => {
    const _0x560427 = _0x5ac0f7;
    app[_0x560427(0x226)]();
  }),
  ipcMain[_0x5ac0f7(0x203)](_0x5ac0f7(0x2e9), async (_0x70d1db, _0x3efcb8) => {
    ((SERVER_PORT = _0x3efcb8), O0vN(), setTimeout(jHAr, 0x7d0));
  }));
const isMac = process[_0x5ac0f7(0x31c)] === _0x5ac0f7(0x38d),
  iconPath = isMac ? "./_res_pngs/lf2_icon.png" : _0x5ac0f7(0x345);
let hFJ2, wvzG, brxb, rzdd, Xdd2, xSJQ;
function O0vN() {
  const _0x2fb293 = _0x5ac0f7;
  if (RHvE) return;
  Zut9 && (Zut9[_0x2fb293(0x221)](), (Zut9 = null));
  let _0x17f58b = path[_0x2fb293(0x363)](__dirname, "lf2-room-server-win.exe");
  process[_0x2fb293(0x31c)] === _0x2fb293(0x38d) &&
    (_0x17f58b = path[_0x2fb293(0x363)](__dirname, _0x2fb293(0x386)));
  const _0x38fe38 = [SERVER_PORT, 0x8, 0x3];
  ((RHvE = spawn(_0x17f58b, _0x38fe38, {
    cwd: path["dirname"](_0x17f58b),
    stdio: _0x2fb293(0x2e2),
    env: { ...process["env"] },
  })),
    RHvE["on"](_0x2fb293(0x2bb), () => {
      const _0x4b1521 = _0x2fb293;
      ((RHvE = null), Zut9 && (Zut9[_0x4b1521(0x221)](), (Zut9 = null)));
    }));
}
function Uoh8(_0x41427b) {
  const _0x4c6700 = _0x5ac0f7;
  ((Zut9 = new BrowserWindow({
    width: 0x384,
    height: 0x2bc,
    webPreferences: { nodeIntegration: ![] },
  })),
    Zut9[_0x4c6700(0x31e)](),
    _0x41427b["startsWith"](_0x4c6700(0x2e8))
      ? Zut9[_0x4c6700(0x2a2)](_0x41427b)
      : Zut9[_0x4c6700(0x2d4)](_0x41427b),
    Zut9["on"](_0x4c6700(0x1ff), () => {
      const _0x24ca2e = _0x4c6700;
      ((Zut9 = null), RHvE && (RHvE[_0x24ca2e(0x278)](), (RHvE = null)));
    }));
}
function R5sD(_0xa3d28, _0x242081) {
  const _0x3dd3f0 = _0x5ac0f7,
    _0x24fa47 = http[_0x3dd3f0(0x2ca)](_0xa3d28, (_0x4b0597) => {
      const _0x1f2a9f = _0x3dd3f0;
      let _0x42eb3a = "";
      (_0x4b0597["on"](_0x1f2a9f(0x302), (_0x39a49e) => {
        _0x42eb3a += _0x39a49e;
      }),
        _0x4b0597["on"]("end", () => {
          const _0x1d4ccc = _0x1f2a9f,
            _0x44ffa0 = _0x42eb3a[_0x1d4ccc(0x2b9)](
              "<title>Little\x20Fighter\x202\x20Private\x20Room\x20Server",
            );
          _0x242081(_0x44ffa0);
        }));
    });
  (_0x24fa47["on"](_0x3dd3f0(0x244), () => _0x242081(![])),
    _0x24fa47[_0x3dd3f0(0x389)](0x3e8, () => {
      const _0x1b9075 = _0x3dd3f0;
      (_0x24fa47[_0x1b9075(0x2b7)](), _0x242081(![]));
    }));
}
function jHAr() {
  const _0x3c6827 = _0x5ac0f7;
  if (Zut9) {
    Zut9["focus"]();
    return;
  }
  let _0x55a1e0 = 0x0;
  const _0x10947e = 0x2,
    _0x1ea293 = 0x14,
    _0x480cee = 0x7d0,
    _0x4e7b77 = _0x3c6827(0x307) + SERVER_PORT,
    _0x23aa50 = () => {
      R5sD(_0x4e7b77, (_0x122550) => {
        const _0x1ae645 = _0x1c8c;
        if (_0x122550) Uoh8(_0x4e7b77);
        else
          _0x55a1e0 < _0x1ea293
            ? (_0x55a1e0++, setTimeout(_0x23aa50, _0x480cee))
            : Uoh8(path[_0x1ae645(0x363)](__dirname, _0x1ae645(0x2e5)));
      });
    },
    _0x49df7f = () => {
      if (RHvE != null) ((_0x55a1e0 = 0x0), _0x23aa50());
      else
        _0x55a1e0 < _0x10947e
          ? (_0x55a1e0++, setTimeout(_0x49df7f, _0x480cee))
          : Uoh8(path["join"](__dirname, "./room_server_error.html"));
    };
  _0x49df7f();
}
function SWMD() {
  const _0x13fd1e = _0x5ac0f7;
  ((hFJ2 = new BrowserWindow({
    useContentSize: !![],
    width: 0x5bb,
    height: 0x339,
    icon: path["join"](__dirname, iconPath),
    resizable: !![],
    fullscreenable: !![],
    webPreferences: {
      preload: path[_0x13fd1e(0x363)](__dirname, _0x13fd1e(0x2f8)),
      contextIsolation: !![],
      enableRemoteModule: ![],
      nodeIntegration: !![],
    },
  })),
    hFJ2["on"](_0x13fd1e(0x1ff), () => {
      const _0x4b9bf2 = _0x13fd1e;
      (rzdd && (rzdd[_0x4b9bf2(0x221)](), (rzdd = null)),
        Xdd2 && (Xdd2["close"](), (Xdd2 = null)),
        xSJQ && (xSJQ[_0x4b9bf2(0x221)](), (xSJQ = null)),
        wvzG && (wvzG["close"](), (wvzG = null)),
        brxb && (brxb[_0x4b9bf2(0x221)](), (brxb = null)),
        Zut9 && (Zut9[_0x4b9bf2(0x221)](), (Zut9 = null)),
        RHvE && (RHvE["kill"](), (RHvE = null)));
    }),
    hFJ2["loadFile"](
      path[_0x13fd1e(0x363)](__dirname, "./electron_index.html"),
    ));
}
function GrbK() {
  const _0x18ccb3 = _0x5ac0f7;
  if (hFJ2 != null) {
    const _0x18ff2c = hFJ2[_0x18ccb3(0x2ad)]();
    (hFJ2[_0x18ccb3(0x2bd)](!_0x18ff2c),
      hFJ2[_0x18ccb3(0x2a0)](!_0x18ff2c),
      hFJ2["setMenuBarVisibility"](_0x18ff2c));
  }
}
(ipcMain[_0x5ac0f7(0x203)]("tg75", async (_0xa25b23) => {
  GrbK();
}),
  ipcMain[_0x5ac0f7(0x203)](_0x5ac0f7(0x1f5), async (_0x5e1e22) => {
    oHMR();
  }));
function oHMR() {
  const _0x20485a = _0x5ac0f7;
  if (wvzG) {
    wvzG[_0x20485a(0x398)]();
    return;
  }
  ((wvzG = new BrowserWindow({
    useContentSize: !![],
    width: 0x2d5,
    height: 0x23a,
    title: _0x20485a(0x39a),
    icon: path[_0x20485a(0x363)](__dirname, iconPath),
  })),
    wvzG[_0x20485a(0x31e)](),
    wvzG[_0x20485a(0x2d4)](
      path[_0x20485a(0x363)](__dirname, "./moves_table/index.html"),
    ),
    wvzG["on"](_0x20485a(0x1ff), () => {
      wvzG = null;
    }));
}
ipcMain[_0x5ac0f7(0x203)]("Bm4y", async (_0x366fec) => {
  DqYS();
});
function DqYS() {
  const _0x3441e2 = _0x5ac0f7;
  if (rzdd) {
    rzdd[_0x3441e2(0x398)]();
    return;
  }
  ((rzdd = new BrowserWindow({
    useContentSize: !![],
    width: 0x348,
    height: 0x320,
    title: _0x3441e2(0x391),
    icon: path[_0x3441e2(0x363)](__dirname, iconPath),
  })),
    rzdd[_0x3441e2(0x31e)](),
    rzdd[_0x3441e2(0x2d4)](
      path[_0x3441e2(0x363)](__dirname, "./moves_table/roadmap.html"),
    ),
    rzdd["on"](_0x3441e2(0x1ff), () => {
      rzdd = null;
    }));
}
ipcMain[_0x5ac0f7(0x203)]("w4zI", async (_0x591a3c) => {
  gS8M();
});
function gS8M() {
  const _0x41c94e = _0x5ac0f7;
  if (Xdd2) {
    Xdd2[_0x41c94e(0x398)]();
    return;
  }
  ((Xdd2 = new BrowserWindow({
    useContentSize: !![],
    width: 0x348,
    height: 0x320,
    title: _0x41c94e(0x325),
    icon: path["join"](__dirname, iconPath),
  })),
    Xdd2[_0x41c94e(0x31e)](),
    Xdd2[_0x41c94e(0x2d4)](path[_0x41c94e(0x363)](__dirname, _0x41c94e(0x23f))),
    Xdd2["on"](_0x41c94e(0x1ff), () => {
      Xdd2 = null;
    }));
}
(ipcMain["handle"]("vOVF", async (_0x2c3ce3) => {
  qd8v();
}),
  ipcMain[_0x5ac0f7(0x203)](_0x5ac0f7(0x2c8), (_0x34d1a5, _0x52a969) => {
    a73P(_0x52a969);
  }));
function a73P(_0x30cf63) {
  const _0x36a344 = _0x5ac0f7,
    _0x2c3b28 = app[_0x36a344(0x23c)](_0x36a344(0x21e)),
    _0x5a7322 = path[_0x36a344(0x363)](_0x2c3b28, _0x36a344(0x2f0)),
    _0x33f8fa = 0x300 * 0x400,
    _0x4b52e4 = 0x180 * 0x400;
  try {
    let _0x2709cd = "";
    if (fs[_0x36a344(0x2aa)](_0x5a7322)) {
      const _0x3ecb0b = fs[_0x36a344(0x20c)](_0x5a7322);
      if (_0x3ecb0b[_0x36a344(0x373)] > _0x33f8fa) {
        const _0x10ca7f = Buffer[_0x36a344(0x36b)](
            _0x3ecb0b["size"] - _0x4b52e4,
          ),
          _0x37e150 = fs["openSync"](_0x5a7322, "r");
        (fs["readSync"](
          _0x37e150,
          _0x10ca7f,
          0x0,
          _0x10ca7f[_0x36a344(0x324)],
          _0x4b52e4,
        ),
          fs[_0x36a344(0x260)](_0x37e150),
          (_0x2709cd = _0x10ca7f[_0x36a344(0x1f0)]("utf8")));
      } else _0x2709cd = fs[_0x36a344(0x2b4)](_0x5a7322, _0x36a344(0x239));
    }
    const _0x103406 = new Date()[_0x36a344(0x354)](undefined, {
        year: _0x36a344(0x248),
        month: _0x36a344(0x388),
        day: _0x36a344(0x388),
        hour: _0x36a344(0x388),
        minute: _0x36a344(0x388),
        second: _0x36a344(0x388),
        hour12: ![],
        timeZoneName: _0x36a344(0x318),
      }),
      _0x5e8243 =
        "[" + version + "][" + _0x103406 + "]\x0a" + _0x30cf63 + "\x0a\x0a";
    fs[_0x36a344(0x30b)](_0x5a7322, _0x2709cd + _0x5e8243, _0x36a344(0x239));
  } catch (_0x1868fd) {
    !unable_debug_alerted &&
      ((unable_debug_alerted = !![]),
      dialog[_0x36a344(0x323)]({
        type: _0x36a344(0x327),
        title: _0x36a344(0x222),
        message: _0x36a344(0x2c0) + _0x1868fd,
      }));
  }
}
ipcMain[_0x5ac0f7(0x203)](_0x5ac0f7(0x2f6), (_0xe518b2) => {
  return r3D9();
});
function _0x1c8c(_0x5c9016, _0x16b8ec) {
  _0x5c9016 = _0x5c9016 - 0x1ef;
  const _0x4740f8 = _0x4740();
  let _0x1c8c2d = _0x4740f8[_0x5c9016];
  return _0x1c8c2d;
}
function r3D9() {
  const _0x46bcde = _0x5ac0f7;
  try {
    const _0x3050a9 = app[_0x46bcde(0x23c)](_0x46bcde(0x21e)),
      _0x7f1ace = path[_0x46bcde(0x363)](_0x3050a9, "LF2_debug_log.txt");
    if (!fs[_0x46bcde(0x2aa)](_0x7f1ace))
      return "[LF2_debug_log.txt\x20does\x20not\x20exist]";
    const _0x4efac8 = 0x64 * 0x400,
      _0x188fc8 = fs[_0x46bcde(0x20c)](_0x7f1ace);
    if (_0x188fc8[_0x46bcde(0x373)] <= _0x4efac8)
      return fs[_0x46bcde(0x2b4)](_0x7f1ace, "utf8");
    const _0x2b03c1 = fs["openSync"](_0x7f1ace, "r");
    try {
      const _0x582d5d = _0x188fc8[_0x46bcde(0x373)] - _0x4efac8,
        _0x3f9c7f = Buffer["alloc"](_0x4efac8);
      fs[_0x46bcde(0x26d)](_0x2b03c1, _0x3f9c7f, 0x0, _0x4efac8, _0x582d5d);
      let _0x3fbafb = 0x0;
      while (
        _0x3fbafb < _0x3f9c7f[_0x46bcde(0x324)] &&
        (_0x3f9c7f[_0x3fbafb] & 0xc0) === 0x80
      )
        _0x3fbafb++;
      const _0x4a3045 =
        _0x3f9c7f[_0x46bcde(0x243)](_0x3fbafb)[_0x46bcde(0x1f0)]("utf8");
      return _0x4a3045;
    } finally {
      fs[_0x46bcde(0x260)](_0x2b03c1);
    }
  } catch (_0x108d62) {
    return "[Error\x20reading\x20LF2_debug_log.txt]:\x20" + _0x108d62;
  }
}
(process["on"](_0x5ac0f7(0x270), (_0x2628af) => {
  const _0x46b956 = _0x5ac0f7,
    _0x25b156 =
      _0x46b956(0x281) +
      (_0x2628af[_0x46b956(0x210)] || _0x2628af[_0x46b956(0x1f0)]());
  a73P(_0x25b156);
}),
  process["on"](_0x5ac0f7(0x29a), (_0x1acad7, _0x44b14c) => {
    const _0x480d37 = _0x5ac0f7,
      _0x4e12fa = _0x480d37(0x346) + (_0x1acad7?.["stack"] || _0x1acad7);
    a73P(_0x4e12fa);
  }));
function qd8v() {
  const _0x86ac78 = _0x5ac0f7;
  if (xSJQ) {
    xSJQ[_0x86ac78(0x398)]();
    return;
  }
  ((xSJQ = new BrowserWindow({
    useContentSize: !![],
    width: 0x348,
    height: 0x320,
    title: _0x86ac78(0x349),
    icon: path[_0x86ac78(0x363)](__dirname, iconPath),
  })),
    xSJQ["removeMenu"](),
    xSJQ[_0x86ac78(0x2d4)](path[_0x86ac78(0x363)](__dirname, _0x86ac78(0x2ba))),
    xSJQ["on"](_0x86ac78(0x1ff), () => {
      xSJQ = null;
    }));
}
function UbQ9() {
  const _0x5eb4eb = _0x5ac0f7;
  if (brxb) {
    brxb[_0x5eb4eb(0x398)]();
    return;
  }
  ((brxb = new BrowserWindow({
    width: 0x2d5,
    height: 0x258,
    title: "Licenses\x20and\x20Notes",
    icon: path[_0x5eb4eb(0x363)](__dirname, iconPath),
  })),
    brxb[_0x5eb4eb(0x31e)](),
    brxb[_0x5eb4eb(0x2d4)](path["join"](__dirname, _0x5eb4eb(0x2f5))),
    brxb["on"](_0x5eb4eb(0x1ff), () => {
      brxb = null;
    }));
}
app["on"]("ready", () => {
  const _0x11868d = _0x5ac0f7;
  session["defaultSession"][_0x11868d(0x31b)]()[_0x11868d(0x2e4)](() => {
    const _0x41d786 = _0x11868d;
    if (BrowserWindow[_0x41d786(0x25d)]()["length"] === 0x0) SWMD();
	hFJ2.webContents.openDevTools({ mode: "detach" });
    const _0x268ad3 = Menu[_0x41d786(0x2c4)](menu);
    (Menu[_0x41d786(0x36d)](_0x268ad3),
      hFJ2["on"](_0x41d786(0x1ff), () => (hFJ2 = null)));
  });
});
const menu = [
  { role: _0x5ac0f7(0x30c) },
  ...[
    {
      label: "More",
      submenu: [
        { label: _0x5ac0f7(0x20e), accelerator: _0x5ac0f7(0x385), click: GrbK },
        { label: _0x5ac0f7(0x35c), click: oHMR },
        { label: "Future\x20Roadmap", click: DqYS },
        { label: "Update\x20Log", click: gS8M },
        { label: _0x5ac0f7(0x35f), click: qd8v },
        { label: _0x5ac0f7(0x33a), click: UbQ9 },
      ],
    },
  ],
];
(app["on"](_0x5ac0f7(0x273), () => {
  app["quit"]();
}),
  app["on"](_0x5ac0f7(0x217), () => {
    const _0x454826 = _0x5ac0f7;
    if (BrowserWindow[_0x454826(0x25d)]()[_0x454826(0x324)] === 0x0) SWMD();
  }),
  client[_0x5ac0f7(0x200)][_0x5ac0f7(0x39d)]());
function gCtl() {
  const _0x40b00e = _0x5ac0f7;
  let _0x4ba4b4 = client[_0x40b00e(0x200)]["getControllers"](),
    _0x21095c = [];
  for (let _0x1f1416 = 0x0; _0x1f1416 < _0x4ba4b4["length"]; _0x1f1416++) {
    let _0x5bc50a = {};
    ((_0x5bc50a["type"] = _0x4ba4b4[_0x1f1416][_0x40b00e(0x301)]()),
      (_0x5bc50a[_0x40b00e(0x203)] = _0x4ba4b4[_0x1f1416][_0x40b00e(0x236)]()),
      _0x21095c[_0x40b00e(0x1fe)](_0x5bc50a));
  }
  return _0x21095c;
}
(ipcMain[_0x5ac0f7(0x203)]("gCtl", (_0x292836) => {
  return gCtl();
}),
  ipcMain[_0x5ac0f7(0x203)](
    _0x5ac0f7(0x369),
    async (_0x54b692, _0x3c7cc4, _0x523a39) => {
      const _0x22d55d = _0x5ac0f7;
      try {
        const _0x4e1dc0 = await MM[_0x22d55d(0x39c)](BigInt(_0x3c7cc4));
        if (lobby_created || lobby_joined) {
          (a73P(
            "mmJoinLobby\x20fails\x20(existing\x20created\x20lobby:" +
              lobby_created +
              _0x22d55d(0x305) +
              lobby_joined +
              ")",
          ),
            _0x4e1dc0[_0x22d55d(0x29e)]());
          return;
        }
        ((lobby_joined = _0x4e1dc0),
          resetReliableMessageState(),
          (_playerList = []),
          (_lobbyId = String(lobby_joined["id"])));
        const _0x2a0bef = lobby_joined["id"];
        _creatorId = lobby_joined["getData"](_0x22d55d(0x2ac));
        let _0x4f96c3 = lobby_joined["getData"]("password");
        if (!!_0x4f96c3 && _0x4f96c3 != _0x523a39)
          return (
            lobby_joined[_0x22d55d(0x29e)](),
            (lobby_joined = null),
            resetReliableMessageState(),
            (_lobbyId = ""),
            (_playerNames = new Map()),
            _playerNames[_0x22d55d(0x201)](_playerId, _playerName),
            "-2"
          );
        if (
          lobby_joined[_0x22d55d(0x2fb)](_0x22d55d(0x290)) !=
          String(GAME_VERSION)
        )
          return (
            lobby_joined[_0x22d55d(0x29e)](),
            (lobby_joined = null),
            resetReliableMessageState(),
            (_lobbyId = ""),
            (_playerNames = new Map()),
            _playerNames[_0x22d55d(0x201)](_playerId, _playerName),
            "-3"
          );
        return lobby_joined[_0x22d55d(0x2fb)](_0x22d55d(0x2d9));
      } catch (_0x109da0) {
        return (a73P(_0x22d55d(0x230) + _0x109da0), "-1");
      }
    },
  ));
function getAvmString() {
  const _0x2eedd5 = _0x5ac0f7;
  let _0x16d99e = "";
  for (let _0x534660 = 0x0; _0x534660 < a7vm[_0x2eedd5(0x324)]; _0x534660++) {
    const _0x375e48 = a7vm[_0x534660];
    if (client[_0x2eedd5(0x265)][_0x2eedd5(0x2ec)](_0x375e48["id"])) {
      if (_0x16d99e == "") _0x16d99e = _0x375e48["id"];
      else _0x16d99e = _0x16d99e + "," + _0x375e48["id"];
    }
  }
  return _0x16d99e;
}
(ipcMain[_0x5ac0f7(0x203)](
  "mmCreateLobby",
  async (
    _0x389271,
    _0x2723e3,
    _0x333347,
    _0x5d0197,
    _0x4c160a,
    _0x240c87,
    _0x17c02d,
    _0x43f740,
    _0x2a604a,
    _0x588493,
    _0x32dc4f,
  ) => {
    const _0x35cc2a = _0x5ac0f7;
    try {
      const _0x4df047 =
          (_0x2723e3 ?? "")[_0x35cc2a(0x1f1)]()[_0x35cc2a(0x243)](0x0, 0xa) ||
          _0x35cc2a(0x2b2),
        _0x1e84ee = String(_0x5d0197);
      a73P(_0x35cc2a(0x34f) + _0x5d0197 + _0x35cc2a(0x250) + _0x1e84ee);
      const _0x48a587 = (_0x4c160a ?? "")
          [_0x35cc2a(0x372)]()
          ["slice"](0x0, 0x2),
        _0x409d51 = !!_0x333347 && String(_0x333347)[_0x35cc2a(0x324)] > 0x0,
        _0x12e87a = await MM[_0x35cc2a(0x28b)](
          MM[_0x35cc2a(0x34d)][_0x35cc2a(0x32e)],
          0x8,
        );
      if (lobby_created || lobby_joined) {
        (a73P(
          _0x35cc2a(0x38c) +
            lobby_created +
            "/joined\x20lobby:" +
            lobby_joined +
            ")",
        ),
          _0x12e87a[_0x35cc2a(0x29e)]());
        return;
      }
      ((lobby_created = _0x12e87a),
        resetReliableMessageState(),
        (_next_player_id = 0x2),
        (_playerList = [
          {
            id: 0x1,
            steamPlayerId: _playerId,
            joinState: _0x35cc2a(0x2fc),
            countryCode: _playerCountry,
            isAdmin: !![],
            name: _playerName,
            controls: [_0x43f740, _0x2a604a, _0x588493, _0x32dc4f],
            avm: getAvmString(),
          },
        ]),
        (_playerIdInLobby = 0x1),
        (_lobbyId = String(lobby_created["id"])));
      const _0x10dd35 = lobby_created["id"];
      return (
        lobby_created[_0x35cc2a(0x259)](_0x35cc2a(0x25b), _0x4df047),
        lobby_created["setData"](_0x35cc2a(0x2d9), String(_0x1e84ee)),
        lobby_created[_0x35cc2a(0x259)]("country", _0x48a587),
        lobby_created["setData"]("password", _0x333347),
        lobby_created[_0x35cc2a(0x259)](_0x35cc2a(0x2ac), _0x240c87),
        lobby_created[_0x35cc2a(0x259)](
          _0x35cc2a(0x33c),
          String(client["utils"]["getServerRealTime"]()),
        ),
        lobby_created[_0x35cc2a(0x259)](_0x35cc2a(0x39b), String(_0x17c02d)),
        lobby_created["setData"]("num_members", "1"),
        lobby_created["setData"](_0x35cc2a(0x290), String(GAME_VERSION)),
        lobby_created[_0x35cc2a(0x259)](_0x35cc2a(0x2f3), _0x35cc2a(0x2a3)),
        !![]
      );
    } catch (_0x5229f8) {
      return (a73P(_0x35cc2a(0x2c9) + _0x5229f8), ![]);
    }
  },
),
  ipcMain["handle"](_0x5ac0f7(0x330), async (_0x3b50c9) => {
    const _0x168317 = _0x5ac0f7;
    if (lobby_created) return lobby_created[_0x168317(0x2fb)](_0x168317(0x2d9));
    else {
      if (lobby_joined) return lobby_joined["getData"]("latency");
    }
    return -0x1;
  }),
  ipcMain["handle"](_0x5ac0f7(0x300), async (_0xc301dd, _0x161f40) => {
    if (lobby_created) {
      const _0x2fc9a2 = _playerList["find"](
        (_0x5d19cf) => _0x5d19cf["steamPlayerId"] === _0x161f40,
      );
      if (!!_0x2fc9a2) _0x2fc9a2["state"] = "kicked";
      mmSendMessage(_0x161f40, KICK_TAG, "" + _lobbyId);
    }
  }),
  ipcMain[_0x5ac0f7(0x203)]("mmSetLatency", async (_0xc0718c, _0x54823c) => {
    const _0xf51cab = _0x5ac0f7;
    lobby_created &&
      ((_latency = _0x54823c),
      lobby_created["setData"](_0xf51cab(0x2d9), String(_0x54823c)));
  }),
  ipcMain[_0x5ac0f7(0x203)](_0x5ac0f7(0x267), async (_0x5a658f) => {
    mmLeaveLobby();
  }));
function mmLeaveLobby() {
  const _0x21a5e8 = _0x5ac0f7;
  if (lobby_created) {
    let _0x10164f = lobby_created[_0x21a5e8(0x365)]();
    (_0x10164f[_0x21a5e8(0x30a)]((_0x41f774) => {
      const _0x23b3fd = _0x21a5e8,
        _0x3a5d75 = String(_0x41f774[_0x23b3fd(0x242)]);
      _0x3a5d75 != _playerId &&
        mmSendMessage(_0x3a5d75, KICK_TAG, "" + _lobbyId);
    }),
      lobby_created[_0x21a5e8(0x29e)](),
      (lobby_created = null),
      resetReliableMessageState(),
      (_playerList = []),
      (_lobbyId = ""),
      (_playerNames = new Map()),
      _playerNames["set"](_playerId, _playerName));
  }
  lobby_joined &&
    (lobby_joined[_0x21a5e8(0x29e)](),
    (lobby_joined = null),
    resetReliableMessageState(),
    (_playerList = []),
    (_lobbyId = ""),
    (_playerNames = new Map()),
    _playerNames[_0x21a5e8(0x201)](_playerId, _playerName));
}
ipcMain[_0x5ac0f7(0x203)]("mmGetPlayerNameList", async (_0x5a96d5) => {
  return mmGetPlayerNameList();
});
function mmGetPlayerNameList() {
  const _0x82ec22 = _0x5ac0f7,
    _0x2dfdf8 = lobby_created ? lobby_created : lobby_joined;
  if (!_0x2dfdf8) return [];
  let _0x29d398 = [];
  for (
    let _0x2fe953 = 0x0;
    _0x2fe953 < _playerList[_0x82ec22(0x324)];
    _0x2fe953++
  ) {
    const _0x892276 = _playerList[_0x2fe953];
    _0x29d398[_0x82ec22(0x1fe)]({
      id: _0x892276[_0x82ec22(0x21c)],
      name: _0x892276["name"],
      countryCode: _0x892276[_0x82ec22(0x23b)],
    });
  }
  return _0x29d398;
}
ipcMain[_0x5ac0f7(0x203)](_0x5ac0f7(0x3a0), async (_0x3b6407) => {
  const _0x20468c = _0x5ac0f7,
    _0x137694 = await MM[_0x20468c(0x347)](),
    _0x136849 = [];
  for (
    let _0x289f86 = 0x0;
    _0x289f86 < _0x137694[_0x20468c(0x324)];
    _0x289f86++
  ) {
    const _0x2251e1 = _0x137694[_0x289f86];
    if (_0x2251e1["getData"](_0x20468c(0x2f3)) != _0x20468c(0x2a3)) continue;
    (a73P(_0x20468c(0x35a) + _0x2251e1[_0x20468c(0x2fb)](_0x20468c(0x2d9))),
      (_0x136849[_0x289f86] = {
        memberLimit: String(_0x2251e1[_0x20468c(0x2f7)]()),
        memberCount: String(_0x2251e1[_0x20468c(0x304)]()),
        members: [],
        id: String(_0x2251e1["id"]),
        name: _0x2251e1["getData"](_0x20468c(0x25b)),
        latency: _0x2251e1["getData"]("latency"),
        country: _0x2251e1[_0x20468c(0x2fb)](_0x20468c(0x37f)),
        password: _0x2251e1[_0x20468c(0x2fb)]("password"),
        creator: String(_0x2251e1[_0x20468c(0x2fb)](_0x20468c(0x2ac))),
        max_members: _0x2251e1[_0x20468c(0x2fb)](_0x20468c(0x39b)),
        num_members: _0x2251e1["getData"](_0x20468c(0x218)),
        version: _0x2251e1[_0x20468c(0x2fb)](_0x20468c(0x290)),
        name: _0x2251e1[_0x20468c(0x2fb)](_0x20468c(0x25b)),
        lobby_age:
          client[_0x20468c(0x24f)]["getServerRealTime"]() -
          Number(_0x2251e1[_0x20468c(0x2fb)](_0x20468c(0x33c))),
      }));
  }
  return _0x136849;
});
const BASE = 0x110000100000000n;
function accountIdToSteam64(_0x49a159) {
  const _0x1b41b8 = BigInt(_0x49a159);
  return BASE + _0x1b41b8;
}
async function setupMessageListening() {
  const _0x30e25a = _0x5ac0f7;
  try {
    if (!client || !NM) throw new Error(_0x30e25a(0x2a6));
    try {
      NU?.[_0x30e25a(0x240)]?.();
    } catch (_0x3005a6) {
      a73P(_0x30e25a(0x39e) + _0x3005a6);
    }
    if (_cbPump) clearInterval(_cbPump);
    return (
      (_cbPump = setInterval(() => {
        const _0x2fa83e = _0x30e25a;
        try {
          S1Eg[_0x2fa83e(0x257)]?.();
        } catch (_0x59fdc1) {
          a73P(_0x2fa83e(0x2a4) + _0x59fdc1);
        }
      }, 0x10)),
      !![]
    );
  } catch (_0x5d394a) {
    return (a73P("setupMessageListening\x20error:\x20" + _0x5d394a), ![]);
  }
}
ipcMain[_0x5ac0f7(0x203)](
  _0x5ac0f7(0x213),
  (_0xd2cff5, _0x49e6b1, _0x315b7, _0x5c6f9b) => {
    return mmSendMessage(_0x49e6b1, _0x315b7, _0x5c6f9b);
  },
);
function packReliableMessage(_0x12f6ce, _0x545b9d, _0x361744, _0x33c073) {
  return _0x12f6ce + "☎" + _0x545b9d + "☎" + _0x361744 + "☎" + _0x33c073;
}
function mmSendMessage(_0x2a80c8, _0x1ae9eb, _0x391b15) {
  const _0x25e72d = _0x5ac0f7,
    _0x3f6ec2 = String(_0x2a80c8);
  let _0x2f3dd5 = 0x0,
    _0x2c15d0 = 0x0,
    _0x1e0d4c = "";
  try {
    if (!client || !NM)
      throw new Error("Steam\x20client\x20not\x20initialized");
    const _0x108b5f = _0x1ae9eb == null ? "" : String(_0x1ae9eb),
      _0xb34373 = _0x391b15 == null ? "" : String(_0x391b15);
    if (_0x108b5f === REQUEST_CHECKIN_TAG)
      (resetMessageStateFromPlayer(_0x2a80c8),
        (_0x1e0d4c = packReliableMessage(-0x1, -0x1, _0x108b5f, _0xb34373)));
    else {
      ((_0x2f3dd5 = sent_seq[_0x25e72d(0x2ca)](_0x3f6ec2) ?? 0x0),
        (_0x2c15d0 = _0x2f3dd5 + 0x1),
        sent_seq[_0x25e72d(0x201)](_0x3f6ec2, _0x2c15d0));
      const _0x5ee278 = received_seq[_0x25e72d(0x2ca)](_0x3f6ec2) ?? -0x1,
        _0x50d283 = last_sent_msgs[_0x25e72d(0x2ca)](_0x3f6ec2) ?? [];
      (_0x50d283["push"]({
        sequence: _0x2c15d0,
        message_tag: _0x108b5f,
        message_text: _0xb34373,
      }),
        last_sent_msgs["set"](_0x3f6ec2, _0x50d283));
      const _0x5bf736 = _0x5ee278,
        _0x2913a8 = _0x50d283["map"](
          ({
            sequence: _0xbc8bba,
            message_tag: _0x4499eb,
            message_text: _0x1154aa,
          }) => packReliableMessage(_0xbc8bba, _0x5bf736, _0x4499eb, _0x1154aa),
        );
      _0x1e0d4c = _0x2913a8[_0x25e72d(0x363)]("\x0a§\x0a");
    }
    const _0x2e9f6b = accountIdToSteam64(_0x3f6ec2);
    if (_0x2e9f6b === null) throw new Error(_0x25e72d(0x37e));
    const _0x183058 = Buffer[_0x25e72d(0x28e)](_0x1e0d4c, "utf8");
    return (
      NM[_0x25e72d(0x20b)](
        _0x2e9f6b,
        NM[_0x25e72d(0x356)][_0x25e72d(0x344)],
        _0x183058,
        MSG_CHANNEL,
      ),
      last_sent_time[_0x25e72d(0x201)](_0x3f6ec2, Date[_0x25e72d(0x34b)]()),
      !![]
    );
  } catch (_0x14f9b5) {
    if (
      _0x2c15d0 > 0x0 &&
      sent_seq[_0x25e72d(0x2ca)](_0x3f6ec2) === _0x2c15d0
    ) {
      if (_0x2f3dd5 === 0x0) sent_seq[_0x25e72d(0x1f3)](_0x3f6ec2);
      else sent_seq[_0x25e72d(0x201)](_0x3f6ec2, _0x2f3dd5);
    }
    return (
      a73P(
        _0x25e72d(0x1f7) + _0x2a80c8 + "\x20" + _0x14f9b5 + "\x0a" + _0x1e0d4c,
      ),
      ![]
    );
  }
}
function mmCheckResendMessage() {
  const _0x5157c7 = _0x5ac0f7;
  if (!client || !NM) return;
  if (!lobby_created && !lobby_joined) return;
  const _0x43333f = Date["now"]();
  if (lobby_created)
    for (const _0xe0b25c of _playerList) {
      if (_0xe0b25c[_0x5157c7(0x215)] === _0x5157c7(0x2fc)) {
        const _0x2be19a =
          _0xe0b25c && _0xe0b25c[_0x5157c7(0x21c)] != null
            ? String(_0xe0b25c[_0x5157c7(0x21c)])
            : "";
        if (!_0x2be19a) continue;
        const _0x1b3096 = last_received_time["get"](_0x2be19a);
        if (_0x1b3096 == null || _0x43333f - _0x1b3096 <= TIMEOUT_INTERVAL_MS)
          continue;
        _0xe0b25c[_0x5157c7(0x215)] = _0x5157c7(0x25f);
        const _0x1e6cc8 =
          _0x5157c7(0x25c) +
          _0xe0b25c["id"] +
          "\x0a" +
          _0xe0b25c[_0x5157c7(0x25b)] +
          "\x0alost\x20connection.";
        (broadcastSameMessageClientToServer(_0x1e6cc8), broadcastPlayerList());
      }
    }
  else {
    const _0x479cc4 = last_received_time[_0x5157c7(0x2ca)](_creatorId);
    _0x479cc4 != null &&
      _0x43333f - _0x479cc4 > TIMEOUT_INTERVAL_MS &&
      (last_received_time["delete"](_creatorId),
      unread_messages[_0x5157c7(0x1fe)](_0x5157c7(0x2fe)),
      mmLeaveLobby());
  }
  for (const _0x5120ce of _playerList) {
    if (_0x5120ce[_0x5157c7(0x215)] !== _0x5157c7(0x2fc)) continue;
    const _0x1c53eb = String(_0x5120ce[_0x5157c7(0x21c)]),
      _0x5bfb9d = last_sent_time["get"](_0x1c53eb);
    if (_0x5bfb9d == null || _0x43333f - _0x5bfb9d <= RESEND_INTERVAL_MS)
      continue;
    let _0x26e3d1 = last_sent_msgs[_0x5157c7(0x2ca)](_0x1c53eb);
    if (!_0x26e3d1 || _0x26e3d1[_0x5157c7(0x324)] === 0x0) {
      const _0x569ec3 = (sent_seq[_0x5157c7(0x2ca)](_0x1c53eb) ?? 0x0) + 0x1;
      (sent_seq[_0x5157c7(0x201)](_0x1c53eb, _0x569ec3),
        (_0x26e3d1 = [
          { sequence: _0x569ec3, message_tag: NIL_TAG, message_text: "-" },
        ]));
    }
    const _0x53d5e4 = received_seq[_0x5157c7(0x2ca)](_0x1c53eb) ?? -0x1,
      _0x1ba3a7 = _0x26e3d1[_0x5157c7(0x30a)](
        ({
          sequence: _0x4ab7d8,
          message_tag: _0x48cad6,
          message_text: _0x25a063,
        }) => packReliableMessage(_0x4ab7d8, _0x53d5e4, _0x48cad6, _0x25a063),
      ),
      _0x528cea = _0x1ba3a7[_0x5157c7(0x363)]("\x0a§\x0a");
    try {
      const _0x29342c = accountIdToSteam64(_0x1c53eb);
      if (_0x29342c === null) throw new Error(_0x5157c7(0x37e));
      const _0x2551db = Buffer["from"](_0x528cea, _0x5157c7(0x239));
      NM["sendMessageToUser"](
        _0x29342c,
        NM[_0x5157c7(0x356)]["Reliable"],
        _0x2551db,
        MSG_CHANNEL,
      );
    } catch (_0xb5a2eb) {
      a73P(_0x5157c7(0x311) + _0xb5a2eb);
    }
    last_sent_time[_0x5157c7(0x201)](_0x1c53eb, _0x43333f);
  }
}
(setInterval(() => {
  mmListenMessage();
}, 0x14),
  setInterval(() => {
    if (!lobby_game_started) return;
    mmCheckResendMessage();
  }, 0x28),
  ipcMain["handle"](_0x5ac0f7(0x279), async (_0x5be070, _0x1acd71) => {
    const _0x28d180 = _0x5ac0f7;
    if (!lobby_created && !lobby_joined) return;
    const _0x2e075c = _0x1acd71[_0x28d180(0x1f0)](),
      [_0x4e7246, ..._0x3b2b2c] = _0x2e075c[_0x28d180(0x263)]("\x0a");
    switch (_0x4e7246) {
      case _0x28d180(0x329):
        broadcastSameMessageClientToServer(_0x2e075c);
        break;
      case _0x28d180(0x21b):
        broadcastSameMessageClientToServer(_0x2e075c);
        break;
      case _0x28d180(0x266):
        broadcastSameMessageClientToServer(_0x2e075c);
        break;
      case _0x28d180(0x1fb):
        broadcastSameMessageClientToServer(_0x2e075c);
        break;
      case _0x28d180(0x2df):
        const _0x28d193 = _0x2e075c[_0x28d180(0x216)](/^CHAT\n/, "");
        broadcastChatMessageClientToServer(_0x28d193);
        break;
      default:
        a73P?.("mmSendToHost:\x20Unknown\x20command:\x20" + _0x4e7246);
    }
  }));
function broadcastSameMessageClientToServer(_0x55015a) {
  const _0x1eef6e = _0x5ac0f7;
  if (lobby_created)
    for (const _0x109576 of _playerList) {
      if (
        _0x109576[_0x1eef6e(0x215)] === _0x1eef6e(0x2fc) &&
        _0x109576[_0x1eef6e(0x21c)] != _playerId
      )
        try {
          mmSendMessage(_0x109576[_0x1eef6e(0x21c)], CLIENT_MSG_TAG, _0x55015a);
        } catch (_0x20542d) {
          a73P?.(
            _0x1eef6e(0x2de) +
              _0x109576[_0x1eef6e(0x21c)] +
              _0x1eef6e(0x382) +
              _0x20542d,
          );
        }
    }
  else mmSendMessage(_creatorId, CLIENT_MSG_TAG, _0x55015a);
  unread_messages[_0x1eef6e(0x1fe)](_0x55015a);
}
function broadcastChatMessageClientToServer(_0x33b784) {
  const _0xa0bb81 = _0x5ac0f7,
    _0x2243f6 =
      _0x33b784["length"] > 0x64
        ? _0x33b784[_0xa0bb81(0x243)](0x0, 0x64)
        : _0x33b784,
    _0x485c81 =
      _0xa0bb81(0x25c) +
      _playerIdInLobby +
      "\x0a" +
      _playerName +
      "\x0a" +
      _0x2243f6;
  if (lobby_created)
    for (const _0xbc340d of _playerList) {
      if (
        _0xbc340d[_0xa0bb81(0x215)] === _0xa0bb81(0x2fc) &&
        _0xbc340d[_0xa0bb81(0x21c)] != _playerId
      )
        try {
          mmSendMessage(_0xbc340d[_0xa0bb81(0x21c)], CLIENT_MSG_TAG, _0x485c81);
        } catch (_0x203fbc) {
          a73P?.(
            _0xa0bb81(0x355) +
              _0xbc340d[_0xa0bb81(0x21c)] +
              "\x20failed:\x20" +
              _0x203fbc,
          );
        }
    }
  else mmSendMessage(_creatorId, CLIENT_MSG_TAG, _0x485c81);
  unread_messages["push"](_0x485c81);
}
(ipcMain[_0x5ac0f7(0x203)](_0x5ac0f7(0x258), async (_0x2f24cc) => {
  const _0x4b0aac = unread_messages;
  return ((unread_messages = []), _0x4b0aac);
}),
  ipcMain[_0x5ac0f7(0x203)]("mmStartGameInLobby", async (_0x1fc9a4) => {
    const _0x417a79 = _0x5ac0f7;
    if (lobby_game_started) return;
    if (!lobby_created) return;
    lobby_created[_0x417a79(0x259)](_0x417a79(0x2f3), _0x417a79(0x2d2));
    for (const _0x4b0f1e of _playerList) {
      _0x4b0f1e[_0x417a79(0x215)] === "joined" &&
        _0x4b0f1e["steamPlayerId"] != _playerId &&
        last_received_time[_0x417a79(0x201)](
          _0x4b0f1e["steamPlayerId"],
          Date["now"]() + 0x2710,
        );
    }
    ((lobby_game_started = !![]), broadcastPlayerList());
    const _0x362c3d = Math[_0x417a79(0x2a1)](
      Math[_0x417a79(0x3a4)]() * 0xf4240,
    );
    for (const _0x4d74e7 of _playerList) {
      if (
        _0x4d74e7["joinState"] === _0x417a79(0x2fc) &&
        _0x4d74e7[_0x417a79(0x21c)] != _playerId
      )
        try {
          mmSendMessage(
            _0x4d74e7[_0x417a79(0x21c)],
            START_GAME_TAG,
            _lobbyId + "\x0a" + _0x362c3d,
          );
        } catch (_0x5d8d2c) {
          a73P?.(
            "mmStartGameInLobby:\x20send\x20to\x20" +
              _0x4d74e7[_0x417a79(0x21c)] +
              _0x417a79(0x382) +
              _0x5d8d2c,
          );
        }
    }
    unread_messages[_0x417a79(0x1fe)](
      START_GAME_TAG + "\x0a" + _lobbyId + "\x0a" + _0x362c3d,
    );
    const _0xfc7e9e =
      "CHAT\x0a" + _playerId + "\x0a" + _playerName + _0x417a79(0x37c);
    broadcastSameMessageClientToServer(_0xfc7e9e);
  }),
  ipcMain[_0x5ac0f7(0x203)](_0x5ac0f7(0x34e), async () => {
    return mmListenMessage();
  }));
let ping_count = -0x1,
  pong_count = -0x1;
const _msgTimers = new Map();
function mmListenMessage() {
  const _0x3d2c74 = _0x5ac0f7;
  try {
    if (!client || !NM) return;
    for (;;) {
      const _0x4ba43b = NM[_0x3d2c74(0x274)](MSG_CHANNEL, RECV_BATCH);
      if (!_0x4ba43b || _0x4ba43b[_0x3d2c74(0x324)] === 0x0) return;
      for (const _0xd7b189 of _0x4ba43b) {
        let _0x3ba79e = "";
        try {
          _0x3ba79e =
            _0xd7b189[_0x3d2c74(0x302)]?.["toString"](_0x3d2c74(0x239)) ?? "";
        } catch {
          _0x3ba79e = "";
        }
        const _0x3b0a9e = _0xd7b189[_0x3d2c74(0x27a)]?.[_0x3d2c74(0x242)]
            ? String(_0xd7b189[_0x3d2c74(0x27a)]["accountId"])
            : null,
          _0x5c52c2 = _0x3ba79e["split"](_0x3d2c74(0x2fa));
        for (const _0x2076b1 of _0x5c52c2) {
          const _0x1b4430 = _0x2076b1["split"]("☎"),
            _0x214668 = _0x1b4430[_0x3d2c74(0x324)] > 0x0 ? _0x1b4430[0x0] : "",
            _0x4d0e34 = _0x1b4430[_0x3d2c74(0x324)] > 0x1 ? _0x1b4430[0x1] : "",
            _0x4d8a22 = _0x1b4430[_0x3d2c74(0x324)] > 0x2 ? _0x1b4430[0x2] : "",
            _0x4c17e8 =
              _0x1b4430["length"] > 0x3
                ? _0x1b4430[_0x3d2c74(0x243)](0x3)[_0x3d2c74(0x363)]("☎")
                : "",
            _0x3377d2 = Number["parseInt"](_0x214668, 0xa),
            _0x482a0a = Number[_0x3d2c74(0x204)](_0x4d0e34, 0xa),
            _0x58388e = Number[_0x3d2c74(0x2fd)](_0x3377d2) ? _0x3377d2 : -0x1,
            _0x5afde6 = Number[_0x3d2c74(0x2fd)](_0x482a0a) ? _0x482a0a : -0x1,
            _0x6521c0 = Date[_0x3d2c74(0x34b)]();
          if (_0x3b0a9e !== null) {
            last_received_time[_0x3d2c74(0x201)](_0x3b0a9e, _0x6521c0);
            if (_0x5afde6 >= 0x0) {
              const _0x49abc2 = ack_seq[_0x3d2c74(0x2ca)](_0x3b0a9e) ?? -0x1;
              if (_0x5afde6 > _0x49abc2) {
                ack_seq[_0x3d2c74(0x201)](_0x3b0a9e, _0x5afde6);
                const _0x177623 = last_sent_msgs["get"](_0x3b0a9e);
                if (_0x177623 && _0x177623["length"]) {
                  while (
                    _0x177623["length"] &&
                    _0x177623[0x0][_0x3d2c74(0x264)] <= _0x5afde6
                  )
                    _0x177623["shift"]();
                  _0x177623[_0x3d2c74(0x324)] === 0x0 &&
                    last_sent_msgs[_0x3d2c74(0x1f3)](_0x3b0a9e);
                }
              }
            }
            if (_0x58388e !== -0x1) {
              const _0x4dcbff =
                received_seq[_0x3d2c74(0x2ca)](_0x3b0a9e) ?? -0x1;
              if (_0x58388e <= _0x4dcbff) continue;
              received_seq[_0x3d2c74(0x201)](_0x3b0a9e, _0x58388e);
            }
          }
          if (_0x4d8a22 == CLIENT_MSG_TAG) {
            if (lobby_created)
              try {
                const _0x1ceea3 = _playerId ? String(_playerId) : "";
                for (
                  let _0x678ac9 = 0x0;
                  _0x678ac9 < _playerList["length"];
                  _0x678ac9++
                ) {
                  const _0x376678 = _playerList[_0x678ac9];
                  if (_0x376678[_0x3d2c74(0x215)] !== "joined") continue;
                  const _0x2571e6 =
                    _0x376678 && _0x376678[_0x3d2c74(0x21c)] != null
                      ? String(_0x376678[_0x3d2c74(0x21c)])
                      : "";
                  if (
                    !_0x2571e6 ||
                    _0x2571e6 === _0x3b0a9e ||
                    _0x2571e6 === _0x1ceea3
                  )
                    continue;
                  mmSendMessage(_0x2571e6, CLIENT_MSG_TAG, _0x4c17e8);
                }
              } catch (_0x2ec589) {
                a73P("Broadcast\x20relay\x20error:\x20" + _0x2ec589);
              }
            unread_messages[_0x3d2c74(0x1fe)](_0x4c17e8);
            continue;
          } else {
            if (_0x4d8a22 == NIL_TAG) continue;
          }
          if (_0x4d8a22 == START_GAME_TAG) {
            const _0xff8965 = _0x4c17e8[_0x3d2c74(0x263)]("\x0a"),
              _0x7760a7 = _0xff8965[0x0],
              _0x23ed3e = _0xff8965[0x1];
            _0x7760a7 == _lobbyId
              ? !lobby_created
                ? (last_received_time[_0x3d2c74(0x201)](
                    _creatorId,
                    Date[_0x3d2c74(0x34b)]() + 0x2710,
                  ),
                  (lobby_game_started = !![]),
                  unread_messages[_0x3d2c74(0x1fe)](
                    START_GAME_TAG + "\x0a" + _0x7760a7 + "\x0a" + _0x23ed3e,
                  ))
                : a73P(_0x3d2c74(0x1fc))
              : a73P(
                  "A\x20START_GAME\x20message\x20from\x20a\x20lobby\x20you\x20haven\x27t\x20joined.",
                );
            continue;
          } else {
            if (_0x4d8a22 == PLAYER_LIST_TAG) {
              const _0x3702eb = _0x4c17e8[_0x3d2c74(0x263)]("\x0a"),
                _0x1e6e97 = _0x3702eb[0x0];
              _0x1e6e97 == _lobbyId
                ? !lobby_created
                  ? (unread_messages[_0x3d2c74(0x1fe)](
                      "PLAYER_LIST\x0a" + _0x4c17e8,
                    ),
                    parsePlayerList(_0x4c17e8))
                  : a73P(_0x3d2c74(0x2da))
                : a73P(_0x3d2c74(0x28d));
              continue;
            } else {
              if (_0x4d8a22 == RESPONSE_CHECKIN_TAG) {
                const _0x152a69 = _0x4c17e8[_0x3d2c74(0x263)]("\x0a"),
                  _0x42290b = _0x152a69[0x0];
                if (_0x42290b == _lobbyId && !lobby_game_started) {
                  if (!!lobby_created) {
                    if (_0x152a69[_0x3d2c74(0x324)] < 0x8) {
                      a73P(_0x3d2c74(0x212));
                      continue;
                    }
                    const _0x3d4153 = _0x152a69[0x1],
                      _0x5c0329 = _0x152a69[0x2],
                      _0x2b6bab = _0x152a69[0x3],
                      _0x5b9428 = _0x152a69[0x4],
                      _0x336c74 = _0x152a69[0x5],
                      _0x69d5f8 = _0x152a69[0x6],
                      _0x5b855e = _0x152a69[0x7],
                      _0x393d4e = _0x152a69[0x8];
                    if (_0x3b0a9e !== _0x3d4153) {
                      a73P(_0x3d2c74(0x220));
                      continue;
                    }
                    const _0x2975c7 = lobby_created["getMembers"]();
                    if (
                      !_0x2975c7["some"](
                        (_0x1b964a) =>
                          String(_0x1b964a[_0x3d2c74(0x242)]) === _0x3d4153,
                      )
                    ) {
                      a73P(
                        "Received\x20respond-checkin\x20from\x20a\x20player\x20not\x20exists\x20in\x20member\x20list.",
                      );
                      continue;
                    }
                    const _0x5dc500 = _playerList[_0x3d2c74(0x334)](
                      (_0x4f5d73) => _0x4f5d73["steamPlayerId"] === _0x3d4153,
                    );
                    if (!_0x5dc500) {
                      a73P(_0x3d2c74(0x21d));
                      continue;
                    }
                    if (_0x5dc500[_0x3d2c74(0x215)] !== _0x3d2c74(0x246)) {
                      a73P(
                        "Expected\x20player\x20with\x20requested_checkin\x20but\x20got\x20" +
                          _0x5dc500[_0x3d2c74(0x215)],
                      );
                      continue;
                    }
                    const _0x3c9093 = Date["now"]();
                    ((_0x5dc500[_0x3d2c74(0x25b)] =
                      _0x5c0329 || _0x3d2c74(0x292)),
                      (_0x5dc500[_0x3d2c74(0x2d7)] = [
                        _0x2b6bab,
                        _0x5b9428,
                        _0x336c74,
                        _0x69d5f8,
                      ]),
                      (_0x5dc500[_0x3d2c74(0x249)] = _0x5b855e || ""),
                      (_0x5dc500[_0x3d2c74(0x22b)] = _0x3c9093),
                      (_0x5dc500[_0x3d2c74(0x215)] = _0x3d2c74(0x35e)),
                      (_0x5dc500[_0x3d2c74(0x23b)] = _0x393d4e));
                    continue;
                  } else
                    a73P(
                      "Received\x20respond-checkin\x20but\x20I\x20am\x20not\x20the\x20host.",
                    );
                } else
                  _0x42290b != _lobbyId
                    ? a73P(
                        "A\x20respond-checkin\x20from\x20a\x20lobby\x20you\x20don\x27t\x20belong\x20to.",
                      )
                    : a73P(_0x3d2c74(0x38f));
                continue;
              } else {
                if (_0x4d8a22 == REQUEST_CHECKIN_TAG) {
                  const _0x2fc558 = _0x4c17e8;
                  _0x2fc558 == _lobbyId
                    ? !lobby_created
                      ? (resetMessageStateFromPlayer(_0x3b0a9e),
                        mmSendMessage(
                          _0x3b0a9e,
                          RESPONSE_CHECKIN_TAG,
                          _lobbyId +
                            "\x0a" +
                            _playerId +
                            "\x0a" +
                            _playerName +
                            "\x0a" +
                            _control_names[0x0] +
                            "\x0a" +
                            _control_names[0x1] +
                            "\x0a" +
                            _control_names[0x2] +
                            "\x0a" +
                            _control_names[0x3] +
                            "\x0a" +
                            getAvmString() +
                            "\x0a" +
                            _playerCountry,
                        ))
                      : a73P(_0x3d2c74(0x377))
                    : a73P(_0x3d2c74(0x309));
                  continue;
                } else {
                  if (_0x4d8a22 == KICK_TAG) {
                    const _0x482c87 = _0x4c17e8;
                    _0x482c87 == _lobbyId
                      ? !lobby_created
                        ? mmLeaveLobby()
                        : a73P(_0x3d2c74(0x38b))
                      : a73P(
                          "A\x20player\x20wants\x20to\x20kick\x20you\x20from\x20a\x20lobby\x20you\x20haven’t\x20joined.",
                        );
                    continue;
                  }
                }
              }
            }
          }
          if (_0x4d8a22 == PING_TAG) {
            try {
              const _0x5f4699 = _0x4c17e8[_0x3d2c74(0x263)]("\x0a"),
                _0x53812a =
                  Number[_0x3d2c74(0x204)](_0x5f4699[0x0], 0xa) || 0x0;
              if (_0x53812a <= ping_count) continue;
              ((ping_count = _0x53812a),
                mmSendMessage(
                  _0x3b0a9e,
                  PONG_TAG,
                  _0x53812a + "\x0a" + _randomChars(0x12c),
                ));
            } catch (_0x54607f) {
              a73P(_0x3d2c74(0x364) + _0x54607f);
            }
            continue;
          } else {
            if (_0x4d8a22 == PONG_TAG) {
              try {
                const _0x2d950f = _0x4c17e8[_0x3d2c74(0x263)]("\x0a"),
                  _0x402c1b =
                    Number[_0x3d2c74(0x204)](_0x2d950f[0x0], 0xa) || 0x0;
                _0x402c1b == 0x0 &&
                  _msgTimers[_0x3d2c74(0x201)](
                    _0x3b0a9e,
                    process["hrtime"][_0x3d2c74(0x2b3)](),
                  );
                if (_0x402c1b <= pong_count) continue;
                pong_count = _0x402c1b;
                _0x402c1b % 0x32 == 0x0 &&
                  console[_0x3d2c74(0x255)](_0x3d2c74(0x352) + _0x402c1b);
                if (_0x402c1b < 0xa)
                  mmSendMessage(
                    _0x3b0a9e,
                    PING_TAG,
                    _0x402c1b + 0x1 + "\x0a" + _randomChars(0x12c),
                  );
                else {
                  const _0x2e7daf = _msgTimers[_0x3d2c74(0x2ca)](_0x3b0a9e);
                  if (_0x2e7daf) {
                    const _0x1ac7ec =
                        process[_0x3d2c74(0x2f4)][_0x3d2c74(0x2b3)](),
                      _0x3e3d7e = Number(_0x1ac7ec - _0x2e7daf) / 0x3b9aca00;
                    (console[_0x3d2c74(0x255)](
                      "Timing\x20" +
                        _0x3b0a9e +
                        ":\x20" +
                        _0x3e3d7e[_0x3d2c74(0x35b)](0x3) +
                        _0x3d2c74(0x23e),
                    ),
                      _msgTimers[_0x3d2c74(0x1f3)](_0x3b0a9e));
                  }
                }
              } catch (_0x39a72d) {
                a73P(_0x3d2c74(0x359) + _0x39a72d);
              }
              continue;
            }
          }
        }
      }
    }
    return;
  } catch (_0x2f7e0d) {
    a73P(_0x3d2c74(0x20d) + _0x2f7e0d);
    return;
  }
}
const TIMING_TARGET_ID = "1919150593",
  TICK_HZ = 0x64,
  MSGS_PER_TICK = 0x1,
  TICK_MS = Math[_0x5ac0f7(0x2a1)](0x3e8 / TICK_HZ),
  COUNTER_START = 0x1,
  COUNTER_END = TICK_HZ * 0xf - 0x2;
function _randomChars(_0x43bde0) {
  const _0x5e5a88 = _0x5ac0f7,
    _0xb8ff78 = _0x5e5a88(0x310);
  let _0x527f61 = "";
  for (let _0x5a1b45 = 0x0; _0x5a1b45 < _0x43bde0; _0x5a1b45++)
    _0x527f61 += _0xb8ff78[_0x5e5a88(0x22e)](
      (Math[_0x5e5a88(0x3a4)]() * _0xb8ff78[_0x5e5a88(0x324)]) | 0x0,
    );
  return _0x527f61;
}
function _pad3(_0x2cdf7c) {
  return String(_0x2cdf7c)["padStart"](0x3, "0");
}
const PLAYER_CHECK_INTERVAL_MS = 0x64;
function _0x4740() {
  const _0x184c39 = [
    "U1RBR0VfM19FQVNZ",
    "Received\x20respond-checkin\x20with\x20insufficient\x20fields.",
    "mmSendMessage",
    "1066830rsYkNM",
    "joinState",
    "replace",
    "activate",
    "num_members",
    "Q2xlYXIgU3Vydml2YWwgU3RhZ2UgNDAgb24gRGlmZmljdWx0",
    "U3Vydml2YWwgOTAg4oCTIE9uZSBBZ2FpbnN0IEFsbA==",
    "AWAY",
    "steamPlayerId",
    "Expected\x20player\x20in\x20_playerList\x20but\x20not\x20found\x20for\x20respond-checkin.",
    "userData",
    "Q2xlYXIgU3RhZ2UgMSBvbiBEaWZmaWN1bHQ=",
    "p_id\x20mismatched.",
    "close",
    "Alert",
    "4394292rZBjHr",
    "PLAYER_LIST",
    "RmlyZW4gQnJvbnpl",
    "quit",
    "Q2xlYXIgU3RhZ2UgMyBvbiBFYXN5",
    "U1RBR0VfNF9FQVNZ",
    "Q09PUF8zUA==",
    "Q2xlYXIgU3RhZ2UgNSBvbiBEaWZmaWN1bHQgdXNpbmcgRGF2aXMgKGh1bWFuLWNvbnRyb2xsZWQp",
    "last_msg_time",
    "START_GAME",
    "U0lMVkVSX0hFTlJZ",
    "charAt",
    "some",
    "mmJoinLobby\x20error:\x20",
    "U1RBR0VfNV9DUkFaWQ==",
    "Q2xlYXIgU3RhZ2UgNSBvbiBFYXN5IHVzaW5nIERlbm5pcyAoaHVtYW4tY29udHJvbGxlZCkgd2l0aCBhdCBsZWFzdCB0d28gb3RoZXIgcGxheWVycyAoaHVtYW4gb3IgQ1BVKQ==",
    "NIL",
    "Q2xlYXIgU3RhZ2UgNSBvbiBOb3JtYWw=",
    "Q2xlYXIgU3RhZ2UgNSBvbiBOb3JtYWwgb3IgYWJvdmUgd2l0aCA4IGh1bWFuLWNvbnRyb2xsZWQgcGxheWVycw==",
    "getHandle",
    "CLIENT_MSG_TAG",
    "RmlyemVuIEJyb256ZQ==",
    "utf8",
    "U0lMVkVSX0xPVUlTRVg=",
    "countryCode",
    "getPath",
    "Q2xlYXIgU3RhZ2UgNSBvbiBEaWZmaWN1bHQgdXNpbmcgRnJlZXplIChodW1hbi1jb250cm9sbGVkKQ==",
    "\x20seconds",
    "./moves_table/updatelog.html",
    "initRelayNetworkAccess",
    "Steam\x20error:\x20",
    "accountId",
    "slice",
    "error",
    "Q2xlYXIgU3Vydml2YWwgU3RhZ2UgNTAgb24gRGlmZmljdWx0",
    "requested_checkin",
    "QlJPTlpFX0xPVUlT",
    "numeric",
    "avm",
    "TG91aXNFWCBHb2xk",
    "Q2xlYXIgU3RhZ2UgNSBvbiBFYXN5",
    "U3RhZ2UgMSDigJMgRWFzeQ==",
    "Q2xlYXIgU3RhZ2UgNSBvbiBEaWZmaWN1bHQgdXNpbmcgV29vZHkgKGh1bWFuLWNvbnRyb2xsZWQp",
    "U3RhZ2UgMSDigJMgQ3Jhenk=",
    "utils",
    "\x20latencyFrames\x20",
    "U3Vydml2YWwgNDAg4oCTIE5vIFR1cm5pbmcgQmFjaw==",
    "PLAYER_LIST\x0a",
    "R09MRF9ERUVQ",
    "z9QP",
    "log",
    "U1VSVklWQUxfNTA=",
    "runCallbacks",
    "mmGetUnreadMessages",
    "setData",
    "QmF0dGxlIENvbnF1ZXJvcg==",
    "name",
    "CHAT\x0a",
    "getAllWindows",
    "SGVucnkgU2lsdmVy",
    "disconnected",
    "closeSync",
    "RnJlZXplIFNpbHZlcg==",
    "U3RhZ2UgNSDigJMgTm9ybWFs",
    "split",
    "sequence",
    "achievement",
    "UPDATE_CONTROL_NAMES",
    "mmLeaveLobby",
    "U1RBR0VfMl9OT1JNQUw=",
    "Q2xlYXIgU3RhZ2UgNSBvbiBEaWZmaWN1bHQgdXNpbmcgUnVkb2xmIChodW1hbi1jb250cm9sbGVkKQ==",
    "QlJPTlpFX0RBVklT",
    "R09MRF9GSVJaRU4=",
    "Q2xlYXIgU3RhZ2UgMiBvbiBEaWZmaWN1bHQ=",
    "readSync",
    "Q2xlYXIgU3RhZ2UgMiBvbiBOb3JtYWw=",
    "Q2xlYXIgU3RhZ2UgNSBvbiBEaWZmaWN1bHQgdXNpbmcgSnVsaWFuIChodW1hbi1jb250cm9sbGVkKQ==",
    "uncaughtException",
    "U3RhZ2UgNSDigJMgRGlmZmljdWx0",
    "replaceAll",
    "window-all-closed",
    "receiveMessagesOnChannel",
    "v2.16",
    "Q2xlYXIgU3RhZ2UgNSBvbiBFYXN5IHVzaW5nIEZyZWV6ZSAoaHVtYW4tY29udHJvbGxlZCkgd2l0aCBhdCBsZWFzdCB0d28gb3RoZXIgcGxheWVycyAoaHVtYW4gb3IgQ1BVKQ==",
    "Q2xlYXIgU3RhZ2UgNSBvbiBOb3JtYWwgdXNpbmcgUnVkb2xmIChodW1hbi1jb250cm9sbGVkKSB3aXRoIGF0IGxlYXN0IG9uZSBvdGhlciBwbGF5ZXIgKGh1bWFuIG9yIENQVSk=",
    "kill",
    "mmSendToHost",
    "steamId",
    "Q2xlYXIgU3RhZ2UgNSBvbiBEaWZmaWN1bHQgdXNpbmcgRGVubmlzIChodW1hbi1jb250cm9sbGVkKQ==",
    "undefined",
    "\x0alost\x20connection.",
    "TU9ERV8yX09OXzJfQ0hBTVA=",
    "QlJPTlpFX0pPSE4=",
    "Q2xlYXIgU3RhZ2UgNSBvbiBOb3JtYWwgdXNpbmcgTG91aXMgKGh1bWFuLWNvbnRyb2xsZWQpIHdpdGggYXQgbGVhc3Qgb25lIG90aGVyIHBsYXllciAoaHVtYW4gb3IgQ1BVKQ==",
    "Uncaught\x20Exception:\x0a",
    "QmF0IFNpbHZlcg==",
    "U0lMVkVSX0RBVklT",
    "UnVkb2xmIEdvbGQ=",
    "networking_utils",
    "U3RhZ2UgMyDigJMgQ3Jhenk=",
    "U3RhZ2UgNCDigJMgRGlmZmljdWx0",
    "QlJPTlpFX0ZJUkVO",
    "Q2xlYXIgU3RhZ2UgNSBvbiBFYXN5IHVzaW5nIEJhdCAoaHVtYW4tY29udHJvbGxlZCkgd2l0aCBhdCBsZWFzdCB0d28gb3RoZXIgcGxheWVycyAoaHVtYW4gb3IgQ1BVKQ==",
    "SnVsaWFuIEJyb256ZQ==",
    "createLobby",
    "Sm9obiBTaWx2ZXI=",
    "A\x20player\x20list\x20from\x20a\x20lobby\x20you\x20haven\x27t\x20joined.",
    "from",
    "QmF0IEdvbGQ=",
    "version",
    "KICK",
    "UNKNOWN",
    "electron",
    "R09MRF9EQVZJUw==",
    "Q2xlYXIgU3RhZ2UgNSBvbiBDcmF6eQ==",
    "U3Vydml2YWwgNjAg4oCTIElyb24gV2lsbA==",
    "Q2xlYXIgU3RhZ2UgMiBvbiBFYXN5",
    "Q09PUF8yUA==",
    "Q2xlYXIgU3RhZ2UgNCBvbiBOb3JtYWw=",
    "unhandledRejection",
    "U3Vydml2YWwgMTAg4oCTIFdhcm0tVXA=",
    "isSteamRunningOnSteamDeck",
    "QmF0IEJyb256ZQ==",
    "leave",
    "V29vZHkgR29sZA==",
    "setFullScreen",
    "floor",
    "loadURL",
    "waiting",
    "error\x20when\x20calling\x20runCallbacks:\x20",
    "U3RhZ2UgMiDigJMgQ3Jhenk=",
    "Steam\x20client\x20not\x20initialized",
    "U3RhZ2UgMSDigJMgRGlmZmljdWx0",
    "RGVubmlzIFNpbHZlcg==",
    "Sm9obiBHb2xk",
    "existsSync",
    "commandLine",
    "creator",
    "isFullScreen",
    "VHJpbyBDbGVhciAoM1AgSGFyZCsp",
    "U3RhZ2UgNSDigJMgRWFzeQ==",
    "U1VSVklWQUxfMTAw",
    "U0lMVkVSX1JVRE9MRg==",
    "Unnamed",
    "bigint",
    "readFileSync",
    "TG91aXMgR29sZA==",
    "has",
    "abort",
    "U3RhZ2UgMyDigJMgTm9ybWFs",
    "includes",
    "./moves_table/unlock.html",
    "exit",
    "TG91aXNFWCBCcm9uemU=",
    "setAutoHideMenuBar",
    "Q2xlYXIgU3Vydml2YWwgU3RhZ2UgMTAgb24gRGlmZmljdWx0",
    "U1RBR0VfNF9DUkFaWQ==",
    "Failed\x20to\x20append\x20to\x20LF2_debug_log.txt:",
    "SGVucnkgR29sZA==",
    "Q09PUF80UA==",
    "979934KNsMdY",
    "buildFromTemplate",
    "11396392FJIOhe",
    "U1RBR0VfMV9OT1JNQUw=",
    "V2luIFZTIE1vZGUgKE5vcm1hbCBvciBhYm92ZSkgd2l0aCBhIGh1bWFuIHBsYXllciBkZWFsaW5nIG92ZXIgMTAwMCB0b3RhbCBhdHRhY2s=",
    "fJfz",
    "mmCreateLobby\x20error:\x20",
    "get",
    "UnVkb2xmIEJyb256ZQ==",
    "U0lMVkVSX0pVTElBTg==",
    "U3Vydml2YWwgODAg4oCTIEVsaXRlIFN1cnZpdm9y",
    "U3RhZ2UgMiDigJMgRWFzeQ==",
    "QlJPTlpFX0xPVUlTRVg=",
    "R09MRF9IRU5SWQ==",
    "Q2xlYXIgU3Vydml2YWwgU3RhZ2UgNzAgb24gRGlmZmljdWx0",
    "started",
    "U0lMVkVSX0ZJUkVO",
    "loadFile",
    "env",
    "U0lMVkVSX0pPSE4=",
    "controls",
    "R09MRF9MT1VJU0VY",
    "latency",
    "Player\x20list\x20from\x20myself?",
    "Q2xlYXIgU3RhZ2UgNSBvbiBOb3JtYWwgdXNpbmcgV29vZHkgKGh1bWFuLWNvbnRyb2xsZWQpIHdpdGggYXQgbGVhc3Qgb25lIG90aGVyIHBsYXllciAoaHVtYW4gb3IgQ1BVKQ==",
    "Amgi",
    "RnVsbCBQYXJ0eSAoOFAgTm9ybWFsKyk=",
    "broadcastSameMessageClientToServer:\x20send\x20to\x20",
    "CHAT",
    "disable-backgrounding-occluded-windows",
    "splice",
    "inherit",
    "Q2xlYXIgU3RhZ2UgNSBvbiBFYXN5IHVzaW5nIEpvaG4gKGh1bWFuLWNvbnRyb2xsZWQpIHdpdGggYXQgbGVhc3QgdHdvIG90aGVyIHBsYXllcnMgKGh1bWFuIG9yIENQVSk=",
    "then",
    "./room_server_error.html",
    "U3RhZ2UgNSDigJMgQ3Jhenk=",
    "RHVvIENsZWFyICgyUCBIYXJkKyk=",
    "http",
    "Jpsc",
    "SnVsaWFuIFNpbHZlcg==",
    "VlMgRmlnaHRlcg==",
    "isActivated",
    "QlJPTlpFX1dPT0RZ",
    "U3RhZ2UgNCDigJMgTm9ybWFs",
    "Q2xlYXIgU3RhZ2UgNSBvbiBOb3JtYWwgdXNpbmcgRGF2aXMgKGh1bWFuLWNvbnRyb2xsZWQpIHdpdGggYXQgbGVhc3Qgb25lIG90aGVyIHBsYXllciAoaHVtYW4gb3IgQ1BVKQ==",
    "LF2_debug_log.txt",
    "U1RBR0VfM19ESUZGSUNVTFQ=",
    "U3RhZ2UgMSDigJMgTm9ybWFs",
    "state",
    "hrtime",
    "./licenses/license.html",
    "r3D9",
    "getMemberLimit",
    "p.js",
    "TU9ERV9CQVRUTEUy",
    "\x0a§\x0a",
    "getData",
    "joined",
    "isFinite",
    "DISCONNECTED\x0alost\x20connection.",
    "Q2xlYXIgU3RhZ2UgNCBvbiBFYXN5",
    "mmKickPlayer",
    "getType",
    "data",
    "TU9ERV8xX09OXzFfQ0hBTVA=",
    "getMemberCount",
    "/joined\x20lobby:",
    "TU9ERV9WUzE=",
    "http://localhost:",
    "Q2xlYXIgU3RhZ2UgMSBvbiBFYXN5",
    "A\x20request-checkin\x20from\x20a\x20lobby\x20you\x20haven’t\x20joined.",
    "map",
    "writeFileSync",
    "fileMenu",
    "Q2xlYXIgU3RhZ2UgNSBvbiBOb3JtYWwgdXNpbmcgRmlyemVuIChodW1hbi1jb250cm9sbGVkKSB3aXRoIGF0IGxlYXN0IG9uZSBvdGhlciBwbGF5ZXIgKGh1bWFuIG9yIENQVSk=",
    "Q2xlYXIgU3RhZ2UgNSBvbiBFYXN5IHVzaW5nIFJ1ZG9sZiAoaHVtYW4tY29udHJvbGxlZCkgd2l0aCBhdCBsZWFzdCB0d28gb3RoZXIgcGxheWVycyAoaHVtYW4gb3IgQ1BVKQ==",
    "Q2xlYXIgU3RhZ2UgNSBvbiBEaWZmaWN1bHQgdXNpbmcgTG91aXNFWCAoaHVtYW4tY29udHJvbGxlZCk=",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    "mmCheckResendMessage\x20error:\x20",
    "SnVsaWFuIEdvbGQ=",
    "shift",
    "RGVlcCBCcm9uemU=",
    "matchmaking",
    "Q2xlYXIgU3RhZ2UgMyBvbiBEaWZmaWN1bHQ=",
    "Q09PUF82UA==",
    "short",
    "U1VSVklWQUxfOTA=",
    "apps",
    "clearCache",
    "platform",
    "Q2xlYXIgU3RhZ2UgNSBvbiBEaWZmaWN1bHQ=",
    "removeMenu",
    "R09MRF9KVUxJQU4=",
    "U1RBR0VfM19DUkFaWQ==",
    "disable-background-timer-throttling",
    "U1RBR0VfM19OT1JNQUw=",
    "showMessageBox",
    "length",
    "LF2\x20Update\x20Log",
    "electronEnableSteamOverlay",
    "info",
    "QlJPTlpFX0ZSRUVaRQ==",
    "FRAME",
    "isSubscribedApp",
    "se6",
    "child_process",
    "Q2xlYXIgU3RhZ2UgNSBvbiBOb3JtYWwgdXNpbmcgRGVlcCAoaHVtYW4tY29udHJvbGxlZCkgd2l0aCBhdCBsZWFzdCBvbmUgb3RoZXIgcGxheWVyIChodW1hbiBvciBDUFUp",
    "Public",
    "U0lMVkVSX0RFRVA=",
    "mmGetLobbyLatency",
    "forEach",
    "request_checkin_time",
    "R09MRF9KT0hO",
    "find",
    "U0lMVkVSX0JBVA==",
    "U1RBR0VfMl9DUkFaWQ==",
    "Q2xlYXIgU3Vydml2YWwgU3RhZ2UgOTAgb24gRGlmZmljdWx0",
    "kicked",
    "U1RBR0VfNV9OT1JNQUw=",
    "Licenses\x20and\x20Notes",
    "Q2xlYXIgU3RhZ2UgNCBvbiBEaWZmaWN1bHQ=",
    "creation_time",
    "RGVubmlzIEdvbGQ=",
    "RGVubmlzIEJyb256ZQ==",
    "Q2xlYXIgU3RhZ2UgNSBvbiBFYXN5IHVzaW5nIEp1bGlhbiAoaHVtYW4tY29udHJvbGxlZCkgd2l0aCBhdCBsZWFzdCB0d28gb3RoZXIgcGxheWVycyAoaHVtYW4gb3IgQ1BVKQ==",
    "RGVlcCBTaWx2ZXI=",
    "U1RBR0VfMV9ESUZGSUNVTFQ=",
    "QlJPTlpFX0pVTElBTg==",
    "R09MRF9GSVJFTg==",
    "Reliable",
    "./_res_pngs/lf2_icon.ico",
    "Unhandled\x20Rejection:\x0a",
    "getLobbies",
    "U1RBR0VfMl9FQVNZ",
    "LF2\x20-\x20How\x20to\x20Unlock\x20Characters\x20and\x20Stages",
    "SteamOverlay\x20error:\x20",
    "now",
    "Q2xlYXIgU3RhZ2UgMyBvbiBOb3JtYWw=",
    "LobbyType",
    "mmListenMessage",
    "latency\x20",
    "Q2xlYXIgU3Vydml2YWwgU3RhZ2UgMzAgb24gRGlmZmljdWx0",
    "U3RyaWtlIFRlYW0gKDZQIE5vcm1hbCsp",
    "pong\x20",
    "U3Vydml2YWwgNTAg4oCTIFRoZSBKb3VybmV5IENvbnRpbnVlcw==",
    "toLocaleString",
    "broadcastChatMessageClientToServer:\x20send\x20to\x20",
    "SendType",
    "U1VSVklWQUxfMjA=",
    "Q2xlYXIgU3RhZ2UgNSBvbiBOb3JtYWwgb3IgYWJvdmUgd2l0aCA2IG9yIDcgaHVtYW4tY29udHJvbGxlZCBwbGF5ZXJz",
    "mmListenMessage\x20PONG\x20handling\x20error:\x20",
    "lobbay\x20latency:\x20",
    "toFixed",
    "Move\x20List",
    "U0lMVkVSX0ZSRUVaRQ==",
    "received_checkin",
    "How\x20to\x20Unlock\x20Characters\x20and\x20Stages",
    "localplayer",
    "U3RhZ2UgNCDigJMgRWFzeQ==",
    "U3RhZ2UgMyDigJMgRWFzeQ==",
    "join",
    "mmListenMessage\x20PING\x20handling\x20error:\x20",
    "getMembers",
    "Q2xlYXIgU3RhZ2UgNSBvbiBEaWZmaWN1bHQgdXNpbmcgRmlyemVuIChodW1hbi1jb250cm9sbGVkKQ==",
    "Q2xlYXIgU3RhZ2UgMiBvbiBDcmF6eQ==",
    "getIpCountry",
    "mmJoinLobby",
    "QlJPTlpFX0RFTk5JUw==",
    "alloc",
    "1815579YZjMYH",
    "setApplicationMenu",
    "Q2xlYXIgU3RhZ2UgNSBvbiBFYXN5IHVzaW5nIEZpcnplbiAoaHVtYW4tY29udHJvbGxlZCkgd2l0aCBhdCBsZWFzdCB0d28gb3RoZXIgcGxheWVycyAoaHVtYW4gb3IgQ1BVKQ==",
    "Q2xlYXIgU3RhZ2UgNSBvbiBFYXN5IHVzaW5nIExvdWlzIChodW1hbi1jb250cm9sbGVkKSB3aXRoIGF0IGxlYXN0IHR3byBvdGhlciBwbGF5ZXJzIChodW1hbiBvciBDUFUp",
    "R09MRF9SVURPTEY=",
    "Q2xlYXIgU3RhZ2UgNSBvbiBEaWZmaWN1bHQgdXNpbmcgTG91aXMgKGh1bWFuLWNvbnRyb2xsZWQp",
    "toUpperCase",
    "size",
    "steamworks.js",
    "Q2xlYXIgU3Vydml2YWwgU3RhZ2UgODAgb24gRGlmZmljdWx0",
    "V2luIFZTIE1vZGUgKERpZmZpY3VsdCkgd2l0aCBhIGh1bWFuIHBsYXllciBkZWFsaW5nIG92ZXIgMzAwMCB0b3RhbCBhdHRhY2s=",
    "Requesting\x20Checkin\x20myself?",
    "U1VSVklWQUxfMTA=",
    "R09MRF9XT09EWQ==",
    "get-all-achievements",
    "UnVkb2xmIFNpbHZlcg==",
    "\x0aclicked\x20\x27Start\x20Game\x27",
    "4322274hNxvyB",
    "Invalid\x20playerId\x20(not\x20a\x20BigInt\x20string)",
    "country",
    "playerListCheck:\x20REQUEST_CHECKIN\x20to\x20",
    "U1VSVklWQUxfMzA=",
    "\x20failed:\x20",
    "RESPONSE_CHECKIN",
    "U3Vydml2YWwgMjAg4oCTIEdldHRpbmcgU2VyaW91cw==",
    "Alt+Enter",
    "lf2-room-server-macos",
    "R09MRF9MT1VJUw==",
    "2-digit",
    "setTimeout",
    "1610220KCRPXt",
    "A\x20player\x20wants\x20to\x20kick\x20you\x20from\x20the\x20lobby\x20you\x20created.",
    "mmCreateLobby\x20fails\x20(existing\x20created\x20lobby:",
    "darwin",
    "V29vZHkgQnJvbnpl",
    "Received\x20a\x20respond-checkin\x20but\x20the\x20game\x20has\x20started.",
    "appendSwitch",
    "LF2\x20Roadmap",
    "PONG",
    "RGF2aXMgU2lsdmVy",
    "playerListCheck:\x20kick\x20send\x20failed\x20for\x20",
    "U0lMVkVSX0RFTk5JUw==",
    "U3Vydml2YWwgNzAg4oCTIExhc3QgU3RhbmQ=",
    "QlJPTlpFX0JBVA==",
    "focus",
    "RnJlZXplIEdvbGQ=",
    "LF2\x20Move\x20List",
    "max_members",
    "joinLobby",
    "init",
    "error\x20when\x20calling\x20initRelayNetworkAccess:\x20",
    "Q2xlYXIgU3RhZ2UgNSBvbiBIYXJkIG9yIGFib3ZlIHdpdGggMiBodW1hbi1jb250cm9sbGVkIHBsYXllcnM=",
    "mmListLobby",
    "Q2xlYXIgU3RhZ2UgNSBvbiBFYXN5IHVzaW5nIExvdWlzRVggKGh1bWFuLWNvbnRyb2xsZWQpIHdpdGggYXQgbGVhc3QgdHdvIG90aGVyIHBsYXllcnMgKGh1bWFuIG9yIENQVSk=",
    "MSBvbiAxIENoYW1waW9u",
    "V2luIEJhdHRsZSBNb2RlIChOb3JtYWwgb3IgYWJvdmUpIHdpdGggYSBodW1hbiBwbGF5ZXIgZGVhbGluZyBvdmVyIDMwMDAgdG90YWwgYXR0YWNr",
    "random",
    "\x0a¶\x0a",
    "toString",
    "trim",
    "REQUEST_CHECKIN",
    "delete",
    "U1RBR0VfMl9ESUZGSUNVTFQ=",
    "K8OU",
    "RmlyZW4gU2lsdmVy",
    "mmSendMessage\x20error:\x20",
    "Q2xlYXIgU3RhZ2UgNSBvbiBOb3JtYWwgdXNpbmcgSGVucnkgKGh1bWFuLWNvbnRyb2xsZWQpIHdpdGggYXQgbGVhc3Qgb25lIG90aGVyIHBsYXllciAoaHVtYW4gb3IgQ1BVKQ==",
    "U3RhZ2UgNCDigJMgQ3Jhenk=",
    "U1RBR0VfNV9FQVNZ",
    "UPDATE_ACHIEVEMENTS",
    "START_GAME\x20message\x20from\x20myself?",
    "RmlyemVuIFNpbHZlcg==",
    "push",
    "closed",
    "input",
    "set",
    "SGVucnkgQnJvbnpl",
    "handle",
    "parseInt",
    "U0lMVkVSX0xPVUlT",
    "U1RBR0VfNF9OT1JNQUw=",
    "Q2xlYXIgU3RhZ2UgNSBvbiBFYXN5IHVzaW5nIERhdmlzIChodW1hbi1jb250cm9sbGVkKSB3aXRoIGF0IGxlYXN0IHR3byBvdGhlciBwbGF5ZXJzIChodW1hbiBvciBDUFUp",
    "U1RBR0VfNV9ESUZGSUNVTFQ=",
    "R09MRF9GUkVFWkU=",
    "RGVlcCBHb2xk",
    "sendMessageToUser",
    "statSync",
    "mmListenMessage\x20error:\x20",
    "Toggle\x20Full\x20Screen\x20(Main\x20Window)",
    "V2luIEJhdHRsZSBNb2RlIChEaWZmaWN1bHQpIHdpdGggYSBodW1hbiBwbGF5ZXIgZGVhbGluZyBvdmVyIDEwMDAwIHRvdGFsIGF0dGFjaw==",
    "stack",
  ];
  _0x4740 = function () {
    return _0x184c39;
  };
  return _0x4740();
}
setInterval(playerListCheck, PLAYER_CHECK_INTERVAL_MS);
function playerListCheck() {
  const _0x4819aa = _0x5ac0f7,
    _0x4e50d0 = lobby_created;
  if (!_0x4e50d0) return;
  const _0x22ea55 = Date[_0x4819aa(0x34b)](),
    _0x50a470 = _0x4e50d0[_0x4819aa(0x2fb)](_0x4819aa(0x2ac)),
    _0x42c97c = _0x4e50d0["getMembers"](),
    _0x57d886 = new Map(
      _playerList[_0x4819aa(0x30a)]((_0x334f6e) => [
        _0x334f6e[_0x4819aa(0x21c)],
        _0x334f6e,
      ]),
    );
  for (const _0xb40a46 of _0x42c97c) {
    const _0x4e9126 = String(_0xb40a46[_0x4819aa(0x242)]);
    if (!_0x57d886[_0x4819aa(0x2b6)](_0x4e9126)) {
      if (_playerList[_0x4819aa(0x324)] >= MAX_PLAYERS)
        mmSendMessage(_0x4e9126, KICK_TAG, "" + _lobbyId);
      else {
        const _0x293272 = {
          id: _next_player_id,
          steamPlayerId: _0x4e9126,
          joinState: _0x4819aa(0x246),
          countryCode: "-",
          request_checkin_time: _0x22ea55,
          last_msg_time: 0x0,
          isAdmin: ![],
          name: "UNKNOWN",
          controls: ["-", "-", "-", "-"],
          avm: "",
        };
        (_next_player_id++, _playerList[_0x4819aa(0x1fe)](_0x293272));
        try {
          mmSendMessage(_0x4e9126, REQUEST_CHECKIN_TAG, "" + _lobbyId);
        } catch (_0x3ca83f) {
          a73P?.(_0x4819aa(0x380) + _0x4e9126 + _0x4819aa(0x382) + _0x3ca83f);
        }
      }
    }
  }
  let _0x23af11 = ![];
  const _0x503027 = 0x2710;
  for (
    let _0x343406 = _playerList[_0x4819aa(0x324)] - 0x1;
    _0x343406 >= 0x0;
    _0x343406--
  ) {
    const _0x45e62c = _playerList[_0x343406];
    if (
      _0x45e62c[_0x4819aa(0x215)] === _0x4819aa(0x246) &&
      _0x22ea55 - _0x45e62c[_0x4819aa(0x332)] > _0x503027
    ) {
      try {
        ((_0x45e62c[_0x4819aa(0x215)] = _0x4819aa(0x338)),
          mmSendMessage(_0x45e62c["steamPlayerId"], KICK_TAG, "" + _lobbyId),
          (_0x23af11 = !![]));
      } catch (_0x5685ce) {
        a73P?.(
          _0x4819aa(0x394) + _0x45e62c[_0x4819aa(0x21c)] + ":\x20" + _0x5685ce,
        );
      }
      _playerList[_0x4819aa(0x2e1)](_0x343406, 0x1);
    }
    const _0x2d8424 = _0x42c97c[_0x4819aa(0x22f)](
      (_0x437962) =>
        String(_0x437962[_0x4819aa(0x242)]) == _0x45e62c[_0x4819aa(0x21c)],
    );
    if (!_0x2d8424) {
      if (lobby_game_started && lobby_created) {
        const _0x511b36 =
          _0x4819aa(0x25c) +
          _0x45e62c["id"] +
          "\x0a" +
          _0x45e62c["name"] +
          _0x4819aa(0x27d);
        broadcastSameMessageClientToServer(_0x511b36);
      }
      (_playerList[_0x4819aa(0x2e1)](_0x343406, 0x1), (_0x23af11 = !![]));
    }
  }
  for (const _0x58e960 of _playerList) {
    _0x58e960["joinState"] === "received_checkin" &&
      !lobby_game_started &&
      ((_0x58e960[_0x4819aa(0x215)] = "joined"), (_0x23af11 = !![]));
  }
  _0x23af11 && broadcastPlayerList();
}
function broadcastPlayerList() {
  const _0x428bb8 = _0x5ac0f7,
    _0x482f2f = lobby_created;
  if (!_0x482f2f) return;
  let _0x511009 = 0x0;
  const _0x40d3be = lobby_created[_0x428bb8(0x2fb)](_0x428bb8(0x2d9)) || "1";
  let _0x3cf604 = _lobbyId + "\x0a" + _playerId + "\x0a" + _0x40d3be;
  (_playerList[_0x428bb8(0x331)]((_0x463c64) => {
    const _0x12bed1 = _0x428bb8;
    if (_0x463c64["joinState"] !== _0x12bed1(0x2fc)) return;
    (_0x511009++,
      (_0x3cf604 +=
        "\x0a¶\x0a" +
        _0x463c64["id"] +
        "\x0a" +
        _0x463c64["steamPlayerId"] +
        "\x0a" +
        _0x463c64[_0x12bed1(0x25b)] +
        "\x0a" +
        _0x463c64[_0x12bed1(0x2d7)][0x0] +
        "\x0a" +
        _0x463c64[_0x12bed1(0x2d7)][0x1] +
        "\x0a" +
        _0x463c64[_0x12bed1(0x2d7)][0x2] +
        "\x0a" +
        _0x463c64[_0x12bed1(0x2d7)][0x3] +
        "\x0a" +
        _0x463c64[_0x12bed1(0x249)] +
        "\x0a" +
        _0x463c64[_0x12bed1(0x23b)]));
  }),
    lobby_created["setData"](_0x428bb8(0x218), "" + _0x511009));
  for (const _0x2931a1 of _playerList) {
    if (
      _0x2931a1[_0x428bb8(0x215)] === "joined" &&
      _0x2931a1[_0x428bb8(0x21c)] != _playerId
    )
      try {
        mmSendMessage(_0x2931a1[_0x428bb8(0x21c)], PLAYER_LIST_TAG, _0x3cf604);
      } catch (_0x318d4b) {
        a73P?.(
          "broadcastPlayerList:\x20send\x20to\x20" +
            _0x2931a1[_0x428bb8(0x21c)] +
            _0x428bb8(0x382) +
            _0x318d4b,
        );
      }
  }
  unread_messages[_0x428bb8(0x1fe)](_0x428bb8(0x252) + _0x3cf604);
}
function parsePlayerList(_0x56dc24) {
  const _0x19d9e3 = _0x5ac0f7,
    _0x2a9b50 = _0x56dc24[_0x19d9e3(0x263)](_0x19d9e3(0x1ef)),
    _0x328b1b = _0x2a9b50[0x0][_0x19d9e3(0x263)]("\x0a"),
    _0x5291ce = _0x328b1b[0x1],
    _0x378507 = _0x328b1b[0x2];
  ((_latency = ~~_0x378507), _0x2a9b50[_0x19d9e3(0x313)]());
  const _0xe83c89 = _0x2a9b50[_0x19d9e3(0x30a)]((_0x22a7b2) => {
    const _0x141f62 = _0x19d9e3,
      _0x3788c8 = _0x22a7b2[_0x141f62(0x263)]("\x0a"),
      _0x1805e0 = Number(_0x3788c8[0x0]),
      _0x5a5915 = _0x3788c8[0x1];
    _0x5a5915 == _playerId && (_playerIdInLobby = _0x1805e0);
    const _0x9ce3fa = _0x3788c8[0x2],
      _0x2e2525 = [
        _0x3788c8[0x3],
        _0x3788c8[0x4],
        _0x3788c8[0x5],
        _0x3788c8[0x6],
      ],
      _0x5a6006 = _0x3788c8[0x7],
      _0x4e49b3 = _0x3788c8[0x8];
    return {
      id: _0x1805e0,
      steamPlayerId: _0x5a5915,
      joinState: _0x141f62(0x2fc),
      isAdmin: _0x5a5915 == _0x5291ce,
      name: _0x9ce3fa,
      controls: _0x2e2525,
      avm: _0x5a6006,
      countryCode: _0x4e49b3,
    };
  });
  _playerList = _0xe83c89;
}

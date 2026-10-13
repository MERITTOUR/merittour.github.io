/* 예약 회차 팝업 — /2027/ 과 /2027/booking/ 이 같이 쓴다(2026-10-13 · Min 「팝업창으로 1차 예약 마감된거 올리고 2차, 3차 내용 나오게 하는 팝업창 하나」 → 「공용 팝업으로 진행」).
   문서를 열면 가운데에 띄운다 — 「2027 시즌 우선예약」 · 제목 · 리드 · 1~3차 표(마감 · 접수 중 · 예정) · ※ 줄 · 「꼭 확인」 빨간 상자 · 예약 홈페이지 · 닫기 · 오늘 하루 보지 않기.
   회차 시각은 /2027/ s-02 와 같은 값(KST). 1차가 닫힌 뒤부터 3차가 닫힐 때(10월 17일 10시)까지만 뜨고, 그 뒤에는 저절로 안 뜬다.
   「오늘 하루 보지 않기」는 localStorage(mt2027pop · KST 날짜) — 두 페이지가 같은 주소(origin)라 한쪽에서 누르면 그날은 둘 다 안 뜬다.
   「꼭 확인」 상자는 /2027/ 에서는 /2027/booking/#check 로, 예약 방법 페이지 안에서는 #check 로(팝업을 닫고 그 절로 내려간다).
   예약 방법 페이지에 #check·#s-check 로 들어오면(팝업 링크 · 문자 링크) 팝업을 띄우지 않는다 — 04 절을 보러 온 사람이다.
   검사용 ?now=2026-10-14T11:00(시간대가 없으면 KST). 색 토큰은 두 페이지가 같은 이름을 쓰지만 없을 때를 대비해 기본값을 함께 적었다. */
(function () {
  'use strict';
  if (window.__mtRoundPop || !document.body) return;
  window.__mtRoundPop = true;

  var ROUNDS = [
    { open: '2026-10-12T10:00:00+09:00', close: '2026-10-13T10:00:00+09:00', no: '1차', when: '10월 12일(월) 오전 10시 ~ 13일(화) 오전 10시', cap: '1회 예약 가능', openAt: '10월 12일(월) 오전 10시', closeAt: '10월 13일(화) 오전 10시' },
    { open: '2026-10-14T10:00:00+09:00', close: '2026-10-15T10:00:00+09:00', no: '2차', when: '10월 14일(수) 오전 10시 ~ 15일(목) 오전 10시', cap: '2회 예약 가능', openAt: '10월 14일(수) 오전 10시', closeAt: '10월 15일(목) 오전 10시' },
    { open: '2026-10-16T10:00:00+09:00', close: '2026-10-17T10:00:00+09:00', no: '3차', when: '10월 16일(금) 오전 10시 ~ 17일(토) 오전 10시', cap: '2회 예약 가능', openAt: '10월 16일(금) 오전 10시', closeAt: '10월 17일(토) 오전 10시' }
  ];

  var now = Date.now();
  try {                                                   /* 검사용 — ?now=2026-10-14T11:00 (시간대가 없으면 KST 로 읽는다) */
    var q = new URLSearchParams(location.search).get('now');
    if (q) { var t = Date.parse(/[+Z]/.test(q.slice(10)) ? q : q + '+09:00'); if (!isNaN(t)) now = t; }
  } catch (e) {}

  var states = [], openAt = -1, closed = 0;
  for (var i = 0; i < ROUNDS.length; i++) {
    var st = now < Date.parse(ROUNDS[i].open) ? 'next' : now < Date.parse(ROUNDS[i].close) ? 'now' : 'done';
    if (st === 'now') openAt = i;
    if (st === 'done') closed++;
    states.push(st);
  }
  if (closed === 0 && openAt < 0) return;                 /* 1차가 열리기 전 — 뜰 일이 없다 */
  if (closed === ROUNDS.length) return;                   /* 3차까지 닫혔다 — 더는 띄우지 않는다(상시예약 안내는 따로) */

  function pad(n) { return (n < 10 ? '0' : '') + n; }
  var d = new Date(now + 9 * 3600 * 1000), today = d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()), KEY = 'mt2027pop';
  try { if (localStorage.getItem(KEY) === today) return; } catch (e) {}

  var title, lead;
  if (openAt >= 0) {
    title = ROUNDS[openAt].no + ' 우선예약 접수 중입니다';
    lead = '<b>' + ROUNDS[openAt].closeAt + '</b>에 닫힙니다. 회차마다 예약 가능 횟수를 확인해 주십시오.';
  } else {
    title = (closed === 1 ? '1차' : '1·2차') + ' 우선예약 접수가 마감되었습니다';
    lead = '다음 ' + ROUNDS[closed].no + ' 접수는 <b>' + ROUNDS[closed].openAt + '</b>에 열립니다. 각 회차는 다음 날 오전 10시에 닫힙니다.';
  }
  var onBooking = location.pathname.indexOf('/2027/booking/') !== -1;   /* file:// 검사에서도 맞게 — 앞머리 고정 안 함 */
  var checkHref = onBooking ? '#check' : '/2027/booking/#check';
  if (onBooking && /^#(s-)?check$/.test(location.hash)) return;   /* 팝업의 「꼭 확인」 링크·문자 링크로 04 절에 바로 온 사람에게는 또 띄우지 않는다 */

  var css = [
    '.pop{position:fixed;inset:0;z-index:70;background:rgba(20,26,16,.55);display:flex;align-items:center;justify-content:center;padding:18px}',
    '.pop[hidden]{display:none}',
    '.pop-card{position:relative;width:min(100%,520px);max-height:calc(100vh - 36px);overflow:auto;background:var(--surface,#FFFFFF);border:1px solid var(--line,#DFD8C5);border-top:6px solid var(--olive-deep,#47562F);border-radius:16px;padding:26px 24px 18px;box-shadow:0 18px 50px rgba(0,0,0,.28)}',
    '.pop-tag{margin:0 0 6px;font-size:12.5px;font-weight:800;letter-spacing:.08em;color:var(--gold,#7F6019)}',
    '.pop-title{margin:0 40px 0 0;font-size:22px;font-weight:800;letter-spacing:-.015em;line-height:1.35;color:var(--ink,#1E2618);text-wrap:balance}',
    '.pop-lead{margin:10px 0 0;font-size:15.5px;line-height:1.65;color:var(--ink-soft,#4C573F)}',
    '.pop-lead b{color:var(--ink,#1E2618)}',
    '.pop-rounds{list-style:none;margin:16px 0 0;padding:0;border:1px solid var(--line,#DFD8C5);border-radius:12px;overflow:hidden}',
    '.pop-rounds li{display:grid;grid-template-columns:auto 1fr auto;gap:2px 10px;align-items:center;padding:11px 14px;border-top:1px solid var(--line-soft,#E9E3D2);background:var(--surface,#FFFFFF)}',
    '.pop-rounds li:first-child{border-top:0}',
    '.pr-no{font-size:15px;font-weight:800;color:var(--olive-deep,#47562F)}',
    '.pr-when{font-size:15px;font-weight:700;color:var(--ink,#1E2618);font-variant-numeric:tabular-nums}',
    '.pr-cap{grid-column:2;font-size:13px;color:var(--ink-soft,#4C573F)}',
    '.pr-st{grid-column:3;grid-row:1 / span 2;font-size:12.5px;font-weight:800;padding:3px 10px;border-radius:999px;border:1px solid var(--line,#DFD8C5);color:var(--ink-soft,#4C573F);background:var(--band,#EDE7D6);white-space:nowrap}',
    '.pop-rounds li.done{background:var(--surface-warm,#FCFAF4)}',
    '.pop-rounds li.done .pr-no,.pop-rounds li.done .pr-when{color:var(--muted,#5F6B47)}',
    '.pop-rounds li.done .pr-st{color:#fff;background:#D7263D;border-color:#D7263D}',          /* 빨강 = /2027/booking/ 의 --tap 과 같은 값(흰 글자 대비 4.96) */
    '.pop-rounds li.now .pr-st{color:#fff;background:var(--olive-deep,#47562F);border-color:var(--olive-deep,#47562F)}',
    '.pop-rounds li.next .pr-st{color:var(--gold,#7F6019);background:#FFF9EC;border-color:var(--member-line,#D3BA85)}',
    '.pop-note{margin:12px 0 0;font-size:13.5px;line-height:1.65;color:var(--ink-soft,#4C573F)}',
    '.pop-check{display:flex;align-items:center;gap:12px;margin:12px 0 0;padding:12px 14px;border-radius:12px;background:#FFF6F4;border:1.5px solid #D7263D;text-decoration:none;color:var(--ink,#1E2618)}',
    '.pop-check .pc-tag{flex:none;padding:4px 10px;border-radius:999px;background:#D7263D;color:#fff;font-size:12.5px;font-weight:800;letter-spacing:.04em;white-space:nowrap}',
    '.pop-check .pc-body{display:flex;flex-direction:column;gap:2px;line-height:1.45;min-width:0}',
    '.pop-check b{font-size:16px;font-weight:800;color:var(--ink,#1E2618)}',
    '.pop-check small{font-size:13px;color:var(--ink-soft,#4C573F)}',
    '@media (hover:hover){ .pop-check:hover{background:#FFEDE9} }',
    '.pop-check:focus-visible{outline:3px solid var(--gold-soft,#9E7C33);outline-offset:2px}',
    '.pop-actions{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:16px 0 0}',
    '.pop-btn{display:flex;align-items:center;justify-content:center;min-height:50px;padding:10px 12px;border-radius:12px;border:1.5px solid var(--line,#DFD8C5);background:var(--surface,#FFFFFF);color:var(--ink,#1E2618);font-family:inherit;font-size:16px;font-weight:800;text-decoration:none;cursor:pointer}',
    '.pop-btn.primary{background:var(--olive-deep,#47562F);border-color:var(--olive-deep,#47562F);color:#fff}',
    '.pop-btn:focus-visible,.pop-today:focus-visible,.pop-x:focus-visible{outline:3px solid var(--gold-soft,#9E7C33);outline-offset:2px}',
    '.pop-today{display:block;margin:10px auto 0;background:none;border:0;padding:6px 10px;font-family:inherit;font-size:13.5px;color:var(--muted,#5F6B47);text-decoration:underline;cursor:pointer}',
    '.pop-x{position:absolute;top:10px;right:10px;width:40px;height:40px;border-radius:50%;border:0;background:var(--band,#EDE7D6);color:var(--ink,#1E2618);font-size:22px;font-weight:800;line-height:1;cursor:pointer}',
    /* 폰(390×740)에서 카드 안을 스크롤하지 않고 「오늘 하루 보지 않기」까지 한 화면에 — ※ 줄(s-02 에 같은 말)과 상자의 작은 줄은 숨긴다 */
    '@media (max-width:560px){ .pop{padding:12px} .pop-card{padding:20px 18px 12px} .pop-title{font-size:20px} .pop-lead{font-size:14.5px;margin-top:8px} .pop-rounds{margin-top:12px} .pop-rounds li{padding:8px 12px} .pr-when{font-size:14.5px} .pr-cap{font-size:12.5px} .pop-note{display:none} .pop-check{margin-top:12px;padding:11px 12px;gap:10px} .pop-check b{font-size:15.5px} .pop-check small{display:none} .pop-actions{grid-template-columns:1fr;gap:6px;margin-top:12px} .pop-btn{min-height:46px} .pop-today{margin-top:4px} }',
    /* 키 작은 폰(세로 720px 이하)에서는 카드 안이 스크롤되므로 「닫기」 줄을 카드 아래에 붙여 늘 보이게 */
    '@media (max-height:720px){ .pop-actions{position:sticky;bottom:0;margin-top:10px;padding:10px 0 12px;background:var(--surface,#FFFFFF);box-shadow:0 -12px 12px -8px rgba(0,0,0,.10)} }',
    '@media print{ .pop{display:none} }'
  ].join('\n');
  var style = document.createElement('style'); style.id = 'mtRoundPopCss'; style.textContent = css; document.head.appendChild(style);

  var rows = '';
  for (var r = 0; r < ROUNDS.length; r++) {
    var badge = states[r] === 'done' ? '마감' : states[r] === 'now' ? '접수 중' : '예정';
    rows += '<li class="' + states[r] + '"><span class="pr-no">' + ROUNDS[r].no + '</span><span class="pr-when">' + ROUNDS[r].when + '</span><span class="pr-cap">' + ROUNDS[r].cap + '</span><span class="pr-st">' + badge + '</span></li>';
  }
  var html = [
    '<div class="pop" id="pop" role="dialog" aria-modal="true" aria-labelledby="popTitle">',
    '  <div class="pop-card">',
    '    <p class="pop-tag">2027 시즌 우선예약</p>',
    '    <h2 class="pop-title" id="popTitle">' + title + '</h2>',
    '    <p class="pop-lead" id="popLead">' + lead + '</p>',
    '    <ol class="pop-rounds" aria-label="예약 회차">' + rows + '</ol>',
    '    <p class="pop-note">※ 회차가 닫히면 다음 회차가 열릴 때까지 예약 화면에 「예약 마감」으로 표시됩니다.</p>',
    '    <a class="pop-check" href="' + checkHref + '" data-pop-check>',
    '      <span class="pc-tag">꼭 확인</span>',
    '      <span class="pc-body"><b>예약 전에 꼭 확인하실 점 보기 →</b><small>1차 때 헷갈리기 쉬웠던 부분 — 체류 날짜마다 객실이 남아 있는지 · − + 는 인원 수</small></span>',
    '    </a>',
    '    <div class="pop-actions">',
    '      <a class="pop-btn primary" href="https://www.merittour.co.kr" target="_blank" rel="noopener">예약 홈페이지 바로가기</a>',
    '      <button type="button" class="pop-btn" data-pop-close>닫기</button>',
    '    </div>',
    '    <button type="button" class="pop-today" data-pop-today>오늘 하루 보지 않기</button>',
    '    <button type="button" class="pop-x" data-pop-close aria-label="닫기">×</button>',
    '  </div>',
    '</div>'
  ].join('\n');
  document.body.insertAdjacentHTML('beforeend', html);
  var pop = document.getElementById('pop');

  function close(skipToday) {
    pop.hidden = true; document.body.style.overflow = '';
    if (skipToday) { try { localStorage.setItem(KEY, today); } catch (e) {} }
  }
  document.body.style.overflow = 'hidden';
  var first = pop.querySelector('.pop-btn[data-pop-close]'); if (first) first.focus();
  pop.addEventListener('click', function (e) {
    if (e.target.closest('[data-pop-close]')) { close(false); return; }
    if (e.target.closest('[data-pop-today]')) { close(true); return; }
    if (onBooking && e.target.closest('[data-pop-check]')) { close(false); return; }   /* 같은 페이지의 절로 — 닫고 해시 이동에 맡긴다 */
    if (e.target === pop) close(false);                   /* 바깥 어두운 곳 */
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !pop.hidden) close(false); });
})();

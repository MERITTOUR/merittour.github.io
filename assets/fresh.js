/* ════════════════════════════════════════════════════════════════
   fresh.js — 열어 둔 탭이 옛 안내문을 계속 들고 있는 것을 막는다

   실제로 겪은 일 = 며칠 전에 열어 둔 /2027/ 탭에서 숙소 카드가 예전
   두 칸 배치로 보였다. 고친 것은 이미 올라가 있었는데 그 탭이 다시
   받아 오지 않았을 뿐이다. 탭을 안 닫으면 캐시 설정으로는 못 고친다 —
   문서를 다시 요청하는 일 자체가 없기 때문이다.

   그래서 **다시 돌아왔을 때 서버에 한 번 물어본다.** 바뀌었으면
   띠를 하나 띄우고, 새로 불러올지는 사람이 정한다.

   ⚠ 저절로 새로고침하지 않는다. /reserve/ 는 예약을 넣는 중일 수 있고,
     /2027/ 은 읽던 자리를 잃는다. 알리기만 하고 결정은 넘긴다.
   ⚠ 페이지가 「지금은 곤란하다」고 말할 수 있다 — window.MT_FRESH_BUSY 가
     true 를 주면 미룬다(예약 시트가 열려 있을 때 등).
════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  // file:// 로 열어 보는 경우엔 물어볼 서버가 없다
  if (!/^https?:$/.test(location.protocol)) return;

  var base = '';          // 이 탭이 열릴 때 서버가 갖고 있던 판
  var last = 0;           // 마지막으로 물어본 시각
  var shown = false;      // 이번 방문에 이미 알렸는가
  var GAP = 5 * 60 * 1000;  // 5분에 한 번만 묻는다 — 창을 오갈 때마다 부르면 성가시다

  /* 지금 서버에 있는 판을 가리키는 값.
     본문은 안 받는다(HEAD) — 안내문 한 장이 수백 KB라 오갈 때마다 받으면 손해다. */
  function stamp() {
    return fetch(location.href, { method: 'HEAD', cache: 'no-store' })
      .then(function (r) {
        return r.headers.get('etag') || r.headers.get('last-modified') || '';
      })
      .catch(function () { return ''; });   // 오프라인·차단은 조용히 넘긴다
  }

  function check() {
    var now = Date.now();
    if (shown || now - last < GAP) return;
    last = now;
    stamp().then(function (s) {
      if (!s) return;                 // 서버가 판을 안 알려 주면 판단하지 않는다
      if (!base) { base = s; return; }
      if (s !== base) show();
    });
  }

  function show() {
    if (shown) return;
    // 페이지가 바쁘면 미룬다. 다음에 돌아올 때 다시 묻는다.
    try {
      if (typeof window.MT_FRESH_BUSY === 'function' && window.MT_FRESH_BUSY()) { last = 0; return; }
    } catch (e) { /* 페이지 쪽 오류로 알림이 막히면 안 된다 */ }
    shown = true;

    var bar = document.createElement('div');
    bar.setAttribute('role', 'status');
    bar.style.cssText =
      'position:fixed;left:50%;transform:translateX(-50%);bottom:16px;z-index:2147483000;' +
      'display:flex;align-items:center;gap:10px;max-width:calc(100vw - 24px);' +
      'padding:11px 12px 11px 16px;border-radius:12px;background:#1a2740;color:#fff;' +
      'font:600 14px/1.45 "Pretendard",system-ui,-apple-system,"Noto Sans KR",sans-serif;' +
      'box-shadow:0 10px 28px rgba(0,0,0,.30)';

    var msg = document.createElement('span');
    msg.textContent = '새 안내문이 올라왔습니다.';
    msg.style.cssText = 'white-space:nowrap;overflow:hidden;text-overflow:ellipsis';

    var go = document.createElement('button');
    go.type = 'button';
    go.textContent = '새로 불러오기';
    go.style.cssText =
      'flex:none;padding:7px 13px;border:none;border-radius:8px;background:#e8d9b8;color:#1a2740;' +
      'font:800 13.5px/1 inherit;font-family:inherit;cursor:pointer';
    go.addEventListener('click', function () { location.reload(); });

    var x = document.createElement('button');
    x.type = 'button';
    x.textContent = '✕';
    x.setAttribute('aria-label', '닫기');
    x.style.cssText =
      'flex:none;width:28px;height:28px;border:none;border-radius:8px;background:transparent;' +
      'color:rgba(255,255,255,.75);font:700 14px/1 inherit;cursor:pointer';
    // 닫으면 이번 방문에는 다시 띄우지 않는다(shown 을 되돌리지 않는다) —
    // 5분마다 같은 띠가 또 올라오면 그것대로 성가시다.
    x.addEventListener('click', function () { bar.remove(); });

    bar.appendChild(msg); bar.appendChild(go); bar.appendChild(x);
    document.body.appendChild(bar);
  }

  // 열릴 때의 판을 기록해 둔다. 이 값과 달라지면 그 사이에 새로 올라온 것이다.
  stamp().then(function (s) { base = s; last = Date.now(); });

  addEventListener('focus', check);
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden) check();
  });
  // 뒤로가기로 되살아난 탭(bfcache)은 focus 도 visibilitychange 도 안 올 수 있다
  addEventListener('pageshow', function (e) { if (e.persisted) check(); });
})();

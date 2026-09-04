# merittour.github.io

메리트투어(MERITTOUR) **손님 안내 페이지**. 정적 HTML 이며 `main` 브랜치가 그대로 GitHub Pages 로 배포된다
(https://merittour.github.io/ · 머지 뒤 1~2분).

| 주소 | 무엇 |
|---|---|
| `/about/` | 회사소개 (루트 고정 주소) |
| `/guide/` | 리조트 안내 허브 → `/guide/yamanami/` · `/guide/14hills/` (랜딩 + `dining/` 식사 안내) |
| `/2027/` | 2027 시즌 골프 예약 안내 (손님 공지 · 사진은 `2027/photos/`) |
| `/reserve/` | 회원 간편 예약 **프로토타입** (목 데이터 · 엠클릭 이식용) · `spec/` 요구사항 정의서 · `confirm/` 확정서 예시 |
| `/` | (임시) 회사소개로 리다이렉트 |

## 자주 하는 일

- **2027 안내문 사진 올리기** — `2027/photos/<지역>/<숙소폴더>/01.webp` 부터 번호를 이어서. 올리는 법·폴더 이름·규격은
  [`2027/photos/README.md`](2027/photos/README.md). 반드시 `2027/photos/` **아래**에서 Upload 할 것.
- **예약 프로토타입 숙소 썸네일** — [`reserve/assets/rooms/README.md`](reserve/assets/rooms/README.md).
- **문안·규칙** — 작업 규칙·이름 규칙·결정 기록은 [`CLAUDE.md`](CLAUDE.md). 새 페이지에는 `</body>` 앞에
  `<script defer src="/assets/fresh.js"></script>` 를 넣는다(열어 둔 탭이 옛 안내문을 들고 있지 않게).

## 작업 흐름

`main` 에서 `claude/*` 브랜치 → 정적 검증(태그 균형·링크·대비비·렌더) → 한국어 커밋 → PR → **squash 머지**.
되돌릴 때는 머지 커밋을 `git revert` 한다. 머지된 브랜치는 지운다.

## 하지 않는 것

- `/reserve/` 에 실제 회원 개인정보를 넣지 않는다(공개 저장소). 시연은 `DEMO_ACCOUNTS` 의 가상 계정으로만.
- `/reserve/spec/` 은 외부(엠클릭)에 보내지 않는다.
- 사진·영상 원본을 저장소에 넣지 않는다 — 사진은 1800px WebP, 영상은 유튜브 주소만.

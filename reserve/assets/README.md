# /reserve/assets/

예약 랜딩(`/reserve/index.html`)에서 쓰는 이미지 폴더입니다.

## hero.webp — 히어로 배경 (코스 항공사진)

`.hero`의 배경으로 사용됩니다.

- **파일명**: `hero.webp` / `hero.jpg` / `hero.png` 중 아무거나 (CSS가 세 확장자를 모두 찾음)
  - 여러 개 있으면 webp → jpg → png 순으로 먼저 있는 것이 적용됩니다.
- **권장 사이즈**: 폭 1600~2000px, 용량 300KB 이하 (webp)
- **구도**: 가로형 항공샷. 상단 52~68% 어둡게 오버레이가 깔리므로 하늘·밝은 영역이 위쪽에 있어도 흰 글씨가 읽힙니다.
- **표시 기준점**: `center 38%` (사진 위쪽이 조금 더 보이게)

### 없을 때
파일이 없으면 CSS 맨 아래 층의 딥 그린 그라디언트가 그대로 보입니다(레이아웃 깨짐 없음).

### 올리는 방법
GitHub 웹에서 이 폴더(`reserve/assets/`) → **Add file → Upload files** 로 드래그하고 파일명을 `hero.jpg`(또는 `hero.webp`)로 두면 됩니다. CSS 수정 불필요.

```
reserve/assets/hero.webp   (권장 · 용량 작음)
reserve/assets/hero.jpg    (그대로 올려도 적용됨)
```

용량이 1MB를 넘으면 webp로 변환하거나 폭 2000px 이하로 줄이는 것을 권장합니다.

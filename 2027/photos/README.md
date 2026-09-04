# /2027/photos/ — 2027 안내문 사진

`/2027/index.html`(2027 예약 안내문)의 지역별 **「숙소 정보 보기 / 골프장 정보 보기」** 블록에 쓰입니다.

## 올리는 법

**숙소는 한 곳씩 따로** 올립니다. 지역 폴더 아래 숙소 폴더(또는 `golf`)를 만들고
**`01.webp` 부터 번호를 이어서** 넣으면 코드를 고치지 않아도 그 자리에 바로 나타납니다.
장수는 제한이 없습니다 — 한 장만 올려도 되고 열 장을 올려도 됩니다.
GitHub 웹에서 **Add file → Upload files** 로 드래그하면 됩니다.

**번호 순서 = 숙소 외관 → 객실 → 식당 → 욕실·온천 → 로비·매점·세탁 같은 시설**(2026-09). 크게 보기가
번호 순서대로 넘어가니 이 순서로 번호를 매겨 올리세요. 이미 올라간 사진도 이 순서로 매겨 두었습니다.

```
2027/photos/kumamoto/prestige/01.webp    ← 아소 프레스티지
2027/photos/kumamoto/prestige/02.webp       …원하는 만큼 이어서
2027/photos/kumamoto/guernsey/01.webp    ← 간지호텔
2027/photos/kumamoto/golf/01.webp        ← 골프장(지역 하나)
2027/photos/nagoya/caravan/01.webp       ← 포틴힐즈CC 카라반
```

⚠ **번호를 건너뛰지 마세요.** `01` · `03` 처럼 두면 `02` 에서 멈춰 `03` 이 안 보입니다.

⚠ **반드시 `2027/photos/` 아래에 올리세요.** 저장소 맨 위(`merittour.github.io/`)에서 Upload 를 누르면
`kumamoto/golf/…` 가 맨 위에 생겨 안내문이 찾지 못합니다(2026-09 에 한 번 그랬습니다 — 제자리로 옮겨 두었습니다).
올리기 전에 주소줄이 `…/2027/photos/kumamoto/<숙소폴더>` 인지 보세요.

**안내문 화면에는 올리는 자리·경로 안내가 없습니다**(2026-09). 회원에게 보내는 공식 안내문이라
빈 「＋」 칸과 「어디에 올리세요」 줄을 걷어냈습니다. 사진이 없는 숙소는 이름·설명만 보이고,
골프장 사진이 없는 지역은 골프장 블록 자체가 보이지 않습니다. **어디에 올릴지는 아래 표에서 보세요.**
숙소 사진은 올리면 **그 숙소 설명 바로 아래**에 붙습니다.

### 지역 · 숙소 폴더

| 지역 | 폴더 | 숙소 | 폴더 |
|---|---|---|---|
| 구마모토 · 아소 야마나미 | `kumamoto` | 아소 프레스티지 | `prestige` |
| | | 히노키 스테이 | `hinoki-stay` |
| | | 소보 테라스 | `sobo-terrace` |
| | | 쿠주힐즈 | `kuju` |
| | | 돔스테이 | `dome` |
| | | 야마나미 호텔 | `hotel` |
| | | 간지호텔 | `guernsey` |
| | | 시즈노야도 료칸 | `shizunoyado` |
| 나고야 · 포틴힐즈 | `nagoya` | 포틴힐즈CC 호텔 | `hotel` |
| | | 포틴힐즈CC 카라반 | `caravan` |
| 벳푸 · 아키바 리조트 | `akiba` | 아키바 리조트 | `resort` |
| 벳푸 · 무츠키 료칸 | `mutsuki` | 무츠키 료칸 | `ryokan` |
| 이바라키 · 시로사토 | `ibaraki` | 골프장 내 숙소 | `lodge` |
| 이바라키 · 후쿠로다노타키 | `fukuroda` | 후쿠로다노타키CC 호텔 | `lodge` |
| 미야자키 · 국제공항CC | `miyazaki` | 골프장 숙소 | `lodge` |

골프장 사진은 지역마다 `golf` 하나입니다.
나가노 스가다이라 · 쿠알라룸푸르 닐라이스프링스는 **상시예약 기간 오픈 예정**이라 안내문 맨 아래에 이름만 두고
**사진 자리를 두지 않습니다**(2026-09). 올려도 나타나지 않습니다.

### 바로 올리는 링크

아래 링크를 열면 **그 폴더의 Upload files 화면이 바로** 뜹니다 — 폴더가 아직 없어도 첫 업로드 때 생깁니다.
파일 이름을 `01.webp` `02.webp` … 로 맞춰 끌어다 놓고 아래 **Commit changes** 를 누르면 끝입니다.
(엉뚱한 자리에 올라가는 일을 막으려면 저장소를 뒤져 들어가지 말고 이 링크로 여세요)

⚠ **파일만 끌어다 놓으세요 — 폴더째 끌면 안 됩니다.** 링크가 이미 그 폴더를 가리키고 있어서, `nagoya/hotel/` 폴더째
끌면 `nagoya/hotel/nagoya/hotel/01.webp` 처럼 한 단계 더 깊어져 안내문이 못 찾습니다(2026-09 포틴힐즈에서 한 번 —
제자리로 옮겨 두었습니다). 숙소가 여럿이면 **링크를 숙소마다 따로 열어** 그 숙소 파일만 올리세요.

| 지역 | 숙소 | 골프장 |
|---|---|---|
| 구마모토 · 아소 야마나미 | [아소 프레스티지](https://github.com/MERITTOUR/merittour.github.io/upload/main/2027/photos/kumamoto/prestige) · [히노키 스테이](https://github.com/MERITTOUR/merittour.github.io/upload/main/2027/photos/kumamoto/hinoki-stay) · [소보 테라스](https://github.com/MERITTOUR/merittour.github.io/upload/main/2027/photos/kumamoto/sobo-terrace) · [쿠주힐즈](https://github.com/MERITTOUR/merittour.github.io/upload/main/2027/photos/kumamoto/kuju) · [돔스테이](https://github.com/MERITTOUR/merittour.github.io/upload/main/2027/photos/kumamoto/dome) · [야마나미 호텔](https://github.com/MERITTOUR/merittour.github.io/upload/main/2027/photos/kumamoto/hotel) · [간지호텔](https://github.com/MERITTOUR/merittour.github.io/upload/main/2027/photos/kumamoto/guernsey) · [시즈노야도 료칸](https://github.com/MERITTOUR/merittour.github.io/upload/main/2027/photos/kumamoto/shizunoyado) | [골프장](https://github.com/MERITTOUR/merittour.github.io/upload/main/2027/photos/kumamoto/golf) |
| 나고야 · 포틴힐즈 | [포틴힐즈CC 호텔](https://github.com/MERITTOUR/merittour.github.io/upload/main/2027/photos/nagoya/hotel) · [포틴힐즈CC 카라반](https://github.com/MERITTOUR/merittour.github.io/upload/main/2027/photos/nagoya/caravan) | [골프장](https://github.com/MERITTOUR/merittour.github.io/upload/main/2027/photos/nagoya/golf) |
| 벳푸 · 아키바 리조트 | [아키바 리조트](https://github.com/MERITTOUR/merittour.github.io/upload/main/2027/photos/akiba/resort) | [골프장](https://github.com/MERITTOUR/merittour.github.io/upload/main/2027/photos/akiba/golf) |
| 벳푸 · 무츠키 료칸 | [무츠키 료칸](https://github.com/MERITTOUR/merittour.github.io/upload/main/2027/photos/mutsuki/ryokan) | [골프장](https://github.com/MERITTOUR/merittour.github.io/upload/main/2027/photos/mutsuki/golf) |
| 이바라키 · 시로사토 | [골프장 내 숙소](https://github.com/MERITTOUR/merittour.github.io/upload/main/2027/photos/ibaraki/lodge) | [골프장](https://github.com/MERITTOUR/merittour.github.io/upload/main/2027/photos/ibaraki/golf) |
| 이바라키 · 후쿠로다노타키 | [후쿠로다노타키CC 호텔](https://github.com/MERITTOUR/merittour.github.io/upload/main/2027/photos/fukuroda/lodge) | [골프장](https://github.com/MERITTOUR/merittour.github.io/upload/main/2027/photos/fukuroda/golf) |
| 미야자키 · 국제공항CC | [골프장 숙소](https://github.com/MERITTOUR/merittour.github.io/upload/main/2027/photos/miyazaki/lodge) | [골프장](https://github.com/MERITTOUR/merittour.github.io/upload/main/2027/photos/miyazaki/golf) |

### 숙소를 더하거나 뺄 때

지역마다 `<ul class="lodging">` 안에 숙소 카드가 있습니다. 카드에 **`data-lg="폴더이름"`** 만
붙이면 그 카드 아래에 사진 자리가 생깁니다.

```html
<li data-lg="prestige">
  <div class="lg-name">아소 프레스티지 <span class="lg-jp">ASO PRESTIGE</span></div>
  <div class="lg-desc">8인 대형 별장 1동</div>
</li>
```

이름은 카드의 `.lg-name` 을 그대로 읽으므로 **따로 적지 않습니다**(이름이 두 곳에 생기지 않습니다).

## 권장 규격

| | 값 | 왜 |
|---|---|---|
| 가로 | **1800px** | 눌러서 크게 볼 때 기준. 폰(약 1200px)·노트북에서 확대해도 원본과 차이를 못 느낍니다 |
| 형식 | **WebP · 품질 82** | 같은 화질에서 JPEG보다 25~35% 작습니다 |
| 용량 | **장당 200KB 내외** | 칸이 **보일 때만** 받습니다. 지금 올린 사진(300~630KB)도 되지만, 폰에서 한 카드를 끝까지 훑으면 2MB 남짓입니다 |
| 장수 | **제한 없음** (번호 `01`~`99`) | `01.webp` 부터 **번호를 이어서**. 1장만 올려도 되고 30장을 올려도 됩니다 |

**원본에서 바로 변환하세요.** 이미 JPEG로 압축된 파일을 다시 WebP로 바꾸면 손실이 한 번 더
얹힙니다(세대 손실). 티는 잘 안 나지만 굳이 겪을 이유가 없습니다.

카메라 원본(6000px)을 그대로 올리는 것은 손해입니다 — 브라우저가 어차피 줄여서 그리므로
보이는 것은 똑같은데 용량만 20배가 됩니다.

## 화면에서 어떻게 보이나

- **숙소 사진은 그 숙소 카드 안**, 설명 바로 아래에 한 줄로 깔립니다.
  **PC·태블릿에서는 네 자리가 한눈에 보입니다.** 다섯 장째부터는 **옆으로 밀어서** 봅니다 —
  폰은 손가락으로, 데스크톱은 마우스로 끌면 됩니다.
- **안 올린 숙소에는 사진 줄이 생기지 않습니다.** 빈 칸이나 「＋」 자리, 경로 안내는 없습니다.
  골프장도 사진이 없으면 블록이 통째로 안 보입니다(영상까지 없으면 자리도 남지 않습니다).
- **누르면 화면 가득 크게** 뜹니다. **사진 왼쪽을 누르면 이전, 오른쪽을 누르면 다음**이고, 폰에서는 **옆으로 쓸어**
  넘길 수도 있습니다. 좌우 화살표(또는 `←` `→` 키)도 그대로입니다. 아래에 **「사진 N장 중 M번째」** 와 조작법이 적혀 있습니다.
  **바깥의 어두운 곳을 누르거나**, 폰에서 **아래로 쓸어내리거나**, `Esc` 로 닫습니다.
- PC 에서는 사진 줄 위에서 **마우스 휠을 내리면 오른쪽으로** 한 칸씩 밀립니다(올리면 왼쪽). 끝에 닿으면 휠이 다시 문서를 움직입니다.
  크게 보기는 **그 숙소 사진 안에서만** 넘어갑니다 — 옆 숙소 사진이 섞이지 않습니다.
- **골프장 사진**도 숙소와 똑같이 항상 보입니다(지역마다 하나). 접어 두면 사진이 있는지조차
  눌러 봐야 알기 때문입니다.
- 사진은 **그 칸이 보일 때** 받습니다 — 옆으로 밀어야 나오는 칸은 밀 때 받습니다. 있는지는 파일을 받지 않고
  HEAD 로만 묻습니다. 문서를 여는 순간에는 한 장도 받지 않습니다.

## 영상

4K 영상은 한 편에 수백 MB라 저장소에 넣지 않습니다. **유튜브에 올리고 주소만** 넣습니다.
안내문 스크립트 아래쪽 `VIDEO` 에 지역마다 하나씩 적으면, 그 지역 **골프장 사진 블록 위에 「영상」 블록**이 생깁니다.

```js
var VIDEO = {
  kumamoto: { url: 'https://www.youtube.com/watch?v=xxxxxxxxxxx', label: '아소 야마나미 리조트 영상 · 4K' },
  nagoya:   { url: 'https://youtu.be/yyyyyyyyyyy',                label: '포틴힐즈CC 영상' }
};
```

지금 들어 있는 것: 구마모토(아소 야마나미 리조트 · 4K). 나고야 포틴힐즈는 주소가 오면 넣습니다.

주소는 어떤 형태든 됩니다(`youtu.be/…` · `watch?v=…` · `/embed/…`).

**썸네일을 누를 때만 플레이어가 붙습니다.** 처음부터 iframe 을 박으면 지역마다 유튜브
스크립트가 딸려 와 문서가 무거워집니다.

유튜브에 올리실 때는 **미등록(Unlisted)** 으로 두시면 검색에는 안 뜨고 링크로만 열립니다.

## 변환 예시

```python
from PIL import Image
im = Image.open('원본.jpg').convert('RGB')
w = 1800
im = im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
im.save('01.webp', 'WEBP', quality=82, method=6)
```

사내 도구함의 **이미지 툴킷**(`tools/imgtoolkit/`)에서도 WebP 변환·리사이즈가 됩니다.

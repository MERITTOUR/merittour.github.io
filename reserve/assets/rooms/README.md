# /reserve/assets/rooms/ — 숙소 썸네일

상품 목록 카드 왼쪽의 작은 사각형(52×52)에 들어가는 숙소 사진입니다.

## 올리는 법

이 폴더에 **아래 파일명 그대로** 올리면 코드 수정 없이 바로 반영됩니다.
GitHub 웹에서 이 폴더 → **Add file → Upload files** 로 드래그하면 됩니다.

| 파일명 | 숙소 |
|---|---|
| `yamanami.webp` | 야마나미 호텔 |
| `kuzu.webp` | 야마나미 프라이빗 레지던스 |
| `aso_villa.webp` | 야마나미 프레스티지 |
| `sobo_villa.webp` | 야마나미 히노키빌라 - 캐빈 |
| `sobo5.webp` | 야마나미 히노키빌라 - 패밀리 |
| `dome_house.webp` | 야마나미 포레스트 돔 |
| `kanji.webp` | 간지호텔 |
| `shizunoyado.webp` | 시즈노야도 료칸 |
| `fourteen_hotel.webp` | 포틴힐즈CC 호텔 |
| `fourteen_caravan.webp` | 포틴힐즈CC 카라반 |
| `akiba.webp` | 아키바 리조트 |
| `mutsuki.webp` | 무츠키 료칸 |
| `shirosato.webp` | 시로사토CC |
| `sugadaira_onsen.webp` | 스가다이라 고원 온천호텔 |
| `miyazaki_kuko.webp` | 미야자키 국제공항CC |

## 권장 규격

- **정사각형**(1:1). 화면에는 52×52로 나오지만, 고해상도 화면을 위해 **200×200 정도**를 권장합니다.
- 용량 **30KB 이하**(webp). 15장을 다 채워도 0.5MB 이하로, 모바일에서 목록이 느려지지 않습니다.
- 건물 외관이나 객실 내부처럼 **한눈에 구분되는 컷**이 좋습니다. 가운데를 기준으로 잘리므로 피사체를 중앙에 두세요.

## 사진이 없을 때

파일이 없으면 지금처럼 **색 사각형**이 그대로 보입니다(레이아웃 깨짐 없음).
일부만 올려도 되며, 올린 숙소만 사진으로 바뀝니다.

## 변환 예시

```python
from PIL import Image
im = Image.open('원본.jpg').convert('RGB')
s = min(im.size)                                   # 가운데를 정사각형으로 자르기
l, t = (im.width - s)//2, (im.height - s)//2
im = im.crop((l, t, l+s, t+s)).resize((200, 200), Image.LANCZOS)
im.save('yamanami.webp', 'WEBP', quality=80, method=6)
```

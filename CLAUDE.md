# cocodio — 코코미술학원 홈페이지 (Replit 앱 작업본)

> 실사이트: https://sketch-sage-magmaart2238050.replit.app/
> 원본(호스팅·배포)은 Replit 프로젝트 `@magmaart2238050/cocodio`. 이 폴더는 GitHub를 거쳐 받은 **작업본**이다.
> 구조: React SPA(client/) + Express(server/) + Drizzle 스키마(shared/). 2026-08-27 SEO 감사·수정 1차 완료 (커밋 a855379).

## 수정·배포 왕복 (절대 순서)

1. 이 폴더에서 수정 → 로컬 검증 → `git push origin main` (원격: github.com/son-seokho8050/cocodio, public)
2. **형님이** Replit에서 Tools → Git → **Pull** → 우측 상단 **Republish**
3. 실사이트 curl 재검증 후 종결 보고
- 배포(Republish)는 형님 전용 단계다. Claude가 push까지만 한다.
- Replit 쪽에서 Replit Agent가 커밋을 만들 수 있다 — 작업 시작 전 `git pull` 로 최신화 먼저.

## 로컬 실행 함정 3가지 (2026-08-27 실측)

1. **DATABASE_URL 필수**: 없으면 기동 즉시 종료. 로컬 SEO 검증용 더미 값으로 충분:
   `$env:DATABASE_URL="postgresql://local:local@localhost:5432/dummy"` (DB 안 쓰는 페이지 서빙은 정상 동작)
2. **Windows에서 reusePort 미지원**: `npm run build` 후 `dist/index.js`에서 `reusePort: true`를 지우고 실행해야 한다 (ENOTSUP 오류). **소스(server/index.ts)는 건드리지 않는다** — Replit(Linux)에서는 필요한 옵션이다.
3. **Git Bash로 체크아웃·빌드 금지**: 이 저장소의 checkout이 Git Bash(MSYS)에서 Segmentation fault로 죽는다. git 조작·npm 빌드는 **PowerShell**에서 실행한다. 대용량 mp4 3개는 Git LFS 포인터 상태(.gitattributes)이며 코드 작업에는 지장 없다.

로컬 검증 절차: `npm run build` → dist/index.js reusePort 제거 → `NODE_ENV=production node dist/index.js` (포트 5000) → curl로 404/canonical/제목 확인.

## SEO 구조 유지 규칙 (2026-08-27 신설 — 어기면 소프트404·중복 제목 재발)

- **라우트 3중 동기화 의무**: 페이지를 추가·삭제하면 아래 3곳을 같은 커밋에서 갱신한다.
  1. `client/src/App.tsx` (라우터)
  2. `server/seo.ts`의 ROUTE_META (여기 없는 경로는 실서버가 **404 + noindex**로 응답한다)
  3. `client/public/sitemap.xml`
- h1은 문서당 1개: 홈은 hero-section.tsx의 `card('h1')`(모바일)만 h1, 데스크톱 카드는 h2. 새 페이지도 h1 1개 원칙.
- 구조화 데이터(client/index.html JSON-LD)에 **근거 없는 수치 금지** — aggregateRating(별점 4.9/127)은 실제 리뷰 연동 없이 넣었다가 2026-08-27 제거했다. 재추가는 실리뷰 출처 확보 후에만.
- 보안 헤더(nosniff·SAMEORIGIN)는 server/index.ts 상단 미들웨어.

## 미해결 항목 (착수 전 형님 확인)

| 항목 | 상태 | 비고 |
|---|---|---|
| 관리자 비밀번호 하드코딩 | **대기** (형님 지시: 차후 진행) | client/src/components/admin-auth.tsx:18 `"coco2024admin"` — 공개 저장소에 노출됨. 서버 검증으로 이전 예정 |
| 네이버 소유확인·fb:app_id·GA 측정ID | 플레이스홀더 방치 | client/index.html — 실제 값 필요 (형님 제공) |
| SSR/프리렌더 전환 | 미착수 | 원본 HTML에 본문 0자 → 네이버·AI 크롤러가 본문을 못 읽는 최상위 이슈. 별도 대형 작업 |
| HTTPS 리다이렉트 `:443` 노출 | 수정 불가 | Replit 인프라(Google Frontend) 동작 — 앱 코드 밖 |

## 관련 자료

- SEO 감사 전체 결과: `코코_지식베이스/Notes/claude-seo_스킬_설치와_학원사이트_첫감사.md`
- 감사 도구: `/seo audit <url>` (claude-seo v2.2.5, 루트 `claude-seo/` 참조)

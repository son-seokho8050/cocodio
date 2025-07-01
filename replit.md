# 코코미술학원 - Art Academy Management Platform

## Overview

This is a web-based marketing and management platform for 코코미술학원 (Coco Art Academy), a Korean art education institution specializing in entrance exam preparation, digital drawing, and middle school art education. The platform serves as a sophisticated introduction to the academy's unique "4-stage thinking system" teaching methodology, targeting both prospective students and their parents.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state management
- **Forms**: React Hook Form with Zod validation
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful API endpoints

### Design System
- **Component Library**: shadcn/ui with "new-york" style variant
- **Typography**: Noto Sans KR for Korean text, Inter for English
- **Color Scheme**: Custom Korean academy branding with primary blue, secondary purple, and accent orange
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints

## Key Components

### Core Pages
- **Home Page**: Single-page application with multiple sections
  - Hero section with academy introduction
  - About section explaining the 4-stage thinking system
  - Curriculum overview for different programs
  - Student portfolio gallery
  - Testimonials section
  - Contact form for consultation requests

### Database Schema
- **Users**: Basic user management (currently unused in frontend)
- **Consultations**: Consultation request management with fields for student information, course selection, and status tracking
- **Portfolio Items**: Student artwork showcase with categorization and achievement tracking

### API Endpoints
- `GET /api/portfolio` - Retrieve all portfolio items
- `GET /api/portfolio/:category` - Filter portfolio by category
- `POST /api/consultations` - Submit consultation requests
- `GET /api/consultations` - Admin access to consultation requests

## Data Flow

1. **User Interaction**: Visitors browse the marketing website and submit consultation requests
2. **Form Submission**: React Hook Form validates data using Zod schemas before API submission
3. **API Processing**: Express.js endpoints handle requests with validation and database operations
4. **Database Storage**: Drizzle ORM manages PostgreSQL operations through Neon Database
5. **Response Handling**: TanStack Query manages API responses and UI updates with optimistic updates

## External Dependencies

### Core Dependencies
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Image Assets**: Unsplash for placeholder images
- **Fonts**: Google Fonts (Noto Sans KR, Inter)

### Development Tools
- **Type Safety**: TypeScript with strict configuration
- **Code Quality**: ESLint configuration (implied)
- **Build Process**: Vite with esbuild for server bundling
- **Development Server**: Express with Vite middleware integration

## Deployment Strategy

### Build Process
- **Client Build**: Vite builds React application to `dist/public`
- **Server Build**: esbuild bundles Express server to `dist/index.js`
- **Database Migrations**: Drizzle Kit manages schema changes

### Environment Configuration
- **Development**: Local development with Vite dev server and Express
- **Production**: Bundled Express server serving static files and API
- **Database**: Environment-based DATABASE_URL configuration

### Scripts
- `npm run dev` - Development server with hot reload
- `npm run build` - Production build for both client and server
- `npm run start` - Production server startup
- `npm run db:push` - Database schema synchronization

## Changelog

```
Changelog:
- June 29, 2025. Initial setup and complete website implementation
- June 29, 2025. Enhanced with real academy data from Naver blogs
  - Added FOLLOW system integration
  - Updated with actual competition achievements (한양대 17명 수상 등)
  - Added achievements section showcasing real results
  - Updated location info to reflect Masan/Gimhae locations
  - Enhanced testimonials with authentic feedback
- June 30, 2025. Navigation and structure updates
  - Changed hero title to "재능의 출발점"
  - Replaced "학생작품" with "FOLLOW수업" in navigation
  - Added "합격자명단" dropdown with yearly admissions data
  - Created comprehensive admissions results system (2022-2025)
  - Updated portfolio branding to "COCO ALL IN-ONE SYSTEM"
  - Added animated achievement display cycling through university results every 3 seconds
  - Changed academy subtitle to "DESIGN/ COMICS/ DIGITAL DRAWING"
  - Navigation branding updated to "FOLLOW 시스템"
  - Changed academy name to "미술학원 코코"
  - Simplified hero section title to just "코코"
  - Changed "상담문의" navigation item to "적성테스트"
  - Updated FOLLOW system badge to show "FOLLOW / ALL IN-ONE SYSTEM"
  - Changed curriculum section title to "COCO ALL IN-ONE SYSTEM"
  - Enhanced text formatting with improved line breaks and spacing for better readability
  - Updated hero section description to "여러분의 재능은 어떤 모양인가요?"
  - Changed digital drawing curriculum item from "Photoshop & Illustrator" to "클립스튜디오"
  - Added "ASPRITE" to digital drawing curriculum for pixel art and 2D animation
  - Updated curriculum to include both "ASPRITE" and "스파인 2D" for comprehensive animation training
  - Changed "웹툰 제작 실습" to "애니메이트CC" for professional animation software training
  - Updated "클립스튜디오" to "클립스튜디오(웹툰)" to specify webtoon focus
  - Corrected "ASPRITE" to "ASEPRITE(픽셀아트)" with proper spelling and pixel art specification
  - Updated "스파인 2D" to "스파인2D(2.5D 게임캐릭터)" to specify 2.5D game character focus
  - Changed "애니메이트CC" to "애니메이트CC/ 포토샵" to include Photoshop in animation curriculum
  - Removed "포트폴리오 완성 및 발표" from digital drawing curriculum to focus on software tools
  - Updated digital portfolio text to "학생개인별 빅테이터를 제공합니다." for consistent formatting
  - Adjusted text line breaks to prevent "다." from wrapping to a 4th line, now displays in proper 4-line format
  - Changed "학생개인별" to "개인별" to fit text properly in 3 lines for better display
  - Updated "검증된 합격 실적" section text to 3-line format emphasizing entrance exam success rates and competition awards
  - Fixed hero section "학생작품 보기" button visibility by adding semi-transparent background
  - Changed hero section button text from "학생작품 보기" to "FOLLOW 수업 보기" to align with FOLLOW system branding
- June 30, 2025. Database integration for achievements system
  - Added achievements table to database schema with count, university, description, and displayOrder fields
  - Migrated hardcoded achievements data to database storage with API endpoint
  - Updated hero section to fetch achievements dynamically from /api/achievements endpoint
  - Maintained existing achievement rotation functionality with 3-second intervals
  - Enhanced system architecture to support data-driven achievement display
- June 30, 2025. Comprehensive UI improvements for text readability
  - Enhanced admissions pages (2022-2025) with improved card background colors for better text contrast
  - Fixed admissions overview page hero section with consistent hero-gradient styling
  - Improved typography consistency across pages matching homepage design standards
  - Applied professional color schemes maintaining site's visual identity while ensuring accessibility
- June 30, 2025. Campus location accuracy improvements and complete data integration
  - Updated all universities to show accurate campus locations instead of department names
  - Added 12 previously missing universities from authentic 2022 admissions data
  - Complete dataset now includes 83 students across 25 universities with proper geographic classification
  - Enhanced accuracy by showing campus locations while maintaining specific department info in student badges
  - Campus updates: 홍익대(세종), 중앙대(안성), 단국대(죽전), 경희대(국제), 건국대(서울/글로컬), 명지대(자연), 상명대(천안), 호서대(아산), 경기대(수원) 등
- July 1, 2025. 2023 admissions page university ordering update
  - Reordered 38 universities in 2023 admissions page according to specific sequence starting with 국민대학교-서울여자대학교-성신여자대학교
  - Maintained all authentic student data and university information throughout reordering
  - Updated 창원대학교 campus location from "경남" to "경기" for accuracy
  - Preserved consistent "서울/ 수도권" formatting and campus location accuracy
- July 1, 2025. 2024 admissions page creation and organization
  - Created comprehensive 2024 admissions page with 90+ students across 34 universities
  - Organized with Seoul/Capital region universities positioned at top for better visibility
  - Processed authentic data from uploaded 2024 합격자명단 with proper university categorization
  - Applied consistent campus location formatting and maintained "서울/ 수도권" standard
  - Corrected 서울예술대학교 location from "안산" to "경기" while preserving 창원대학교 as "경남"
  - Reordered universities according to specific sequence starting with 세종대-상명대-서경대 through 동의대
  - Added "1차합격" notation for 서경대학교 무대패션전공 students as specified in original data
- July 1, 2025. 2025 admissions page creation and comprehensive data integration
  - Created complete 2025 admissions page with 140+ students across 44 universities including prestigious institutions
  - Organized with Seoul/Capital region universities at top featuring 숙명여대, 성신여대, 한양대(에리카), 서울과학기술대 등
  - Processed all authentic data from uploaded 2025 합격자명단 maintaining accurate student information and specialized programs
  - Notable achievements include 부산대 디자인앤테크놀로지, 창원대 장학생, and comprehensive coverage of regional universities
  - Applied consistent formatting with proper campus location identification and "서울/ 수도권" categorization standards
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```
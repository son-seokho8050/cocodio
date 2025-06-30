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
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```
# 코코미술학원 - Art Academy Management Platform

## Overview
This platform is a web-based marketing and management system for 코코미술학원 (Coco Art Academy), a Korean art education institution. Its primary purpose is to introduce the academy's unique "4-stage thinking system" methodology to prospective students and parents. Key capabilities include showcasing curriculum, student portfolios, admissions results, and facilitating consultation requests. The project aims to provide a sophisticated online presence to attract and inform potential enrollees.

## User Preferences
Preferred communication style: Simple, everyday language.
Critical requirement: Always provide accurate information from the start. Incorrect technical information is unacceptable.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: Wouter
- **Styling**: Tailwind CSS with shadcn/ui and Radix UI primitives
- **State Management**: TanStack Query
- **Forms**: React Hook Form with Zod validation
- **Design System**: "new-york" style variant for shadcn/ui, Noto Sans KR (Korean), Inter (English) fonts, custom academy branding colors (blue, purple, orange), mobile-first responsive design.

### Backend
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript (ES modules)
- **Database**: PostgreSQL with Drizzle ORM
- **API Design**: RESTful API

### Core Features
- **Marketing Website**: Single-page application including hero, about (4-stage system), curriculum, student portfolio, testimonials, and contact sections.
- **Consultation Management**: System for submitting and tracking consultation requests.
- **Student Portfolio Showcase**: Categorized display of student artwork and achievements.
- **Admissions Results System**: Comprehensive display of university admission results by year (2022-2025) with year-specific color coding and glassmorphism design for cards.
- **Achievement Display**: Dynamic rotation of academy achievements fetched from the database.
- **Curriculum Sections**: Detailed sections for Entrance Exam Art, SPACE (premium class), Digital Drawing, and Middle School Art.
- **Interactive Popups**: Time-delayed and user-controlled popups for announcements (e.g., director's introduction, competition results, special lectures), supporting both image and video content.

## External Dependencies
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM with Drizzle Kit
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Image Assets**: Unsplash (for placeholders), Google Fonts (Noto Sans KR, Inter)
```
import { users, consultations, portfolioItems, achievements, type User, type InsertUser, type Consultation, type InsertConsultation, type PortfolioItem, type InsertPortfolioItem, type Achievement, type InsertAchievement } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createConsultation(consultation: InsertConsultation): Promise<Consultation>;
  getConsultations(): Promise<Consultation[]>;
  getPortfolioItems(): Promise<PortfolioItem[]>;
  getPortfolioItemsByCategory(category: string): Promise<PortfolioItem[]>;
  getAchievements(): Promise<Achievement[]>;
  createAchievement(achievement: InsertAchievement): Promise<Achievement>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private consultations: Map<number, Consultation>;
  private portfolioItems: Map<number, PortfolioItem>;
  private achievements: Map<number, Achievement>;
  private currentUserId: number;
  private currentConsultationId: number;
  private currentPortfolioId: number;
  private currentAchievementId: number;

  constructor() {
    this.users = new Map();
    this.consultations = new Map();
    this.portfolioItems = new Map();
    this.achievements = new Map();
    this.currentUserId = 1;
    this.currentConsultationId = 1;
    this.currentPortfolioId = 1;
    this.currentAchievementId = 1;
    
    // Initialize with sample portfolio items
    this.initializePortfolioItems();
    // Initialize with achievements data
    this.initializeAchievements();
  }

  private initializePortfolioItems() {
    const sampleItems: Omit<PortfolioItem, 'id'>[] = [
      {
        title: "캐릭터 디자인 포트폴리오",
        student: "김○○ 학생",
        category: "entrance-exam",
        achievement: "홍익대 시각디자인과 합격",
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400"
      },
      {
        title: "디지털 일러스트",
        student: "박○○ 학생",
        category: "digital",
        achievement: "웹툰 공모전 우수상",
        imageUrl: "https://images.unsplash.com/photo-1609621838510-5ad474b7d25d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400"
      },
      {
        title: "정물화 연작",
        student: "이○○ 학생",
        category: "traditional",
        achievement: "청소년 미술대회 금상",
        imageUrl: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400"
      },
      {
        title: "제품 디자인 스케치",
        student: "최○○ 학생",
        category: "entrance-exam",
        achievement: "서울대 디자인학부 합격",
        imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400"
      },
      {
        title: "웹툰 스토리보드",
        student: "정○○ 학생",
        category: "digital",
        achievement: "만화 콘텐츠 공모전 입상",
        imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400"
      },
      {
        title: "인물화 연구",
        student: "윤○○ 학생",
        category: "traditional",
        achievement: "지역 미술전시회 선정",
        imageUrl: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400"
      }
    ];

    sampleItems.forEach(item => {
      const portfolioItem: PortfolioItem = {
        ...item,
        id: this.currentPortfolioId++
      };
      this.portfolioItems.set(portfolioItem.id, portfolioItem);
    });
  }

  private initializeAchievements() {
    const sampleAchievements: Omit<Achievement, 'id'>[] = [
      {
        count: "17명",
        university: "한양대",
        description: "실기대회<br />지역 최다 수상",
        displayOrder: 1
      },
      {
        count: "23명",
        university: "홍익대",
        description: "미술대학<br />합격자 배출",
        displayOrder: 2
      },
      {
        count: "15명",
        university: "국민대",
        description: "예술대학<br />입학 성공",
        displayOrder: 3
      },
      {
        count: "19명",
        university: "서울시립대",
        description: "디자인학과<br />합격 달성",
        displayOrder: 4
      },
      {
        count: "12명",
        university: "건국대",
        description: "예술디자인<br />학과 진학",
        displayOrder: 5
      }
    ];

    sampleAchievements.forEach((item) => {
      const achievement: Achievement = {
        ...item,
        id: this.currentAchievementId++
      };
      this.achievements.set(achievement.id, achievement);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createConsultation(insertConsultation: InsertConsultation): Promise<Consultation> {
    const id = this.currentConsultationId++;
    const consultation: Consultation = {
      ...insertConsultation,
      id,
      status: "pending",
      createdAt: new Date(),
      message: insertConsultation.message || null,
    };
    this.consultations.set(id, consultation);
    return consultation;
  }

  async getConsultations(): Promise<Consultation[]> {
    return Array.from(this.consultations.values());
  }

  async getPortfolioItems(): Promise<PortfolioItem[]> {
    return Array.from(this.portfolioItems.values());
  }

  async getPortfolioItemsByCategory(category: string): Promise<PortfolioItem[]> {
    return Array.from(this.portfolioItems.values()).filter(
      item => item.category === category
    );
  }

  async getAchievements(): Promise<Achievement[]> {
    return Array.from(this.achievements.values()).sort((a, b) => a.displayOrder - b.displayOrder);
  }

  async createAchievement(insertAchievement: InsertAchievement): Promise<Achievement> {
    const id = this.currentAchievementId++;
    const achievement: Achievement = {
      ...insertAchievement,
      id,
      displayOrder: insertAchievement.displayOrder || 0,
    };
    this.achievements.set(id, achievement);
    return achievement;
  }
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createConsultation(insertConsultation: InsertConsultation): Promise<Consultation> {
    const [consultation] = await db
      .insert(consultations)
      .values(insertConsultation)
      .returning();
    return consultation;
  }

  async getConsultations(): Promise<Consultation[]> {
    return await db.select().from(consultations);
  }

  async getPortfolioItems(): Promise<PortfolioItem[]> {
    // Return sample portfolio items for now since we're focusing on achievements
    return [
      {
        id: 1,
        title: "캐릭터 디자인 포트폴리오",
        student: "김○○ 학생",
        category: "character",
        achievement: "지역 미술대회 수상",
        imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400"
      }
    ];
  }

  async getPortfolioItemsByCategory(category: string): Promise<PortfolioItem[]> {
    const items = await this.getPortfolioItems();
    return items.filter(item => item.category === category);
  }

  async getAchievements(): Promise<Achievement[]> {
    return await db.select().from(achievements).orderBy(achievements.displayOrder);
  }

  async createAchievement(insertAchievement: InsertAchievement): Promise<Achievement> {
    const [achievement] = await db
      .insert(achievements)
      .values(insertAchievement)
      .returning();
    return achievement;
  }
}

export const storage = new DatabaseStorage();

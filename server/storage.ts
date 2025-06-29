import { users, consultations, portfolioItems, type User, type InsertUser, type Consultation, type InsertConsultation, type PortfolioItem, type InsertPortfolioItem } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createConsultation(consultation: InsertConsultation): Promise<Consultation>;
  getConsultations(): Promise<Consultation[]>;
  getPortfolioItems(): Promise<PortfolioItem[]>;
  getPortfolioItemsByCategory(category: string): Promise<PortfolioItem[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private consultations: Map<number, Consultation>;
  private portfolioItems: Map<number, PortfolioItem>;
  private currentUserId: number;
  private currentConsultationId: number;
  private currentPortfolioId: number;

  constructor() {
    this.users = new Map();
    this.consultations = new Map();
    this.portfolioItems = new Map();
    this.currentUserId = 1;
    this.currentConsultationId = 1;
    this.currentPortfolioId = 1;
    
    // Initialize with sample portfolio items
    this.initializePortfolioItems();
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
}

export const storage = new MemStorage();

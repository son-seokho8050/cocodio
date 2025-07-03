import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertConsultationSchema } from "@shared/schema";
import { sendConsultationNotification } from "./email";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Get all portfolio items
  app.get("/api/portfolio", async (req, res) => {
    try {
      const portfolioItems = await storage.getPortfolioItems();
      res.json(portfolioItems);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch portfolio items" });
    }
  });

  // Get portfolio items by category
  app.get("/api/portfolio/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const portfolioItems = await storage.getPortfolioItemsByCategory(category);
      res.json(portfolioItems);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch portfolio items" });
    }
  });

  // Get all achievements
  app.get("/api/achievements", async (req, res) => {
    try {
      const achievements = await storage.getAchievements();
      res.json(achievements);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch achievements" });
    }
  });

  // Create consultation request
  app.post("/api/consultations", async (req, res) => {
    try {
      const validatedData = insertConsultationSchema.parse(req.body);
      const consultation = await storage.createConsultation(validatedData);
      
      // 이메일 알림 발송 (백그라운드에서 실행)
      sendConsultationNotification({
        studentName: consultation.studentName,
        grade: consultation.grade,
        phone: consultation.phone,
        course: consultation.course,
        message: consultation.message ?? undefined,
        createdAt: consultation.createdAt,
      }).catch(error => {
        console.error('이메일 발송 실패:', error);
      });
      
      res.status(201).json(consultation);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid request data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create consultation request" });
      }
    }
  });

  // Get all consultation requests (for admin use)
  app.get("/api/consultations", async (req, res) => {
    try {
      const consultations = await storage.getConsultations();
      res.json(consultations);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch consultation requests" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

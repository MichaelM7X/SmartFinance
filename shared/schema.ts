import { pgTable, serial, text, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  points: integer("points").notNull().default(1000),
  createdAt: timestamp("created_at").defaultNow(),
});

export const registerUserSchema = createInsertSchema(users).pick({
  name: true,
  email: true,
  password: true,
});

export type RegisterUser = z.infer<typeof registerUserSchema>;
export type User = typeof users.$inferSelect;

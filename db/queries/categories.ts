import db from "@/db";
import { categories } from "@/db/schema";
import { eq } from "drizzle-orm";

// Insert a new category
export async function insertNewCategory(userId: string, name: string) {
  const result = await db
    .insert(categories)
    .values({
      userId,
      name,
    })
    .returning();

  return result[0];
}

// Select categories
export async function selectCategories(userId: string) {
  const result = await db
    .select()
    .from(categories)
    .where(eq(categories.userId, userId));

    return result;
}

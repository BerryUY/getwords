import db from "@/db";
import { words } from "@/db/schema";
import { eq } from "drizzle-orm";

// Create a new word
export async function createWord(
  userId: string,
  word: string,
  definition: string,
  categoryId: number,
) {
  await db.insert(words).values({
    userId,
    word,
    definition,
    categoryId,
  });
}

// Select all words by category
export async function selectWords(userId: string) {
  const result = await db.query.words.findMany({
    where: (words, { eq }) => eq(words.userId, userId),
    with: {
        category: true,
    },
  });

  return result;
}

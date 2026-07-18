import db from "@/db";
import { words } from "@/db/schema";

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
    })
}

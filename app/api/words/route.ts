import { createWord } from "@/db/queries/words";
import { insertNewCategory } from "@/db/queries/categories";
import { auth } from "@clerk/nextjs/server"

export async function POST(req: Request) {

  const { userId } = await auth();

  if (!userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  const body = await req.json();

  let finalCategoryId: number; 

  if (body.addCategory) {
    const newCategory = await insertNewCategory(userId, body.addCategory)
    finalCategoryId = newCategory.id;
  } else {
    finalCategoryId = body.categoryId
  }

  // Drizzle
  await createWord(userId, body.word, body.definition, finalCategoryId);

  // NextJS
  return Response.json({ success: true });
}

import { createWord } from "@/db/queries/words";
import { auth } from "@clerk/nextjs/server"

export async function POST(req: Request) {

  const { userId } = await auth();

  if (!userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  const body = await req.json();

  // Drizzle
  await createWord(userId, body.word, body.definition, body.categoryId);

  // NextJS
  return Response.json({ success: true });
}

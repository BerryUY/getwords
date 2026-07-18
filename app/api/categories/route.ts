import { selectCategories } from "@/db/queries/categories";
import { auth } from "@clerk/nextjs/server"

export async function GET(req: Request) {

  const { userId } = await auth();

  if (!userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  // Drizzle
  const userCategories = await selectCategories(userId);

  // NextJS
  return Response.json(userCategories);
}

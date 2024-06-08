import prisma from "@/lib/db";
import Link from "next/link";

export default async function PostsList() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const posts = await prisma.post.findMany();

  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {posts.map((post) => (
        <li key={post.id} className="mb-3">
          <Link href={`/posts/${post.id}`} className="block p-4 rounded-md hover:animate-spin-ring hover:ring-1 hover:ring-blue-400 flex flex-col">
            <div className="text-xl font-bold" >{post.title}</div>
            <div className="text-start pt-2">
              {post.body.slice(0, 250)}{post.body.length > 250 ? "..." : ""}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

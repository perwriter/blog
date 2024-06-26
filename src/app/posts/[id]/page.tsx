import TruncateButton from "@/components/TruncateButton";
import Upvote from "@/components/Upvote";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!post) {
    notFound();
  }

  return (
    <main className=" px-7 pt-24 ">
      <h1 className="text-5xl font-semibold mb-7 text-center">{post.title}</h1>
      <p className="max-w-[700px] mx-auto text-start">{post.body}</p>
      <Upvote />
      <TruncateButton/>
    </main>
  );
}

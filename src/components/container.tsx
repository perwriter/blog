export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1100px]
     mx-auto bg-zinc-100 min-h-screen
      flex flex-col">
      {children}
    </div>
  );
}

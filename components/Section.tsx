import { ReactNode } from "react";

export default function Section({
  id,
  title,
  children
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="mb-6 flex items-center gap-6">
        <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
          {title}
        </h2>
        <div className="hidden h-px flex-1 bg-zinc-900/70 md:block" />
      </div>
      {children}
    </section>
  );
}

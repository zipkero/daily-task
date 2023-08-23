import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function TodoContainer({ children }: Props) {
  return (
    <main className="max-w-xl min-h-full relative bg-white mx-auto flex flex-col rounded-2xl shadow-lg">
      {children}
    </main>
  );
}

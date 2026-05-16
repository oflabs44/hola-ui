import { Sidebar } from "./sidebar";

export default function ComponentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="flex gap-12">
        <Sidebar />
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}

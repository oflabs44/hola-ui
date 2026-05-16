"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/registry/hola/lib/utils";

const sections = [
  {
    label: "Foundation",
    items: [{ href: "/components", label: "Overview" }],
  },
  {
    label: "Components",
    items: [
      { href: "/components/button", label: "Button" },
      { href: "/components/badge", label: "Badge" },
      { href: "/components/input", label: "Input" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-20 hidden h-[calc(100vh-6rem)] w-44 shrink-0 self-start overflow-y-auto lg:block">
      {sections.map((section) => (
        <div key={section.label} className="mb-6">
          <h3 className="mb-2 px-2 font-mono text-[10px] font-medium uppercase tracking-wider text-muted">
            {section.label}
          </h3>
          <ul className="space-y-px">
            {section.items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block rounded-[5px] px-2 py-1 text-sm transition-colors",
                      isActive
                        ? "bg-(--hola-fg)/[0.08] font-medium text-fg"
                        : "text-muted hover:bg-(--hola-fg)/[0.04] hover:text-fg"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </aside>
  );
}

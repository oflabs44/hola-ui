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
    label: "Forms",
    items: [
      { href: "/components/button", label: "Button" },
      { href: "/components/input", label: "Input" },
      { href: "/components/input-group", label: "Input Group" },
      { href: "/components/label", label: "Label" },
      { href: "/components/field", label: "Field" },
      { href: "/components/textarea", label: "Textarea" },
      { href: "/components/checkbox", label: "Checkbox" },
      { href: "/components/switch", label: "Switch" },
      { href: "/components/radio-group", label: "Radio Group" },
      { href: "/components/select", label: "Select" },
      { href: "/components/slider", label: "Slider" },
      { href: "/components/toggle", label: "Toggle" },
      { href: "/components/toggle-group", label: "Toggle Group" },
    ],
  },
  {
    label: "Layout",
    items: [
      { href: "/components/separator", label: "Separator" },
      { href: "/components/avatar", label: "Avatar" },
    ],
  },
  {
    label: "Data",
    items: [{ href: "/components/badge", label: "Badge" }],
  },
  {
    label: "Overlays",
    items: [
      { href: "/components/dialog", label: "Dialog" },
      { href: "/components/alert-dialog", label: "Alert Dialog" },
      { href: "/components/sheet", label: "Sheet" },
      { href: "/components/tooltip", label: "Tooltip" },
      { href: "/components/popover", label: "Popover" },
      { href: "/components/hover-card", label: "Hover Card" },
      { href: "/components/dropdown-menu", label: "Dropdown Menu" },
      { href: "/components/context-menu", label: "Context Menu" },
      { href: "/components/menubar", label: "Menubar" },
    ],
  },
  {
    label: "Disclosure",
    items: [
      { href: "/components/accordion", label: "Accordion" },
      { href: "/components/collapsible", label: "Collapsible" },
      { href: "/components/tabs", label: "Tabs" },
    ],
  },
  {
    label: "Feedback",
    items: [
      { href: "/components/alert", label: "Alert" },
      { href: "/components/progress", label: "Progress" },
    ],
  },
  {
    label: "Data display",
    items: [
      { href: "/components/table", label: "Table" },
      { href: "/components/scroll-area", label: "Scroll Area" },
    ],
  },
  {
    label: "Navigation",
    items: [
      { href: "/components/breadcrumb", label: "Breadcrumb" },
      { href: "/components/pagination", label: "Pagination" },
      { href: "/components/navigation-menu", label: "Navigation Menu" },
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

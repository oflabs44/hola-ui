import * as React from "react";

import { cn } from "@/registry/hola/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        // Layout — field-sizing-content lets the textarea grow with input.
        "block w-full min-w-0 field-sizing-content min-h-16",
        "rounded-[6px] border bg-clip-padding",
        "px-2.5 py-2",
        // Typography — Catalyst responsive scale.
        "text-base text-fg sm:text-sm/5",
        "placeholder:text-muted",
        // Border — translucent overlay, strengthens on hover.
        "border-(--hola-fg)/10",
        "hover:border-(--hola-fg)/20",
        "dark:border-(--hola-fg)/15",
        "dark:hover:border-(--hola-fg)/25",
        // Background — asymmetric light/dark.
        "bg-bg shadow-xs",
        "dark:bg-(--hola-fg)/[0.04] dark:shadow-none",
        // Focus — Catalyst-style solid 2px ring, border stays subtle.
        "outline-none transition-[box-shadow] duration-100",
        "focus-visible:ring-2 focus-visible:ring-(--hola-accent)",
        // Invalid (form validation via aria-invalid).
        "aria-invalid:ring-2 aria-invalid:ring-(--hola-danger)",
        // Selection.
        "selection:bg-(--hola-accent)/20 selection:text-fg",
        // Disabled.
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        // Resize control.
        "resize-y",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };

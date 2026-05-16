import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/registry/hola/lib/utils";

// -----------------------------------------------------------------------------
// Catalyst color palette. `variant` controls structure (solid / tinted / outline
// / ghost / link), `color` controls hue. `destructive` is a semantic exception
// that always renders tinted red and ignores `color`.
// -----------------------------------------------------------------------------

const BADGE_COLORS = [
  "zinc", "red", "orange", "amber", "yellow", "lime",
  "green", "emerald", "teal", "cyan", "sky", "blue",
  "indigo", "violet", "purple", "fuchsia", "pink", "rose",
] as const;

type BadgeColor = (typeof BADGE_COLORS)[number];

// Catalyst's tinted treatment — the workhorse badge look.
const tintedBg: Record<BadgeColor, string> = {
  zinc: "bg-zinc-600/10 [a&]:hover:bg-zinc-600/20 dark:bg-white/5 dark:[a&]:hover:bg-white/10",
  red: "bg-red-500/15 [a&]:hover:bg-red-500/25 dark:bg-red-500/10 dark:[a&]:hover:bg-red-500/20",
  orange: "bg-orange-500/15 [a&]:hover:bg-orange-500/25 dark:bg-orange-500/10 dark:[a&]:hover:bg-orange-500/20",
  amber: "bg-amber-400/20 [a&]:hover:bg-amber-400/30 dark:bg-amber-400/10 dark:[a&]:hover:bg-amber-400/15",
  yellow: "bg-yellow-400/20 [a&]:hover:bg-yellow-400/30 dark:bg-yellow-400/10 dark:[a&]:hover:bg-yellow-400/15",
  lime: "bg-lime-400/20 [a&]:hover:bg-lime-400/30 dark:bg-lime-400/10 dark:[a&]:hover:bg-lime-400/15",
  green: "bg-green-500/15 [a&]:hover:bg-green-500/25 dark:bg-green-500/10 dark:[a&]:hover:bg-green-500/20",
  emerald: "bg-emerald-500/15 [a&]:hover:bg-emerald-500/25 dark:bg-emerald-500/10 dark:[a&]:hover:bg-emerald-500/20",
  teal: "bg-teal-500/15 [a&]:hover:bg-teal-500/25 dark:bg-teal-500/10 dark:[a&]:hover:bg-teal-500/20",
  cyan: "bg-cyan-400/20 [a&]:hover:bg-cyan-400/30 dark:bg-cyan-400/10 dark:[a&]:hover:bg-cyan-400/15",
  sky: "bg-sky-500/15 [a&]:hover:bg-sky-500/25 dark:bg-sky-500/10 dark:[a&]:hover:bg-sky-500/20",
  blue: "bg-blue-500/15 [a&]:hover:bg-blue-500/25 dark:[a&]:hover:bg-blue-500/25",
  indigo: "bg-indigo-500/15 [a&]:hover:bg-indigo-500/25 dark:[a&]:hover:bg-indigo-500/20",
  violet: "bg-violet-500/15 [a&]:hover:bg-violet-500/25 dark:[a&]:hover:bg-violet-500/20",
  purple: "bg-purple-500/15 [a&]:hover:bg-purple-500/25 dark:[a&]:hover:bg-purple-500/20",
  fuchsia: "bg-fuchsia-400/15 [a&]:hover:bg-fuchsia-400/25 dark:bg-fuchsia-400/10 dark:[a&]:hover:bg-fuchsia-400/20",
  pink: "bg-pink-400/15 [a&]:hover:bg-pink-400/25 dark:bg-pink-400/10 dark:[a&]:hover:bg-pink-400/20",
  rose: "bg-rose-400/15 [a&]:hover:bg-rose-400/25 dark:bg-rose-400/10 dark:[a&]:hover:bg-rose-400/20",
};

// Text colors — shared across tinted, outline, ghost, link variants.
const textColor: Record<BadgeColor, string> = {
  zinc: "text-zinc-700 dark:text-zinc-400",
  red: "text-red-700 dark:text-red-400",
  orange: "text-orange-700 dark:text-orange-400",
  amber: "text-amber-700 dark:text-amber-400",
  yellow: "text-yellow-700 dark:text-yellow-300",
  lime: "text-lime-700 dark:text-lime-300",
  green: "text-green-700 dark:text-green-400",
  emerald: "text-emerald-700 dark:text-emerald-400",
  teal: "text-teal-700 dark:text-teal-300",
  cyan: "text-cyan-700 dark:text-cyan-300",
  sky: "text-sky-700 dark:text-sky-300",
  blue: "text-blue-700 dark:text-blue-400",
  indigo: "text-indigo-700 dark:text-indigo-400",
  violet: "text-violet-700 dark:text-violet-400",
  purple: "text-purple-700 dark:text-purple-400",
  fuchsia: "text-fuchsia-700 dark:text-fuchsia-400",
  pink: "text-pink-700 dark:text-pink-400",
  rose: "text-rose-700 dark:text-rose-400",
};

// Solid filled — used by the `default` variant.
const solidStyle: Record<BadgeColor, string> = {
  zinc: "bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900",
  red: "bg-red-600 text-white",
  orange: "bg-orange-600 text-white",
  amber: "bg-amber-500 text-amber-950",
  yellow: "bg-yellow-400 text-yellow-950",
  lime: "bg-lime-500 text-lime-950",
  green: "bg-green-600 text-white",
  emerald: "bg-emerald-600 text-white",
  teal: "bg-teal-600 text-white",
  cyan: "bg-cyan-500 text-cyan-950",
  sky: "bg-sky-600 text-white",
  blue: "bg-blue-600 text-white",
  indigo: "bg-indigo-600 text-white",
  violet: "bg-violet-600 text-white",
  purple: "bg-purple-600 text-white",
  fuchsia: "bg-fuchsia-600 text-white",
  pink: "bg-pink-600 text-white",
  rose: "bg-rose-600 text-white",
};

// Border colors for outline variant.
const borderColor: Record<BadgeColor, string> = {
  zinc: "border-zinc-300 dark:border-zinc-700",
  red: "border-red-300 dark:border-red-800",
  orange: "border-orange-300 dark:border-orange-800",
  amber: "border-amber-300 dark:border-amber-800",
  yellow: "border-yellow-400 dark:border-yellow-800",
  lime: "border-lime-400 dark:border-lime-800",
  green: "border-green-300 dark:border-green-800",
  emerald: "border-emerald-300 dark:border-emerald-800",
  teal: "border-teal-300 dark:border-teal-800",
  cyan: "border-cyan-400 dark:border-cyan-800",
  sky: "border-sky-300 dark:border-sky-800",
  blue: "border-blue-300 dark:border-blue-800",
  indigo: "border-indigo-300 dark:border-indigo-800",
  violet: "border-violet-300 dark:border-violet-800",
  purple: "border-purple-300 dark:border-purple-800",
  fuchsia: "border-fuchsia-300 dark:border-fuchsia-800",
  pink: "border-pink-300 dark:border-pink-800",
  rose: "border-rose-300 dark:border-rose-800",
};

// -----------------------------------------------------------------------------
// CVA covers the structural axis (variant). Color is resolved in the component
// because the cross-product (6 variants × 18 colors) is too sparse for clean
// compoundVariants and the per-style tables stay readable as plain data.
// -----------------------------------------------------------------------------

const badgeVariants = cva(
  cn(
    "inline-flex w-fit shrink-0 items-center justify-center gap-x-1.5",
    "rounded-md px-1.5 py-0.5",
    "text-sm/5 font-medium sm:text-xs/5",
    "border border-transparent bg-clip-padding",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--hola-accent)",
    "forced-colors:outline",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3"
  ),
  {
    variants: {
      variant: {
        default: "",
        secondary: "",
        outline: "",
        ghost: "[a&]:hover:bg-(--hola-fg)/[0.06]",
        link: "underline-offset-2 [a&]:hover:underline",
        // Semantic destructive — fixed red, ignores color prop.
        destructive: "bg-red-500/15 text-red-700 [a&]:hover:bg-red-500/25 dark:bg-red-500/10 dark:text-red-400 dark:[a&]:hover:bg-red-500/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function colorClasses(variant: NonNullable<VariantProps<typeof badgeVariants>["variant"]>, color: BadgeColor): string {
  switch (variant) {
    case "default":
      return solidStyle[color];
    case "secondary":
      return cn(tintedBg[color], textColor[color]);
    case "outline":
      return cn(borderColor[color], textColor[color]);
    case "ghost":
    case "link":
      return textColor[color];
    case "destructive":
      return "";
  }
}

interface BadgeOwnProps extends VariantProps<typeof badgeVariants> {
  color?: BadgeColor;
}

function Badge({
  className,
  variant = "default",
  color = "zinc",
  render,
  ...props
}: useRender.ComponentProps<"span"> & BadgeOwnProps) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), colorClasses(variant ?? "default", color), className),
      },
      props
    ),
    render,
    state: { slot: "badge", variant, color },
  });
}

export { Badge, badgeVariants, BADGE_COLORS };
export type { BadgeColor };

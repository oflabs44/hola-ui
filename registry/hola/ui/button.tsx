import clsx from "clsx";
import { forwardRef } from "react";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ForwardedRef,
  ReactNode,
} from "react";

const styles = {
  base: [
    "relative isolate inline-flex items-center justify-center gap-x-2",
    "rounded-md border text-sm/6 font-medium",
    "px-[calc(--spacing(3)-1px)] py-[calc(--spacing(1.5)-1px)]",
    "focus:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--hola-accent)",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
    "transition-[background-color,box-shadow,border-color] duration-100",
    "*:data-[slot=icon]:size-4 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:self-center *:data-[slot=icon]:text-(--btn-icon)",
    "forced-colors:[--btn-icon:ButtonText] forced-colors:hover:[--btn-icon:ButtonText]",
  ],

  solid: [
    "border-transparent bg-(--btn-border)",
    "dark:bg-(--btn-bg) dark:border-(--hola-fg)/5",
    "before:absolute before:inset-0 before:-z-10 before:rounded-[calc(var(--radius-md)-1px)] before:bg-(--btn-bg) before:shadow-sm",
    "dark:before:hidden",
    "after:absolute after:inset-0 after:-z-10 after:rounded-[calc(var(--radius-md)-1px)]",
    "after:shadow-[inset_0_1px_oklch(1_0_0_/_0.15)]",
    "hover:after:bg-(--btn-hover-overlay) active:after:bg-(--btn-hover-overlay)",
    "dark:after:-inset-px dark:after:rounded-md",
    "disabled:before:shadow-none disabled:after:shadow-none disabled:after:bg-transparent",
  ],

  outline: [
    "border-(--hola-fg)/10 text-fg bg-transparent",
    "hover:bg-(--hola-fg)/[0.025] active:bg-(--hola-fg)/[0.05]",
    "dark:border-(--hola-fg)/15 dark:hover:bg-(--hola-fg)/5 dark:active:bg-(--hola-fg)/10",
    "[--btn-icon:var(--hola-muted)] hover:[--btn-icon:var(--hola-fg)]",
  ],

  plain: [
    "border-transparent text-fg bg-transparent",
    "hover:bg-(--hola-fg)/5 active:bg-(--hola-fg)/10",
    "[--btn-icon:var(--hola-muted)] hover:[--btn-icon:var(--hola-fg)]",
  ],

  colors: {
    primary: [
      "text-(--hola-brand-fg)",
      "[--btn-bg:var(--hola-brand)]",
      "[--btn-border:var(--hola-brand)]",
      "[--btn-hover-overlay:oklch(1_0_0_/_0.08)]",
      "dark:[--btn-hover-overlay:oklch(0_0_0_/_0.08)]",
      "[--btn-icon:var(--hola-brand-fg)]",
    ],
    accent: [
      "text-(--hola-accent-fg)",
      "[--btn-bg:var(--hola-accent)]",
      "[--btn-border:var(--hola-accent)]",
      "[--btn-hover-overlay:oklch(1_0_0_/_0.12)]",
      "[--btn-icon:var(--hola-accent-fg)]",
    ],
    danger: [
      "text-(--hola-danger-fg)",
      "[--btn-bg:var(--hola-danger)]",
      "[--btn-border:var(--hola-danger)]",
      "[--btn-hover-overlay:oklch(1_0_0_/_0.12)]",
      "[--btn-icon:var(--hola-danger-fg)]",
    ],
  },
};

type Variant =
  | { color?: keyof typeof styles.colors; outline?: never; plain?: never }
  | { color?: never; outline: true; plain?: never }
  | { color?: never; outline?: never; plain: true };

type Common = { className?: string; children: ReactNode };

type ButtonAsButton = Variant & Common &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color" | keyof Variant | keyof Common> & {
    href?: never;
  };

type ButtonAsLink = Variant & Common &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "color" | keyof Variant | keyof Common> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = forwardRef(function Button(
  { color, outline, plain, className, children, ...props }: ButtonProps,
  ref: ForwardedRef<HTMLElement>
) {
  const variantClasses = outline
    ? styles.outline
    : plain
      ? styles.plain
      : [...styles.solid, ...styles.colors[color ?? "primary"]];

  const classes = clsx(className, styles.base, variantClasses);

  if ("href" in props && typeof props.href === "string") {
    return (
      <a {...props} className={classes} ref={ref as ForwardedRef<HTMLAnchorElement>}>
        <TouchTarget>{children}</TouchTarget>
      </a>
    );
  }

  return (
    <button
      type="button"
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      className={classes}
      ref={ref as ForwardedRef<HTMLButtonElement>}
    >
      <TouchTarget>{children}</TouchTarget>
    </button>
  );
});

function TouchTarget({ children }: { children: ReactNode }) {
  return (
    <>
      <span
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 pointer-fine:hidden"
      />
      {children}
    </>
  );
}

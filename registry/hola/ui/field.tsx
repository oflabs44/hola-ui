"use client";

import * as React from "react";
import { useMemo } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/registry/hola/lib/utils";
import { Label } from "@/registry/hola/ui/label";

// -----------------------------------------------------------------------------
// FieldSet — semantic <fieldset> for grouping related controls. Pair with
// FieldLegend for a labelled group (e.g. radio group, checkbox group).
// -----------------------------------------------------------------------------

function FieldSet({ className, ...props }: React.ComponentProps<"fieldset">) {
  return (
    <fieldset
      data-slot="field-set"
      className={cn(
        "flex flex-col gap-6",
        "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
        className
      )}
      {...props}
    />
  );
}

function FieldLegend({
  className,
  variant = "legend",
  ...props
}: React.ComponentProps<"legend"> & { variant?: "legend" | "label" }) {
  return (
    <legend
      data-slot="field-legend"
      data-variant={variant}
      className={cn(
        "mb-3 font-medium",
        "data-[variant=label]:text-sm data-[variant=legend]:text-base",
        className
      )}
      {...props}
    />
  );
}

// -----------------------------------------------------------------------------
// FieldGroup — vertical stack of Field elements with consistent spacing.
// Uses @container/field-group so Field responsive orientation flips at md.
// -----------------------------------------------------------------------------

function FieldGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-group"
      className={cn(
        "group/field-group @container/field-group flex w-full flex-col gap-7",
        "data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4",
        className
      )}
      {...props}
    />
  );
}

// -----------------------------------------------------------------------------
// Field — single field row. Orientation:
//   vertical   = label above control (default)
//   horizontal = label inline with control
//   responsive = vertical on mobile, horizontal at @md
// data-[invalid=true] propagates --hola-danger colour to label + description.
// -----------------------------------------------------------------------------

const fieldVariants = cva(
  cn(
    "group/field flex w-full gap-3",
    // Required indicator — when any descendant control is :required (or
    // aria-required), append a danger-coloured asterisk to FieldLabel /
    // FieldTitle. CSS-only, no consumer markup needed beyond the standard
    // `required` attribute on the input.
    "has-[:required]:[&_[data-slot=field-label]]:after:-ml-1.5 has-[:required]:[&_[data-slot=field-label]]:after:content-['*'] has-[:required]:[&_[data-slot=field-label]]:after:text-(--hola-danger) has-[:required]:[&_[data-slot=field-label]]:after:font-medium",
    "has-[[aria-required=true]]:[&_[data-slot=field-label]]:after:-ml-1.5 has-[[aria-required=true]]:[&_[data-slot=field-label]]:after:content-['*'] has-[[aria-required=true]]:[&_[data-slot=field-label]]:after:text-(--hola-danger) has-[[aria-required=true]]:[&_[data-slot=field-label]]:after:font-medium"
  ),
  {
  variants: {
    orientation: {
      vertical: "flex-col *:w-full [&>.sr-only]:w-auto",
      horizontal: cn(
        "flex-row items-center",
        "has-[>[data-slot=field-content]]:items-start",
        "*:data-[slot=field-label]:flex-auto",
        "has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
      ),
      responsive: cn(
        "flex-col *:w-full",
        "@md/field-group:flex-row @md/field-group:items-center @md/field-group:*:w-auto",
        "@md/field-group:has-[>[data-slot=field-content]]:items-start",
        "@md/field-group:*:data-[slot=field-label]:flex-auto",
        "[&>.sr-only]:w-auto"
      ),
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
});

function Field({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof fieldVariants>) {
  return (
    <div
      role="group"
      data-slot="field"
      data-orientation={orientation}
      className={cn(
        fieldVariants({ orientation }),
        "data-[invalid=true]:text-(--hola-danger)",
        className
      )}
      {...props}
    />
  );
}

// -----------------------------------------------------------------------------
// FieldContent — when a field has a label + description + control, wrap the
// label and description in FieldContent so the orientation logic stacks them
// correctly while keeping the control aligned.
// -----------------------------------------------------------------------------

function FieldContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-content"
      className={cn(
        "group/field-content flex flex-1 flex-col gap-1 leading-snug",
        className
      )}
      {...props}
    />
  );
}

// -----------------------------------------------------------------------------
// FieldLabel — wraps Label with field-aware behaviour. When used to wrap a
// whole Field (e.g. card-style checkbox/radio), adds a border + tinted accent
// bg when the inner control is checked.
// -----------------------------------------------------------------------------

function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof Label>) {
  return (
    <Label
      data-slot="field-label"
      className={cn(
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug",
        "group-data-[disabled=true]/field:opacity-50",
        // Card-style: when this label wraps a Field, become a card.
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col",
        "has-[>[data-slot=field]]:rounded-[6px] has-[>[data-slot=field]]:border has-[>[data-slot=field]]:border-(--hola-fg)/10",
        "*:data-[slot=field]:p-3",
        // Checked state — tint with accent when wrapping a checked control.
        "has-data-checked:border-(--hola-accent)/30 has-data-checked:bg-(--hola-accent)/[0.06]",
        "dark:has-data-checked:border-(--hola-accent)/20 dark:has-data-checked:bg-(--hola-accent)/[0.1]",
        className
      )}
      {...props}
    />
  );
}

// -----------------------------------------------------------------------------
// FieldTitle — non-<label> variant for cases where you need a "title" that
// isn't bound to a control (e.g. group headings inside a Field).
// -----------------------------------------------------------------------------

function FieldTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-label"
      className={cn(
        "flex w-fit items-center gap-2 text-sm font-medium leading-snug",
        "group-data-[disabled=true]/field:opacity-50",
        className
      )}
      {...props}
    />
  );
}

// -----------------------------------------------------------------------------
// FieldDescription — secondary text (helper / hint). Muted, text-sm, balanced
// wrapping in horizontal layouts.
// -----------------------------------------------------------------------------

function FieldDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="field-description"
      className={cn(
        "text-sm font-normal leading-normal text-muted",
        "group-has-data-horizontal/field:text-balance",
        "last:mt-0 nth-last-2:-mt-1",
        "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-fg",
        className
      )}
      {...props}
    />
  );
}

// -----------------------------------------------------------------------------
// FieldError — alert region for validation messages. Accepts:
//   children     = free-form content
//   errors[]     = array of objects with `.message` (react-hook-form shape)
// Single message renders inline; multiple render as a bulleted list.
// -----------------------------------------------------------------------------

function FieldError({
  className,
  children,
  errors,
  ...props
}: React.ComponentProps<"div"> & {
  errors?: Array<{ message?: string } | undefined>;
}) {
  const content = useMemo(() => {
    if (children) return children;
    if (!errors?.length) return null;

    const unique = [
      ...new Map(errors.map((e) => [e?.message, e])).values(),
    ];

    if (unique.length === 1) return unique[0]?.message;

    return (
      <ul className="ml-4 flex list-disc flex-col gap-1">
        {unique.map(
          (error, index) =>
            error?.message && <li key={index}>{error.message}</li>
        )}
      </ul>
    );
  }, [children, errors]);

  if (!content) return null;

  return (
    <div
      role="alert"
      data-slot="field-error"
      className={cn("text-sm font-normal text-(--hola-danger)", className)}
      {...props}
    >
      {content}
    </div>
  );
}

export {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSet,
  FieldContent,
  FieldTitle,
};

import { Badge, BADGE_COLORS } from "@/registry/hola/ui/badge";
import { ShowcasePage, Showcase } from "../showcase";

function CheckIcon() {
  return (
    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 6.5 5 9l4.5-5" />
    </svg>
  );
}

function DotIcon() {
  return (
    <svg viewBox="0 0 12 12" fill="currentColor">
      <circle cx="6" cy="6" r="2.5" />
    </svg>
  );
}

export default function BadgeShowcase() {
  return (
    <ShowcasePage
      title="Badge"
      description="Small labels and status indicators. variant = structural treatment, color = hue (Catalyst's 18-colour palette). destructive ignores color (semantic)."
    >
      <Showcase title="Variants (default zinc)">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="ghost">Ghost</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="link">Link</Badge>
      </Showcase>

      <Showcase
        title="Catalyst colours — tinted (secondary)"
        description="The signature Catalyst look. The most useful variant×color combination — status pills, tags, labels."
      >
        {BADGE_COLORS.map((color) => (
          <Badge key={color} variant="secondary" color={color}>
            {color}
          </Badge>
        ))}
      </Showcase>

      <Showcase
        title="Solid colours (default variant)"
        description="Saturated filled badges for high-emphasis labels."
      >
        {BADGE_COLORS.map((color) => (
          <Badge key={color} color={color}>
            {color}
          </Badge>
        ))}
      </Showcase>

      <Showcase
        title="Outline colours"
        description="Bordered, transparent background. Use for metadata, version tags, lower-emphasis labels."
      >
        {BADGE_COLORS.map((color) => (
          <Badge key={color} variant="outline" color={color}>
            {color}
          </Badge>
        ))}
      </Showcase>

      <Showcase
        title="Ghost colours"
        description="Text-only — for inline tags inside dense surfaces (lists, tables)."
      >
        {BADGE_COLORS.map((color) => (
          <Badge key={color} variant="ghost" color={color}>
            {color}
          </Badge>
        ))}
      </Showcase>

      <Showcase
        title="With icons"
        description="Icons inherit currentColor — they auto-match the variant's text colour."
      >
        <Badge variant="secondary" color="green"><DotIcon /> Active</Badge>
        <Badge variant="secondary" color="amber"><DotIcon /> Pending</Badge>
        <Badge variant="secondary" color="red"><DotIcon /> Error</Badge>
        <Badge variant="secondary" color="blue"><CheckIcon /> Verified</Badge>
        <Badge variant="outline">v2.4.1</Badge>
      </Showcase>

      <Showcase
        title="Status pill recipe"
        description="The idiomatic premium-SaaS pattern: variant=secondary, color=semantic hue, dot icon."
      >
        <Badge variant="secondary" color="zinc">Draft</Badge>
        <Badge variant="secondary" color="amber"><DotIcon /> In review</Badge>
        <Badge variant="secondary" color="green"><DotIcon /> Live</Badge>
        <Badge variant="secondary" color="red"><DotIcon /> Failed</Badge>
        <Badge variant="secondary" color="violet"><DotIcon /> Archived</Badge>
      </Showcase>

      <Showcase
        title="Polymorphic (as link)"
        description="Render as anchor or button via the render prop. Hover styles activate via [a&]: selectors."
      >
        <Badge variant="secondary" color="blue" render={<a href="https://github.com/oflabs44/hola-ui" target="_blank" rel="noopener" />}>
          oflabs44/hola-ui
        </Badge>
        <Badge variant="outline" color="emerald" render={<a href="#" />}>
          docs
        </Badge>
      </Showcase>
    </ShowcasePage>
  );
}

import { Badge } from "@/registry/hola/ui/badge";
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
      description="Small labels and status indicators. Tinted backgrounds for premium status-pill aesthetic. Polymorphic via Base UI's render prop."
    >
      <Showcase title="Variants">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="ghost">Ghost</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="link">Link</Badge>
      </Showcase>

      <Showcase title="With icons">
        <Badge variant="secondary"><DotIcon /> Active</Badge>
        <Badge variant="secondary"><CheckIcon /> Verified</Badge>
        <Badge variant="destructive"><DotIcon /> Error</Badge>
        <Badge variant="outline">v2.4.1</Badge>
      </Showcase>

      <Showcase
        title="Status pills"
        description="Idiomatic use: tinted secondary or destructive for state, outline for metadata."
      >
        <Badge variant="secondary">Draft</Badge>
        <Badge variant="secondary"><DotIcon /> In review</Badge>
        <Badge variant="default">Published</Badge>
        <Badge variant="destructive">Archived</Badge>
        <Badge variant="outline">v3.0</Badge>
      </Showcase>

      <Showcase
        title="Polymorphic (as link)"
        description="Render as an anchor or button via the render prop."
      >
        <Badge variant="secondary" render={<a href="https://github.com/oflabs44/hola-ui" target="_blank" rel="noopener" />}>
          oflabs44/hola-ui
        </Badge>
        <Badge variant="outline" render={<a href="#" />}>
          docs
        </Badge>
      </Showcase>
    </ShowcasePage>
  );
}

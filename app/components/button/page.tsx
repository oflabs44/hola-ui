import { Button } from "@/registry/hola/ui/button";
import { ShowcasePage, Showcase } from "../showcase";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10m-4-4 4 4-4 4" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 3v10M3 8h10" />
    </svg>
  );
}

export default function ButtonShowcase() {
  return (
    <ShowcasePage
      title="Button"
      description="Trigger actions. Built on @base-ui/react/button with Catalyst-style layered surfaces for the solid variants and flat treatments for the rest."
    >
      <Showcase title="Variants">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Delete</Button>
        <Button variant="link">Link</Button>
      </Showcase>

      <Showcase title="Sizes">
        <Button size="sm">Small</Button>
        <Button>Default</Button>
        <Button size="lg">Large</Button>
        <Button size="icon"><PlusIcon /></Button>
        <Button size="icon-sm"><PlusIcon /></Button>
        <Button size="icon-lg"><PlusIcon /></Button>
      </Showcase>

      <Showcase title="With icons">
        <Button>Continue <ArrowIcon /></Button>
        <Button variant="secondary"><PlusIcon /> New project</Button>
        <Button variant="outline"><PlusIcon /> Add member</Button>
        <Button variant="ghost">Settings <ArrowIcon /></Button>
      </Showcase>

      <Showcase title="Disabled">
        <Button disabled>Disabled</Button>
        <Button variant="secondary" disabled>Disabled</Button>
        <Button variant="outline" disabled>Disabled</Button>
        <Button variant="destructive" disabled>Disabled</Button>
      </Showcase>

      <Showcase
        title="Polymorphic"
        description="Use Base UI's render prop. When rendering a non-button, pass nativeButton={false}."
      >
        <Button nativeButton={false} render={<a href="https://github.com/oflabs44/hola-ui" target="_blank" rel="noopener" />}>
          Repo <ArrowIcon />
        </Button>
        <Button variant="outline" nativeButton={false} render={<a href="https://ui.shadcn.com" target="_blank" rel="noopener" />}>
          shadcn docs
        </Button>
      </Showcase>
    </ShowcasePage>
  );
}

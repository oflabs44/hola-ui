import { Toggle } from "@/registry/hola/ui/toggle";
import { ShowcasePage, Showcase } from "../showcase";

function BoldIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h5a2.5 2.5 0 0 1 0 5H4zm0 5h6a2.5 2.5 0 0 1 0 5H4z" />
    </svg>
  );
}

function ItalicIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 4h-4M10 12H6M9.5 4 6.5 12" />
    </svg>
  );
}

function UnderlineIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4v5a4 4 0 0 0 8 0V4M3 13.5h10" />
    </svg>
  );
}

export default function ToggleShowcase() {
  return (
    <ShowcasePage
      title="Toggle"
      description="Single on/off button on @base-ui/react/toggle. Use for binary state buttons that aren't form inputs — bold/italic in editors, mute toggles, expand/collapse triggers. Pressed state uses data-pressed."
    >
      <Showcase title="Variants">
        <Toggle defaultPressed>Default</Toggle>
        <Toggle variant="outline" defaultPressed>Outline</Toggle>
      </Showcase>

      <Showcase title="Sizes">
        <Toggle size="sm">Small</Toggle>
        <Toggle>Default</Toggle>
        <Toggle size="lg">Large</Toggle>
      </Showcase>

      <Showcase title="With icons">
        <Toggle aria-label="Bold" defaultPressed><BoldIcon /></Toggle>
        <Toggle aria-label="Italic"><ItalicIcon /></Toggle>
        <Toggle aria-label="Underline"><UnderlineIcon /></Toggle>
      </Showcase>

      <Showcase title="States">
        <Toggle>Off</Toggle>
        <Toggle defaultPressed>On</Toggle>
        <Toggle disabled>Disabled off</Toggle>
        <Toggle disabled defaultPressed>Disabled on</Toggle>
      </Showcase>
    </ShowcasePage>
  );
}

import { ToggleGroup, ToggleGroupItem } from "@/registry/hola/ui/toggle-group";
import { ShowcasePage, Showcase } from "../showcase";

function AlignLeftIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M3 4h10M3 8h7M3 12h10" />
    </svg>
  );
}

function AlignCenterIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M3 4h10M4.5 8h7M3 12h10" />
    </svg>
  );
}

function AlignRightIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M3 4h10M6 8h7M3 12h10" />
    </svg>
  );
}

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

export default function ToggleGroupShowcase() {
  return (
    <ShowcasePage
      title="Toggle Group"
      description="Group of toggles. Single-select (toggleMultiple=false) for view pickers; multi-select for filters or text formatting. spacing=0 + variant='outline' collapses into a segmented control with merged borders."
    >
      <Showcase
        title="Segmented control (single select)"
        description="The canonical 'view picker' pattern — spacing=0 + outline variant + toggleMultiple=false."
      >
        <ToggleGroup variant="outline" defaultValue={["center"]}>
          <ToggleGroupItem value="left" aria-label="Align left"><AlignLeftIcon /></ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center"><AlignCenterIcon /></ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right"><AlignRightIcon /></ToggleGroupItem>
        </ToggleGroup>
      </Showcase>

      <Showcase
        title="Multi-select (text formatting)"
        description="Default toggleMultiple — each item is independent. Same UI as Toggle but with grouped accessibility."
      >
        <ToggleGroup variant="outline">
          <ToggleGroupItem value="bold" aria-label="Bold"><BoldIcon /></ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Italic"><ItalicIcon /></ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Underline"><UnderlineIcon /></ToggleGroupItem>
        </ToggleGroup>
      </Showcase>

      <Showcase
        title="With spacing"
        description="spacing > 0 → items are visually independent buttons rather than a unified control."
      >
        <ToggleGroup variant="outline" spacing={2} defaultValue={["bold"]}>
          <ToggleGroupItem value="bold" aria-label="Bold"><BoldIcon /></ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Italic"><ItalicIcon /></ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Underline"><UnderlineIcon /></ToggleGroupItem>
        </ToggleGroup>
      </Showcase>

      <Showcase
        title="Default variant (no border)"
        description="Use when the group sits inside a card or panel that already has its own surface."
      >
        <ToggleGroup defaultValue={["center"]}>
          <ToggleGroupItem value="left" aria-label="Align left"><AlignLeftIcon /></ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center"><AlignCenterIcon /></ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right"><AlignRightIcon /></ToggleGroupItem>
        </ToggleGroup>
      </Showcase>

      <Showcase
        title="Sizes"
        description="Pass size on the group; all items inherit via context."
      >
        <div className="flex flex-col gap-3">
          <ToggleGroup variant="outline" size="sm" defaultValue={["center"]}>
            <ToggleGroupItem value="left">Left</ToggleGroupItem>
            <ToggleGroupItem value="center">Center</ToggleGroupItem>
            <ToggleGroupItem value="right">Right</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup variant="outline" defaultValue={["center"]}>
            <ToggleGroupItem value="left">Left</ToggleGroupItem>
            <ToggleGroupItem value="center">Center</ToggleGroupItem>
            <ToggleGroupItem value="right">Right</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup variant="outline" size="lg" defaultValue={["center"]}>
            <ToggleGroupItem value="left">Left</ToggleGroupItem>
            <ToggleGroupItem value="center">Center</ToggleGroupItem>
            <ToggleGroupItem value="right">Right</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </Showcase>
    </ShowcasePage>
  );
}

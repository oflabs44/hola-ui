import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/hola/ui/alert";
import { ShowcasePage, Showcase } from "../showcase";

function InfoIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="8" cy="8" r="6.5" />
      <path d="M8 7v4" />
      <circle cx="8" cy="5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function AlertTriangleIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M8 1.5 14.5 13.5h-13L8 1.5Z" />
      <path d="M8 6v4" />
      <circle cx="8" cy="12" r="0.5" fill="currentColor" />
    </svg>
  );
}

export default function AlertShowcase() {
  return (
    <ShowcasePage
      title="Alert"
      description="Inline static notification. Variants: default (neutral) and destructive (red, signals failure). Composed with AlertTitle and AlertDescription; a leading icon is optional and grid-anchored to the left of the text column."
    >
      <Showcase title="Default">
        <Alert className="max-w-md">
          <InfoIcon />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the CLI.
          </AlertDescription>
        </Alert>
      </Showcase>

      <Showcase title="Destructive">
        <Alert variant="destructive" className="max-w-md">
          <AlertTriangleIcon />
          <AlertTitle>Your session has expired</AlertTitle>
          <AlertDescription>
            Please log in again to continue. Unsaved changes have been kept locally.
          </AlertDescription>
        </Alert>
      </Showcase>

      <Showcase title="Title only">
        <Alert className="max-w-md">
          <InfoIcon />
          <AlertTitle>Build succeeded in 1.4s.</AlertTitle>
        </Alert>
      </Showcase>

      <Showcase title="No icon">
        <Alert className="max-w-md">
          <AlertTitle>New version available</AlertTitle>
          <AlertDescription>
            hola-ui 0.2.0 is out. Run <code className="rounded bg-(--hola-fg)/[0.06] px-1 py-0.5 font-mono text-xs">npx shadcn add @hola/theme</code> to update.
          </AlertDescription>
        </Alert>
      </Showcase>
    </ShowcasePage>
  );
}

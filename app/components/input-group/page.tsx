import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@/registry/hola/ui/input-group";
import { ShowcasePage, Showcase } from "../showcase";

function SearchIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7" cy="7" r="4.5" />
      <path d="m13.5 13.5-3-3" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3.5" width="12" height="9" rx="1.5" />
      <path d="m2.5 4.5 5.5 4 5.5-4" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 3.5c-3 0-5.5 4.5-5.5 4.5S5 12.5 8 12.5 13.5 8 13.5 8 11 3.5 8 3.5Z" />
      <circle cx="8" cy="8" r="2" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10m-4-4 4 4-4 4" />
    </svg>
  );
}

export default function InputGroupShowcase() {
  return (
    <ShowcasePage
      title="Input Group"
      description="Compose inputs with icons, text addons, and buttons. The group root carries the border, bg, and focus ring; children are transparent and rely on the group surface. Clicking an addon focuses the input."
    >
      <Showcase
        title="With leading icon"
        description="The most common pattern — search field with a magnifier."
      >
        <InputGroup className="max-w-sm">
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupInput placeholder="Search components…" />
        </InputGroup>
      </Showcase>

      <Showcase title="With trailing icon">
        <InputGroup className="max-w-sm">
          <InputGroupInput type="email" placeholder="hola@example.com" />
          <InputGroupAddon align="inline-end">
            <MailIcon />
          </InputGroupAddon>
        </InputGroup>
      </Showcase>

      <Showcase
        title="With text addon"
        description="Currency, units, prefixes. Use InputGroupText for non-interactive text."
      >
        <div className="flex w-full flex-col gap-3 sm:max-w-sm">
          <InputGroup>
            <InputGroupAddon>
              <InputGroupText>$</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput type="number" placeholder="0.00" />
            <InputGroupAddon align="inline-end">
              <InputGroupText>USD</InputGroupText>
            </InputGroupAddon>
          </InputGroup>

          <InputGroup>
            <InputGroupInput type="number" placeholder="weight" />
            <InputGroupAddon align="inline-end">
              <InputGroupText>kg</InputGroupText>
            </InputGroupAddon>
          </InputGroup>

          <InputGroup>
            <InputGroupAddon>
              <InputGroupText>https://</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder="yourdomain.com" />
          </InputGroup>
        </div>
      </Showcase>

      <Showcase
        title="With trailing button"
        description="Password toggle, submit-inside-field, copy button — InputGroupButton defaults to ghost + xs."
      >
        <div className="flex w-full flex-col gap-3 sm:max-w-sm">
          <InputGroup>
            <InputGroupInput type="password" defaultValue="hunter2" />
            <InputGroupAddon align="inline-end">
              <InputGroupButton size="icon-xs" aria-label="Show password">
                <EyeIcon />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>

          <InputGroup>
            <InputGroupInput placeholder="hola@example.com" />
            <InputGroupAddon align="inline-end">
              <InputGroupButton size="xs" variant="default">
                Subscribe <ArrowIcon />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </Showcase>

      <Showcase
        title="Combined leading + trailing"
        description="Search + clear button is the canonical example."
      >
        <InputGroup className="max-w-sm">
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupInput defaultValue="design tokens" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton size="icon-xs" aria-label="Clear">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="m4 4 8 8m0-8-8 8" />
              </svg>
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </Showcase>

      <Showcase
        title="States"
        description="Focus ring lights up the whole group. aria-invalid on the inner input shows the danger ring on the group."
      >
        <div className="flex w-full flex-col gap-3 sm:max-w-sm">
          <InputGroup>
            <InputGroupAddon><SearchIcon /></InputGroupAddon>
            <InputGroupInput placeholder="normal" />
          </InputGroup>

          <InputGroup>
            <InputGroupAddon><MailIcon /></InputGroupAddon>
            <InputGroupInput disabled defaultValue="disabled" />
          </InputGroup>

          <InputGroup>
            <InputGroupAddon><MailIcon /></InputGroupAddon>
            <InputGroupInput aria-invalid defaultValue="not-an-email" />
          </InputGroup>
        </div>
      </Showcase>
    </ShowcasePage>
  );
}

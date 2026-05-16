import { Input } from "@/registry/hola/ui/input";
import { Button } from "@/registry/hola/ui/button";
import { ShowcasePage, Showcase } from "../showcase";

export default function InputShowcase() {
  return (
    <ShowcasePage
      title="Input"
      description="Single-line text input on @base-ui/react/input. Light mode is a raised surface (white bg + shadow-xs); dark mode is etched (subtle tint, no shadow). Translucent overlay borders that strengthen on hover."
    >
      <Showcase title="Default">
        <Input placeholder="hola@example.com" className="max-w-sm" />
      </Showcase>

      <Showcase title="With value">
        <Input defaultValue="hola@example.com" className="max-w-sm" />
      </Showcase>

      <Showcase
        title="Types"
        description="Native HTML input types: text (default), email, password, number, search, url, tel, date."
      >
        <div className="flex w-full flex-col gap-3 sm:max-w-sm">
          <Input type="email" placeholder="email" />
          <Input type="password" placeholder="password" defaultValue="hunter2" />
          <Input type="number" placeholder="0" />
          <Input type="search" placeholder="search…" />
          <Input type="url" placeholder="https://" />
          <Input type="date" />
        </div>
      </Showcase>

      <Showcase
        title="States"
        description="Focus ring uses --hola-accent. Invalid state via aria-invalid uses --hola-danger."
      >
        <div className="flex w-full flex-col gap-3 sm:max-w-sm">
          <Input placeholder="normal" />
          <Input placeholder="disabled" disabled defaultValue="cannot edit" />
          <Input placeholder="invalid" aria-invalid defaultValue="not-an-email" />
          <Input placeholder="readonly" readOnly defaultValue="read-only value" />
        </div>
      </Showcase>

      <Showcase
        title="File input"
        description="Native file picker styled inline with the field."
      >
        <Input type="file" className="max-w-sm" />
      </Showcase>

      <Showcase
        title="In a form"
        description="Stacked inputs with labels and a submit button — the most common real-world layout."
      >
        <form className="flex w-full max-w-sm flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium text-fg">
              Email
            </label>
            <Input id="email" type="email" placeholder="hola@example.com" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="text-sm font-medium text-fg">
              Password
            </label>
            <Input id="password" type="password" />
          </div>
          <div className="mt-2 flex items-center gap-3">
            <Button type="submit">Sign in</Button>
            <Button type="button" variant="ghost">
              Forgot?
            </Button>
          </div>
        </form>
      </Showcase>
    </ShowcasePage>
  );
}

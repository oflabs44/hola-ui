"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/registry/hola/ui/navigation-menu";
import { ShowcasePage, Showcase } from "../showcase";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Dialog",
    href: "/components/dialog",
    description: "A modal layer that interrupts the page for focused tasks.",
  },
  {
    title: "Popover",
    href: "/components/popover",
    description: "A click-anchored panel that holds rich, focusable content.",
  },
  {
    title: "Tooltip",
    href: "/components/tooltip",
    description: "Brief hover/focus hint anchored to a trigger.",
  },
  {
    title: "Tabs",
    href: "/components/tabs",
    description: "Switchable panels with pill or underline list variants.",
  },
];

export default function NavigationMenuShowcase() {
  return (
    <ShowcasePage
      title="Navigation Menu"
      description="Top-level site navigation on @base-ui/react/navigation-menu. Sibling triggers share a single floating popup that animates between activation directions; links inside content panels are keyboard-navigable."
    >
      <Showcase title="Default">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[420px] grid-cols-2 gap-2">
                  {components.map((c) => (
                    <li key={c.title}>
                      <NavigationMenuLink href={c.href}>
                        <div className="text-sm font-medium leading-none text-fg">
                          {c.title}
                        </div>
                        <p className="mt-1 line-clamp-2 text-xs leading-snug text-muted">
                          {c.description}
                        </p>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[260px] gap-1">
                  <li>
                    <NavigationMenuLink href="#">
                      <div className="text-sm font-medium text-fg">Documentation</div>
                      <p className="mt-0.5 text-xs text-muted">
                        Guides and API reference.
                      </p>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="#">
                      <div className="text-sm font-medium text-fg">Changelog</div>
                      <p className="mt-0.5 text-xs text-muted">
                        Versioned release notes.
                      </p>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="#">
                      <div className="text-sm font-medium text-fg">GitHub</div>
                      <p className="mt-0.5 text-xs text-muted">
                        Source code and issues.
                      </p>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className={navigationMenuTriggerStyle()}
              >
                Pricing
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </Showcase>
    </ShowcasePage>
  );
}

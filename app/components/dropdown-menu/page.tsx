"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/registry/hola/ui/dropdown-menu";
import { Button } from "@/registry/hola/ui/button";
import { ShowcasePage, Showcase } from "../showcase";

export default function DropdownMenuShowcase() {
  return (
    <ShowcasePage
      title="Dropdown Menu"
      description="Anchored menu on @base-ui/react/menu. Trigger + portal-rendered list with items, groups, labels, separators, shortcuts, checkbox items, radio groups, and nested submenus. Destructive variant tints red."
    >
      <Showcase title="Default">
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="outline">Open menu</Button>} />
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Billing
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Settings
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem disabled>
                Keyboard shortcuts
                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">

              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Showcase>

      <Showcase title="Checkbox items">
        <CheckboxMenu />
      </Showcase>

      <Showcase title="Radio group">
        <RadioMenu />
      </Showcase>

      <Showcase title="Nested submenu">
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="outline">File</Button>} />
          <DropdownMenuContent>
            <DropdownMenuItem>New file</DropdownMenuItem>
            <DropdownMenuItem>Open</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Open recent</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>hola-ui</DropdownMenuItem>
                <DropdownMenuItem>dotfiles</DropdownMenuItem>
                <DropdownMenuItem>obsidian-vault</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Clear list</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Save</DropdownMenuItem>
            <DropdownMenuItem>Save as…</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Showcase>
    </ShowcasePage>
  );
}

function CheckboxMenu() {
  const [statusBar, setStatusBar] = React.useState(true);
  const [activityBar, setActivityBar] = React.useState(false);
  const [panel, setPanel] = React.useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline">View</Button>} />
      <DropdownMenuContent>
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={statusBar}
          onCheckedChange={setStatusBar}
        >
          Status bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={activityBar}
          onCheckedChange={setActivityBar}
        >
          Activity bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={panel} onCheckedChange={setPanel}>
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function RadioMenu() {
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline">Panel position</Button>} />
      <DropdownMenuContent>
        <DropdownMenuLabel>Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

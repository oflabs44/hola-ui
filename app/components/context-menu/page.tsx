"use client";

import * as React from "react";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/registry/hola/ui/context-menu";
import { ShowcasePage, Showcase } from "../showcase";

export default function ContextMenuShowcase() {
  return (
    <ShowcasePage
      title="Context Menu"
      description="Right-click anchored menu on @base-ui/react/context-menu. Shares the Menu primitive's items, groups, separators, shortcuts, checkbox/radio items, and nested submenus — but opens at the pointer on contextmenu events instead of via a Trigger button."
    >
      <Showcase title="Default">
        <ContextMenu>
          <ContextTarget>Right-click here</ContextTarget>
          <ContextMenuContent>
            <ContextMenuLabel>Actions</ContextMenuLabel>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem>
                Cut
                <ContextMenuShortcut>⌘X</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Copy
                <ContextMenuShortcut>⌘C</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Paste
                <ContextMenuShortcut>⌘V</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem disabled>
                Paste as plain text
                <ContextMenuShortcut>⇧⌘V</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuItem variant="destructive">
              Delete
              <ContextMenuShortcut>⌫</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </Showcase>

      <Showcase title="With submenu">
        <ContextMenu>
          <ContextTarget>Right-click for nested menu</ContextTarget>
          <ContextMenuContent>
            <ContextMenuItem>Back</ContextMenuItem>
            <ContextMenuItem disabled>Forward</ContextMenuItem>
            <ContextMenuItem>Reload</ContextMenuItem>
            <ContextMenuSub>
              <ContextMenuSubTrigger>More tools</ContextMenuSubTrigger>
              <ContextMenuSubContent>
                <ContextMenuItem>Save page as…</ContextMenuItem>
                <ContextMenuItem>Create shortcut…</ContextMenuItem>
                <ContextMenuItem>Name window…</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Developer Tools</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSeparator />
            <ContextMenuItem>View page source</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </Showcase>

      <Showcase title="Checkboxes + radio group">
        <CheckboxRadioContextMenu />
      </Showcase>
    </ShowcasePage>
  );
}

function ContextTarget({ children }: { children: React.ReactNode }) {
  return (
    <ContextMenuTrigger className="flex h-32 w-72 items-center justify-center rounded-[6px] border border-dashed border-(--hola-fg)/15 text-sm text-muted">
      {children}
    </ContextMenuTrigger>
  );
}

function CheckboxRadioContextMenu() {
  const [showBookmarks, setShowBookmarks] = React.useState(true);
  const [showUrls, setShowUrls] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");

  return (
    <ContextMenu>
      <ContextTarget>Right-click for state controls</ContextTarget>
      <ContextMenuContent>
        <ContextMenuLabel>Appearance</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem
          checked={showBookmarks}
          onCheckedChange={setShowBookmarks}
        >
          Show bookmarks
          <ContextMenuShortcut>⌘B</ContextMenuShortcut>
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem
          checked={showUrls}
          onCheckedChange={setShowUrls}
        >
          Show full URLs
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuLabel>People</ContextMenuLabel>
        <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
          <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
          <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
}

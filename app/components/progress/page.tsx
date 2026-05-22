"use client";

import * as React from "react";
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/registry/hola/ui/progress";
import { Button } from "@/registry/hola/ui/button";
import { ShowcasePage, Showcase } from "../showcase";

export default function ProgressShowcase() {
  return (
    <ShowcasePage
      title="Progress"
      description="Determinate or indeterminate progress on @base-ui/react/progress. Track + Indicator scale with value (0–100); label and value parts compose around the bar. Indeterminate state pulses."
    >
      <Showcase title="Default">
        <div className="w-full max-w-md">
          <Progress value={60} />
        </div>
      </Showcase>

      <Showcase title="With label + value">
        <Progress value={42} className="w-full max-w-md">
          <ProgressLabel>Uploading hola.zip</ProgressLabel>
          <ProgressValue />
        </Progress>
      </Showcase>

      <Showcase title="Animated">
        <AnimatedProgress />
      </Showcase>

      <Showcase title="Indeterminate">
        <div className="w-full max-w-md">
          <Progress value={null} />
        </div>
      </Showcase>
    </ShowcasePage>
  );
}

function AnimatedProgress() {
  const [value, setValue] = React.useState(13);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 11));
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md space-y-2">
      <Progress value={value}>
        <ProgressLabel>Indexing files</ProgressLabel>
        <ProgressValue />
      </Progress>
      <Button size="sm" variant="outline" onClick={() => setValue(0)}>
        Reset
      </Button>
    </div>
  );
}

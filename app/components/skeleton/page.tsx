import { Skeleton } from "@/registry/hola/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/registry/hola/ui/card";
import { ShowcasePage, Showcase } from "../showcase";

export default function SkeletonShowcase() {
  return (
    <ShowcasePage
      title="Skeleton"
      description="Animated loading placeholder. animate-pulse on a tinted bg. Shape by sizing the Skeleton with classes (size-N, h-N, w-full, rounded-full, etc.)."
    >
      <Showcase title="Shapes">
        <div className="flex w-full flex-col gap-3 sm:max-w-sm">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </Showcase>

      <Showcase title="Avatar + label pattern">
        <div className="flex items-center gap-3">
          <Skeleton className="size-9 rounded-full" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-3 w-20" />
          </div>
        </div>
      </Showcase>

      <Showcase title="Card loading state">
        <Card className="max-w-sm">
          <CardHeader>
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-4 w-48" />
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </CardContent>
        </Card>
      </Showcase>

      <Showcase title="Image placeholder">
        <Skeleton className="aspect-video w-full max-w-sm rounded-[10px]" />
      </Showcase>
    </ShowcasePage>
  );
}

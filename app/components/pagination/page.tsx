import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/hola/ui/pagination";
import { ShowcasePage, Showcase } from "../showcase";

export default function PaginationShowcase() {
  return (
    <ShowcasePage
      title="Pagination"
      description="Page navigation built on top of Button. PaginationLink renders as an `<a>` (Base UI render-prop polymorphism); active link gets outline variant and aria-current=page. Includes Previous / Next labels (hidden on small screens) and an ellipsis stand-in."
    >
      <Showcase title="Default">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </Showcase>

      <Showcase title="Compact (no labels)">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationLink href="#" aria-label="Previous">
                <span aria-hidden>‹</span>
                <span className="sr-only">Previous</span>
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" aria-label="Next">
                <span aria-hidden>›</span>
                <span className="sr-only">Next</span>
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </Showcase>
    </ShowcasePage>
  );
}

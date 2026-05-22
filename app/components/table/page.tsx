import { Badge } from "@/registry/hola/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/hola/ui/table";
import { Showcase, ShowcasePage } from "../showcase";

const statusColor = {
  Paid: "green",
  Pending: "amber",
  Unpaid: "red",
} as const;

type InvoiceStatus = keyof typeof statusColor;

const invoices: {
  id: string;
  status: InvoiceStatus;
  method: string;
  amount: string;
}[] = [
  { id: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { id: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
  { id: "INV003", status: "Unpaid", method: "Bank Transfer", amount: "$350.00" },
  { id: "INV004", status: "Paid", method: "Credit Card", amount: "$450.00" },
  { id: "INV005", status: "Paid", method: "PayPal", amount: "$550.00" },
];

export default function TableShowcase() {
  return (
    <ShowcasePage
      title="Table"
      description="Native HTML table styled to project tokens. Row borders use translucent --hola-fg overlays; hover and selected states tint subtly. Pair with badges, buttons, etc. for richer cells."
    >
      <Showcase title="Default">
        <div className="w-full max-w-3xl rounded-[8px] border border-(--hola-fg)/10 dark:border-(--hola-fg)/15">
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-24">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-mono text-xs">
                    {invoice.id}
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" color={statusColor[invoice.status]}>
                      {invoice.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted">{invoice.method}</TableCell>
                  <TableCell className="text-right font-mono tabular-nums">
                    {invoice.amount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right font-mono tabular-nums">
                  $1,750.00
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </Showcase>

      <Showcase title="Minimal (no border container)">
        <Table className="max-w-xl">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Femi Dayo</TableCell>
              <TableCell className="text-muted">Maintainer</TableCell>
              <TableCell>
                <Badge variant="secondary" color="green">
                  Active
                </Badge>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Octocat</TableCell>
              <TableCell className="text-muted">Contributor</TableCell>
              <TableCell>
                <Badge variant="secondary" color="zinc">
                  Invited
                </Badge>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pedro Duarte</TableCell>
              <TableCell className="text-muted">Reviewer</TableCell>
              <TableCell>
                <Badge variant="secondary" color="amber">
                  Away
                </Badge>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Showcase>
    </ShowcasePage>
  );
}

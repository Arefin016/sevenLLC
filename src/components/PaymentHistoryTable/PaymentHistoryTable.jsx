import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  flexRender,
} from "@tanstack/react-table";
import {
  DeleteSvg,
  DownloadSvg,
  MoreHorizontalSvg,
  PrintSvg,
} from "../SvgContainer/SvgConainer";

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "invoiceId",
    header: () => (
      <span className="font-lato text-headingColor font-semibold text-base">
        Invoice ID
      </span>
    ),
    cell: ({ row }) => (
      <div className="text-buttonColor">{row.getValue("invoiceId")}</div>
    ),
  },
  {
    accessorKey: "invoiceDate",
    header: () => (
      <span className="font-lato text-headingColor font-semibold text-base">
        Invoice Date
      </span>
    ),
    cell: ({ row }) => (
      <div className="text-navbarColor text-base">
        {row.getValue("invoiceDate")}
      </div>
    ),
  },
  {
    accessorKey: "product",
    header: () => (
      <span className="font-lato text-headingColor font-semibold text-base">
        Product
      </span>
    ),
    cell: ({ row }) => (
      <div className="capitalize text-navbarColor text-base">
        {row.getValue("product")}
      </div>
    ),
  },
  {
    accessorKey: "quantity",
    header: () => (
      <span className="font-lato text-headingColor font-semibold text-base">
        Quantity
      </span>
    ),
    cell: ({ row }) => (
      <div className="text-navbarColor text-base">
        {row.getValue("quantity")}
      </div>
    ),
  },
  {
    accessorKey: "amount",
    header: () => (
      <span className="font-lato text-headingColor font-semibold text-base">
        Amount
      </span>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return <div className="text-navbarColor text-base">{formatted}</div>;
    },
  },
  {
    accessorKey: "paymentMethod",
    header: () => (
      <span className="font-lato text-headingColor font-semibold text-base">
        Payment Method
      </span>
    ),
    cell: ({ row }) => (
      <div className="text-navbarColor text-base">
        {row.getValue("paymentMethod")}
      </div>
    ),
  },
  {
    accessorKey: "datePaid",
    header: () => (
      <span className="font-lato text-headingColor font-semibold text-base">
        Date Paid
      </span>
    ),
    cell: ({ row }) => (
      <div className="text-navbarColor text-base">
        {row.getValue("datePaid")}
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: () => (
      <span className="font-lato text-headingColor font-semibold text-base">
        Status
      </span>
    ),
    cell: ({ row }) => (
      <div className="font-publicSans text-[#005CE8] font-medium bg-[#F0F6FF] text-center py-[5px] px-4 rounded-[130px]">
        {row.getValue("status")}
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const invoice = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 w-8 p-0 bg-[#F0F0F0] rounded-[200px]"
            >
              <span className="sr-only">Open menu</span>
              <MoreHorizontalSvg />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              className="text-navbarColor"
              onClick={() => navigator.clipboard.writeText(invoice.invoiceId)}
            >
              <DownloadSvg className="mr-2" />
              Download
            </DropdownMenuItem>
            <DropdownMenuItem className="text-navbarColor">
              <PrintSvg className="mr-2" />
              Print
            </DropdownMenuItem>
            <DropdownMenuItem className="text-[#E84646]">
              <DeleteSvg className="mr-2" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const PaymentHistoryTable = ({ data }) => {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });
  return (
    <div className="">
      <div className="rounded-md">
        <Table className="min-w-full w-full table-auto">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="text-left px-4 py-2">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody className="">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className=""
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="px-4 py-4 text-left ">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PaymentHistoryTable;

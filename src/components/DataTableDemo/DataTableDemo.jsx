import React, { useState, useEffect } from "react";
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
import { MoreHorizontal } from "lucide-react";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  flexRender,
} from "@tanstack/react-table";
import { DeleteSvg, DownloadSvg, PrintSvg } from "../SvgContainer/SvgConainer";
import { useGetAllOrderRequest } from "@/hooks/cms.queries";
import { useDeleteOrderRequest } from "@/hooks/cms.mutations";

export function DataTableDemo({ setCheckedData ,  }) {
  const { data: orderRequest } = useGetAllOrderRequest();
  // console.log(orderRequest);
  const [data, setData] = useState([]);
  const { mutate: deleteOrderRequest } = useDeleteOrderRequest(setData);

  const handleDelete = id => {
    console.log(id);
    deleteOrderRequest(id);
  };

  const handleShowDetials = id => {
    console.log(id);
  };

  useEffect(() => {
    if (orderRequest) {
      // Assuming orderRequest is an array of objects with the necessary fields
      const formattedData = orderRequest.map(item => ({
        id: item?.id,
        image: item?.image,
        item_type: item?.item_type,
        orderInvoice: item?.order_invoice?.invoice_number || "None",
        quantity: item?.quantity,
        amount: item?.order_invoice?.amount || "None",
        totalAmount: item?.order_invoice?.total_amount || "None",
      }));
      setData(formattedData);
    }
  }, [orderRequest]);

  const columns = [
    {
      id: "select",
      cell: ({ row, table }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={value => {
            table.getRowModel().rows.forEach(r => {
              if (r.id !== row.id) {
                r.toggleSelected(false);
                handleShowDetials(row.original.id);
              }
            });

            row.toggleSelected(!!value);
            setCheckedData(value ? row.original : null);
          }}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "id",
      header: () => (
        <span className="font-lato text-headingColor font-semibold text-xs xxs:text-base">
          Id
        </span>
      ),
      cell: ({ row }) => (
        <div className="text-headingColor text-xs xxs:text-base">
          {row.getValue("id")}
        </div>
      ),
    },
    {
      accessorKey: "image",
      header: () => (
        <span className="font-lato text-headingColor font-semibold text-xs xxs:text-base">
          Image
        </span>
      ),
      cell: ({ row }) => {
        const imageUrl = row.original.image; // Use row.original for better reliability
        return (
          <div className="text-headingColor text-xs xxs:text-base">
            {imageUrl ? (
              <img
                src={`${import.meta.env.VITE_SITE_URL}/${imageUrl}`}
                alt="Not Found"
                className="w-11 h-11 rounded object-cover"
              />
            ) : (
              <div className="w-8 h-8 rounded bg-gray-300" />
            )}
          </div>
        );
      },
    },
    {
      accessorKey: "item_type",
      header: () => (
        <span className="font-lato text-headingColor font-semibold text-xs xxs:text-base">
          Item Type
        </span>
      ),
      cell: ({ row }) => (
        <div className="text-headingColor text-xs xxs:text-base">
          {row.getValue("item_type")}
        </div>
      ),
    },
    {
      accessorKey: "orderInvoice",
      header: () => (
        <span className="font-lato text-headingColor font-semibold text-xs xxs:text-base">
          Order Invoice
        </span>
      ),
      cell: ({ row }) => (
        <div className="text-headingColor text-xs xxs:text-base">
          {row.getValue("orderInvoice")}
        </div>
      ),
    },
    {
      accessorKey: "quantity",
      header: () => (
        <span className="font-lato text-headingColor font-semibold text-xs xxs:text-base">
          Quantity
        </span>
      ),
      cell: ({ row }) => (
        <div className="text-headingColor text-xs xxs:text-base">
          {row.getValue("quantity")}
        </div>
      ),
    },
    {
      accessorKey: "amount",
      header: () => (
        <span className="font-lato text-headingColor font-semibold text-xs xxs:text-base">
          Amount
        </span>
      ),
      cell: ({ row }) => (
        <div className="text-headingColor text-xs xxs:text-base">
          {row.getValue("amount")}
        </div>
      ),
    },
    {
      accessorKey: "totalAmount",
      header: () => (
        <span className="font-lato text-headingColor font-semibold text-xs xxs:text-base">
          Total Amount
        </span>
      ),
      cell: ({ row }) => (
        <div className="text-headingColor text-xs xxs:text-base">
          {row.getValue("totalAmount")}
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
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="text-navbarColor">
                <DownloadSvg className="mr-2" />
                Download
              </DropdownMenuItem>
              <DropdownMenuItem className="text-navbarColor">
                <PrintSvg className="mr-2" />
                Print
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleDelete(invoice.id)}
                className="text-[#E84646] cursor-pointer"
              >
                <DeleteSvg className="mr-2" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

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
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => (
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
          <TableBody className="bg-[#FFF]">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className=""
                >
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id} className="p-2 md:p-4 text-left">
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
}

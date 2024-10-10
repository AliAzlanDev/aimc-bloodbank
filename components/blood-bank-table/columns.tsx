"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "./column-header";
import {
  batches,
  bloodGroups,
  gender,
  missingData,
  WillingToDonate,
} from "./data/filters";
import { BloodBank } from "./data/schema";

export const columns: ColumnDef<BloodBank>[] = [
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
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "Name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      const g = gender.find(
        (gender) => gender.value === row.getValue("Gender")
      );

      return (
        <div className="flex items-center">
          {g?.icon && <g.icon className="mr-2 h-4 w-4 text-muted-foreground" />}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("Name")}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "Father Name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Father Name" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px] truncate ">
        {row.getValue("Father Name")}
      </div>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "Roll No",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Roll No" />
    ),
    cell: ({ row }) => (
      <div className="w-[50px]">{row.getValue("Roll No")}</div>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "Gender",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Gender"
        className="hidden"
      />
    ),
    cell: ({ row }) => <div className="hidden">{row.getValue("Gender")}</div>,
    enableSorting: false,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableHiding: false,
  },
  {
    accessorKey: "Blood Group",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Blood Group" />
    ),
    cell: ({ row }) => {
      const bloodGroup = bloodGroups.find(
        (status) => status.value === row.getValue("Blood Group")
      );

      if (!bloodGroup) {
        return null;
      }

      return (
        <div className="flex w-[80px] items-center">
          {bloodGroup.icon && (
            <bloodGroup.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{bloodGroup.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "Batch",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Batch" />
    ),
    cell: ({ row }) => {
      const batch = batches.find(
        (batch) => batch.value === row.getValue("Batch")
      );

      if (!batch) {
        return null;
      }

      return (
        <div className="flex items-center">
          {/* {batch.icon && (
            <batch.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )} */}
          <span>{batch.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "Willing To Donate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Willing To Donate" />
    ),
    cell: ({ row }) => {
      const batch = WillingToDonate.find(
        (batch) => batch.value === row.getValue("Willing To Donate")
      );
      console.log(batch);

      if (!batch) {
        return null;
      }

      return (
        <div className="flex items-center">
          {batch.icon && (
            <batch.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{batch.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableSorting: false,
  },
  {
    accessorKey: "Missing Data",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Missing Data"
        className="hidden"
      />
    ),
    cell: ({ row }) => {
      const batch = missingData.find(
        (batch) => batch.value === row.getValue("Missing Data")
      );
      console.log(batch);

      if (!batch) {
        return null;
      }

      return (
        <div className="hidden">
          <span>{batch.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableSorting: false,
  },
  {
    accessorKey: "Contact No",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Contact No" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("Contact No")}</div>
    ),
    enableSorting: false,
  },

  {
    accessorKey: "Last Donation Date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Last Donation Date" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("Last Donation Date")}</div>
    ),
    enableSorting: false,
  },
];

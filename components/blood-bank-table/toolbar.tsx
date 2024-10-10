"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "./view-options";

import { DataTableFacetedFilter } from "./filter";
import {
  batches,
  bloodGroups,
  gender,
  missingData,
  WillingToDonate,
} from "./data/filters";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex flex-col gap-2 gap-y-3 lg:flex-row-reverse">
      <DataTableViewOptions table={table} />

      <div className="flex flex-1 items-center gap-2 flex-wrap">
        <Input
          placeholder="Filter name..."
          value={(table.getColumn("Name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("Name")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] md:w-[250px]"
        />
        {table.getColumn("Blood Group") && (
          <DataTableFacetedFilter
            column={table.getColumn("Blood Group")}
            title="Blood Group"
            options={bloodGroups}
          />
        )}
        {table.getColumn("Batch") && (
          <DataTableFacetedFilter
            column={table.getColumn("Batch")}
            title="Batch"
            options={batches}
          />
        )}
        {table.getColumn("Gender") && (
          <DataTableFacetedFilter
            column={table.getColumn("Gender")}
            title="Gender"
            options={gender}
          />
        )}
        {table.getColumn("Willing To Donate") && (
          <DataTableFacetedFilter
            column={table.getColumn("Willing To Donate")}
            title="Willing To Donate"
            options={WillingToDonate}
          />
        )}
        {table.getColumn("Missing Data") && (
          <DataTableFacetedFilter
            column={table.getColumn("Missing Data")}
            title="Missing Data"
            options={missingData}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}

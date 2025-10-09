"use client";

import { ColumnDef } from "@tanstack/react-table";
import { AgentGetOne } from "../../types";

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<AgentGetOne>[] = [
  {
    accessorKey: "id",
    header: "Agent Name",
  },
];

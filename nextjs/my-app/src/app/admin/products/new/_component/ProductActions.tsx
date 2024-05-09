"use client";

import { toggleProductAvailablity } from "@/app/admin/_actions/products";
import { DropdownMenu, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { startTransition, useTransition } from "react";

export function ActiveToggleDropdownItem({
  id,
  isAvailableForPurchase,
}: {
  id: string;
  isAvailableForPurchase: boolean;
}) {
  const [isPending, startTransition] = useTransition();
  return (
    <DropdownMenuItem
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await toggleProductAvailablity(id, !isAvailableForPurchase);
        });
      }}
    >
      {isAvailableForPurchase ? "Deactivate" : "Activate"}
    </DropdownMenuItem>
  );
}

export function DeleteDropdownItem({
  id,
  disabled,
}: {
  id: string;
  disabled: boolean;
}) {
  const [isPending, startTransition] = useTransition();
  return (
    <DropdownMenuItem
      disabled={isPending || disabled}
      onClick={() => {
        startTransition(async () => {
          await deleteProduct(id);
        });
      }}
    ></DropdownMenuItem>
  );
}

import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
export default function ListPage() {
  return (
    <div>
      <Button>
        <Link href="/list/new">New TODO</Link>
      </Button>
    </div>
  );
}

"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatCurrency } from "@/lib/formatter";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ProductForm() {
  const [priceIncents, setPriceInCents] = useState<number>();
  return (
    <form className="space-y-8">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" name="name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="priceInCents">Name</Label>
        <Input
          type="number"
          id="priceInCents"
          name="priceInCents"
          required
          value={priceIncents}
          onChange={(e) => setPriceInCents(Number(e.target.value) || undefined)}
        />
      </div>
      <div className="text-muted-foreground">
        {formatCurrency((priceIncents || 0) / 100)}
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" name="description" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="file">File</Label>
        <Input type="file" id="file" name="file" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="file">File</Label>
        <Input type="file" id="image" name="image" required />
      </div>
      <Button type="submit">Save</Button>
    </form>
  );
}

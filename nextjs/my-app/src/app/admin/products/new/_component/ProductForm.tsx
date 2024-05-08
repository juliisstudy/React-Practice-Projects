"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatCurrency } from "@/lib/formatter";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { addProducts } from "@/app/admin/_actions/products";
import { useFormStatus } from "react-dom";

export function ProductForm() {
  const [priceIncents, setPriceInCents] = useState<number>();
  return (
    <form action={action} className="space-y-8">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" name="name" required />
        {error.name && <div className="text-destructive">{error.name}</div>}
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
      {error.priceInCents && (
        <div className="text-destructive">{error.priceInCents}</div>
      )}

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" name="description" required />
        {error.description && (
          <div className="text-destructive">{error.description}</div>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="file">File</Label>
        <Input type="file" id="file" name="file" required />
        {error.file && <div className="text-destructive">{error.file}</div>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="image">Image</Label>
        <Input type="file" id="image" name="image" required />
        {error.image && <div className="text-destructive">{error.image}</div>}
      </div>
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Saving..." : "Save"}
    </Button>
  );
}

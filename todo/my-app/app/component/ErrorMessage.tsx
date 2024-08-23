import React, { PropsWithChildren, ReactNode } from "react";
import { Text } from "@radix-ui/themes";

export default function ErrorMessage({ children }: PropsWithChildren) {
  return <Text color="red" as="p"></Text>;
}

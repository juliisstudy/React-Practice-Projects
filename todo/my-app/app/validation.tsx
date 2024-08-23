import { z } from "zod";

export const createTodoSchema = z.object({
  title: z.string().min(1, "title is required").max(255),
  detail: z.string().min(1, "detail is required"),
});

"use client";
import React, { useState } from "react";
import { TextArea, TextField, Button, Callout, Text } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTodoSchema } from "@/app/validation";
import { z } from "zod";
import ErrorMessage from "@/app/component/ErrorMessage";
import Spinner from "@/app/component/Spinner";

type TodoForm = z.infer<typeof createTodoSchema>;
// interface TodoForm {
//   title: string;
//   detail: string;
// }

export default function NewTodo() {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoForm>({
    resolver: zodResolver(createTodoSchema),
  });
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      await axios.post("/api/todo", data);
      router.push("/todo");
    } catch (error) {
      setSubmitting(false);
      setError("error occured");
    }
  });

  return (
    <div>
      {error && (
        <Callout.Root color="red">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form onSubmit={onSubmit}>
        <TextField.Root placeholder="Title" {...register("title")}>
          <TextField.Slot />
        </TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>

        <Controller
          name="detail"
          control={control}
          render={({ field }) => <SimpleMDE placeholder="detail" {...field} />}
        />
        {errors.detail && (
          <Text color="red" as="p">
            {errors.detail.message}
          </Text>
        )}
        <Button disabled={isSubmitting}>
          Submit
          {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
}

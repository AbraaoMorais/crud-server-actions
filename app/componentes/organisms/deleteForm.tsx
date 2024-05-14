"use client";

import { useFormState } from "react-dom";
import { deleteTodo } from "@/app/actions";
import FormDeleteButton from "../molecules/FormDeleteButton";

const initialState = {
  message: '',
};

export function DeleteForm({ id, todo }: { id: number; todo: string }) {
  const [state, formAction] = useFormState(deleteTodo, initialState);

  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="todo" value={todo} />
        <FormDeleteButton />
        <p aria-live="polite" className="sr-only" role="status">
      </p>
    </form>
  );
}
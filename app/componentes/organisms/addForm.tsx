"use client";

import { useFormState } from "react-dom";
import { createTodo } from "@/app/actions";
import FormSubmitButton from "../molecules/FormSubmitButton";

const initialState = {
  message: "",
};



export function AddForm() {
  const [state, formAction] = useFormState(createTodo, initialState);

  return (
    <form action={formAction}>
      <label className="text-sm" htmlFor="todo">Adcionar uma tarefa</label>
      <div className="flex">
        <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-500" type="text" id="todo" name="todo" required />
        <FormSubmitButton />
      </div>
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
}
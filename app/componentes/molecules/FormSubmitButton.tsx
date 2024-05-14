'use client'
import Button from "../atoms/Button";

import { useFormStatus } from "react-dom";

export default function FormSubmitButton() {
    const { pending } = useFormStatus();
  
    return (
      <Button title="adcionar uma tarefa" className="p-2 rounded-lg hover:text-white hover:bg-blue-700 bg-blue-500 duration-200 ease-in hover:scale-95 transition-all" type="submit" aria-disabled={pending}>
         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="hover:fill-white" fill="#c7d8fc" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
      </Button>
    );
  }
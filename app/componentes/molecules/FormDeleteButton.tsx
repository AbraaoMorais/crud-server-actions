import { useFormStatus } from "react-dom";
import Button from "../atoms/Button";

export default function FormDeleteButton() {
    const { pending } = useFormStatus();
  
    return (
      <Button title="remover esta tarefa" className="p-2 rounded-lg hover:text-white hover:bg-red-700 bg-slate-400 duration-200 ease-in hover:scale-95 transition-all" type="submit" aria-disabled={pending}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg>
      </Button>
    );
}
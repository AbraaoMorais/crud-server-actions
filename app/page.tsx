import { sql } from '@vercel/postgres'

import { AddForm } from "@/app/componentes/organisms/addForm";
import { DeleteForm } from "@/app/componentes/organisms/deleteForm";


export default async function Home() {
  let data = await sql`SELECT * FROM todos`;
  const { rows: todos } = data;

  return (
    <>
    <main className='h-full w-full flex items-center justify-center bg-teal-lightest font-sans py-6'>
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <h1 className="text-blue-900 text-4xl text-center p-6 font-bold">LISTA DE TAREFAS</h1>
        <AddForm />
        <ul className='flex flex-col gap-4 py-6'>
          {todos.map((todo: any) => (
            <li className='w-full flex justify-between' key={todo.id}>
              {todo.text}
              <DeleteForm id={todo.id} todo={todo.text} />
            </li>
          ))}
        </ul>
      </div>
    </main>
    <footer className='flex justify-center items-center  container m-auto max-w-sm lg:max-w-lg rounded-lg text-center bg-slate-800 text-slate-300 text-sm'>Developed by: <strong className='text-vi text-green-400 font-light'>Abraão Morais</strong></footer></>
  );
}
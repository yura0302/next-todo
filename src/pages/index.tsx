import InputForm from "@/components/InputForm";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen  bg-slate-200">
        <h1 className="text-3xl bg-slate-200 w-2/5 text-center pt-4">
          My Todo
        </h1>
        <InputForm />
        <TodoList />
      </div>
    </>
  );
}

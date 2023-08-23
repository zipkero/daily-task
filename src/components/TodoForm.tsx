import { MdAdd } from "react-icons/md";
import { useState } from "react";

export default function TodoForm() {
  const [open, setOpen] = useState(false);

  const onToggle = () => setOpen(!open);

  return (
    <>
      {open && (
        <div className="w-full bottom-0 left-0 absolute">
          <form className="bg-slate-100 pt-8 px-8 pb-16 border-t-0 border-slate-200 rounded-bl-2xl rounded-br-2xl">
            <input
              type="text"
              placeholder="할 일을 입력 후, Enter 를 누르세요"
              autoFocus
              className="w-full px-4 py-2 box-border rounded-md border border-solid border-slate-50 outline-none focus:border-green-300"
            />
          </form>
        </div>
      )}
      <button
        className={`${
          open
            ? "bg-rose-400 hover:bg-rose-300 active:bg-rose-600 rotate-45"
            : "bg-green-400 hover:bg-green-300 active:bg-green-600"
        } translate-y-1/2 -translate-x-1/2 duration-150 transition-all ease-in border-none outline-none rounded-full text-white text-6xl flex justify-center items-center z-10 cursor-pointer w-20 h-20 absolute left-1/2 bottom-0`}
        onClick={onToggle}
      >
        <MdAdd />
      </button>
    </>
  );
}

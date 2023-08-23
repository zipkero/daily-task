import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import TaskHeaderDate from "./TaskHeaderDate.tsx";

export default function TaskHeader() {
  return (
    <header className="flex flex-col px-6 pt-8 border border-solid border-slate-50">
      <div className="flex justify-between items-center">
        <div className="w-1/12 cursor-pointer opacity-20 hover:opacity-100">
          <IoIosArrowDropleft onClick={() => alert("left")} size="2.5em" />
        </div>
        <TaskHeaderDate selectedKey={"2020-01-01"} />
        <div className="w-1/12 cursor-pointer opacity-20 hover:opacity-100">
          <IoIosArrowDropright onClick={() => alert("right")} size="2.5em" />
        </div>
      </div>
      <div className="flex justify-center items-center mt-5 text-green-300 text-lg font-bold">
        <span>할 일 2개 남음</span>
      </div>
    </header>
  );
}

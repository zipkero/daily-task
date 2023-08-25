import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import TaskHeaderDate from "./TaskHeaderDate.tsx";
import { useTaskDispatch, useTaskSelector } from "../hooks/useTaskSelector.ts";
import { getDateFromDateKey, getDateKeyFromDate } from "../utils/date.ts";
import { changeDateKey } from "../Task/slice.ts";

export default function TaskHeader() {
  const { currentDateKey, tasks } = useTaskSelector();
  const dispatch = useTaskDispatch();
  const remainingTasks = tasks.filter((task) => !task.done).length;

  const handleChangeDate = (num: number) => {
    const newDate = getDateFromDateKey(currentDateKey);
    newDate.setDate(newDate.getDate() + num);
    const newDateKey = getDateKeyFromDate(newDate);
    dispatch(changeDateKey(newDateKey));
  };

  return (
    <header className="flex flex-col px-6 pt-8 border border-solid border-slate-50">
      <div className="flex justify-between items-center">
        <div className="w-1/12 cursor-pointer opacity-20 hover:opacity-100">
          <IoIosArrowDropleft
            onClick={() => handleChangeDate(-1)}
            size="2.5em"
          />
        </div>
        <TaskHeaderDate selectedKey={currentDateKey} />
        <div className="w-1/12 cursor-pointer opacity-20 hover:opacity-100">
          <IoIosArrowDropright
            onClick={() => handleChangeDate(1)}
            size="2.5em"
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-5 text-green-300 text-lg font-bold">
        <span>할 일 {remainingTasks}개 남음</span>
      </div>
    </header>
  );
}

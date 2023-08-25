import TaskItem from "./TaskItem.tsx";
import { useEffect } from "react";
import {
  getTasksAsync,
  removeTaskAsync,
  changeDoneTaskAsync,
} from "../Task/slice.ts";
import { useTaskDispatch, useTaskSelector } from "../hooks/useTaskSelector.ts";

export default function TaskList() {
  const dispatch = useTaskDispatch();
  const { currentDateKey, tasks, error, loading } = useTaskSelector();

  useEffect(() => {
    dispatch(getTasksAsync());
  }, [dispatch, currentDateKey]);

  if (error) {
    return <>{error}</>;
  }

  const handleRemove = (id: string) => {
    dispatch(removeTaskAsync(id));
  };

  const handleChangeDone = (id: string, done: boolean) => {
    dispatch(changeDoneTaskAsync({ id, done }));
  };

  return (
    <div className="flex-1 pt-5 px-8 pb-12 overflow-y-auto">
      {loading ? (
        <div className="text-gray-200 text-center">Loading...</div>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id!}
            task={task.task}
            done={task.done}
            handleRemove={handleRemove}
            handleChangeDone={handleChangeDone}
          />
        ))
      )}
    </div>
  );
}

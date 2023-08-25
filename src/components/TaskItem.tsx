import { MdDone, MdDelete } from "react-icons/md";

interface Props {
  id: string;
  done: boolean;
  task: string;
  handleRemove: (id: string) => void;
  handleChangeDone: (id: string, done: boolean) => void;
}

export default function TaskItem({
  id,
  done,
  task,
  handleRemove,
  handleChangeDone,
}: Props) {
  return (
    <div className="flex items-center py-3 group">
      <div
        className={`w-8 h-8 rounded-full border-2 border-solid  text-2xl flex items-center justify-center cursor-pointer mr-5 ${
          done
            ? "border-green-300 text-green-300"
            : "border-gray-200 text-gray-200"
        }`}
        onClick={() => handleChangeDone(id, !done)}
      >
        {done && <MdDone />}
      </div>
      <div
        className={`flex-1 text-xl ${done ? "text-gray-200" : "text-gray-600"}`}
      >
        {task}
      </div>
      <div
        className="flex items-center justify-center text-gray-300 text-2xl cursor-pointer group-hover:visible hover:text-red-400 invisible"
        onClick={() => handleRemove(id)}
      >
        <MdDelete />
      </div>
    </div>
  );
}

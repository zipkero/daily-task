import { MdDone, MdDelete } from "react-icons/md";

interface Props {
  done: boolean;
  text: string;
}

export default function TodoItem({ done, text }: Props) {
  return (
    <div className="flex items-center py-3 group">
      <div
        className={`w-8 h-8 rounded-full border-2 border-solid  text-2xl flex items-center justify-center cursor-pointer mr-5 ${
          done
            ? "border-green-300 text-green-300"
            : "border-gray-200 text-gray-200"
        }`}
      >
        {done && <MdDone />}
      </div>
      <div
        className={`flex-1 text-xl ${done ? "text-gray-200" : "text-gray-600"}`}
      >
        {text}
      </div>
      <div className="flex items-center justify-center text-gray-300 text-2xl cursor-pointer group-hover:visible hover:text-red-400 invisible">
        <MdDelete />
      </div>
    </div>
  );
}

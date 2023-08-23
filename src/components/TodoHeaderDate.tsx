import {
  getDateFromDateKey,
  getDisplayDate,
  getDisplayDay,
} from "../utils/date.ts";

interface Props {
  selectedKey: string;
}

export default function TodoHeaderDate({ selectedKey }: Props) {
  const currentDate = getDateFromDateKey(selectedKey);
  return (
    <div className="grid">
      <h1 className="m-0 text-4xl text-neutral-700">
        {getDisplayDate(currentDate)}
      </h1>
      <div className="mt-1 text-xl text-neutral-400">
        {getDisplayDay(currentDate)}
      </div>
    </div>
  );
}

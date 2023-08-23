import TaskItem from "./TaskItem.tsx";

export default function TaskList() {
  return (
    <div className="flex-1 pt-5 px-8 pb-12 overflow-y-auto">
      <TaskItem text="프로젝트 생성하기" done={true} />
      <TaskItem text="컴포넌트 스타일링 하기" done={true} />
      <TaskItem text="Context 만들기" done={false} />
      <TaskItem text="기능 구현하기" done={false} />
    </div>
  );
}

import TodoItem from "./TodoItem.tsx";

export default function TodoList() {
  return (
    <div className="flex-1 pt-5 px-8 pb-12 overflow-y-auto">
      <TodoItem text="프로젝트 생성하기" done={true} />
      <TodoItem text="컴포넌트 스타일링 하기" done={true} />
      <TodoItem text="Context 만들기" done={false} />
      <TodoItem text="기능 구현하기" done={false} />
    </div>
  );
}

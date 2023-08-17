import styled from "@emotion/styled";
import TodoItem from "./TodoItem.tsx";

const Container = styled.div`
  flex: 1;
  padding: 20px 32px 48px;
  overflow-y: auto;
`;

export default function TodoList() {
  return (
    <Container>
      <TodoItem text="프로젝트 생성하기" done={true} />
      <TodoItem text="컴포넌트 스타일링 하기" done={true} />
      <TodoItem text="Context 만들기" done={false} />
      <TodoItem text="기능 구현하기" done={false} />
    </Container>
  );
}

import { css, Global } from "@emotion/react";
import TodoContainer from "./components/TodoContainer.tsx";
import TodoHeader from "./components/TodoHeader.tsx";
import TodoForm from "./components/TodoForm.tsx";
import TodoList from "./components/TodoList.tsx";

const styles = css`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <Global styles={styles} />
      <TodoContainer>
        <TodoHeader />
        <TodoList />
        <TodoForm />
      </TodoContainer>
    </>
  );
}

export default App;

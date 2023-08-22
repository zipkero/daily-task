import TodoContainer from "./components/TodoContainer.tsx";
import TodoHeader from "./components/TodoHeader.tsx";
import TodoForm from "./components/TodoForm.tsx";
import TodoList from "./components/TodoList.tsx";

function App() {
  return (
    <>
      <TodoContainer>
        <TodoHeader />
        <TodoList />
        <TodoForm />
      </TodoContainer>
    </>
  );
}

export default App;

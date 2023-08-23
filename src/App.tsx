import TaskContainer from "./components/TaskContainer.tsx";
import TaskHeader from "./components/TaskHeader.tsx";
import TaskForm from "./components/TaskForm.tsx";
import TaskList from "./components/TaskList.tsx";

function App() {
  return (
    <>
      <TaskContainer>
        <TaskHeader />
        <TaskList />
        <TaskForm />
      </TaskContainer>
    </>
  );
}

export default App;

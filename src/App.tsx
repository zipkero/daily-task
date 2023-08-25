import TaskContainer from "./components/TaskContainer.tsx";
import TaskHeader from "./components/TaskHeader.tsx";
import TaskForm from "./components/TaskForm.tsx";
import TaskList from "./components/TaskList.tsx";
import { store } from "./store.ts";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <TaskContainer>
        <TaskHeader />
        <TaskList />
        <TaskForm />
      </TaskContainer>
    </Provider>
  );
}

export default App;

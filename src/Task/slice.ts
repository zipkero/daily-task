import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Task } from "../types/Task.ts";
import {
  getTaskAll,
  insertTask,
  removeTask,
  updateTask,
} from "../api/taskApi.ts";
import { RootState } from "../store.ts";
import { getDateKeyFromDate } from "../utils/date.ts";

export interface TaskState {
  currentDateKey: string;
  tasks: Task[];
  loading: boolean;
  error?: string;
}

const initialState: TaskState = {
  currentDateKey: getDateKeyFromDate(new Date()),
  tasks: [],
  loading: false,
};

export const getTasksAsync = createAsyncThunk(
  "Task/GetTasks",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    return await getTaskAll(state.tasks.currentDateKey);
  },
);

export const addTaskAsync = createAsyncThunk(
  "Task/AddTask",
  async (task: Task, thunkAPI) => {
    try {
      const id = await insertTask(task);
      return { ...task, id };
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

export const removeTaskAsync = createAsyncThunk(
  "Task/RemoveTask",
  async (id: string, thunkAPI) => {
    try {
      await removeTask(id);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

export const changeDoneTaskAsync = createAsyncThunk(
  "Task/ChangeDoneTask",
  async ({ id, done }: { id: string; done: boolean }, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const targetTask = state.tasks.tasks.find((task) => task.id === id);
    if (targetTask) {
      const newtTask = {
        ...targetTask,
        done: done,
      };
      try {
        await updateTask(newtTask);
      } catch (e) {
        return thunkAPI.rejectWithValue(e);
      }
    }
  },
);

export const taskSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeDateKey: (state, action) => {
      state.currentDateKey = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTasksAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTasksAsync.fulfilled, (state, action) => {
      state.tasks = action.payload;
      state.loading = false;
    });
    builder.addCase(getTasksAsync.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    builder.addCase(addTaskAsync.fulfilled, (state, action) => {
      state.tasks.push(action.payload);
    });
    builder.addCase(addTaskAsync.rejected, (_, action) => {
      console.log(action.error.message);
    });

    builder.addCase(removeTaskAsync.fulfilled, (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.meta.arg);
    });

    builder.addCase(changeDoneTaskAsync.fulfilled, (state, action) => {
      const targetTask = state.tasks.find(
        (task) => task.id === action.meta.arg.id,
      );
      if (targetTask) {
        targetTask.done = action.meta.arg.done;
      }
    });
  },
});

export const { changeDateKey } = taskSlice.actions;
export default taskSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Task {
  id: string;
  title: string;
  type: string;
  priority: string;
  dueDate?: string;
  assignees: { name: string }[];
  commentCount: number;
  attachmentCount?: number;
}

export interface TaskState {
  tasks1: Task[];
  loading: boolean;
  error: string | null;
}

const initialState: TaskState = {
  tasks1: [],
  loading: false,
  error: null,
};

export const fetchTasks = createAsyncThunk<Task[]>(
  "tasks/fetchTasks",
  async () => {
    const response = await axios.get<Task[]>(
      "https://0688d508-833a-4f2b-9c5f-8b9e257094b1.mock.pstmn.io/get-all-tasks"
    );
    return response.data;
  }
);

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks1 = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch tasks.";
      });
  },
});

export default taskSlice.reducer;

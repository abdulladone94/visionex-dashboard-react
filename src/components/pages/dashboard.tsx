import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BoardColumn } from "../column";
import { TaskCard } from "../task-card";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { fetchTasks } from "../../store/taskSlice";

const initialTaskData = [
  {
    id: "1",
    title: "User Interview",
    type: "Research",
    priority: "low",
    dueDate: "Tomorrow",
    assignees: [{ name: "User 1" }],
    commentCount: 2,
    attachmentCount: 2,
  },
  {
    id: "2",
    title: "Design System",
    type: "Design",
    priority: "medium",
    assignees: [{ name: "User 2" }],
    commentCount: 8,
    attachmentCount: 3,
  },
  {
    id: "3",
    title: "UI Design",
    type: "Design",
    priority: "high",
    dueDate: "Tomorrow",
    assignees: [{ name: "User 3" }],
    commentCount: 2,
    attachmentCount: 2,
  },
  {
    id: "4",
    title: "Check Clients Feedback",
    type: "Feedback",
    priority: "low",
    dueDate: "22 December, 2024",
    assignees: [{ name: "User 4" }],
    commentCount: 8,
  },
  {
    id: "5",
    title: "Prototype",
    type: "Research",
    priority: "low",
    assignees: [{ name: "User 5" }],
    commentCount: 243,
    attachmentCount: 35,
  },
  {
    id: "6",
    title: "Detail Page",
    type: "Design",
    priority: "low",
    assignees: [{ name: "User 6" }],
    commentCount: 28,
    attachmentCount: 6,
  },
  {
    id: "7",
    title: "Group Management",
    type: "Other",
    priority: "low",
    assignees: [{ name: "User 7" }],
    commentCount: 329,
  },
  {
    id: "8",
    title: "Design System",
    type: "Design",
    priority: "low",
    assignees: [{ name: "User 8" }],
    commentCount: 31,
    attachmentCount: 8,
  },
  {
    id: "9",
    title: "Design System",
    type: "Design",
    priority: "low",
    assignees: [{ name: "User 8" }],
    commentCount: 31,
    attachmentCount: 8,
  },
];

const initialColumns = [
  {
    id: "TODO",
    title: "To Do",
    variant: null,
    count: 3,
    tasks: initialTaskData.slice(0, 3),
  },
  {
    id: "IN PROGRESS",
    title: "In Progress",
    variant: "progress",
    count: 3,
    tasks: initialTaskData.slice(3, 6),
  },
  {
    id: "APPROVED",
    title: "Approved",
    variant: "approved",
    count: 2,
    tasks: initialTaskData.slice(6, 8),
  },
  {
    id: "REJECT",
    title: "Reject",
    variant: "reject",
    count: 2,
    tasks: initialTaskData.slice(8, 9),
  },
];

export default function DashboardPage() {
  const [columns, setColumns] = useState(initialColumns);

  const dispatch = useDispatch();

  const { tasks1, loading, error } = useSelector((state: RootState) => {
    return state.task;
  });

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleDrop = (taskId, targetColumnId) => {
    setColumns((prevColumns) => {
      const sourceColumn = prevColumns.find((column) =>
        column.tasks.some((task) => task.id === taskId)
      );

      const task = sourceColumn.tasks.find((task) => task.id === taskId);
      sourceColumn.tasks = sourceColumn.tasks.filter(
        (task) => task.id !== taskId
      );

      const targetColumn = prevColumns.find(
        (column) => column.id === targetColumnId
      );
      targetColumn.tasks = [...targetColumn.tasks, task];

      return [...prevColumns];
    });
  };
  return (
    <DndProvider backend={HTML5Backend}>
      <main className="flex-1 overflow-auto p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Sport Xi Project</h1>
          <p className="text-sm text-muted-foreground">event production</p>
        </div>

        <div className="flex gap-6">
          {columns.map((column) => (
            <BoardColumn
              key={column.id}
              id={column.id}
              title={column.title}
              variant={column.variant}
              count={column.count}
              tasks={column.tasks}
              onDrop={handleDrop}
            >
              {column.tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  type={task.type}
                  priority={task.priority}
                  dueDate={task.dueDate}
                  assignees={task.assignees || []}
                  commentCount={task.commentCount || 0}
                  attachmentCount={task.attachmentCount || 0}
                />
              ))}
            </BoardColumn>
          ))}
        </div>
      </main>
    </DndProvider>
  );
}

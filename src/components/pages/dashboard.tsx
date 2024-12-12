import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BoardColumn } from "../column";
import { TaskCard } from "../task-card";

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
    tasks: initialTaskData.slice(8),
  },
];

export default function DashboardPage() {
  const [columns, setColumns] = useState(initialColumns);

  const handleDrop = (taskId, targetColumnId) => {
    setColumns((prevColumns) => {
      // Find the source column
      const sourceColumn = prevColumns.find((column) =>
        column.tasks.some((task) => task.id === taskId)
      );

      // Remove task from source column
      const task = sourceColumn.tasks.find((task) => task.id === taskId);
      sourceColumn.tasks = sourceColumn.tasks.filter(
        (task) => task.id !== taskId
      );

      // Find the target column and add the task
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
              //   tasks={column.tasks}
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
                  assignees={[{ name: "User 4" }]}
                  commentCount={8}
                />
              ))}
            </BoardColumn>
          ))}
        </div>
      </main>
    </DndProvider>
  );
}

import { BoardColumn } from "../column";
import { TaskCard } from "../task-card";

export default function DashboardPage() {
  return (
    <>
      <main className="flex-1 overflow-auto p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Sport Xi Project</h1>
          <p className="text-sm text-muted-foreground">event production</p>
        </div>

        <div className="flex gap-6">
          <BoardColumn title="To Do" count={3}>
            <TaskCard
              title="User Interview"
              type="Research"
              priority="low"
              dueDate="Tomorrow"
              assignees={[{ name: "User 1" }]}
              commentCount={2}
              attachmentCount={2}
            />
            <TaskCard
              title="Design System"
              type="Design"
              priority="medium"
              assignees={[{ name: "User 2" }]}
              commentCount={8}
              attachmentCount={3}
            />
          </BoardColumn>

          <BoardColumn title="In Progress" variant="progress" count={3}>
            <TaskCard
              title="UI Design"
              type="Design"
              priority="high"
              dueDate="Tomorrow"
              assignees={[{ name: "User 3" }]}
              commentCount={2}
              attachmentCount={2}
            />
            <TaskCard
              title="Check Clients Feedback"
              type="Feedback"
              priority="low"
              dueDate="22 April, 2022"
              assignees={[{ name: "User 4" }]}
              commentCount={8}
            />
          </BoardColumn>

          <BoardColumn title="Approved" variant="approved" count={2}>
            <TaskCard
              title="Prototype"
              type="Research"
              priority="low"
              assignees={[{ name: "User 5" }]}
              commentCount={243}
              attachmentCount={35}
            />
            <TaskCard
              title="Detail Page"
              type="Design"
              priority="low"
              assignees={[{ name: "User 6" }]}
              commentCount={28}
              attachmentCount={6}
            />
          </BoardColumn>

          <BoardColumn title="Reject" variant="reject" count={2}>
            <TaskCard
              title="Group Management"
              type="Other"
              priority="low"
              assignees={[{ name: "User 7" }]}
              commentCount={329}
            />
            <TaskCard
              title="Design System"
              type="Design"
              priority="low"
              assignees={[{ name: "User 8" }]}
              commentCount={31}
              attachmentCount={8}
            />
          </BoardColumn>
        </div>
      </main>
    </>
  );
}

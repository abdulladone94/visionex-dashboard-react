import { Plus } from "lucide-react";
import { ReactNode } from "react";

import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";

interface BoardColumnProps {
  title: string;
  count?: number;
  variant?: "todo" | "progress" | "approved" | "reject";
  children: ReactNode;
}

export function BoardColumn({
  title,
  count,
  variant = "todo",
  children,
}: BoardColumnProps) {
  return (
    <div className="flex h-full w-80 flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className={`rounded-full px-3 py-1 text-sm
            ${
              variant === "todo" ? "bg-secondary text-secondary-foreground" : ""
            }
            ${variant === "progress" ? "bg-orange-500 text-white" : ""}
            ${variant === "approved" ? "bg-green-500 text-white" : ""}
            ${variant === "reject" ? "bg-red-500 text-white" : ""}
          `}
          >
            {title}
          </div>
          {count && (
            <span className="text-sm text-muted-foreground">({count})</span>
          )}
        </div>
        <Button variant="ghost" size="icon">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <ScrollArea className="h-full">
        <div className="flex flex-col gap-4 pr-4">{children}</div>
      </ScrollArea>
    </div>
  );
}
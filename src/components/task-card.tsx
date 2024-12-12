import { Clock, Link2, MessageCircle } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

interface TaskCardProps {
  title: string;
  type: string;
  priority?: "low" | "medium" | "high";
  dueDate?: string;
  assignees?: Array<{
    name: string;
    image?: string;
  }>;
  commentCount?: number;
  attachmentCount?: number;
}

export function TaskCard({
  title,
  type,
  priority = "low",
  dueDate,
  assignees = [],
  commentCount,
  attachmentCount,
}: TaskCardProps) {
  return (
    <Card>
      <CardHeader className="p-4">
        <div className="flex items-start justify-between gap-4">
          <Badge
            variant="outline"
            className={
              type === "Design"
                ? "border-red-500 text-red-500"
                : type === "Research"
                ? "border-green-500 text-green-500"
                : "border-blue-500 text-blue-500"
            }
          >
            {type}
          </Badge>
          <Button variant="ghost" size="icon">
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </Button>
        </div>
        <h3 className="text-sm font-medium">{title}</h3>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            {assignees.map((assignee, i) => (
              <Avatar key={i} className="h-6 w-6 border-2 border-background">
                <AvatarImage src={assignee.image} />
                <AvatarFallback>{assignee.name[0]}</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <Badge variant="secondary" className="ml-auto">
            {priority}
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="px-4 py-3 text-sm text-muted-foreground">
        <div className="flex items-center gap-4">
          {dueDate && (
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {dueDate}
            </div>
          )}
          {commentCount && (
            <div className="flex items-center gap-1">
              <MessageCircle className="h-3 w-3" />
              {commentCount}
            </div>
          )}
          {attachmentCount && (
            <div className="flex items-center gap-1">
              <Link2 className="h-3 w-3" />
              {attachmentCount}
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

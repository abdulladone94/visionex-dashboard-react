import {
  Calendar,
  FolderRoot,
  Grid,
  LogOut,
  MessageSquare,
  Plus,
  Users,
} from "lucide-react";
import { Link } from "react-router";

import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";

const navigation = [
  {
    title: "Root folder",
    icon: FolderRoot,
    variant: "ghost" as const,
    isWorkspace: true,
  },
  {
    title: "Dashboard",
    icon: Grid,
    href: "/dashboard",
  },
  {
    title: "Boards",
    icon: Plus,
    href: "/boards",
    isExpanded: true,
  },
  {
    title: "Messages",
    icon: MessageSquare,
    href: "/messages",
    badge: 3,
  },
  {
    title: "Calendar",
    icon: Calendar,
    href: "/calendar",
  },
  {
    title: "Team members",
    icon: Users,
    href: "/team",
  },
];

export function Sidebar() {
  return (
    <div className="flex h-full w-64 flex-col border-r">
      <ScrollArea className="flex-1 p-4">
        <div className="flex flex-col gap-2">
          {navigation.map((item) => (
            <Button
              key={item.title}
              variant={item.variant || "ghost"}
              className="justify-start gap-2"
              asChild
            >
              <Link to={item.href || "#"}>
                <item.icon className="h-4 w-4" />
                {item.title}
                {item.badge && (
                  <span className="ml-auto rounded bg-primary px-1.5 text-xs text-primary-foreground">
                    {item.badge}
                  </span>
                )}
              </Link>
            </Button>
          ))}
        </div>
      </ScrollArea>
      <div className="border-t p-4">
        <Button variant="ghost" className="w-full justify-start gap-2">
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );
}

import { Bell, Plus, Search, Settings } from "lucide-react";
import { Link } from "react-router";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Header() {
  return (
    <header className="flex h-14 items-center justify-between border-b px-4">
      <Link to="/" className="flex items-center gap-2 font-semibold">
        <div className="rounded bg-primary p-1 text-primary-foreground">
          Board
        </div>
        App
      </Link>

      <div className="flex items-center gap-4">
        <Button variant="default" size="sm">
          <Plus className="mr-2 h-4 w-4" />
          Create new board
        </Button>

        <div className="flex w-64 items-center gap-2 rounded-md border px-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search tasks..."
            className="border-0 p-2 focus-visible:ring-0"
          />
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <div className="h-6 w-6 rounded-full bg-primary" />
          </Button>
        </div>
      </div>
    </header>
  );
}

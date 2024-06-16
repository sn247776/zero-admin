import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavLink } from "react-router-dom";
import Logo from "./logo";
import { Menu } from "lucide-react";
import DashboardLinks from "./dashboard-link";
function MobileNavs() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <Logo />
        <nav className="grid gap-2 text-lg font-medium">
          {DashboardLinks.map((links) => (
            <NavLink
              to={links.href}
              className={({ isActive }) => {
                return `mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`;
              }}
            >
              <links.icon className="h-5 w-5" />
              {links.label}
            </NavLink>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNavs;

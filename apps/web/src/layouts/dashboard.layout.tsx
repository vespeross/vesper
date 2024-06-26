import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import Command from "@/components/command";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useUser } from "@/hooks";
import {
  Command as CommandIcon,
  Cube,
  CubeFocus,
  Gear,
  Lightning,
  Package,
  Speedometer,
} from "@phosphor-icons/react";
import { Link, Outlet, useLocation } from "react-router-dom";

const sidebarItems = [
  {
    path: "/dashboard",
    icon: <Speedometer className="h-5 w-5" />,
    label: "Dashboard",
  },
  {
    path: "/dashboard/projects",
    icon: <Cube className="h-5 w-5" />,
    label: "Projects",
  },
  {
    path: "/dashboard/containers",
    icon: <CubeFocus className="h-5 w-5" />,
    label: "Containers",
  },
  {
    path: "/dashboard/settings",
    icon: <Gear className="h-5 w-5" />,
    label: "Settings",
  },
];

export const DashboardLayout: React.FC = () => {
  const { logOut, user } = useUser();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
          <div
            onClick={scrollToTop}
            className="group flex cursor-pointer h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Package className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">vesper</span>
          </div>
          {sidebarItems.map((item) => (
            <SideBarItem key={item.path} {...item} />
          ))}
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Gear className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky justify-between top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <div>
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="sm:hidden">
                  <Lightning className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="sm:max-w-xs">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    to="#"
                    className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                  >
                    <Package className="h-5 w-5 transition-all group-hover:scale-110" />
                    <span className="sr-only">vesper</span>
                  </Link>
                  {sidebarItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      {item.icon}
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <DynamicBreadcrumb />
          </div>
          <div className="relative ml-auto w-fit items-center gap-2 lg:flex hidden">
            <span>Press</span>
            <div className="flex gap-2 items-center bg-neutral-200 px-2.5 py-0.5 rounded-md border">
              <CommandIcon weight="duotone" />
              <span>+ K</span>
            </div>
            to open command palette
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <img
                  src={`https://i.pravatar.cc/150?u=${user?.email}`}
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={logOut}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="p-4 sm:px-6 sm:py-0">
          <Outlet />
        </main>
        <Command />
      </div>
    </div>
  );
};

const SideBarItem = ({
  path,
  icon,
  label,
}: {
  path: string;
  icon: React.ReactNode;
  label: string;
}) => {
  const { pathname } = useLocation();
  const isActive = pathname === path;
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          to={path}
          className={`flex h-9 w-9 items-center justify-center rounded-lg ${isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground"} transition-colors hover:text-foreground md:h-8 md:w-8`}
        >
          {icon}
          <span className="sr-only">{label}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">{label}</TooltipContent>
    </Tooltip>
  );
};

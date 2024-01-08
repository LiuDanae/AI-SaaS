"use client";
import { Menu } from "lucide-react";
import { Button } from "./button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./sidebar";

const MobileSidebar = ({
  apiLimitCount = 0,
}: {
  apiLimitCount: number;
}) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar apiLimitCount={apiLimitCount} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;

import  MobileSidebar  from "./mobile-sidebar";
import { UserButton } from "@clerk/nextjs";
import { getApiLimitCount } from "@/lib/api-limit";

const Navbar = async() => {
  const apiLimitCount = await getApiLimitCount();
  return (
    <div className="flex items-center p-4">
      <MobileSidebar apiLimitCount={apiLimitCount}/>
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/"></UserButton>
      </div>
    </div>
  );
};

export default Navbar;

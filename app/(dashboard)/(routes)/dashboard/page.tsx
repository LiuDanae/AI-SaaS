import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (<div>
    <p>dashboard(protected)</p>
    <UserButton afterSignOutUrl="/"></UserButton>
  </div>
)}
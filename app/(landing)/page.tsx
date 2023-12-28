import { Button } from "@/components/ui/button";
import  Link  from "next/link";

export default function LandingPage() {
  return (
   <div>
    LandingPage(Unprotected)
 <div>
  <Link href='/sign-in'></Link>
  <Button>login</Button>
</div>
 <div>
  <Link href='/sign-up'></Link>
  <Button>Register</Button>
</div>
   </div>
  )}

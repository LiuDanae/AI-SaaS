'use client'
import { Menu } from "lucide-react"
import { Button } from "./button";

const MobileSidebar = () => {
  return (
    <div> <Button variant='ghost' size='icon' className="md:hidden"><Menu /></Button>
     </div>
  )
}

export default MobileSidebar
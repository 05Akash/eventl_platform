import Image from "next/image"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Separator } from "./ui/separator"
import Navbar from "./Navbar"

const MobNav = () => {
  return (
    <nav className="md:hidden">
          <Sheet>
              <SheetTrigger className="align-middle">
                  <Image
                      src="/assets/icons/menu.svg"
                      alt="menu bar"
                      width={24}
                      height={24}
                      className="cursor-pointer"
                  />
              </SheetTrigger>
              <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
                  <Image
                      src="/assets/images/logo.svg"
                      alt="logo"
                      width={128}
                      height={38}
                  />
                  <Separator className="border border-gray-50" />
                  <Navbar />
              </SheetContent>
      </Sheet>
    </nav>
  )
}

export default MobNav

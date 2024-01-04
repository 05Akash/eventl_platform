import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import Navbar from "./Navbar"
import MobNav from "./MobNav"

const Header = () => {
    return (
      <header className="w-full border-b">
            <div className="wrapper flex-between">
                <Link href="/" className="w-36 ">
                    <Image
                        src="/assets/images/logo.svg"
                        alt="logo"
                        width={128}
                        height={38}
                    />
                </Link>
                <SignedIn>
                    <div className="md:flex-between hidden w-full max-w-xs">
                        <Navbar />
                    </div>
                </SignedIn>
                <div className="flex w-32 justify-end gap-3">
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                        <MobNav />
                    </SignedIn>
                    <SignedOut>
                        <Button asChild className="rounded-full" size="lg">
                            <Link href="/sign-in">
                                Login
                            </Link>
                        </Button>
                    </SignedOut>
                </div>
        </div>
      </header>
    )
  }
  
  export default Header
  
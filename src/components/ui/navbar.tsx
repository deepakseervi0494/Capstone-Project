import { UserButton } from "@/features/auth/components/user-button";


function Navbar() {
  return (
    <nav className="pt-4 px-6 flex items-center justify-between">
        <div className="flex-col hidden lg:flex">
            <h1 className="text-xl font-semibold">TEAM - 131</h1>
            <p className="text-muted-foreground text-2xl border-grey border-2 rounded-md px-3">FROM TEXTUAL THREADS TO DIMENSIONAL FACES</p>
        </div>
        <UserButton></UserButton>
    </nav>
  )
}

export default Navbar;
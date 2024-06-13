import { ThemeSwitcher } from "@/components/theme-switcher"
import Image from "next/image"
import logo from "/public/img/logo.png"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center">
      <Image src={logo} alt="Quack Visual!" className="size-32 aspect-auto" />
      <span className="text-4xl font-bold">Quack!</span>

      <div className="absolute top-4 right-4">
        <ThemeSwitcher />
      </div>
    </main>
  )
}

import { ThemeSwitcher } from "@/components/theme-switcher"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <span className="text-4xl font-bold">Quack!</span>

      <div className="absolute top-4 right-4">
        <ThemeSwitcher />
      </div>
    </main>
  )
}

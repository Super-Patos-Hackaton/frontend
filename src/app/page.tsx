import Image from "next/image";
import logo from "/public/img/logo.png";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center">
      <Image src={logo} alt="Quack Visual!" />
      <span className="text-4xl font-bold">Quack!</span>
    </main>
  );
}

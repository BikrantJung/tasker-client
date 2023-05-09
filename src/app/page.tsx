import { Navbar } from "@/components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
    </main>
  );
}

import { ReactNode } from "react";
import "@/styles/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section className="pt-20 flex"> {children} </section>;
}

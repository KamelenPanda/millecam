import { ReactNode } from "react";
import Container from "./Container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  dark?: boolean;
};

export default function Section({ children, className = "", dark = false }: SectionProps) {
  return (
    <section className={`py-20 ${dark ? "bg-ink text-paper" : ""} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

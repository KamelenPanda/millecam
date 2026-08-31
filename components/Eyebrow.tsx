export default function Eyebrow({ children }: { children: string }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-terracotta">
      {children}
    </p>
  );
}

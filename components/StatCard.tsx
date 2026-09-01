export default function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-t-2 border-terracotta pt-4 text-center">
      <p className="font-serif text-4xl font-bold text-ink">{value}</p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  );
}

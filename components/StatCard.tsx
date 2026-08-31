export default function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="border border-line bg-white p-6 text-center">
      <p className="font-serif text-4xl font-bold text-terracotta">{value}</p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  );
}

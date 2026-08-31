type Status = "Conform" | "Aandachtspunt" | "Kritiek";

const COLORS: Record<Status, string> = {
  Conform: "bg-status-conform",
  Aandachtspunt: "bg-status-aandacht",
  Kritiek: "bg-status-kritiek",
};

export default function StatusBadge({ status }: { status: Status }) {
  return (
    <span className={`inline-block rounded px-3 py-1 text-xs font-semibold text-paper ${COLORS[status]}`}>
      {status}
    </span>
  );
}

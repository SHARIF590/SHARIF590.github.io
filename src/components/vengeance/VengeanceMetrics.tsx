import { Zap, CheckCircle2, ShieldAlert, Clock } from "lucide-react";

export function VengeanceMetrics() {
  const metrics = [
    {
      icon: <Clock className="h-4 w-4" />,
      label: "Direct Turnaround",
      value: "< 24 HRS",
      subtext: "Prompt client response",
    },
    {
      icon: <CheckCircle2 className="h-4 w-4" />,
      label: "Delivery Metric",
      value: "100%",
      subtext: "Production standard",
    },
    {
      icon: <Zap className="h-4 w-4" />,
      label: "Frame Budget",
      value: "60 FPS",
      subtext: "Hardware-accelerated",
    },
    {
      icon: <ShieldAlert className="h-4 w-4" />,
      label: "Architecture",
      value: "MODERN",
      subtext: "React 19 & Tailwind",
    },
  ];

  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10">
      {metrics.map((m, i) => (
        <div
          key={i}
          className="relative group overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
        >
          <div className="flex items-center justify-between text-neutral-400 mb-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
              {m.label}
            </span>
            <span
              className="transition-transform duration-300 group-hover:scale-110"
              style={{ color: "var(--accent-color, #10B981)" }}
            >
              {m.icon}
            </span>
          </div>

          <p className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-white">
            {m.value}
          </p>
          <p className="mt-1 text-xs text-neutral-400">{m.subtext}</p>
        </div>
      ))}
    </div>
  );
}

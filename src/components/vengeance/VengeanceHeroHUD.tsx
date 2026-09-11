import { useEffect, useState } from "react";
import { Activity, Radio, Cpu } from "lucide-react";

export function VengeanceHeroHUD() {
  const [latency, setLatency] = useState(14);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(12 + Math.floor(Math.random() * 6));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-wrap items-center justify-between gap-3 border-y border-white/10 bg-white/[0.02] py-2 px-4 text-[11px] font-mono tracking-wider text-neutral-400 backdrop-blur-md">
      {/* Geolocation Tag */}
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span
            className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
            style={{ backgroundColor: "var(--accent-color, #10B981)" }}
          />
          <span
            className="relative inline-flex h-2 w-2 rounded-full"
            style={{ backgroundColor: "var(--accent-color, #10B981)" }}
          />
        </span>
        <span className="text-neutral-300 font-semibold">
          DHAKA, BD [23.8103° N, 90.4125° E]
        </span>
      </div>

      {/* Telemetry Chips */}
      <div className="flex items-center gap-6">
        <div className="hidden sm:flex items-center gap-1.5">
          <Activity className="h-3 w-3 text-neutral-500" />
          <span>LATENCY:</span>
          <span
            className="font-bold transition-all duration-300"
            style={{ color: "var(--accent-color, #10B981)" }}
          >
            {latency}ms
          </span>
        </div>

        <div className="hidden md:flex items-center gap-1.5">
          <Cpu className="h-3 w-3 text-neutral-500" />
          <span>ENGINE:</span>
          <span className="text-neutral-300">REACT 19 + VITE</span>
        </div>

        <div className="flex items-center gap-1.5">
          <Radio className="h-3 w-3 text-neutral-500" />
          <span>STATUS:</span>
          <span className="text-white font-semibold flex items-center gap-1">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "var(--accent-color, #10B981)" }}
            />
            AVAILABLE FOR CONTRACTS
          </span>
        </div>
      </div>
    </div>
  );
}

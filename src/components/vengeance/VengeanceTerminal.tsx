import React, { useState, useRef, useEffect } from "react";
import confetti from "canvas-confetti";
import { Terminal as TerminalIcon, CornerDownLeft, Volume2, VolumeX } from "lucide-react";
import { soundFx } from "@/lib/sound";

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
}

export function VengeanceTerminal() {
  const [input, setInput] = useState("");
  const [soundActive, setSoundActive] = useState(true);
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: "init-1",
      command: "sharif --status",
      output: (
        <div className="space-y-1 text-xs">
          <p className="text-emerald-400 font-semibold font-mono">
            [SYS_OK] Sharif's Neural Terminal v2.4 initialized.
          </p>
          <p className="text-neutral-400 font-mono">
            Type <span className="text-white font-bold">help</span> or click quick pills below to explore commands.
          </p>
        </div>
      ),
    },
  ]);
  const [isMatrixActive, setIsMatrixActive] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement | null>(null);
  const matrixCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Auto scroll to bottom
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  // Matrix digital rain effect (performance optimized with 30fps throttle)
  useEffect(() => {
    if (!isMatrixActive) return;
    const canvas = matrixCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.parentElement?.clientWidth || 600;
    canvas.height = canvas.parentElement?.clientHeight || 300;

    const chars = "SHARIF010101XYZ0123456789$#%@*&";
    const fontSize = 12;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    let animationId: number;
    let lastTime = 0;

    const drawMatrix = (currentTime: number) => {
      animationId = requestAnimationFrame(drawMatrix);

      // Throttle matrix animation to ~30fps for ultra-smooth host performance
      if (currentTime - lastTime < 33) return;
      lastTime = currentTime;

      ctx.fillStyle = "rgba(10, 10, 10, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#10B981";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    animationId = requestAnimationFrame(drawMatrix);
    return () => cancelAnimationFrame(animationId);
  }, [isMatrixActive]);

  const toggleAudio = () => {
    const active = soundFx.toggleSound();
    setSoundActive(active);
    if (active) soundFx.playClick();
  };

  const executeCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    soundFx.playClick();

    let outputNode: React.ReactNode = null;

    switch (trimmed) {
      case "help":
        outputNode = (
          <div className="space-y-1.5 text-xs text-neutral-300 font-mono">
            <p className="text-white font-semibold">Available Operations:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 pl-2">
              <div><span className="text-emerald-400 font-bold">bio</span> : Sharif's background &amp; mission</div>
              <div><span className="text-emerald-400 font-bold">projects</span> : Highlighted engineering works</div>
              <div><span className="text-emerald-400 font-bold">skills</span> : Full tech stack &amp; tooling</div>
              <div><span className="text-emerald-400 font-bold">contact</span> : Direct outreach channels</div>
              <div><span className="text-emerald-400 font-bold">matrix</span> : Toggle live cyber rain stream</div>
              <div><span className="text-emerald-400 font-bold">confetti</span> : Launch celebration particle burst</div>
              <div><span className="text-emerald-400 font-bold">clear</span> : Wipe terminal history</div>
            </div>
          </div>
        );
        break;

      case "bio":
        outputNode = (
          <div className="space-y-1 text-xs text-neutral-300 font-mono">
            <p className="text-white font-semibold">ABOUT SHARIF:</p>
            <p>Creative Designer &amp; Web Developer based in Bangladesh.</p>
            <p>Specializes in high-performance frontend interfaces with React 19, custom micro-animations, and Python-powered automation workflows.</p>
          </div>
        );
        break;

      case "projects":
        outputNode = (
          <div className="space-y-1.5 text-xs text-neutral-300 font-mono">
            <p className="text-white font-semibold">FEATURED REPOSITORIES:</p>
            <p>1. <span className="text-emerald-400 font-bold">Restaurant Website</span> : Mobile-first reservations &amp; menu system.</p>
            <p>2. <span className="text-emerald-400 font-bold">Design For Agriculture</span> : Farm telemetry &amp; crop analytics dashboard.</p>
            <p>3. <span className="text-emerald-400 font-bold">Chicken Shop E-commerce</span> : Storefront &amp; automated dispatch logic.</p>
            <p>4. <span className="text-emerald-400 font-bold">Mining Systems</span> : Telemetry &amp; telemetry monitoring engine.</p>
            <p>5. <span className="text-emerald-400 font-bold">Downloads Organizer</span> : Automated desktop file organizer.</p>
          </div>
        );
        break;

      case "skills":
        outputNode = (
          <div className="space-y-1.5 text-xs text-neutral-300 font-mono">
            <p className="text-white font-semibold">CORE CAPABILITIES &amp; STACK:</p>
            <p><span className="text-emerald-400">Frontend:</span> React 19, TypeScript, Tailwind CSS, Vite, Framer Motion, HTML5/CSS3</p>
            <p><span className="text-emerald-400">Automation:</span> Python, Bash, System CLI Tools, Batch Operations</p>
            <p><span className="text-emerald-400">Design:</span> Figma, UI/UX Wireframing, Responsive Micro-Interactions</p>
          </div>
        );
        break;

      case "contact":
        outputNode = (
          <div className="space-y-1 text-xs text-neutral-300 font-mono">
            <p className="text-white font-semibold">DIRECT COMMUNICATIONS:</p>
            <p>GitHub: <a href="https://github.com/SHARIF590" target="_blank" rel="noreferrer" className="text-emerald-400 underline">github.com/SHARIF590</a></p>
            <p>Response Time: Within 24 hours.</p>
          </div>
        );
        break;

      case "matrix":
        setIsMatrixActive((prev) => !prev);
        soundFx.playLaser();
        outputNode = (
          <p className="text-xs font-mono text-emerald-400">
            {isMatrixActive ? "Matrix visualization terminated." : "Cyber stream activated. Check the terminal background!"}
          </p>
        );
        break;

      case "confetti":
        soundFx.playSuccess();
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#10B981", "#34d399", "#ffffff", "#059669"],
        });
        outputNode = (
          <p className="text-xs font-mono text-emerald-400">
            * BOOM! Confetti deployed successfully! *
          </p>
        );
        break;

      case "clear":
        setLogs([]);
        setInput("");
        return;

      default:
        outputNode = (
          <p className="text-xs font-mono text-rose-400">
            Command not recognized: "{trimmed}". Type <span className="text-white font-bold">help</span> to view commands.
          </p>
        );
    }

    setLogs((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        command: cmdText,
        output: outputNode,
      },
    ]);
    setInput("");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
  };

  const quickPills = ["help", "bio", "projects", "skills", "matrix", "confetti", "clear"];

  return (
    <section id="terminal" className="relative py-20 sm:py-28 border-t border-white/10 bg-[#0A0A0A]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-mono tracking-wider uppercase text-neutral-300">
            <TerminalIcon className="h-3.5 w-3.5" style={{ color: "var(--accent-color, #10B981)" }} />
            <span>Vengeance Interactive CLI</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white font-syne">
            Direct Terminal Access
          </h2>
          <p className="mt-2 text-sm text-neutral-400">
            Run commands directly or click quick action chips to interactively query Sharif's portfolio engine.
          </p>
        </div>

        {/* Terminal Window Box */}
        <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#0C0C0C] shadow-2xl ring-1 ring-white/5">
          {/* Matrix canvas background if active */}
          {isMatrixActive && (
            <canvas
              ref={matrixCanvasRef}
              className="absolute inset-0 pointer-events-none opacity-40 z-0"
            />
          )}

          {/* Window Chrome Titlebar */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 bg-[#141414] px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono text-neutral-400">
                sharif@mainframe: ~/portfolio-cli
              </span>
            </div>
            
            {/* Audio Toggle & Status */}
            <div className="flex items-center gap-3 text-[11px] font-mono text-neutral-400">
              <button
                onClick={toggleAudio}
                type="button"
                className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 hover:border-white/20 hover:text-white transition-colors"
                title={soundActive ? "Mute cyber audio fx" : "Enable cyber audio fx"}
              >
                {soundActive ? (
                  <>
                    <Volume2 className="h-3.5 w-3.5 text-emerald-400" />
                    <span className="hidden sm:inline text-[10px]">AUDIO: ON</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="h-3.5 w-3.5 text-neutral-500" />
                    <span className="hidden sm:inline text-[10px]">AUDIO: OFF</span>
                  </>
                )}
              </button>
              <div className="flex items-center gap-1.5 text-neutral-500">
                <span className="hidden sm:inline">BASH 5.2</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Quick Command Pills */}
          <div className="relative z-10 flex flex-wrap items-center gap-2 border-b border-white/10 bg-[#111111] px-4 py-2 text-xs">
            <span className="text-neutral-500 font-mono text-[11px]">Quick Action:</span>
            {quickPills.map((pill) => (
              <button
                key={pill}
                type="button"
                onClick={() => executeCommand(pill)}
                className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-neutral-300 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white active:scale-95"
              >
                {pill}
              </button>
            ))}
          </div>

          {/* Terminal Body */}
          <div className="relative z-10 max-h-[360px] min-h-[260px] overflow-y-auto p-4 sm:p-6 space-y-4 font-mono text-sm">
            {logs.map((log) => (
              <div key={log.id} className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <span style={{ color: "var(--accent-color, #10B981)" }}>sharif@node:~$</span>
                  <span className="text-white font-medium">{log.command}</span>
                </div>
                <div className="pl-3 border-l border-white/10 py-0.5">
                  {log.output}
                </div>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Input Prompt */}
          <form
            onSubmit={handleFormSubmit}
            className="relative z-10 flex items-center gap-2 border-t border-white/10 bg-[#121212] px-4 py-3"
          >
            <span
              className="text-xs font-mono font-bold shrink-0"
              style={{ color: "var(--accent-color, #10B981)" }}
            >
              sharif@node:~$
            </span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type 'help', 'matrix', 'projects', or 'skills'..."
              className="w-full bg-transparent font-mono text-xs text-white placeholder-neutral-500 outline-none"
            />
            <button
              type="submit"
              className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-neutral-400 hover:border-white/30 hover:bg-white/10 hover:text-white transition-colors shrink-0 active:scale-95"
              title="Execute command"
            >
              <CornerDownLeft className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

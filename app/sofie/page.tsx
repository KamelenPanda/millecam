import type { Metadata } from "next";
import { Fraunces, Quicksand } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-sofie-serif",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sofie-sans",
});

export const metadata: Metadata = {
  title: "Voor Sofie",
  description: "Een klein berichtje voor Sofie Willems.",
  robots: { index: false, follow: false },
};

const CONFETTI = [
  { top: "8%", left: "12%", rotate: "-12deg", color: "#FF8FA3", size: 18 },
  { top: "18%", left: "82%", rotate: "20deg", color: "#FFD166", size: 22 },
  { top: "32%", left: "6%", rotate: "8deg", color: "#8ECAE6", size: 16 },
  { top: "68%", left: "88%", rotate: "-20deg", color: "#B388EB", size: 20 },
  { top: "78%", left: "15%", rotate: "15deg", color: "#FF8FA3", size: 14 },
  { top: "12%", left: "48%", rotate: "-6deg", color: "#FFD166", size: 14 },
  { top: "85%", left: "60%", rotate: "10deg", color: "#8ECAE6", size: 18 },
  { top: "50%", left: "92%", rotate: "-15deg", color: "#B388EB", size: 16 },
  { top: "55%", left: "4%", rotate: "22deg", color: "#FFD166", size: 16 },
];

export default function SofiePage() {
  return (
    <div
      className={`${fraunces.variable} ${quicksand.variable} min-h-screen`}
      style={{
        background: "linear-gradient(135deg, #FFF1E6 0%, #FDE2E4 45%, #E2ECE9 100%)",
        fontFamily: "var(--font-sofie-sans), sans-serif",
      }}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {CONFETTI.map((c, i) => (
          <span
            key={i}
            aria-hidden="true"
            style={{
              position: "absolute",
              top: c.top,
              left: c.left,
              width: c.size,
              height: c.size,
              background: c.color,
              borderRadius: "6px",
              transform: `rotate(${c.rotate})`,
              opacity: 0.8,
            }}
          />
        ))}
      </div>

      <main className="relative flex min-h-full items-center justify-center px-6 py-20">
        <div
          className="w-full max-w-lg bg-white/90 px-8 py-12 text-center shadow-[0_30px_80px_rgba(80,40,60,0.18)] backdrop-blur-sm"
          style={{ borderRadius: "28px" }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "#C9184A" }}
          >
            Speciaal voor jou
          </p>

          <h1
            className="mt-4 text-4xl italic"
            style={{ fontFamily: "var(--font-sofie-serif), serif", color: "#3A2E39", fontWeight: 600 }}
          >
            Beste Sofie
          </h1>

          <div className="mt-7 space-y-5 text-left text-[17px] leading-relaxed" style={{ color: "#4A3F46" }}>
            <p>
              Dit is gewoon een klein berichtje om te zeggen wat eigenlijk allang gezegd had moeten
              worden: je bent de beste collega die men zich maar kan wensen.
            </p>
            <p>
              Een echte supervrouw, door en door. En niet alleen voor mij: iedereen die met jou werkt,
              ziet je graag.
            </p>
            <p>
              Dus mag dit ook even gezegd zijn: je mag gerust wat meer in jezelf geloven. 😉
            </p>
          </div>

          <p
            className="mt-9 text-sm"
            style={{ fontFamily: "var(--font-sofie-serif), serif", fontStyle: "italic", color: "#C9184A" }}
          >
            Met veel waardering,
            <br />
            Robin
          </p>
        </div>
      </main>
    </div>
  );
}

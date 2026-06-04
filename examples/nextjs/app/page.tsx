import { createServerIcon } from "@mal-icon/react/server";
import { Gallery } from "./Gallery";

// React Server Components can't use hooks/context, so render icons with the
// hook-free server entry. These are built once at module load — no client JS.
const STROKE = {
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const ServerActivity = createServerIcon(
  "0 0 24 24",
  [["polyline", { points: "22 12 18 12 15 21 9 3 6 12 2 12" }]],
  STROKE,
);
const ServerZap = createServerIcon(
  "0 0 24 24",
  [["polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" }]],
  STROKE,
);
const ServerGlobe = createServerIcon(
  "0 0 24 24",
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["line", { x1: "2", y1: "12", x2: "22", y2: "12" }],
    [
      "path",
      {
        d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
      },
    ],
  ],
  STROKE,
);

export default function Page() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero__badge">Next.js · App Router · RSC</div>
        <h1 className="hero__title">
          mal-icon <span>for Next.js</span>
        </h1>
        <p className="hero__subtitle">
          The hero below is rendered entirely on the server with <code>createServerIcon</code> —
          zero client JavaScript. The gallery underneath is a client island using context theming.
        </p>
        <div className="server-row" aria-label="Server-rendered icons">
          <ServerActivity size={40} color="#6366f1" title="Activity" />
          <ServerZap size={40} color="#22d3ee" title="Zap" />
          <ServerGlobe size={40} color="#f472b6" title="Globe" />
        </div>
      </header>

      <Gallery />

      <footer className="footer">
        Server icons via <code>@mal-icon/react/server</code> · client icons via{" "}
        <code>@mal-icon/react/fi</code>.
      </footer>
    </div>
  );
}

import "./index.css";

const GITHUB_URL = "https://github.com/MizuLy/REACT_STRUCTURE";

const tree = [
  { indent: "", name: "src/", type: "dir", comment: "" },
  {
    indent: "├─ ",
    name: "api/",
    type: "dir",
    comment: "# axios calls, endpoints",
  },
  { indent: "├─ ", name: "assets/", type: "dir", comment: "" },
  {
    indent: "│  ├─ ",
    name: "fonts/",
    type: "dir",
    comment: "# custom typefaces",
  },
  { indent: "│  ├─ ", name: "icons/", type: "dir", comment: "# svg icons" },
  {
    indent: "│  └─ ",
    name: "images/",
    type: "dir",
    comment: "# static images",
  },
  { indent: "├─ ", name: "components/", type: "dir", comment: "" },
  {
    indent: "│  ├─ ",
    name: "layout/",
    type: "dir",
    comment: "# navbar, sidebar, footer",
  },
  {
    indent: "│  ├─ ",
    name: "sections/",
    type: "dir",
    comment: "# page-level sections",
  },
  {
    indent: "│  ├─ ",
    name: "ui/",
    type: "dir",
    comment: "# buttons, inputs, modals",
  },
  {
    indent: "│  └─ ",
    name: "ProtectedRoute.jsx",
    type: "file",
    comment: "# auth guard",
  },
  {
    indent: "├─ ",
    name: "contexts/",
    type: "dir",
    comment: "# global state, auth, theme",
  },
  {
    indent: "├─ ",
    name: "errors/",
    type: "dir",
    comment: "# error boundaries, 404",
  },
  {
    indent: "├─ ",
    name: "hooks/",
    type: "dir",
    comment: "# custom react hooks",
  },
  {
    indent: "├─ ",
    name: "pages/",
    type: "dir",
    comment: "# route-level views",
  },
  { indent: "├─ ", name: "utils/", type: "dir", comment: "# helper functions" },
  {
    indent: "├─ ",
    name: "App.jsx",
    type: "file",
    comment: "# routes definition",
  },
  {
    indent: "└─ ",
    name: "main.jsx",
    type: "file",
    comment: "# app entry point",
  },
];

const badges = [
  { label: "react", value: "19" },
  { label: "vite", value: "6" },
  { label: "tailwind", value: "v3" },
  { label: "react-router", value: "v7" },
];

export default function App() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-8 font-sans"
      style={{
        backgroundColor: "#09090b",
        backgroundImage:
          "radial-gradient(circle, #27272a 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="w-full max-w-3xl border border-zinc-800 rounded-2xl overflow-hidden grid grid-cols-2 bg-zinc-900">
        {/* LEFT */}
        <div className="p-8 flex flex-col justify-between border-r border-zinc-800">
          <div>
            <p className="font-mono text-xs text-zinc-500 tracking-widest mb-5">
              react · vite · tailwind · {new Date().getFullYear()}
            </p>
            <h1 className="text-3xl font-bold text-white leading-tight mb-3">
              React Starter
            </h1>
            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
              Minimal, scalable frontend structure designed for clean
              architecture and fast development.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {badges.map((b) => (
                <span
                  key={b.label}
                  className="font-mono text-xs px-3 py-1 rounded-full border border-zinc-700 text-zinc-400"
                >
                  <span className="text-zinc-600">{b.label} </span>
                  {b.value}
                </span>
              ))}
            </div>
          </div>

          <div>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs px-4 py-2 border border-zinc-700 rounded-lg text-white hover:bg-zinc-800 transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              github link for clone
            </a>
            <p className="text-xs text-zinc-600 mt-3">@Mizu</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="p-6 bg-zinc-950 flex flex-col">
          <div className="flex items-center justify-between mb-5">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="font-mono text-xs text-zinc-600">/src</span>
          </div>

          <div className="font-mono text-xs leading-7 flex-1">
            {tree.map((row, i) => (
              <div key={i} className="flex items-baseline gap-1">
                <span className="text-zinc-700 whitespace-pre">
                  {row.indent}
                </span>
                <span
                  className={
                    row.type === "dir" ? "text-blue-400" : "text-zinc-200"
                  }
                >
                  {row.name}
                </span>
                {row.comment && (
                  <span className="text-zinc-600 text-[10px]">
                    {row.comment}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

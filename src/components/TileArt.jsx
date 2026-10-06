import { useId } from "react";

// Small deterministic random generator so terrazzo chips don't change per render
function seeded(seed) {
  let s = seed;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
}

// Every cell is drawn on a 100 x 100 grid and tiled with an SVG <pattern>.
// a, b = tile colours, c = grout colour.
const cells = {
  checker: ({ a, b, c }) => (
    <>
      <rect width="100" height="100" fill={a} />
      <rect width="50" height="50" fill={b} />
      <rect x="50" y="50" width="50" height="50" fill={b} />
      <path d="M50 0V100M0 50H100" stroke={c} strokeWidth="1.5" />
      <rect width="100" height="100" fill="none" stroke={c} strokeWidth="2" />
    </>
  ),

  subway: ({ a, b, c }) => (
    <>
      <rect width="100" height="100" fill={c} />
      {[0, 1, 2, 3].flatMap((i) =>
        [-1, 0, 1, 2].map((k) => {
          const x = (i % 2 ? 25 : 0) + k * 50;
          return (
            <rect
              key={`${i}-${k}`}
              x={x + 1}
              y={i * 25 + 1}
              width="48"
              height="23"
              rx="1.5"
              fill={(i + k) % 2 ? b : a}
            />
          );
        })
      )}
    </>
  ),

  harlequin: ({ a, b, c }) => (
    <>
      <rect width="100" height="100" fill={c} />
      <polygon points="50,2 98,50 50,98 2,50" fill={a} />
      {[[0, 0], [100, 0], [0, 100], [100, 100]].map(([x, y]) => (
        <polygon
          key={`${x}-${y}`}
          points={`${x},${y - 48} ${x + 48},${y} ${x},${y + 48} ${x - 48},${y}`}
          fill={b}
        />
      ))}
    </>
  ),

  scales: ({ a, b, c }) => (
    <>
      <rect width="100" height="100" fill={c} />
      {[
        [0, 0, a], [100, 0, a],
        [50, 50, b],
        [0, 100, a], [100, 100, a],
      ].map(([x, y, f]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="50" fill={f} stroke={c} strokeWidth="2" />
      ))}
    </>
  ),

  star: ({ a, b, c }) => (
    <>
      <rect width="100" height="100" fill={a} />
      <rect x="22" y="22" width="56" height="56" fill={b} stroke={c} strokeWidth="2" />
      <rect
        x="22" y="22" width="56" height="56"
        fill={b} stroke={c} strokeWidth="2"
        transform="rotate(45 50 50)"
      />
      <circle cx="50" cy="50" r="9" fill={a} stroke={c} strokeWidth="2" />
      {[[0, 0], [100, 0], [0, 100], [100, 100]].map(([x, y]) => (
        <polygon
          key={`${x}-${y}`}
          points={`${x},${y - 14} ${x + 14},${y} ${x},${y + 14} ${x - 14},${y}`}
          fill={b}
        />
      ))}
      <rect width="100" height="100" fill="none" stroke={c} strokeWidth="2" />
    </>
  ),

  terrazzo: ({ a, b, c }) => {
    const r = seeded(7);
    const colours = [b, c, "#ffffff", "#9aa5a4"];
    return (
      <>
        <rect width="100" height="100" fill={a} />
        {Array.from({ length: 18 }, (_, i) => {
          const x = r() * 100, y = r() * 100, s = 2 + r() * 5, rot = r() * 180;
          return (
            <rect
              key={i}
              x={x - s} y={y - s * 0.7}
              width={s * 2} height={s * 1.4}
              rx="1.5"
              fill={colours[i % 4]}
              transform={`rotate(${rot} ${x} ${y})`}
            />
          );
        })}
      </>
    );
  },

  marble: ({ a, b, c, id }) => (
    <>
      <rect width="100" height="100" fill={a} />
      <g fill="none" strokeLinecap="round">
        <path d="M-5 20 C25 10 35 50 60 45 S90 70 105 60" stroke={b} strokeWidth="0.8" opacity="0.55" />
        <path
          d="M20 -5 C30 30 55 25 62 55 S70 90 78 105"
          stroke={b} strokeWidth="1.6" opacity="0.3" filter={`url(#${id}b)`}
        />
        <path d="M-5 80 C20 70 40 90 70 82 S95 95 105 90" stroke={b} strokeWidth="0.5" opacity="0.5" />
      </g>
      <rect width="100" height="100" fill="none" stroke={c} strokeWidth="2.5" />
    </>
  ),

  wood: ({ a, b, c }) => (
    <>
      <rect width="100" height="100" fill={c} />
      {[0, 1, 2, 3].flatMap((i) => {
        const off = [0, 37, 72, 18][i];
        return [-1, 0, 1].map((k) => {
          const x0 = off + k * 100;
          return (
            <g key={`${i}-${k}`}>
              <rect x={x0 + 1} y={i * 25 + 1} width="98" height="23" fill={(i + k) % 2 ? b : a} />
              <path
                d={`M${x0 + 6} ${i * 25 + 8}H${x0 + 60}M${x0 + 20} ${i * 25 + 16}H${x0 + 90}`}
                stroke="#000" strokeOpacity="0.12" strokeWidth="0.8"
              />
            </g>
          );
        });
      })}
    </>
  ),

  chevron: ({ a, b, c }) => (
    <>
      <rect width="100" height="100" fill={c} />
      {[-50, 0, 50, 100].map((y, i) => (
        <g key={y} fill="none" strokeLinejoin="miter">
          <path d={`M0 ${y}L50 ${y + 25}L100 ${y}`} stroke={c} strokeWidth="44" />
          <path d={`M0 ${y}L50 ${y + 25}L100 ${y}`} stroke={i % 2 ? b : a} strokeWidth="40" />
        </g>
      ))}
    </>
  ),
};

export default function TileArt({
  variant = "checker",
  a = "#ffffff",
  b = "#000000",
  c = "#dddddd",
  size = 100,
  className = "",
  label,
}) {
  const id = "t" + useId().replace(/:/g, "");
  const Cell = cells[variant] || cells.checker;

  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <defs>
        <filter id={`${id}b`} filterUnits="userSpaceOnUse" x="-10" y="-10" width="120" height="120">
          <feGaussianBlur stdDeviation="0.6" />
        </filter>
        <pattern id={id} width={size} height={size} viewBox="0 0 100 100" patternUnits="userSpaceOnUse">
          <Cell a={a} b={b} c={c} id={id} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

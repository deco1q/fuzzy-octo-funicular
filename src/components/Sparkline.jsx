/** Lightweight inline sparkline used in the Signal panel. */
export default function Sparkline({ points, dashed = false, gradient = false, id }) {
  return (
    <svg className="spark" viewBox="0 0 220 56" preserveAspectRatio="none" aria-hidden="true">
      {gradient && (
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="rgba(220,225,234,0.2)" />
            <stop offset="1" stopColor="rgba(220,225,234,0.95)" />
          </linearGradient>
        </defs>
      )}
      <polyline
        points={points}
        fill="none"
        stroke={gradient ? `url(#${id})` : "rgba(170,180,190,0.5)"}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={dashed ? "2 3" : undefined}
      />
    </svg>
  );
}

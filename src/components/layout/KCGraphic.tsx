type KCGraphicProps = {
  className?: string;
};

export function KCGraphic({ className }: KCGraphicProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 160 160"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        fill="#15171A"
        height="158"
        rx="28"
        stroke="#2A2E34"
        strokeWidth="1.5"
        width="158"
        x="1"
        y="1"
      />
      <g opacity="0.6" stroke="#2A2E34" strokeDasharray="2 4">
        <path d="M40 24V136M80 24V136M120 24V136" />
        <path d="M24 40H136M24 80H136M24 120H136" />
      </g>
      <rect fill="#F4F4F5" height="72" rx="3" width="10" x="42" y="44" />
      <path d="M52 80L84 48H100L64 84L102 116H86L52 86" fill="#8FB4E8" />
      <path
        d="M106 58C116 68 118 78 118 80C118 82 116 92 106 102"
        stroke="#A8ADB5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
      />
      <circle cx="80" cy="80" fill="#365F91" r="3.5" stroke="#8FB4E8" strokeWidth="1.5" />
    </svg>
  );
}

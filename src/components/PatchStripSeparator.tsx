// A single running stitch line — connects sections quietly, like thread between fabric pieces

export default function PatchStripSeparator({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-full my-8 ${className}`}
      style={{ lineHeight: 0 }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 900 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        {/* First pass — main stitch, slightly wavy */}
        <path
          d="M 8,9 Q 160,7 320,10.5 Q 480,13.5 600,8 Q 720,3.5 860,9.5 Q 876,10 892,9"
          stroke="#C0572D"
          strokeWidth="1.1"
          strokeDasharray="7.5 5.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.26"
        />
        {/* Second pass — offset, like hand-sewn double stitch */}
        <path
          d="M 8,12 Q 180,10 340,13 Q 500,16 620,11 Q 740,6.5 870,12"
          stroke="#C0572D"
          strokeWidth="0.85"
          strokeDasharray="6 6.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.14"
        />
      </svg>
    </div>
  );
}

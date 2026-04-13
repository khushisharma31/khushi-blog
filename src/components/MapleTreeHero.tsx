import Image from "next/image";

export default function MapleTreeHero({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src="/images/tree.png"
        alt=""
        aria-hidden="true"
        width={1024}
        height={1536}
        priority
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />
    </div>
  );
}

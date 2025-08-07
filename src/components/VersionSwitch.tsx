"use client";

export default function VersionSwitch() {
  const targetUrl = process.env.NEXT_PUBLIC_ALTERNATE_VERSION_URL;
  const label = process.env.NEXT_PUBLIC_ALTERNATE_VERSION_LABEL ?? "Switch version";

  if (!targetUrl) return null;

  return (
    <div className="fixed left-4 bottom-4 z-50 print:hidden">
      <a
        href={targetUrl}
        className="px-3 py-2 text-sm rounded-full bg-black/80 text-white border border-white/10 shadow-lg backdrop-blur hover:bg-black transition"
      >
        {label}
      </a>
    </div>
  );
}


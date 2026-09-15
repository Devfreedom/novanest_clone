import Image from "next/image";

interface DownloadButtonProps {
  store: "apple" | "play";
  href?: string;
}

const storeConfig = {
  apple: {
    label: "Download on the App Store",
    iconSrc: "/assets/icons/section-05-apple-icon.svg",
    iconAlt: "",
  },
  play: {
    label: "Get it on Google Play",
    iconSrc: "/assets/icons/section-05-google-play-icon.svg",
    iconAlt: "",
  },
} as const;

export default function DownloadButton({
  store,
  href = "#",
}: DownloadButtonProps) {
  const config = storeConfig[store];

  return (
    <a
      href={href}
      aria-label={config.label}
      className="inline-flex h-11 w-[140px] items-center justify-center gap-2 rounded-[10px] border border-white/15 bg-black text-sm font-medium text-white shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-colors hover:border-white/30"
    >
      <Image
        src={config.iconSrc}
        alt={config.iconAlt}
        width={20}
        height={20}
        aria-hidden="true"
        className="h-5 w-5"
      />
      <span>Download</span>
    </a>
  );
}

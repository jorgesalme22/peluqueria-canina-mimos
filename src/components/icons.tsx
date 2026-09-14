// Iconos SVG inline, minimalistas, trazo consistente (stroke 1.75) — sin librerías externas.
import type { SVGProps } from "react";

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 4.5C4 4 4.4 3.6 4.9 3.6h3c.4 0 .8.3.9.7l1 3.4c.1.4 0 .8-.3 1.1L8 10.3a13 13 0 0 0 5.7 5.7l1.5-1.5c.3-.3.7-.4 1.1-.3l3.4 1c.4.1.7.5.7.9v3c0 .5-.4.9-.9.9C11.8 20 4 12.2 4 4.5Z" />
    </svg>
  );
}

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 17.5 4 20l2.6-.7A8 8 0 1 0 4 12a7.9 7.9 0 0 0 1 3.9Z" />
      <path d="M9 9.5c0-.3.3-.9.7-.9h.6c.3 0 .5.2.6.5l.6 1.5c.1.3 0 .6-.2.8l-.5.5a5.5 5.5 0 0 0 2.7 2.7l.5-.5c.2-.2.5-.3.8-.2l1.5.6c.3.1.5.3.5.6v.6c0 .4-.6.7-.9.7-2.9 0-6.9-4-6.9-6.9Z" />
    </svg>
  );
}

export function PinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}

export function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ScissorsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="6" cy="6.5" r="2.3" />
      <circle cx="6" cy="17.5" r="2.3" />
      <path d="M7.8 8 20 19M20 5 7.8 16" />
    </svg>
  );
}

export function BathIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2Z" />
      <path d="M4 12V9a2 2 0 0 1 2-2h1" />
      <path d="M9 5.5c0-.9.7-1.5 1.5-1.5S12 4.6 12 5.5 11.3 7 10.5 7 9 6.9 9 5.5Z" />
      <path d="M3 19h18" />
    </svg>
  );
}

export function BrushIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M14.5 3.5 20.5 9.5 10 20 4 20 4 14 14.5 3.5Z" />
      <path d="M13 6 18 11" />
    </svg>
  );
}

export function PawIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="15.2" r="3.6" />
      <circle cx="6.2" cy="10.5" r="1.8" />
      <circle cx="17.8" cy="10.5" r="1.8" />
      <circle cx="8.7" cy="6.3" r="1.6" />
      <circle cx="15.3" cy="6.3" r="1.6" />
    </svg>
  );
}

export function SparkleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5c.5 2.8 1 3.6 4 4-3 .4-3.5 1.2-4 4-.5-2.8-1-3.6-4-4 3-.4 3.5-1.2 4-4Z" />
      <path d="M19 14c.3 1.5.6 1.9 2 2.2-1.4.3-1.7.7-2 2.2-.3-1.5-.6-1.9-2-2.2 1.4-.3 1.7-.7 2-2.2Z" />
    </svg>
  );
}

export function HeartHandsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20s-6.5-4-8.5-8.2C2.2 8.8 4 6.5 6.5 6.5c1.5 0 2.8.8 3.5 2 .7-1.2 2-2 3.5-2 2.5 0 4.3 2.3 3 5.3C14.5 16 12 20 12 20Z" />
    </svg>
  );
}

export function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
      <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" />
    </svg>
  );
}

export function ChatIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5.5h16v10H9.5L5 19v-3.5H4v-10Z" />
    </svg>
  );
}

export function CarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M5 16v2M19 16v2" />
      <path d="M3.5 16v-3l1.7-4.6A2 2 0 0 1 7.1 7h9.8a2 2 0 0 1 1.9 1.4L20.5 13v3h-17Z" />
      <circle cx="7.5" cy="16" r="1.4" />
      <circle cx="16.5" cy="16" r="1.4" />
    </svg>
  );
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 3.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6L12 3.5Z" />
    </svg>
  );
}

export function LeashIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="7" cy="6" r="2.5" />
      <path d="M9 7.5C13 10 15 12 16.5 16" />
      <path d="M15 15.5h3a2.5 2.5 0 1 1-2.5 2.5v-1" />
    </svg>
  );
}

"use client";

import Script from "next/script";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export default function InstagramEmbed({ permalink }: { permalink: string }) {
  return (
    <>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={permalink}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: "1.25rem",
          margin: 0,
          maxWidth: "100%",
          width: "100%",
          minWidth: "unset",
        }}
      />
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => window.instgrm?.Embeds.process()}
        onReady={() => window.instgrm?.Embeds.process()}
      />
    </>
  );
}

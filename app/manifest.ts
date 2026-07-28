import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GetWords",
    short_name: "GetWords",
    description: "Your personal dictionary",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
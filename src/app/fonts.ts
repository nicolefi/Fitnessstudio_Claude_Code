import localFont from "next/font/local";

export const mulish = localFont({
  src: [
    { path: "../fonts/mulish/Mulish-VariableFont_wght.ttf", style: "normal" },
    { path: "../fonts/mulish/Mulish-Italic-VariableFont_wght.ttf", style: "italic" },
  ],
  variable: "--font-mulish",
  display: "swap",
});

export const tiktokSans = localFont({
  src: [{ path: "../fonts/tiktok-sans/TikTokSans-VariableFont.ttf", style: "normal" }],
  variable: "--font-tiktok-sans",
  display: "swap",
});

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ashfaqueahmed.dev"),

  title: {
    default: "Ashfaque Ahmed | AI Agent Developer & GenAI Engineer",
    template: "%s | Ashfaque Ahmed",
  },

  description:
    "Ashfaque Ahmed is an AI Agent Developer and GenAI Engineer building intelligent AI agents, RAG systems, AI automation workflows, and production-ready LLM applications.",

  keywords: [
    "Ashfaque Ahmed",
    "AI Agent Developer",
    "GenAI Engineer",
    "AI Automation",
    "LangChain",
    "LangGraph",
    "RAG",
    "LLM",
    "AI Agents",
    "MCP",
    "Python",
    "FastAPI",
    "Machine Learning",
    "Generative AI",
  ],

  authors: [
    {
      name: "Ashfaque Ahmed",
      url: "https://www.linkedin.com/in/ashfaque-ahmed-29a05332b/",
    },
  ],

  creator: "Ashfaque Ahmed",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ashfaqueahmed.dev",
    siteName: "Ashfaque Ahmed",
    title: "Ashfaque Ahmed | AI Agent Developer & GenAI Engineer",
    description:
      "AI Agent Developer and GenAI Engineer building intelligent agents, RAG systems, AI automation, and production-ready AI applications.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ashfaque Ahmed — AI Agent Developer & GenAI Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ashfaque Ahmed | AI Agent Developer & GenAI Engineer",
    description:
      "AI Agent Developer building AI agents, RAG systems, automation workflows, and production-ready LLM applications.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
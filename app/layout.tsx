import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { ProgressBar, ProgressBarLink } from "@/components/global/progress-bar";
import { siteConfig } from "@/lib/constants";
import { ThemeSelect } from "@/components/global/theme-select";
import Header from "@/components/global/header";
import { Button } from "@/components/ui/loading-button";
import { auth } from "@/auth";
import { logOut } from "@/actions/auth";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.name}`,
    default: siteConfig.name,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ProgressBar className="sticky -top-1 h-1 z-40 dark:h-0.5 bg-primary">
            <Header />

            <div className="pt-12 min-h-screen">{children}</div>
            <footer className="w-full container-x py-6 border-t">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className=" text-sm font-semibold">{siteConfig.name}</p>
                  <p className=" text-xs text-muted-foreground">
                    &copy; {new Date().getFullYear()}
                    {". "}Developed by{" "}
                    <a
                      href="https://aliazlan.me"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-primary underline underline-offset-2"
                    >
                      Ali Azlan
                    </a>
                    {" (AIMC '27)"}
                  </p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <ThemeSelect />
                  <Suspense fallback={<Skeleton className="w-20 h-9" />}>
                    <LogoutButton />
                  </Suspense>
                </div>
              </div>
            </footer>
            <Toaster />
          </ProgressBar>
        </ThemeProvider>
      </body>
    </html>
  );
}

async function LogoutButton() {
  const session = await auth();
  if (session) {
    return (
      <form action={logOut}>
        <Button text="Logout" className="w-fit" />
      </form>
    );
  }
}

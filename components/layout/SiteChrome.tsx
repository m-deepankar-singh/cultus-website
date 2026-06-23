"use client";

import { usePathname } from "next/navigation";

// Routes that render as standalone landing pages (no global navbar/footer),
// e.g. the BFSI webinar one-pager which ships its own header & footer.
const BARE_ROUTES = ["/bfsi-ai-webinar"];

export default function SiteChrome({
  navbar,
  footer,
  children,
}: {
  navbar: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const bare = BARE_ROUTES.some(
    (route) => pathname === route || pathname?.startsWith(`${route}/`)
  );

  return (
    <>
      {!bare && navbar}
      {children}
      {!bare && footer}
    </>
  );
}

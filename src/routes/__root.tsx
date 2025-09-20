import { createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

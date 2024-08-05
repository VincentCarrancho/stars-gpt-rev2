import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ClerkLoading>
            <div>Loading</div>
          </ClerkLoading>
          <ClerkLoaded>
            <main>{children}</main>
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}

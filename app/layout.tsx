import "../styles/globals.css";
import Header from "../components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="bg-slate-500">
        <Header />
        <main className="p-5 text-2xl">{children}</main>
      </body>
    </html>
  );
}

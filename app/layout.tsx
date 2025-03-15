import StickyHeader from "@/components/Header/StickyHeader";
import "./globals.css";
import AnimatedWallpaper from "@/components/AnimatedWallpaper/AnimatedWallpaper";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col relative ">
        <ToastContainer position="bottom-center" autoClose={3000} />

        {/* Animated Wallpaper Background */}
        <div className="fixed inset-0 z-0">
          <AnimatedWallpaper />
        </div>
        {/* Header */}
        <StickyHeader />
        {/* Main Content */}
        <main className="flex-grow relative z-10 ">{children}</main>
        {/* Footer */}
        <footer className="bg-gray-900 text-white p-4 text-center relative z-10">
          <Footer />
        </footer>
      </body>
    </html>
  );
}

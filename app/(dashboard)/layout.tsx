import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex  h-full overflow-auto">
        <Sidebar />
        <div className="h-full w-full bg-[#f5f8fb] p-6 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}

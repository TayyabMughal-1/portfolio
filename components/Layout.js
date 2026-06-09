import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <main className="pt-28 min-h-screen bg-[#E0E5EC]">{children}</main>

      <footer className="bg-[#E0E5EC] px-5 md:px-10 pb-8">
        <div className="max-w-7xl mx-auto rounded-[28px] p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-extruded">
          <p className="font-bold text-[#3D4852]">Tayyab Mughal Portfolio</p>

          <p className="text-sm text-muted text-center md:text-right">
            Senior SEO Expert & Digital Growth Strategist
          </p>
        </div>
      </footer>
    </>
  );
}

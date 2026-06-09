import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, User, Rocket, BarChart3, Target } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-[#E0E5EC] pt-8 pb-24">
      <div className="page-shell">
        <nav className="w-full max-w-[1200px] mx-auto rounded-[32px] px-6 py-4 shadow-extruded flex items-center justify-center gap-3 md:gap-8 mb-20">
          {["Home", "Projects", "Results", "Experience", "Contact"].map(
            (item, index) => (
              <a
                key={item}
                href={
                  item === "Home"
                    ? "#home"
                    : item === "Results"
                      ? "#analytics"
                      : `#${item.toLowerCase()}`
                }
                className={`px-5 md:px-7 py-3 rounded-2xl text-xs md:text-sm font-extrabold transition ${
                  index === 0
                    ? "bg-violet-500 text-white shadow-extruded"
                    : "text-[#3D4852] hover:text-violet-500"
                }`}
              >
                {item}
              </a>
            ),
          )}
        </nav>

        <div className="grid xl:grid-cols-[1.08fr_0.92fr] gap-16 2xl:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-[820px]"
          >
            <div className="inline-flex items-center gap-3 rounded-full px-6 py-3 shadow-extruded mb-10">
              <span className="w-3 h-3 rounded-full bg-violet-500" />
              <span className="badge">SEO Expert Portfolio</span>
            </div>

            <h1 className="text-[70px] md:text-[110px] 2xl:text-[128px] leading-[0.86] font-black tracking-[-0.07em] text-[#3D4852]">
              Tayyab
              <span className="block text-violet-500">Mughal</span>
            </h1>

            <h2 className="mt-8 max-w-3xl text-3xl md:text-4xl font-black leading-tight text-[#142033]">
              Senior <span className="text-violet-500">SEO Expert</span> &
              Digital Growth Strategist
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-9 text-[#6B7280]">
              Helping businesses rank higher, drive qualified traffic, and
              generate more leads with data-driven SEO strategies that deliver
              real results.
            </p>

            <div className="grid sm:grid-cols-3 gap-5 mt-12">
              <SmallStat icon={<User />} value="7+ Years" label="Experience" />
              <SmallStat
                icon={<Rocket />}
                value="15+ Projects"
                label="Delivered"
              />
              <SmallStat
                icon={<BarChart3 />}
                value="300% Avg."
                label="Growth"
              />
            </div>

            <div className="flex flex-wrap gap-6 mt-12">
              <a
                href="#projects"
                className="h-16 px-10 rounded-2xl bg-violet-500 text-white font-black flex items-center justify-center gap-3 shadow-extruded"
              >
                View My Projects <ArrowRight size={20} />
              </a>

              <a
                href="#contact"
                className="h-16 px-10 rounded-2xl text-[#142033] font-black flex items-center justify-center gap-3 shadow-extruded"
              >
                Hire Me <User size={19} className="text-violet-500" />
              </a>
            </div>

            <div className="mt-14 rounded-[32px] p-7 shadow-extruded">
              <p className="badge mb-6">Trusted Project Experience</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {["Sapphire", "White n Green", "Refecoin", "LockRoom"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-2xl py-5 text-center font-black shadow-inset text-[#142033]"
                    >
                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[720px] hidden xl:flex items-center justify-center"
          >
            <div className="relative w-full max-w-[610px]">
              <div className="rounded-[42px] p-5 shadow-extruded bg-[#E0E5EC]">
                <Image
                  src="/profile.webp"
                  alt="Tayyab Mughal"
                  width={610}
                  height={720}
                  className="w-full h-[660px] object-cover rounded-[34px]"
                  priority
                />
              </div>

              <FloatingCard className="-left-24 top-[-42px]">
                <p className="font-black text-[#142033]">SEO Score</p>
                <p className="text-4xl font-black mt-3">92</p>
                <p className="text-violet-500 font-black">Excellent</p>
                <Dots />
              </FloatingCard>

              <FloatingCard className="-left-24 bottom-[115px]">
                <p className="font-black text-[#142033]">Backlinks</p>
                <p className="text-4xl font-black mt-3">6,680</p>
                <p className="text-violet-500 font-black">+457%</p>
                <Dots />
              </FloatingCard>

              <div className="absolute -right-8 bottom-[-35px] rounded-[32px] p-7 w-[330px] bg-[#E0E5EC] shadow-extruded">
                <p className="text-xl font-black text-[#142033] mb-6">
                  Ranking Distribution
                </p>

                <div className="flex items-center gap-6">
                  <div className="w-28 h-28 rounded-full shadow-insetDeep flex items-center justify-center font-black text-2xl text-violet-500">
                    SEO
                  </div>

                  <div className="flex-1 space-y-3 text-sm">
                    <Rank label="Top 3" value="142" />
                    <Rank label="4-10" value="318" />
                    <Rank label="11-20" value="421" />
                    <Rank label="21-50" value="289" />
                  </div>
                </div>
              </div>

              <div className="absolute -right-8 top-[-10px] w-20 h-20 rounded-2xl bg-[#E0E5EC] shadow-extruded flex items-center justify-center text-violet-500">
                <Target size={30} />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="xl:hidden"
          >
            <div className="max-w-[440px] mx-auto rounded-[36px] p-4 shadow-extruded bg-[#E0E5EC]">
              <Image
                src="/profile.webp"
                alt="Tayyab Mughal"
                width={440}
                height={560}
                className="w-full h-[520px] object-cover rounded-[28px]"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SmallStat({ icon, value, label }) {
  return (
    <div className="rounded-2xl px-6 py-5 shadow-extruded flex items-center gap-4">
      <div className="text-violet-500">{icon}</div>
      <div>
        <p className="font-black text-[#142033] leading-tight">{value}</p>
        <p className="font-bold text-[#142033] leading-tight">{label}</p>
      </div>
    </div>
  );
}

function FloatingCard({ children, className }) {
  return (
    <div
      className={`absolute z-20 rounded-[28px] bg-[#E0E5EC] shadow-extruded p-6 w-[220px] ${className}`}
    >
      {children}
    </div>
  );
}

function Dots() {
  return (
    <div className="flex gap-3 mt-8">
      {[1, 2, 3, 4, 5].map((item, index) => (
        <span
          key={item}
          className={`rounded-full bg-violet-400 ${
            index > 2 ? "w-6 h-9" : "w-6 h-3"
          }`}
        />
      ))}
    </div>
  );
}

function Rank({ label, value }) {
  return (
    <div className="flex justify-between gap-6">
      <span className="text-[#6B7280]">{label}</span>
      <strong className="text-[#142033]">{value}</strong>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Search,
  TrendingUp,
  Target,
  Rocket,
  User,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-[#E0E5EC] px-5 md:px-10 lg:px-16 pt-12 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-3 rounded-full px-5 py-3 shadow-insetDeep">
              <span className="w-3 h-3 rounded-full bg-violet-500" />
              <span className="text-violet-500 tracking-[0.35em] text-xs font-extrabold uppercase">
                SEO Expert Portfolio
              </span>
            </div>

            <h1 className="mt-8 text-[72px] md:text-[96px] lg:text-[104px] leading-[0.9] font-black tracking-[-0.07em] text-[#3D4852]">
              Tayyab
              <br />
              <span className="text-violet-500">Mughal</span>
            </h1>

            <h2 className="mt-8 text-2xl md:text-3xl font-extrabold text-[#273444] leading-snug">
              Senior <span className="text-violet-500">SEO Expert</span> &
              Digital Growth Strategist
            </h2>

            <p className="mt-6 max-w-2xl text-muted text-lg leading-9">
              Helping businesses rank higher, drive qualified traffic, and
              generate more leads with data-driven SEO strategies that deliver
              real results.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mt-9 max-w-2xl">
              <MiniStat icon={<User size={22} />} text="7+ Years Experience" />
              <MiniStat
                icon={<Rocket size={22} />}
                text="15+ Projects Delivered"
              />
              <MiniStat
                icon={<BarChart3 size={22} />}
                text="300% Avg. Growth"
              />
            </div>

            <div className="flex flex-wrap gap-5 mt-9">
              <Link
                href="/projects"
                className="h-16 px-8 rounded-2xl bg-violet-500 text-white font-extrabold flex items-center gap-3 shadow-extruded hover:-translate-y-1 transition"
              >
                View My Projects <ArrowRight size={20} />
              </Link>

              <Link
                href="/contact"
                className="h-16 px-8 rounded-2xl text-[#273444] font-extrabold flex items-center gap-3 shadow-extruded hover:-translate-y-1 transition"
              >
                Hire Me <User size={19} className="text-violet-500" />
              </Link>
            </div>

            <div className="mt-12 max-w-3xl rounded-[28px] p-6 shadow-extruded">
              <p className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#273444] mb-5">
                Trusted Project Experience
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Sapphire", "White n Green", "Refecoin", "LockRoom"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-2xl py-4 text-center font-extrabold text-[#273444] shadow-insetDeep"
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
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[520px]">
              <div className="absolute -top-12 -left-6 md:-left-24 z-20 hidden md:block">
                <FloatingCard title="SEO Score" value="92" label="Excellent" />
              </div>

              <div className="absolute top-2 -right-4 z-20 w-16 h-16 rounded-2xl shadow-extruded bg-[#E0E5EC] hidden md:flex items-center justify-center">
                <Target className="text-violet-500" size={26} />
              </div>

              <div className="relative rounded-[34px] p-4 shadow-extruded bg-[#E0E5EC]">
                <Image
                  src="/profile.webp"
                  alt="Tayyab Mughal"
                  width={520}
                  height={620}
                  className="w-full h-[520px] md:h-[590px] object-cover object-center rounded-[28px]"
                  priority
                />
              </div>

              <div className="absolute bottom-28 -left-6 md:-left-24 z-20 hidden md:block">
                <FloatingCard title="Backlinks" value="6,680" label="+457%" />
              </div>

              <div className="absolute -bottom-6 -right-2 md:-right-6 z-20 w-[290px] rounded-[28px] p-6 shadow-extruded bg-[#E0E5EC] hidden md:block">
                <h3 className="text-lg font-extrabold text-[#273444] mb-5">
                  Ranking Distribution
                </h3>

                <div className="flex items-center gap-5">
                  <div className="w-24 h-24 rounded-full shadow-insetDeep flex items-center justify-center">
                    <span className="text-violet-500 font-black text-xl">
                      SEO
                    </span>
                  </div>

                  <div className="flex-1 space-y-2 text-sm">
                    <Rank label="Top 3" value="142" />
                    <Rank label="4-10" value="318" />
                    <Rank label="11-20" value="421" />
                    <Rank label="21-50" value="289" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-14 rounded-[32px] p-6 shadow-extruded">
          <BottomStat
            icon={<TrendingUp />}
            value="82.1K"
            label="Monthly Organic Visits"
          />
          <BottomStat icon={<Search />} value="32.4K" label="GSC Clicks" />
          <BottomStat
            icon={<BarChart3 />}
            value="+562%"
            label="Overall Growth"
          />
          <BottomStat icon={<Target />} value="18.6K" label="Leads Generated" />
        </div>
      </div>
    </section>
  );
}

function MiniStat({ icon, text }) {
  return (
    <div className="h-14 rounded-2xl px-5 flex items-center gap-3 shadow-extruded">
      <span className="text-violet-500">{icon}</span>
      <span className="text-sm font-extrabold text-[#273444]">{text}</span>
    </div>
  );
}

function FloatingCard({ title, value, label }) {
  return (
    <div className="w-40 rounded-[26px] p-5 shadow-extruded bg-[#E0E5EC]">
      <p className="font-extrabold text-[#3D4852]">{title}</p>
      <h3 className="text-3xl font-black text-[#3D4852] mt-3">{value}</h3>
      <p className="text-violet-500 font-extrabold mt-1">{label}</p>

      <div className="flex gap-2 mt-6">
        {[1, 2, 3, 4, 5].map((item) => (
          <span
            key={item}
            className={`rounded-full bg-violet-500/70 ${
              item > 3 ? "w-6 h-6" : "w-6 h-3 mt-3"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function Rank({ label, value }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-muted">{label}</span>
      <span className="font-extrabold text-[#273444]">{value}</span>
    </div>
  );
}

function BottomStat({ icon, value, label }) {
  return (
    <div className="flex items-center gap-5">
      <div className="w-16 h-16 rounded-2xl shadow-insetDeep flex items-center justify-center text-violet-500">
        {icon}
      </div>

      <div>
        <h3 className="text-3xl font-black text-[#3D4852]">{value}</h3>
        <p className="text-muted">{label}</p>
      </div>
    </div>
  );
}

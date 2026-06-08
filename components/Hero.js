import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Search,
  TrendingUp,
  Target,
  CheckCircle,
  Rocket,
  User,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className=" bg-[#E0E5EC] px-5 md:px-10 lg:px-16 pt-36 pb-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-3 rounded-full px-5 py-3 shadow-inset bg-[#E0E5EC]">
              <span className="w-3 h-3 rounded-full bg-violet-500" />
              <span className="badge">SEO Expert Portfolio</span>
            </div>

            <h1 className="mt-7 text-6xl md:text-8xl font-extrabold leading-[0.9] tracking-tight">
              Tayyab
              <br />
              <span className="text-violet-500">Mughal</span>
            </h1>

            <p className="mt-7 text-xl md:text-2xl font-bold text-[#3D4852]">
              Senior <span className="text-violet-500">SEO Expert</span> &
              Digital Growth Strategist
            </p>

            <p className="mt-5 text-muted max-w-xl leading-8">
              Helping businesses rank higher, drive qualified traffic, and
              generate more leads with data-driven SEO strategies that deliver
              real results.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <MiniPill icon={<User />} text="7+ Years Experience" />
              <MiniPill icon={<Rocket />} text="15+ Projects Delivered" />
              <MiniPill icon={<BarChart3 />} text="300% Avg. Growth" />
            </div>

            <div className="flex flex-wrap gap-5 mt-10">
              <a
                href="#projects"
                className="group bg-violet-500 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 shadow-extruded hover:-translate-y-1 transition-all"
              >
                View My Projects
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition"
                />
              </a>

              <a
                href="#contact"
                className="px-8 py-4 rounded-2xl font-bold text-[#3D4852] shadow-extruded flex items-center gap-3 hover:-translate-y-1 transition-all"
              >
                Hire Me <User size={18} className="text-violet-500" />
              </a>
            </div>

            <div className="glass rounded-[28px] p-5 mt-12 max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-widest mb-4">
                Trusted Project Experience
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-bold">
                <Brand text="Sapphire" />
                <Brand text="White n Green" />
                <Brand text="Refecoin" />
                <Brand text="LockRoom" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[680px]"
          >
            <FloatingCard
              className="left-0 top-0"
              title="SEO Score"
              value="92"
              note="Excellent"
            />

            <FloatingCard
              className="left-0 bottom-28"
              title="Backlinks"
              value="6,680"
              note="+457%"
            />

            <div className="absolute right-0 top-8 w-[430px] max-w-full">
              <div className="relative rounded-[40px] p-5 glass">
                <div className="absolute -right-7 -top-7 icon-3d z-20">
                  <Target />
                </div>

                <Image
                  src="/profile.webp"
                  alt="Tayyab Mughal"
                  width={430}
                  height={560}
                  className="rounded-[32px] w-full h-[560px] object-cover object-top"
                  priority
                />
              </div>
            </div>

            <div className="absolute right-0 bottom-6 glass rounded-[28px] p-5 w-[280px] hidden xl:block">
              <h3 className="font-extrabold mb-4">Ranking Distribution</h3>
              <div className="grid grid-cols-[90px_1fr] gap-4 items-center">
                <div className="w-20 h-20 rounded-full shadow-insetDeep flex items-center justify-center text-violet-500 font-extrabold">
                  SEO
                </div>
                <div className="space-y-2 text-xs">
                  <Rank label="Top 3" value="142" />
                  <Rank label="4-10" value="318" />
                  <Rank label="11-20" value="421" />
                  <Rank label="21-50" value="289" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="glass rounded-[32px] p-6 mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

function MiniPill({ icon, text }) {
  return (
    <div className="rounded-2xl px-4 py-3 shadow-extruded flex items-center gap-3 text-sm font-bold">
      <span className="text-violet-500">{icon}</span>
      {text}
    </div>
  );
}

function Brand({ text }) {
  return (
    <div className="rounded-2xl shadow-inset px-4 py-3 text-center text-[#3D4852]">
      {text}
    </div>
  );
}

function FloatingCard({ className, title, value, note }) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
      className={`absolute z-20 glass rounded-[24px] p-5 w-[180px] hidden lg:block ${className}`}
    >
      <p className="text-sm font-bold">{title}</p>
      <h3 className="text-2xl font-extrabold mt-2">{value}</h3>
      <p className="text-sm text-violet-500 font-bold mt-1">{note}</p>
      <div className="h-10 mt-3 flex items-end gap-1">
        {[30, 45, 35, 55, 70].map((h, i) => (
          <span
            key={i}
            style={{ height: `${h}%` }}
            className="w-full rounded-full bg-violet-500/70"
          />
        ))}
      </div>
    </motion.div>
  );
}

function Rank({ label, value }) {
  return (
    <div className="flex justify-between">
      <span className="text-muted">{label}</span>
      <b>{value}</b>
    </div>
  );
}

function BottomStat({ icon, value, label }) {
  return (
    <div className="flex items-center gap-4">
      <div className="icon-3d">{icon}</div>
      <div>
        <p className="text-3xl font-extrabold">{value}</p>
        <p className="text-muted">{label}</p>
      </div>
    </div>
  );
}

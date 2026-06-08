import { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  BarChart3,
  TrendingUp,
  Search,
  Users,
  ArrowLeft,
} from "lucide-react";

const projects = [
  {
    name: "Sapphire Properties",
    url: "https://sapphireproperties.com.pk/",
    industry: "Real Estate",
    desc: "SEO strategy for property visibility, location pages, and lead-focused search growth.",
    stats: { traffic: "+210%", keywords: "+145%", leads: "+88%" },
    chart: [28, 42, 58, 76, 92],
  },
  {
    name: "White n Green",
    url: "https://www.whitengreen.ca/",
    industry: "Green Services",
    desc: "Local and service SEO focused on trust, organic reach, and service-based conversions.",
    stats: { traffic: "+165%", keywords: "+120%", leads: "+74%" },
    chart: [22, 36, 51, 68, 84],
  },
  {
    name: "Refecoin",
    url: "https://refecoin.com/",
    industry: "Crypto",
    desc: "Search visibility and content structure for blockchain, brand trust, and awareness.",
    stats: { traffic: "+190%", keywords: "+132%", leads: "+61%" },
    chart: [18, 33, 49, 64, 88],
  },
  {
    name: "LockRoom",
    url: "https://www.lockroom.com/",
    industry: "Entertainment",
    desc: "SEO improvements for booking intent, activity pages, and user engagement.",
    stats: { traffic: "+175%", keywords: "+118%", leads: "+69%" },
    chart: [25, 39, 56, 72, 86],
  },
  {
    name: "WAWCD",
    url: "https://wawcd.com/",
    industry: "Business Services",
    desc: "Technical SEO, page structure, and content optimisation for stronger search presence.",
    stats: { traffic: "+140%", keywords: "+96%", leads: "+52%" },
    chart: [20, 31, 44, 59, 78],
  },
  {
    name: "3D Lifestyle",
    url: "https://3dlifestyle.pk/",
    industry: "Aesthetic Clinic",
    desc: "Healthcare SEO focused on service pages, treatment intent, and appointment growth.",
    stats: { traffic: "+260%", keywords: "+180%", leads: "+110%" },
    chart: [30, 48, 66, 82, 96],
  },
  {
    name: "MyImprov",
    url: "https://www.myimprov.com/",
    industry: "Online Education",
    desc: "Content and technical SEO for course visibility, traffic quality, and signups.",
    stats: { traffic: "+155%", keywords: "+112%", leads: "+67%" },
    chart: [24, 38, 54, 71, 85],
  },
  {
    name: "Marketplace Officer",
    url: "https://www.marketplaceofficer.com/",
    industry: "Ecommerce",
    desc: "SEO structure for marketplace services, product visibility, and organic leads.",
    stats: { traffic: "+185%", keywords: "+136%", leads: "+82%" },
    chart: [26, 41, 60, 77, 90],
  },
  {
    name: "Packings",
    url: "https://packings.co/",
    industry: "Packaging",
    desc: "B2B SEO focused on product categories, buyer keywords, and enquiry growth.",
    stats: { traffic: "+170%", keywords: "+125%", leads: "+78%" },
    chart: [23, 37, 55, 73, 87],
  },
  {
    name: "Century Healthcare",
    url: "https://www.centuryhealthcare.co.uk/",
    industry: "Healthcare",
    desc: "Healthcare SEO with trust-focused content, service optimisation, and local visibility.",
    stats: { traffic: "+150%", keywords: "+104%", leads: "+64%" },
    chart: [21, 35, 49, 67, 82],
  },
  {
    name: "WABPO",
    url: "https://www.wabpo.com/en",
    industry: "BPO",
    desc: "SEO for outsourcing services, international visibility, and business enquiries.",
    stats: { traffic: "+160%", keywords: "+115%", leads: "+71%" },
    chart: [19, 34, 52, 70, 86],
  },
  {
    name: "Wedding Templates",
    url: "https://www.weddingtemplates.com/",
    industry: "Digital Products",
    desc: "SEO for template categories, buyer search intent, and product discovery.",
    stats: { traffic: "+220%", keywords: "+155%", leads: "+92%" },
    chart: [27, 46, 65, 80, 95],
  },
  {
    name: "Skin Sciences",
    url: "https://skinsciences.com.pk/",
    industry: "Skincare",
    desc: "Beauty and clinic SEO focused on treatment pages, organic visibility, and bookings.",
    stats: { traffic: "+240%", keywords: "+170%", leads: "+105%" },
    chart: [29, 47, 68, 84, 97],
  },
];

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section
      id="projects"
      className="py-24 px-5 md:px-10 lg:px-16 bg-[#E0E5EC]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="badge">Selected Work</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            Projects & SEO Growth Results
          </h2>
          <p className="text-muted mt-4">
            Click statistics to view project-specific SEO results with a visual
            growth chart.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((p, i) => {
            const opened = active === i;

            return (
              <motion.div
                key={p.name}
                layout
                className={`glass rounded-[32px] p-6 transition-all duration-500 ${
                  opened ? "sm:col-span-2 xl:col-span-1" : ""
                }`}
              >
                {!opened ? (
                  <>
                    <div className="h-52 rounded-[28px] shadow-insetDeep flex items-center justify-center text-center px-6">
                      <div>
                        <p className="text-sm font-bold text-violet-500">
                          {p.industry}
                        </p>
                        <h3 className="text-2xl font-extrabold mt-3">
                          {p.name}
                        </h3>
                        <p className="text-muted text-sm mt-3">{p.desc}</p>
                      </div>
                    </div>

                    <div className="flex gap-3 mt-6">
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 h-12 rounded-2xl bg-violet-500 text-white font-bold flex items-center justify-center gap-2"
                      >
                        Visit <ExternalLink size={17} />
                      </a>

                      <button
                        onClick={() => setActive(i)}
                        className="flex-1 h-12 rounded-2xl shadow-extruded text-[#3D4852] font-bold flex items-center justify-center gap-2"
                      >
                        Statistics <BarChart3 size={17} />
                      </button>
                    </div>
                  </>
                ) : (
                  <motion.div
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    transition={{ duration: 0.35 }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-bold text-violet-500">
                          {p.industry}
                        </p>
                        <h3 className="text-2xl font-extrabold mt-1">
                          {p.name} Results
                        </h3>
                      </div>

                      <button
                        onClick={() => setActive(null)}
                        className="rounded-2xl px-4 py-2 shadow-inset text-sm font-bold flex items-center gap-2"
                      >
                        <ArrowLeft size={15} /> Back
                      </button>
                    </div>

                    <div className="grid grid-cols-3 gap-3 mt-6">
                      <MiniStat
                        icon={<TrendingUp />}
                        label="Traffic"
                        value={p.stats.traffic}
                      />
                      <MiniStat
                        icon={<Search />}
                        label="Keywords"
                        value={p.stats.keywords}
                      />
                      <MiniStat
                        icon={<Users />}
                        label="Leads"
                        value={p.stats.leads}
                      />
                    </div>

                    <div className="mt-7 rounded-[28px] p-5 shadow-insetDeep">
                      <h4 className="font-extrabold mb-3">Growth Chart</h4>
                      <Chart values={p.chart} />
                    </div>

                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 h-12 rounded-2xl bg-violet-500 text-white font-bold flex items-center justify-center gap-2"
                    >
                      Visit Website <ExternalLink size={17} />
                    </a>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MiniStat({ icon, label, value }) {
  return (
    <div className="rounded-2xl p-4 text-center shadow-insetDeep">
      <div className="text-violet-500 flex justify-center">{icon}</div>
      <p className="text-xl font-extrabold mt-3">{value}</p>
      <p className="text-xs text-muted">{label}</p>
    </div>
  );
}

function Chart({ values }) {
  const labels = ["Before", "M1", "M2", "M3", "Now"];

  return (
    <div className="h-44 flex items-end gap-4">
      {values.map((v, i) => (
        <div
          key={i}
          className="flex-1 flex flex-col items-center justify-end h-full"
        >
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: `${v}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.08 }}
            className="w-full max-w-[38px] rounded-t-2xl bg-violet-500"
          />
          <p className="text-[11px] text-muted mt-3">{labels[i]}</p>
          <p className="text-xs font-bold">{v}%</p>
        </div>
      ))}
    </div>
  );
}

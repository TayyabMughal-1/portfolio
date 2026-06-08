import { motion } from "framer-motion";
import {
  Search,
  Wrench,
  FileText,
  BarChart3,
  MousePointerClick,
  Globe,
  Target,
  LineChart,
} from "lucide-react";

const skills = [
  [
    "Technical SEO Audits",
    <Wrench />,
    "95%",
    "Issue Detection",
    "Crawl errors, indexing issues, speed problems, schema gaps, redirects, and site structure fixes.",
  ],
  [
    "Keyword Research",
    <Search />,
    "200+",
    "Keywords Mapped",
    "Buyer intent, low competition, local, long-tail, and commercial keywords for ranking plans.",
  ],
  [
    "On Page SEO",
    <FileText />,
    "+18%",
    "CTR Lift",
    "Titles, headings, metadata, URLs, internal links, content structure, and topical relevance.",
  ],
  [
    "Analytics & Reporting",
    <BarChart3 />,
    "4",
    "Dashboards",
    "Tracking rankings, traffic, conversions, leads, events, and campaign performance.",
  ],
  [
    "Conversion Tracking",
    <MousePointerClick />,
    "+40%",
    "Lead Clarity",
    "Form tracking, CTA clicks, phone clicks, GA4 events, and conversion goals.",
  ],
  [
    "WordPress SEO",
    <Globe />,
    "1.2s",
    "Speed Focus",
    "Site structure, plugins, speed, schema, landing pages, and CMS SEO setup.",
  ],
  [
    "Google Ads Support",
    <Target />,
    "+35%",
    "ROI Focus",
    "Search campaigns, ad copy, landing page alignment, tracking, and keyword planning.",
  ],
  [
    "Growth Strategy",
    <LineChart />,
    "300%",
    "Growth Goal",
    "SEO roadmaps with audits, keyword clusters, content plans, internal linking, and reporting.",
  ],
];

const quickStats = [
  { value: "7+ Years", label: "SEO Experience" },
  { value: "15+ Projects", label: "Portfolio Websites" },
  { value: "300%", label: "Growth Focus" },
  { value: "20+", label: "Client Campaigns" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-5 md:px-10 lg:px-16 bg-[#E0E5EC]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <span className="badge">Practical Expertise</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            SEO Skills That Matter in Real Projects
          </h2>
          <p className="text-muted mt-4 text-base md:text-lg">
            A clear view of the work I can handle in an interview, client
            project, or full SEO campaign.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {quickStats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="glass rounded-[28px] p-5 text-center"
            >
              <p className="text-2xl md:text-3xl font-extrabold text-violet-500">
                {item.value}
              </p>
              <p className="text-sm text-muted mt-1">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7 mt-10">
          {skills.map(([title, icon, metric, label, desc], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              whileHover={{ y: -8 }}
              className="glass rounded-[32px] p-6 min-h-[300px]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="icon-3d">{icon}</div>
                <div className="text-right">
                  <p className="text-2xl font-extrabold text-violet-500">
                    {metric}
                  </p>
                  <p className="text-xs text-muted">{label}</p>
                </div>
              </div>

              <h3 className="text-xl font-extrabold mt-6">{title}</h3>
              <p className="text-muted text-sm leading-6 mt-3">{desc}</p>

              <div className="mt-6 h-3 rounded-full shadow-insetDeep overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "88%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="h-full rounded-full bg-violet-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

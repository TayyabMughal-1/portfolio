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
  CheckCircle,
  Workflow,
  ClipboardCheck,
  PieChart,
} from "lucide-react";

const skills = [
  {
    title: "Technical SEO Audits",
    icon: <Wrench />,
    metric: "95%",
    label: "Issue Detection",
    desc: "Crawl errors, indexing issues, speed problems, schema gaps, redirects, and site structure fixes.",
    proof: "Useful for WordPress, service, healthcare, and ecommerce websites.",
  },
  {
    title: "Keyword Research",
    icon: <Search />,
    metric: "200+",
    label: "Keywords Mapped",
    desc: "Finding buyer intent, low competition, local, long tail, and commercial keywords for ranking plans.",
    proof:
      "Helps clients understand which pages and topics can bring qualified traffic.",
  },
  {
    title: "On Page SEO",
    icon: <FileText />,
    metric: "+18%",
    label: "CTR Lift",
    desc: "Optimising titles, headings, metadata, URLs, internal links, content structure, and topical relevance.",
    proof:
      "Strong for service pages, blogs, product pages, and city landing pages.",
  },
  {
    title: "Analytics & Reporting",
    icon: <BarChart3 />,
    metric: "4",
    label: "Dashboards",
    desc: "Tracking rankings, organic traffic, conversions, leads, events, and campaign performance.",
    proof: "Makes SEO results clear for owners, managers, and marketing teams.",
  },
  {
    title: "Conversion Tracking",
    icon: <MousePointerClick />,
    metric: "+40%",
    label: "Lead Clarity",
    desc: "Setting up form tracking, CTA clicks, phone clicks, GA4 events, and conversion goals.",
    proof:
      "Important when clients want to know which pages are generating leads.",
  },
  {
    title: "WordPress SEO",
    icon: <Globe />,
    metric: "1.2s",
    label: "Speed Focus",
    desc: "Improving site structure, plugins, speed, schema, landing pages, and SEO-friendly CMS setup.",
    proof:
      "Best for businesses that need fast website updates without complex development.",
  },
  {
    title: "Google Ads Support",
    icon: <Target />,
    metric: "+35%",
    label: "ROI Focus",
    desc: "Search campaign structure, ad copy, landing page alignment, tracking, and keyword planning.",
    proof:
      "Useful when SEO and paid search need to work together for faster leads.",
  },
  {
    title: "Growth Strategy",
    icon: <LineChart />,
    metric: "300%",
    label: "Growth Goal",
    desc: "Building SEO roadmaps with audits, keyword clusters, content plans, internal linking, and reporting.",
    proof: "Turns random SEO tasks into a clear monthly growth system.",
  },
];

const quickStats = [
  { value: "5+ Years", label: "SEO Experience" },
  { value: "13+ Projects", label: "Portfolio Websites" },
  { value: "300%", label: "Growth Focus" },
  { value: "20+", label: "Campaigns Managed" },
];

const process = [
  "Website Audit",
  "Keyword Mapping",
  "SEO Roadmap",
  "Content Plan",
  "Technical Fixes",
  "Monthly Reporting",
];

const tools = [
  "Google Search Console",
  "Google Analytics 4",
  "Ahrefs",
  "SEMrush",
  "Screaming Frog",
  "WordPress",
  "Google Ads",
  "PageSpeed Insights",
  "Looker Studio",
  "Figma",
  "Photoshop",
  "Excel / Sheets",
];

const deliverables = [
  "Technical SEO Audit Report",
  "Keyword Research Sheet",
  "On Page Optimization Plan",
  "Monthly SEO Performance Report",
  "Competitor Analysis",
  "Content Calendar",
  "Internal Linking Strategy",
  "Conversion Tracking Setup",
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-5 md:px-10 lg:px-16 bg-[#E0E5EC]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <span className="badge">Practical Expertise</span>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            SEO Skills That Matter in Real Projects
          </h2>

          <p className="text-muted mt-4 text-base md:text-lg">
            A clear view of the work I can handle in an interview, client
            project, or full SEO campaign — from technical fixes to measurable
            lead growth.
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
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
              className="group glass rounded-[32px] p-6 min-h-[330px] flex flex-col"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="w-14 h-14 rounded-2xl shadow-insetDeep flex items-center justify-center text-violet-500">
                  {skill.icon}
                </div>

                <div className="text-right">
                  <p className="text-2xl font-extrabold text-violet-500">
                    {skill.metric}
                  </p>
                  <p className="text-xs text-muted">{skill.label}</p>
                </div>
              </div>

              <h3 className="text-xl font-extrabold mt-6">{skill.title}</h3>
              <p className="text-muted text-sm leading-6 mt-3">{skill.desc}</p>

              <div className="mt-5">
                <div className="h-3 rounded-full shadow-insetDeep overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "88%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.04 }}
                    className="h-full rounded-full bg-violet-500"
                  />
                </div>
              </div>

              <div className="mt-auto pt-5">
                <div className="rounded-2xl p-4 shadow-inset text-sm text-muted leading-6">
                  <span className="font-bold text-[#3D4852]">
                    Project use:{" "}
                  </span>
                  {skill.proof}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-7 mt-16">
          <SectionCard
            icon={<Workflow />}
            title="My SEO Process"
            items={process}
          />

          <SectionCard
            icon={<PieChart />}
            title="Tools I Work With"
            items={tools}
          />

          <SectionCard
            icon={<ClipboardCheck />}
            title="What Clients Receive"
            items={deliverables}
          />
        </div>

        <div className="glass rounded-[32px] p-7 md:p-10 mt-16">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
            <div>
              <span className="badge">Interview Ready</span>

              <h3 className="text-3xl md:text-4xl font-extrabold mt-3">
                What I Can Handle From Day One
              </h3>

              <p className="text-muted mt-4 leading-8">
                I can audit a website, identify SEO problems, build a keyword
                strategy, optimize pages, set up tracking, create reports, and
                explain results clearly to clients or managers.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Find ranking problems",
                "Improve page structure",
                "Create content plans",
                "Track leads and events",
                "Build monthly reports",
                "Support SEO + Ads strategy",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl p-4 shadow-insetDeep flex items-center gap-3"
                >
                  <CheckCircle className="text-violet-500 shrink-0" size={20} />
                  <span className="font-bold text-[#3D4852]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionCard({ icon, title, items }) {
  return (
    <div className="glass rounded-[32px] p-7">
      <div className="w-14 h-14 rounded-2xl shadow-insetDeep flex items-center justify-center text-violet-500">
        {icon}
      </div>

      <h3 className="text-2xl font-extrabold mt-5">{title}</h3>

      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-3 text-muted">
            <span className="w-2 h-2 rounded-full bg-violet-500 shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

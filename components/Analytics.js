import { useState } from "react";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";
import {
  BarChart3,
  MousePointerClick,
  Search,
  TrendingUp,
  ShieldCheck,
  Link2,
  Globe,
  Activity,
  Sparkles,
} from "lucide-react";

const dashboards = {
  semrush: {
    label: "SEMrush",
    title: "SEMrush Organic Growth Dashboard",
    desc: "Keyword rankings, domain authority, backlinks, and organic traffic growth from SEO campaigns.",
    metrics: [
      {
        icon: <Search />,
        value: "1,240",
        label: "Total Keywords",
        growth: "+364",
      },
      {
        icon: <ShieldCheck />,
        value: "72",
        label: "Domain Authority",
        growth: "+34 pts",
      },
      {
        icon: <TrendingUp />,
        value: "82.1K",
        label: "Organic Traffic",
        growth: "+562%",
      },
      { icon: <Link2 />, value: "6,680", label: "Backlinks", growth: "+457%" },
    ],
    chartTitle: "Organic Traffic Growth",
    chartDesc:
      "Monthly organic visibility growth from SEMrush style reporting.",
    chartType: "area",
    chartData: [
      { month: "Jun", traffic: 12000, keywords: 180 },
      { month: "Jul", traffic: 18500, keywords: 260 },
      { month: "Aug", traffic: 24100, keywords: 390 },
      { month: "Sep", traffic: 32800, keywords: 520 },
      { month: "Oct", traffic: 44700, keywords: 710 },
      { month: "Nov", traffic: 53800, keywords: 860 },
      { month: "Dec", traffic: 62900, keywords: 980 },
      { month: "Jan", traffic: 70400, keywords: 1120 },
      { month: "Feb", traffic: 82100, keywords: 1240 },
    ],
    sideTitle: "Keyword Positions",
    sideDesc: "SERP ranking distribution.",
    sideData: [
      { name: "Top 3", value: 142 },
      { name: "4-10", value: 318 },
      { name: "11-20", value: 421 },
      { name: "21-50", value: 289 },
      { name: "51-100", value: 70 },
    ],
  },

  gsc: {
    label: "Google Search Console",
    title: "Google Search Console Dashboard",
    desc: "Search clicks, impressions, CTR, and average position improvements.",
    metrics: [
      {
        icon: <MousePointerClick />,
        value: "32.4K",
        label: "Total Clicks",
        growth: "+428%",
      },
      { icon: <Globe />, value: "296K", label: "Impressions", growth: "+510%" },
      {
        icon: <Activity />,
        value: "4.8%",
        label: "Average CTR",
        growth: "+2.1%",
      },
      {
        icon: <Search />,
        value: "12.7",
        label: "Avg Position",
        growth: "Improved",
      },
    ],
    chartTitle: "GSC Clicks & Impressions",
    chartDesc: "Search Console style growth across clicks and impressions.",
    chartType: "line",
    chartData: [
      { month: "Jun", clicks: 4200, impressions: 38000 },
      { month: "Jul", clicks: 6100, impressions: 52000 },
      { month: "Aug", clicks: 8500, impressions: 76000 },
      { month: "Sep", clicks: 12200, impressions: 110000 },
      { month: "Oct", clicks: 16800, impressions: 149000 },
      { month: "Nov", clicks: 21500, impressions: 188000 },
      { month: "Dec", clicks: 27400, impressions: 230000 },
      { month: "Jan", clicks: 30900, impressions: 268000 },
      { month: "Feb", clicks: 32400, impressions: 296000 },
    ],
    sideTitle: "Query Position Split",
    sideDesc: "Queries grouped by ranking position.",
    sideData: [
      { name: "Top 3", value: 96 },
      { name: "4-10", value: 210 },
      { name: "11-20", value: 384 },
      { name: "21-50", value: 465 },
      { name: "51-100", value: 211 },
    ],
  },

  ga4: {
    label: "GA4",
    title: "GA4 Engagement Dashboard",
    desc: "Website users, sessions, engagement rate, and conversion event tracking.",
    metrics: [
      { icon: <UsersIcon />, value: "45.8K", label: "Users", growth: "+218%" },
      {
        icon: <BarChart3 />,
        value: "62.3K",
        label: "Sessions",
        growth: "+244%",
      },
      {
        icon: <Activity />,
        value: "68%",
        label: "Engagement Rate",
        growth: "+19%",
      },
      {
        icon: <MousePointerClick />,
        value: "18.6K",
        label: "Lead Events",
        growth: "+95%",
      },
    ],
    chartTitle: "Users & Sessions Growth",
    chartDesc: "GA4 style engagement trend for organic and campaign traffic.",
    chartType: "bar",
    chartData: [
      { month: "Jun", users: 6200, sessions: 8400 },
      { month: "Jul", users: 8700, sessions: 11200 },
      { month: "Aug", users: 11400, sessions: 14800 },
      { month: "Sep", users: 15900, sessions: 20700 },
      { month: "Oct", users: 22100, sessions: 29100 },
      { month: "Nov", users: 28400, sessions: 37700 },
      { month: "Dec", users: 35200, sessions: 46900 },
      { month: "Jan", users: 40100, sessions: 54800 },
      { month: "Feb", users: 45800, sessions: 62300 },
    ],
    sideTitle: "Traffic Channel Mix",
    sideDesc: "Channel share from measurable visits.",
    sideData: [
      { name: "Organic", value: 62 },
      { name: "Direct", value: 16 },
      { name: "Referral", value: 12 },
      { name: "Paid", value: 7 },
      { name: "Social", value: 3 },
    ],
  },

  ai: {
    label: "AI Overview",
    title: "AI Overview Visibility Dashboard",
    desc: "AI search visibility, featured mentions, brand citations, and topical authority signals.",
    metrics: [
      {
        icon: <Sparkles />,
        value: "38%",
        label: "AI Overview Visibility",
        growth: "+21%",
      },
      {
        icon: <Search />,
        value: "11.2K",
        label: "Featured Mentions",
        growth: "+64",
      },
      {
        icon: <Globe />,
        value: "41K",
        label: "AI Search Reach",
        growth: "+290%",
      },
      {
        icon: <ShieldCheck />,
        value: "89%",
        label: "LLM Optimisation Score",
        growth: "+33%",
      },
    ],
    chartTitle: "AI Search Visibility Growth",
    chartDesc: "Estimated AI Overview and LLM discovery growth over time.",
    chartType: "area",
    chartData: [
      { month: "Jun", visibility: 8, citations: 1.4 },
      { month: "Jul", visibility: 12, citations: 2.4 },
      { month: "Aug", visibility: 17, citations: 3.9 },
      { month: "Sep", visibility: 21, citations: 5.6 },
      { month: "Oct", visibility: 26, citations: 7.1 },
      { month: "Nov", visibility: 31, citations: 8.8 },
      { month: "Dec", visibility: 34, citations: 9.6 },
      { month: "Jan", visibility: 36, citations: 10.4 },
      { month: "Feb", visibility: 38, citations: 11.2 },
    ],
    sideTitle: "AI Visibility Signals",
    sideDesc: "Signals used for AI search appearance.",
    sideData: [
      { name: "Entity strength", value: 89 },
      { name: "Topical authority", value: 84 },
      { name: "Content clarity", value: 91 },
      { name: "Brand mentions", value: 76 },
      { name: "FAQ coverage", value: 82 },
    ],
  },
};

const COLORS = ["#6c63ff", "#8b84ff", "#38b2ac", "#a78bfa", "#c4b5fd"];

export default function Analytics() {
  const [active, setActive] = useState("semrush");
  const current = dashboards[active];

  return (
    <section
      id="analytics"
      className="py-24 px-5 md:px-10 lg:px-16 bg-[#E0E5EC]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-10">
          <div>
            <span className="badge">SEO Analytics</span>
            <h2 className="text-4xl md:text-6xl font-extrabold mt-3 leading-tight">
              Performance Dashboard
            </h2>
            <p className="text-muted mt-4 max-w-xl">
              Select a reporting source to view different SEO, GSC, GA4, and AI
              Overview performance dashboards.
            </p>
          </div>

          <div className="glass rounded-[32px] p-6">
            <p className="font-bold">Reporting Sources</p>
            <div className="flex flex-wrap gap-3 mt-4">
              {Object.entries(dashboards).map(([key, item]) => (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition-all ${
                    active === key
                      ? "bg-violet-500 text-white shadow-extruded"
                      : "text-violet-500 shadow-inset hover:-translate-y-1"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="glass rounded-[32px] p-6 mb-8">
            <h3 className="text-3xl font-extrabold">{current.title}</h3>
            <p className="text-muted mt-2">{current.desc}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {current.metrics.map((item, index) => (
              <Metric key={index} {...item} />
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-8">
            <div className="glass rounded-[32px] p-6 lg:col-span-2">
              <h3 className="text-2xl font-extrabold">{current.chartTitle}</h3>
              <p className="text-muted text-sm mt-1 mb-6">
                {current.chartDesc}
              </p>

              <div className="h-[320px]">
                <ResponsiveContainer>
                  {renderMainChart(current)}
                </ResponsiveContainer>
              </div>
            </div>

            <div className="glass rounded-[32px] p-6">
              <h3 className="text-2xl font-extrabold">{current.sideTitle}</h3>
              <p className="text-muted text-sm mt-1">{current.sideDesc}</p>

              <div className="h-[230px] mt-5">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={current.sideData}
                      innerRadius={65}
                      outerRadius={95}
                      dataKey="value"
                    >
                      {current.sideData.map((entry, index) => (
                        <Cell key={index} fill={COLORS[index]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-3">
                {current.sideData.map((item) => (
                  <div key={item.name} className="flex justify-between text-sm">
                    <span className="text-muted">{item.name}</span>
                    <b>{item.value}</b>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function renderMainChart(current) {
  if (current.chartType === "line") {
    return (
      <LineChart data={current.chartData}>
        <CartesianGrid stroke="#c8d0da" strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="clicks"
          stroke="#6c63ff"
          strokeWidth={4}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="impressions"
          stroke="#38b2ac"
          strokeWidth={4}
          dot={false}
        />
      </LineChart>
    );
  }

  if (current.chartType === "bar") {
    return (
      <BarChart data={current.chartData}>
        <CartesianGrid stroke="#c8d0da" strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="users" fill="#6c63ff" radius={[14, 14, 0, 0]} />
        <Bar dataKey="sessions" fill="#38b2ac" radius={[14, 14, 0, 0]} />
      </BarChart>
    );
  }

  return (
    <AreaChart data={current.chartData}>
      <CartesianGrid stroke="#c8d0da" strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey={
          current.chartData[0].traffic !== undefined ? "traffic" : "visibility"
        }
        stroke="#6c63ff"
        fill="#6c63ff"
        fillOpacity={0.28}
      />
      <Area
        type="monotone"
        dataKey={
          current.chartData[0].keywords !== undefined ? "keywords" : "citations"
        }
        stroke="#38b2ac"
        fill="#38b2ac"
        fillOpacity={0.18}
      />
    </AreaChart>
  );
}

function Metric({ icon, value, label, growth }) {
  return (
    <motion.div whileHover={{ y: -7 }} className="glass rounded-[32px] p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="icon-3d">{icon}</div>
        <span className="rounded-full px-3 py-1 text-xs font-bold text-violet-500 shadow-inset">
          {growth}
        </span>
      </div>
      <h3 className="text-3xl font-extrabold mt-6">{value}</h3>
      <p className="text-muted mt-1">{label}</p>
    </motion.div>
  );
}

function UsersIcon() {
  return <Activity />;
}

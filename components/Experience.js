import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  TrendingUp,
  ExternalLink,
} from "lucide-react";

const experience = [
  {
    role: "Senior SEO Expert",
    company: "Spadasoft Inc.",
    companyUrl:
      "https://www.linkedin.com/company/spadasoft/posts/?feedView=all",
    location: "Lahore",
    period: "June 2024 – Present",
    focus: "Advanced SEO Strategy",
    result:
      "Improved traffic, visibility, and campaign performance across multiple projects.",
    points: [
      "Built SEO strategies for service, ecommerce, healthcare, and business websites.",
      "Managed technical SEO, on-page SEO, keyword planning, and reporting.",
      "Guided junior team members and improved campaign execution quality.",
    ],
  },
  {
    role: "Marketing Manager / SEO Expert",
    company: "Jasper HealthCare",
    companyUrl: "https://www.linkedin.com/company/jasper-healthcare-pk/",
    location: "Lahore",
    period: "Aug 2023 – June 2024",
    focus: "Marketing Growth",
    result:
      "Supported brand growth through SEO, tracking, and campaign improvement.",
    points: [
      "Planned marketing campaigns focused on traffic, sales, and customer acquisition.",
      "Tracked performance and adjusted campaigns based on business goals.",
      "Worked on visibility improvement across important digital channels.",
    ],
  },
  {
    role: "Senior SEO Expert",
    company: "Cosmetique",
    companyUrl:
      "https://www.linkedin.com/company/cosmetique-dermatology-laser-&-plastic-surgery-llp/",
    location: "Lahore",
    period: "Dec 2023 – May 2024",
    focus: "Beauty & Clinic SEO",
    result:
      "Improved product and treatment visibility through SEO-focused optimisation.",
    points: [
      "Optimised skincare and beauty-related pages for search visibility.",
      "Managed campaign tracking and reporting through organised performance sheets.",
      "Aligned SEO work with audience intent and product positioning.",
    ],
  },
  {
    role: "SEO Expert",
    company: "Wangard International",
    companyUrl:
      "https://www.linkedin.com/company/wangard-international/posts/?feedView=all",
    location: "Lahore",
    period: "Sep 2022 – Nov 2023",
    focus: "Lead Generation SEO",
    result:
      "Improved search visibility through landing page and keyword optimisation.",
    points: [
      "Worked on on-page SEO, keyword targeting, and landing page improvements.",
      "Supported marketing campaigns and lead-generation activities.",
      "Reviewed performance metrics and improved SEO direction.",
    ],
  },
  {
    role: "SEO Expert / Marketing Specialist",
    company: "Typhon Agency",
    companyUrl:
      "https://www.linkedin.com/company/typhonagency/posts/?feedView=all",
    location: "Lahore",
    period: "Dec 2019 – Aug 2021",
    focus: "Organic Growth Support",
    result:
      "Contributed to organic traffic growth through SEO and content optimisation.",
    points: [
      "Supported SEO campaigns, content updates, and promotional planning.",
      "Worked with the marketing team on traffic and lead-focused improvements.",
      "Helped analyse campaign performance and improve execution.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-5 md:px-10 lg:px-16 bg-[#E0E5EC]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <span className="badge">Career Path</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            Work Experience Built Around SEO Growth
          </h2>
          <p className="text-muted mt-4 text-base md:text-lg">
            A practical timeline of my SEO, marketing, reporting, and campaign
            management experience across different industries.
          </p>
        </div>

        <div className="mt-14 relative">
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 rounded-full shadow-insetDeep" />
          <div className="space-y-8">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`grid lg:grid-cols-2 gap-8 items-stretch ${index % 2 === 0 ? "" : "lg:[&>*:first-child]:order-2"}`}
              >
                <div className="glass rounded-[32px] p-7 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="rounded-full px-4 py-2 text-sm font-bold text-violet-500 shadow-inset">
                        {item.focus}
                      </span>
                      <span className="rounded-full px-4 py-2 text-sm font-bold text-[#3D4852] shadow-inset">
                        {item.period}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-extrabold">
                      {item.role}
                    </h3>

                    <div className="flex flex-wrap gap-4 mt-5 text-sm text-muted">
                      <span className="flex items-center gap-2">
                        <Briefcase size={16} className="text-violet-500" />
                        {item.company}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin size={16} className="text-violet-500" />
                        {item.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar size={16} className="text-violet-500" />
                        {item.period}
                      </span>
                    </div>

                    <div className="mt-6 rounded-3xl p-5 shadow-insetDeep">
                      <p className="flex items-start gap-3 font-bold">
                        <TrendingUp
                          size={20}
                          className="text-violet-500 mt-1"
                        />
                        <span>{item.result}</span>
                      </p>
                    </div>

                    <ul className="mt-6 space-y-3">
                      {item.points.map((point, i) => (
                        <li key={i} className="flex gap-3 text-muted leading-7">
                          <span className="mt-2 h-2 w-2 rounded-full bg-violet-500 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button at the bottom, fully filled */}
                  {item.companyUrl && (
                    <a
                      href={item.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex mt-6 items-center justify-center gap-2 rounded-2xl px-6 py-3 bg-violet-500 text-white text-sm font-bold shadow-extruded hover:-translate-y-1 transition w-full"
                    >
                      Visit Company Profile
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>

                <div className="hidden lg:flex items-center justify-center">
                  <div className="relative">
                    <div className="w-28 h-28 rounded-full shadow-extruded flex items-center justify-center bg-[#E0E5EC]">
                      <div className="w-16 h-16 rounded-full shadow-insetDeep flex items-center justify-center text-violet-500 font-extrabold text-xl">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

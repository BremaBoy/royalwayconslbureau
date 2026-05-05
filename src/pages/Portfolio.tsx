import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/project-card";
import { Link } from "wouter";
import styles from "./Portfolio.module.css";

export default function Portfolio() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const caseStudies = [
    {
      title: "Full Audit & Internal Control Review",
      clientType: "Energy Sector",
      client: "Lakel Afrik Petroleum Limited",
      problem: "The company had grown rapidly but lacked robust internal controls, leaving it exposed to financial leakage, reconciliation errors, and regulatory risk during a critical expansion phase.",
      solution: "Royalway deployed a senior audit team to conduct a comprehensive internal control review, mapping all financial processes and identifying key risk points across procurement, treasury, and reporting.",
      result: "Critical control gaps were closed, reconciliation errors were eliminated, and the company passed its regulatory review — positioning it for a major new government contract."
    },
    {
      title: "Debt Recovery & Receivables Restoration",
      clientType: "Healthcare Services",
      client: "Agape Health Limited",
      problem: "Agape Health had accumulated a large portfolio of overdue receivables from institutional clients, severely constraining their operational cash flow and ability to meet payroll and supplier obligations.",
      solution: "Royalway's debt recovery team implemented a structured recovery program combining professional debtor outreach, formal demand processes, and legal liaison where necessary.",
      result: "Over 70% of outstanding receivables were recovered within 90 days, restoring cash flow stability and enabling the organization to meet its financial obligations without external borrowing."
    },
    {
      title: "Payroll Restructuring & Compliance",
      clientType: "Manufacturing & Services",
      client: "Eliezer Workplace Management Limited",
      problem: "The company's payroll system was manual, inconsistent, and non-compliant with current statutory deduction requirements — creating significant exposure and employee dissatisfaction.",
      solution: "Royalway overhauled the payroll structure end-to-end: profiling all staff, restructuring compensation packages, setting up automated deductions, and filing outstanding statutory obligations.",
      result: "Full payroll compliance was achieved within 60 days. Employee satisfaction improved significantly and the company eliminated its exposure to regulatory penalties."
    },
    {
      title: "Bookkeeping Cleanup & Financial Reporting",
      clientType: "Pharmaceutical & Healthcare",
      client: "Miraflash Pharmaceuticals",
      problem: "Years of inconsistent bookkeeping had left Miraflash with unreliable financial records, making it impossible to produce accurate management accounts or assess true business performance.",
      solution: "Our accounting team conducted a comprehensive historical data cleanup, restoring accurate ledgers and implementing a robust monthly close process with standardized reporting templates.",
      result: "Management gained access to accurate, timely financial reports for the first time. Informed decision-making improved materially and the business identified over 15% in recoverable costs."
    },
    {
      title: "Financial Advisory & Business Performance Review",
      clientType: "Petroleum & Marine Services",
      client: "Hephzibah Petroleum & Marine Services Nigeria Limited",
      problem: "Despite growing revenues, profitability remained elusive due to high operational costs, poor financial visibility, and the absence of a strategic financial framework aligned to business goals.",
      solution: "Royalway delivered a full business performance review, built a multi-year financial model, and worked with leadership to implement cost controls and a performance monitoring framework.",
      result: "Operational costs were reduced by 22% in the first year. Leadership now operates with a clear financial strategy and monthly performance dashboards that drive accountability."
    },
    {
      title: "Corporate Training Program Delivery",
      clientType: "Microfinance & Banking",
      client: "Biane Microfinance Bank",
      problem: "Rapid staff expansion had outpaced internal capacity-building efforts, leaving significant gaps in financial management knowledge and regulatory understanding across the team.",
      solution: "Royalway's faculty delivered a bespoke three-module training series covering financial management fundamentals, regulatory compliance, and internal audit basics — tailored to microfinance operations.",
      result: "Staff competency scores improved measurably post-training. The bank subsequently promoted three participants to supervisory roles and recorded a significant reduction in operational errors."
    }
  ];

  return (
    <div className={styles.pageWrapper}>
      <section className={styles.headerSection}>
        <div className={styles.container}>
          <motion.div {...fadeIn} className={styles.headerContent}>
            <p className={styles.sectionLabel}>Our Work</p>
            <h1 className={styles.heading}>
              Proven Results, Real Impact.
            </h1>
            <p className={styles.subtext}>
              We measure our success entirely by the clarity, security, and growth we deliver to the businesses we serve. Explore a selection of our client engagements.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={styles.mainSection}>
        <div className={styles.container}>
          <div className={styles.projectsGrid}>
            {caseStudies.map((study, i) => (
              <ProjectCard
                key={i}
                index={i}
                title={study.title}
                clientType={study.clientType}
                client={study.client}
                problem={study.problem}
                solution={study.solution}
                result={study.result}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <motion.div {...fadeIn} className={styles.ctaContent}>
            <h2 className={styles.ctaHeading}>Ready to Become Our Next Success Story?</h2>
            <p className={styles.ctaSubtext}>
              Let our team assess your situation and develop a tailored approach that delivers measurable results for your business.
            </p>
            <Link
              href="/contact"
              className={styles.ctaBtn}
              data-testid="link-portfolio-cta"
            >
              Book a Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

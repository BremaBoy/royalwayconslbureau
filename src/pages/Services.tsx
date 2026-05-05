import { motion } from "framer-motion";
import { Link } from "wouter";
import { BarChart3, Calculator, FileText, PieChart, ShieldCheck, TrendingUp, Users, Megaphone } from "lucide-react";
import styles from "./Services.module.css";

export default function Services() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      title: "Accounting & Bookkeeping",
      icon: FileText,
      description: "Meticulous, technology-driven ledger management that provides real-time clarity into the financial health of your business. We handle everything from monthly reconciliations to full accounts management.",
      benefits: [
        "Monthly close and bank reconciliation",
        "Accounts payable and receivable management",
        "Real-time financial reporting and dashboards",
        "Historical data clean-up and migration"
      ]
    },
    {
      title: "Internal Audit & Risk Management",
      icon: ShieldCheck,
      description: "Rigorous internal audit and enterprise risk management services that protect your assets, identify vulnerabilities, and strengthen your governance frameworks — ensuring long-term organizational resilience.",
      benefits: [
        "Comprehensive internal control reviews",
        "Risk assessment and mitigation planning",
        "Process and compliance audits",
        "Audit committee advisory and reporting"
      ]
    },
    {
      title: "Debt Recovery",
      icon: TrendingUp,
      description: "Strategic and professional debt recovery services designed to restore your cash flow without damaging client relationships. We combine legal knowledge, negotiation expertise, and systematic follow-through.",
      benefits: [
        "Structured receivables recovery programs",
        "Professional debtor negotiation",
        "Legal liaison and documentation",
        "Post-recovery cash flow optimization"
      ]
    },
    {
      title: "Financial Advisory",
      icon: BarChart3,
      description: "Comprehensive strategic guidance for navigating complex corporate challenges, capital decisions, and sustainable scaling. We act as an extension of your executive leadership team.",
      benefits: [
        "Business restructuring and turnaround",
        "Capital raising and investment advisory",
        "Cash flow modeling and forecasting",
        "Mergers and acquisitions support"
      ]
    },
    {
      title: "Payroll Services",
      icon: PieChart,
      description: "Seamless, compliant payroll administration tailored to your organization's structure. We handle complex compensation arrangements, statutory deductions, and multi-entity payroll requirements.",
      benefits: [
        "Monthly payroll processing and management",
        "Statutory deductions and remittances",
        "Executive and staff compensation structuring",
        "Year-end payroll documentation and filing"
      ]
    },
    {
      title: "Training & Capacity Building",
      icon: Calculator,
      description: "Practical, industry-relevant training programs delivered by our faculty of seasoned professionals. We build the internal competencies your team needs to sustain excellence independently.",
      benefits: [
        "Financial management and accounting training",
        "Internal audit and compliance workshops",
        "Leadership and entrepreneurship development",
        "Customized in-house training programs"
      ]
    },
    {
      title: "Branding & Business Development",
      icon: Megaphone,
      description: "We help growing businesses establish a compelling professional identity that communicates their value clearly. From brand strategy to communications, we position your business for market confidence.",
      benefits: [
        "Brand identity design and strategy",
        "Corporate communications development",
        "Market positioning and messaging",
        "Business development planning support"
      ]
    },
    {
      title: "Recruitment Services",
      icon: Users,
      description: "End-to-end recruitment solutions that connect your organization with the right talent — efficiently and compliantly. We handle everything from job profiling through to onboarding support.",
      benefits: [
        "Executive and mid-level talent search",
        "Job profiling and candidate assessment",
        "Recruitment compliance and documentation",
        "Onboarding advisory and HR integration"
      ]
    }
  ];

  return (
    <div className={styles.pageWrapper}>
      <section className={styles.headerSection}>
        <div className={styles.container}>
          <motion.div {...fadeIn} className={styles.headerContent}>
            <p className={styles.sectionLabel}>Our Expertise</p>
            <h1 className={styles.heading}>
              Services Designed to Drive Results.
            </h1>
            <p className={styles.subtext}>
              Royalway delivers a comprehensive suite of consulting services — each executed with the precision, professionalism, and depth your business deserves.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={styles.mainSection}>
        <div className={styles.container}>
          <div className={styles.servicesList}>
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={styles.serviceItem}
                  data-testid={`service-item-${index}`}
                >
                  <div className={styles.serviceHeader}>
                    <div className={styles.serviceIconWrap}>
                      <Icon size={32} className="text-primary" strokeWidth={1.5} />
                    </div>
                    <h2 className={styles.serviceTitle}>
                      {service.title}
                    </h2>
                  </div>

                  <div className={styles.serviceContentGrid}>
                    <div>
                      <h3 className={styles.serviceContentLabel}>Overview</h3>
                      <p className={styles.serviceDescription}>
                        {service.description}
                      </p>
                    </div>
                    <div className={styles.deliverablesBox}>
                      <h3 className={styles.deliverablesLabel}>Key Deliverables</h3>
                      <ul className={styles.deliverablesList}>
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className={styles.deliverablesItem}>
                            <div className={styles.deliverablesBullet} />
                            <span className={styles.deliverablesText}>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <motion.div {...fadeIn} className={styles.ctaContent}>
            <h2 className={styles.ctaHeading}>Need a Custom Engagement?</h2>
            <p className={styles.ctaSubtext}>
              We frequently architect bespoke consulting packages for organizations with unique challenges or multi-service requirements.
            </p>
            <Link
              href="/contact"
              className={styles.ctaBtn}
              data-testid="link-discuss-requirements"
            >
              Discuss Your Requirements
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

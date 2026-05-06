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
      title: "1. Management Consultancy",
      icon: TrendingUp,
      description: "We provide strategic advisory services aimed at improving organizational efficiency, governance, and profitability.",
      benefits: [
        "Business restructuring and turnaround strategies",
        "Performance improvement frameworks",
        "Change management and transformation initiatives",
        "Corporate governance and best practice implementation"
      ]
    },
    {
      title: "2. Forensic Audit, Internal Audit & Risk Advisory",
      icon: ShieldCheck,
      description: "Our forensic audit, internal audit, and risk advisory services are designed to detect, prevent, and mitigate financial, operational, and compliance risks within organizations while strengthening governance, accountability, and internal control systems. We apply risk-based audit methodologies, investigative techniques, and compliance frameworks to uncover irregularities, improve operational efficiency, and support informed decision-making.",
      benefits: [
        "Forensic Audit Services & Investigation",
        "Internal Audit Services & Evaluation",
        "Risk Advisory Services & Fraud Prevention",
        "Regulatory compliance audits and assurance reviews"
      ]
    },
    {
      title: "3. Human Resource Management",
      icon: Users,
      description: "We support organizations in building high-performing teams through comprehensive human resource solutions.",
      benefits: [
        "Recruitment and talent acquisition",
        "HR policy development and compliance",
        "Performance management systems",
        "Organizational development and culture transformation"
      ]
    },
    {
      title: "4. Training & Capacity Development",
      icon: Calculator,
      description: "Our training arm delivers structured programs tailored to both individuals and corporate organizations. We focus on equipping participants with practical skills that drive measurable performance improvements.",
      benefits: [
        "Leadership and managerial development",
        "Corporate governance and compliance",
        "Relationship management and customer experience",
        "Introduction to specialized sectors (including Oil & Gas)"
      ]
    },
    {
      title: "5. Financial Advisory & Fund Intermediation",
      icon: BarChart3,
      description: "We assist clients in accessing the right funding solutions and optimizing their financial strategy.",
      benefits: [
        "Structuring and packaging funding requests",
        "Liaising with financial institutions (local and international)",
        "Investment planning and financial strategy",
        "Cash flow and fund management optimization"
      ]
    },
    {
      title: "6. Debt Recovery Services",
      icon: FileText,
      description: "We deploy ethical and effective recovery strategies to help you manage and recover outstanding obligations.",
      benefits: [
        "Negotiation and restructuring",
        "Debt swaps and settlements",
        "Legal recovery processes",
        "Commercial debt advisory"
      ]
    },
    {
      title: "7. Brand Management",
      icon: Megaphone,
      description: "We help organizations build strong, differentiated brands that resonate with their target audience.",
      benefits: [
        "Aligning products/services with customer perception",
        "Enhancing market positioning",
        "Building customer loyalty and engagement"
      ]
    },
    {
      title: "8. Property & Investment Consultancy",
      icon: PieChart,
      description: "We provide advisory services in real estate and property investments for corporate and individual clients.",
      benefits: [
        "Investment planning and feasibility analysis",
        "Property acquisition and disposal",
        "Construction financing advisory",
        "Cooperative and corporate housing solutions"
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

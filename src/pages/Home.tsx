import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BarChart3, FileText, ShieldCheck, TrendingUp, Users, Calculator } from "lucide-react";
import { ServiceCard } from "@/components/ui/service-card";
import styles from "./Home.module.css";
const teamPhoto = "/images/A6769C0F-9FAF-4C83-AF07-7BAD4EC3F2D2_1777835101069.jpeg";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const clients = [
    "Amazon Energy Group",
    "Lakel Afrik Petroleum Limited",
    "Life Light Energy Limited",
    "Eliezer Workplace Management Limited",
    "Miraflash Pharmaceutical Limited",
    "Agape Health Limited",
    "Biaachi Global Services Limited",
    "Biane Microfinance Bank",
    "Folamart Limited",
    "Admos Global Resource Limited"
  ];

  return (
    <div className={styles.pageWrapper}>

      {/* ── Hero Section ── */}
      <section className={styles.heroSection}>
        {/* Background Elements */}
        <div className={styles.heroBg}>
          <div className={styles.heroBgRadial} />
          <div className={styles.heroBgGradient} />
          <div className={styles.heroBgGrid} />
        </div>

        <div className={styles.heroContainer}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              {/* Badge */}
              <div className={styles.heroBadge}>
                <span className={styles.heroBadgeDot}>
                  <span className={styles.heroBadgeDotInner} />
                </span>
                <span className={styles.heroBadgeText}>
                  Royalway Consulting Bureau
                </span>
              </div>

              {/* Heading */}
              <h1 className={styles.heroHeading}>
                Strategic{" "}
                <span className={styles.heroHeadingAccent}>Excellence</span>{" "}
                <br className={styles.heroHeadingBreak} />
                for Global Growth.
              </h1>

              <p className={styles.heroSubtext}>
                Empowering enterprises with precision accounting, meticulous internal audits,
                and strategic financial advisory since 1998.
              </p>

              {/* CTA Buttons */}
              <div className={styles.heroCtas}>
                <Link
                  href="/services"
                  className={styles.heroPrimaryBtn}
                  data-testid="link-our-services"
                >
                  <span className={styles.heroPrimaryBtnContent}>
                    Our Expertise <ArrowRight size={14} className={styles.arrowIcon} />
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className={styles.heroSecondaryBtn}
                  data-testid="link-contact-us"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ── Stats Banner ── */}
      <section className={styles.statsSection}>
        <div className={styles.statsDivider} style={{ left: "25%" }} />
        <div className={styles.statsDivider} style={{ left: "50%" }} />
        <div className={styles.statsDivider} style={{ left: "75%" }} />

        <div className={styles.statsContainer}>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className={styles.statsGrid}
          >
            {[
              { value: "28+", label: "Years Experience" },
              { value: "500+", label: "Projects Completed" },
              { value: "11+", label: "Corporate Clients" },
              { value: "100%", label: "Accuracy Rate" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className={styles.statItem}
                data-testid={`stat-item-${i}`}
              >
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Services Preview ── */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesContainer}>
          <div className={styles.servicesHeader}>
            <motion.div {...fadeIn} className={styles.servicesHeadingWrap}>
              <div className={styles.sectionLabel}>
                <div className={styles.sectionLabelLine} />
                <p className={styles.sectionLabelText}>What We Do</p>
              </div>
              <h2 className={styles.sectionHeading}>
                Our Specialized <span className={styles.sectionHeadingItalic}>Competencies</span>
              </h2>
              <p className={styles.sectionSubtext}>
                We provide a comprehensive suite of consulting services designed to bring operational
                efficiency and financial transparency to your organization.
              </p>
            </motion.div>

            <motion.div {...fadeIn}>
              <Link
                href="/services"
                className={styles.servicesLink}
                data-testid="link-all-services"
              >
                View Catalog <ArrowRight size={14} className={styles.arrowIcon} />
              </Link>
            </motion.div>
          </div>

          <div className={styles.servicesGrid}>
            <ServiceCard
              index={0}
              title="1. Management Consultancy"
              description="Strategic advisory services aimed at improving organizational efficiency and governance."
              icon={TrendingUp}
            />
            <ServiceCard
              index={1}
              title="2. Forensic Audit & Risk"
              description="Detect, prevent, and mitigate financial and operational risks."
              icon={ShieldCheck}
            />
            <ServiceCard
              index={2}
              title="3. HR Management"
              description="Build high-performing teams through comprehensive recruitment and HR solutions."
              icon={Users}
            />
            <ServiceCard
              index={3}
              title="4. Training & Capacity"
              description="Structured programs tailored to drive measurable performance improvements."
              icon={Calculator}
            />
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className={styles.whySection}>
        <div className={styles.whyDecorBlob} />

        <div className={styles.whyContainer}>
          <div className={styles.whyGrid}>
            <motion.div {...fadeIn} className={styles.whyContent}>
              <div className={styles.sectionLabel}>
                <div className={styles.sectionLabelLine} />
                <p className={styles.sectionLabelText}>Why Partner With Us</p>
              </div>
              <h2 className={styles.whyHeading}>
                A Partnership Founded on{" "}
                <span className={styles.whyHeadingAccent}>Absolute Trust</span>
              </h2>
              <p className={styles.whySubtext}>
                Royalway Consulting Bureau helps businesses navigate complex challenges through
                rigorous processes and strategic insight.
              </p>

              <div className={styles.whyList}>
                {[
                  { title: "Proven Track Record", desc: "Proven track record across multiple industries." },
                  { title: "Deep Expertise", desc: "Deep expertise in banking, finance, and corporate governance." },
                  { title: "Practical Solutions", desc: "Practical, results-oriented solutions tailored for your business." },
                  { title: "Strong Network", desc: "Strong network of industry professionals and partners." },
                  { title: "Commitment to Excellence", desc: "Unwavering commitment to integrity, excellence, and client success." }
                ].map((item, i) => (
                  <div key={i} className={styles.whyItem}>
                    <div className={styles.whyItemNumber}>
                      <span className={styles.whyItemNumberText}>{i + 1}</span>
                    </div>
                    <div>
                      <h4 className={styles.whyItemTitle}>{item.title}</h4>
                      <p className={styles.whyItemDesc}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.whyLink}>
                <Link
                  href="/about"
                  className={styles.whyLinkAnchor}
                  data-testid="link-about-us"
                >
                  Learn About Our History <ArrowRight size={14} className={styles.arrowIcon} />
                </Link>
              </div>
            </motion.div>

            {/* Team Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={styles.whyImageWrap}
            >
              <div className={styles.whyImageDecor} />
              <div className={styles.whyImageFrame}>
                <img
                  src={teamPhoto}
                  alt="Royalway team at client site"
                  className={styles.whyImage}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Our Clients ── */}
      <section className={styles.clientsSection}>
        <div className={styles.clientsBgPattern} />

        <div className={styles.clientsContainer}>
          <motion.div {...fadeIn} className={styles.clientsHeader}>
            <p className={styles.clientsLabelText}>Our Client Network</p>
            <h2 className={styles.clientsHeading}>Trusted by Industry Leaders</h2>
            <p className={styles.clientsSubtext}>
              We maintain long-term partnerships with leading organizations across energy,
              healthcare, and finance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className={styles.clientsGrid}
          >
            {clients.map((client, i) => (
              <div
                key={i}
                className={styles.clientItem}
                data-testid={`client-item-${i}`}
              >
                <span className={styles.clientName}>{client}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className={styles.testimonialsSection}>
        <div className={styles.testimonialsDecorBlob} />

        <div className={styles.testimonialsContainer}>
          <motion.div {...fadeIn} className={styles.testimonialsHeader}>
            <div className={styles.testimonialsBadge}>Client Feedback</div>
            <h2 className={styles.testimonialsHeading}>Voice of Our Partners</h2>
            <p className={styles.testimonialsSubtext}>
              We take pride in the lasting relationships we build with our clients and the
              tangible impact we deliver.
            </p>
          </motion.div>

          <div className={styles.testimonialsGrid}>
            {[
              {
                quote: "Royalway's audit team gave us unprecedented clarity on our internal controls. Their recommendations directly led to measurable improvements in how we manage financial risk.",
                author: "Managing Director",
                role: "Energy Sector Client"
              },
              {
                quote: "The debt recovery team at Royalway recovered outstanding receivables we had written off. Their professional, structured approach was exactly what our business needed.",
                author: "Chief Operating Officer",
                role: "Healthcare Services Client"
              },
              {
                quote: "From bookkeeping cleanup to strategic advisory, Royalway has been a true partner. Their senior consultants understand our business deeply and always go beyond expectations.",
                author: "Chief Executive Officer",
                role: "Financial Services Client"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={styles.testimonialCard}
                data-testid={`testimonial-card-${i}`}
              >
                <div className={styles.testimonialQuoteIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                  </svg>
                </div>
                <p className={styles.testimonialQuote}>"{testimonial.quote}"</p>
                <div className={styles.testimonialAuthorRow}>
                  <div className={styles.testimonialDivider} />
                  <div>
                    <div className={styles.testimonialAuthor}>{testimonial.author}</div>
                    <div className={styles.testimonialRole}>{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={styles.ctaBox}
          >
            {/* Animated shine */}
            <div className={styles.ctaShine}>
              <div className={styles.ctaShineLine} />
            </div>

            <div className={styles.ctaInner}>
              <h2 className={styles.ctaHeading}>Ready to Elevate Your Business Operations?</h2>
              <p className={styles.ctaSubtext}>
                Connect with our senior consultants today for a comprehensive evaluation of your needs.
              </p>
              <Link
                href="/contact"
                className={styles.ctaBtn}
                data-testid="link-book-consultation"
              >
                <span className={styles.ctaBtnText}>Start Consultation</span>
                <ArrowRight size={14} className={styles.arrowIcon} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

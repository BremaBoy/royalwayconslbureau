import { motion } from "framer-motion";
const ceoPhoto = "/images/founder1.png";
const exec2Photo = "/images/founder2.png";
const exec3Photo = "/images/founder3.png";
const teamPhoto = "/images/about.png";
import styles from "./About.module.css";

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const executives = [
    {
      name: "Aseniserare Justus Ade",
      role: "Chief Executive Officer",
      bio: "With over 28 years of distinguished experience in banking and consulting, Mr. Ade brings a rare depth of expertise to Royalway. He served as Zonal Head of Credit Risk Management at Unity Bank and is a Fellow of the Chartered Institute of Bankers of Nigeria, holding an MBA in HR Management.",
      image: ceoPhoto,
      credentials: "FCIB | MBA"
    },
    {
      name: "Ajetunmobi Folayemi Benson",
      role: "Director, Internal Audit & Control",
      bio: "A seasoned banking professional with 25+ years of experience, Mr. Benson is a highly respected auditor and internal control expert. His meticulous approach to risk and governance has helped numerous organizations strengthen their financial frameworks.",
      image: exec2Photo,
      credentials: "Internal Control Specialist"
    },
    {
      name: "Prof. Jumoke Familoni",
      role: "Professor of Entrepreneurship & Strategy",
      bio: "Professor Familoni is a distinguished academic and practitioner renowned for her expertise in entrepreneurship, leadership coaching, and strategic business development. She brings world-class intellectual rigor to Royalway's advisory and training services.",
      image: exec3Photo,
      credentials: "Professor | Strategic Advisor"
    },
    {
      name: "Engr. Toba Akinmoladun",
      role: "Senior Advisor, Energy & Oil Sector",
      bio: "A veteran of the oil and gas industry with over 30 years of experience, Engr. Akinmoladun served as General Manager of Wells at Shell. He brings unmatched technical and strategic insight to clients in the energy sector.",
      image: null,
      credentials: "30+ Years | Shell GM"
    },
    {
      name: "Komna Oladipo Sessi",
      role: "Senior Business Consultant",
      bio: "With 30+ years of cross-industry experience spanning banking, manufacturing, and services, Mr. Sessi's holistic understanding of business operations enables him to deliver transformative consulting engagements for Royalway's diverse clientele.",
      image: null,
      credentials: "30+ Years Cross-Industry"
    },
    {
      name: "Afolashade Osuntuyi",
      role: "Head, Human Resources & Recruitment",
      bio: "An accomplished HR professional with 15+ years of expertise in recruitment, payroll administration, and regulatory compliance. Mrs. Osuntuyi leads Royalway's HR consulting and recruitment mandates with precision and strategic foresight.",
      image: null,
      credentials: "HR Expert | 15+ Years"
    },
    {
      name: "Muri Akinborode",
      role: "Director, Audit & Compliance",
      bio: "A former KPMG professional with 20+ years of audit and compliance experience across banking and the private sector, Mr. Akinborode ensures that our clients' governance structures meet the highest regulatory and international standards.",
      image: null,
      credentials: "Ex-KPMG | 20+ Years"
    }
  ];

  const withPhotos = executives.filter(e => e.image);
  const withoutPhotos = executives.filter(e => !e.image);

  return (
    <div className={styles.pageWrapper}>
      {/* Header */}
      <section className={styles.headerSection}>
        <div className={styles.container}>
          <motion.div {...fadeIn} className={styles.headerContent}>
            <p className={styles.sectionLabel}>Who We Are</p>
            <h1 className={styles.heading}>
              Built on Trust.<br />Driven by Excellence.
            </h1>
            <p className={styles.subtext}>
              Royalway Consulting Bureau is an emerging consulting firm helping businesses solve challenges, improve performance, and ensure proper processes and procedures across all aspects of their financial and operational lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={styles.missionVisionSection}>
        <div className={styles.container}>
          <div className={styles.missionVisionGrid}>
            <motion.div {...fadeIn}>
              <div className={styles.sectionLine} />
              <h2 className={styles.subHeading}>Our Mission</h2>
              <p className={styles.paragraphText}>
                To provide businesses of all sizes with access to world-class consulting expertise — delivering results in accounting, audit, debt recovery, financial advisory, and performance improvement with professionalism, integrity, and precision.
              </p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <div className={styles.sectionLine} />
              <h2 className={styles.subHeading}>Our Vision</h2>
              <p className={styles.paragraphText}>
                To be the foremost consulting bureau in West Africa, recognized for delivering transformative financial and business solutions that unlock sustainable growth for our clients — anchored in absolute trust, discretion, and measurable results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Photo */}
      <section className={styles.teamPhotoSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={styles.teamPhotoWrapper}
          >
            <img
              src={teamPhoto}
              alt="Royalway Consulting Bureau Team"
              className={styles.teamImage}
            />
            <div className={styles.teamPhotoOverlay} />
            <div className={styles.teamPhotoTextWrap}>
              <p className={styles.teamPhotoTitle}>Our Team in Action</p>
              <p className={styles.teamPhotoSubtitle}>Royalway Consulting Bureau</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Executives with Photos */}
      <section className={styles.leadershipSection}>
        <div className={styles.container}>
          <motion.div {...fadeIn} className={styles.leadershipHeader}>
            <p className={styles.sectionLabel}>Leadership</p>
            <h2 className={styles.leadershipHeading}>Executives & Faculty Members</h2>
            <p className={styles.leadershipSubtext}>
              Our bureau is led by veterans with decades of hands-on experience across banking, consulting, oil & gas, academia, and enterprise management.
            </p>
          </motion.div>

          {/* Executives with photos — large cards */}
          <div className={styles.execWithPhotoGrid}>
            {withPhotos.map((exec, i) => (
              <motion.div
                key={exec.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={styles.execCard}
                data-testid={`executive-card-${i}`}
              >
                <div className={styles.execImageWrapper}>
                  <div className={styles.execImageOverlay} />
                  <img
                    src={exec.image!}
                    alt={exec.name}
                    className={styles.execImage}
                  />
                </div>
                <h3 className={styles.execName}>{exec.name}</h3>
                <div className={styles.execRole}>{exec.role}</div>
                <div className={styles.execCredentials}>{exec.credentials}</div>
                <p className={styles.execBio}>{exec.bio}</p>
              </motion.div>
            ))}
          </div>

          {/* Executives without photos — horizontal list cards */}
          <div className={styles.execWithoutPhotoGrid}>
            {withoutPhotos.map((exec, i) => (
              <motion.div
                key={exec.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={styles.execListCard}
                data-testid={`executive-card-${i + 3}`}
              >
                <div className={styles.execListCardInner}>
                  <div className={styles.execAvatar}>
                    <span className={styles.execAvatarText}>
                      {exec.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                    </span>
                  </div>
                  <div>
                    <h3 className={styles.execListCardName}>{exec.name}</h3>
                    <div className={styles.execListCardRole}>{exec.role}</div>
                    <div className={styles.execListCardCredentials}>{exec.credentials}</div>
                    <p className={styles.execListCardBio}>{exec.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

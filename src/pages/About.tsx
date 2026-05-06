import { motion } from "framer-motion";
const ceoPhoto = "/images/1D77A0B4-AEDD-4680-BD1C-2D5CFFBA47F2_1777835101070.jpeg";
const exec2Photo = "/images/F1D92B43-7440-4A54-9EF5-DF1FD5BEE491_1777835101071.jpeg";
const exec3Photo = "/images/376B408B-5F2A-4EF3-AC05-6CF9B8BCC6A5_1777835101073.jpeg";
const teamPhoto = "/images/97F4A62A-0201-45DB-9F66-53F8F67E7699_1777835101074.jpeg";
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
      role: "Managing Director",
      bio: "Ade is a graduate of Banking and Finance from Ogun State University and holds an MBA (Human Resources Management) from Lagos State University. He is a Chartered Banker and Fellow of the Chartered Institute of Bankers of Nigeria, as well as a Chartered Management Consultant and Fellow of the Institute of Management Consultants. He has over 30 years of banking and consulting experience, having held senior management roles at Heritage Bank, Sterling Bank, and Unity Bank. He currently serves as Managing Director of Royalway Consulting Bureau, Associate Partner at Total Business Support International Consulting, Chairman of Buildomart Merchandising & Constructions Limited, and Director at Eliezer Workplace Management Limited.",
      image: ceoPhoto,
      credentials: "BSc | MBA | FCIB | CMC | FIMC"
    },
    {
      name: "Ajetunmobi Folayemi Benson",
      role: "Director, Internal Audit & Control",
      bio: "Benson holds a Bachelor's degree in Business Administration from the University of Lagos and an MBA from Lagos State University. He is also an Associate Member of the Chartered Institute of Finance and Control. With over 25 years of experience in the banking sector, he has served in various strategic roles. He is recognized as a meticulous Auditor and Internal Control professional, with strong expertise in fraud detection, control systems, and IT auditing.",
      image: exec2Photo,
      credentials: "BSc | MBA | ACIFCN"
    },
    {
      name: "Komna Oladipo Sessi",
      role: "Senior Business Consultant",
      bio: "Komna is a Nigerian with a degree in Business Economics from the University of Wisconsin-Eau Claire, USA, and a Master's degree from Northwestern Missouri State University, USA. With over 30 years of postgraduate experience, he has held CEO positions in organizations with diverse interests, including manufacturing, commerce, and international business ventures.",
      image: exec3Photo, /* I will assign exec3Photo to Komna since he is the 3rd executive in the new list, assuming the photos correspond */
      credentials: "BSc | MSc"
    },
    {
      name: "Afolashade Osuntuyi",
      role: "Head, Human Resources & Recruitment",
      bio: "Afolashade is an experienced HR and Administrative professional with over 15 years of experience across hospitality, telecommunications, consulting, and recruitment sectors. She specializes in organizational development, productivity enhancement, and operational optimization. She holds an MBA from Ladoke Akintola University of Technology, a BSc in Business Administration, and a BSA in Secretarial Administration.",
      image: null,
      credentials: "BSc | BSA | MBA"
    },
    {
      name: "Muri Akinborode",
      role: "Director, Audit & Compliance",
      bio: "Muri has over 20 years of extensive experience in banking and auditing. He began his career with KPMG before working with Trade Bank Plc, Oceanic Bank International Plc, and Ecobank Nigeria Limited. He specializes in Internal Audit, Internal Control, Forensic Investigation, and Compliance. He holds a BSc (Hons) in Finance and an MBA in Marketing from the University of Ilorin and is an Associate Member of the Compliance Institute of Nigeria.",
      image: null,
      credentials: "BSc | MBA | ACIN"
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
            <div className={`${styles.subtext} space-y-4`}>
              <p>
                Royalway Consulting Bureau (RCB) is a duly registered consulting firm with the Corporate Affairs Commission (CAC) of Nigeria. We are a multidisciplinary professional services firm committed to delivering innovative, practical, and results-driven solutions that enhance organizational performance, strengthen governance structures, and drive sustainable growth.
              </p>
              <p>
                With a strong presence in Lagos, our registered office is located at 4/6 Adebiyi Abdulquadri Street, Magodo Phase II, while our operational and training facility is situated at 36A Toyin Street, Ikeja. We also leverage premium training environments, including 5-star hotel facilities, to deliver world-class learning experiences when required.
              </p>
              <p>
                We serve as the principal consultant and brand manager to Eliezer Group, a leading integrated facility management company providing services to major institutions such as Chevron Nigeria, Egbin Power Plc, MTN Nigeria, UBA Plc, IITA Ibadan, and Bowen University.
              </p>
              <p>
                We have also successfully delivered fund intermediation and debt recovery services to a diverse portfolio of corporate and high-net-worth clients within and outside Nigeria.
              </p>
            </div>
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

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import styles from "./Contact.module.css";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(_values: z.infer<typeof formSchema>) {
    setIsSubmitted(true);
  }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className={styles.pageWrapper}>
      <section className={styles.headerSection}>
        <div className={styles.container}>
          <motion.div {...fadeIn} className={styles.headerContent}>
            <p className={styles.sectionLabel}>Contact Us</p>
            <h1 className={styles.heading}>
              Book a Free Consultation.
            </h1>
            <p className={styles.subtext}>
              Connect with our advisory team to discuss how Royalway Consulting Bureau can deliver clarity, precision, and results to your organization.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={styles.mainSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>

            {/* Contact Info */}
            <motion.div {...fadeIn} className={styles.contactInfoWrap}>
              <div>
                <h2 className={styles.subHeading}>Get in Touch</h2>
                <div className={styles.contactList}>
                  <div className={styles.contactItem}>
                    <div className={styles.contactIconWrap}>
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className={styles.contactItemTitle}>Address</h4>
                      <p className={styles.contactItemText}>
                        <strong>Head Office:</strong> 4/6 Adebiyi Abdulquadri Street, Magodo Phase II, Lagos<br /><br />
                        <strong>Operations & Training Facility:</strong> 36A Toyin Street, Ikeja, Lagos
                      </p>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <div className={styles.contactIconWrap}>
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className={styles.contactItemTitle}>Phone</h4>
                      <p className={styles.contactItemText}>Available upon inquiry</p>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <div className={styles.contactIconWrap}>
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className={styles.contactItemTitle}>Email</h4>
                      <a
                        href="mailto:contact@royalway.com"
                        className={styles.contactLink}
                        data-testid="link-email"
                      >
                        contact@royalway.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Google Map */}
              <div className={styles.mapContainer}>
                <iframe
                  title="Royalway Consulting Bureau Location"
                  src="https://www.google.com/maps?q=4/6%20Adebiyi%20Abdulquadri%20Street%2C%20Magodo%20Phase%20II%2C%20Lagos&output=embed"
                  className={styles.mapIframe}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Consultation Note */}
              <div className={styles.noteBox}>
                <h4 className={styles.noteTitle}>What to Expect</h4>
                <ul className={styles.noteList}>
                  {[
                    "Initial consultation is completely free with no obligation",
                    "A senior consultant will review your inquiry personally",
                    "You will receive a response within 24–48 business hours",
                    "All information shared is treated with strict confidentiality"
                  ].map((item, i) => (
                    <li key={i} className={styles.noteItem}>
                      <div className={styles.noteBullet} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <div className={styles.formCard}>
                <h3 className={styles.formTitle}>Book a Free Consultation</h3>
                <p className={styles.formSubtitle}>Fill in the form below and our team will be in touch shortly.</p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={styles.successWrap}
                  >
                    <div className={styles.successIconWrap}>
                      <CheckCircle2 size={32} />
                    </div>
                    <h4 className={styles.successTitle}>Inquiry Received</h4>
                    <p className={styles.successText}>
                      Thank you for contacting Royalway Consulting Bureau. A senior consultant will review your inquiry and reach out within 24–48 business hours to schedule your free consultation.
                    </p>
                  </motion.div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className={styles.formContent}>
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className={styles.inputLabel}>Full Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your full name"
                                className={styles.inputField}
                                data-testid="input-name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className={styles.inputLabel}>Email Address</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="you@company.com"
                                className={styles.inputField}
                                data-testid="input-email"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className={styles.inputLabel}>Phone Number</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="+234 800 000 0000"
                                className={styles.inputField}
                                data-testid="input-phone"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className={styles.inputLabel}>How Can We Help?</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Briefly describe your business challenge or consulting need..."
                                className={styles.textareaField}
                                data-testid="input-message"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <button
                        type="submit"
                        className={styles.submitBtn}
                        data-testid="button-submit"
                      >
                        Book Free Consultation
                      </button>
                    </form>
                  </Form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

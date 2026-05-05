import { Link } from "wouter";
import { Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="font-serif text-3xl font-bold mb-2 block">
              Royalway<span className="text-secondary">.</span>
            </Link>
            <p className="text-secondary text-xs uppercase tracking-widest mb-5">Consulting Bureau</p>
            <p className="text-primary-foreground/70 max-w-sm font-light leading-relaxed">
              Royalway Consulting Bureau helps businesses solve challenges, improve performance, and ensure proper processes and procedures — delivering expert solutions in accounting, audit, debt recovery, and business advisory.
            </p>
            <div className="mt-6 space-y-2 text-sm text-primary-foreground/60">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="shrink-0" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="shrink-0" />
                <a href="mailto:contact@royalway.com" className="hover:text-white transition-colors">
                  contact@royalway.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-primary-foreground/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary-foreground/70 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary-foreground/70 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-primary-foreground/70 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-primary-foreground/70">
              <li>Accounting & Bookkeeping</li>
              <li>Internal Audit & Risk</li>
              <li>Debt Recovery</li>
              <li>Financial Advisory</li>
              <li>Payroll Services</li>
              <li>Training & Recruitment</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Royalway Consulting Bureau. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-white transition-colors">Book a Consultation</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

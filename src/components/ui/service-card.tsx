import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { Link } from "wouter";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
  index?: number;
}

export function ServiceCard({ title, description, icon: Icon, href = "/services", index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group p-8 bg-card border border-border hover:border-secondary/50 transition-colors duration-300 h-full flex flex-col"
    >
      <div className="w-12 h-12 bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">{title}</h3>
      <p className="text-muted-foreground mb-8 flex-1 leading-relaxed">
        {description}
      </p>
      <Link href={href} className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-secondary transition-colors uppercase tracking-wider">
        Learn More <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  clientType: string;
  client?: string;
  problem: string;
  solution?: string;
  result: string;
  index?: number;
}

export function ProjectCard({ title, clientType, client, problem, solution, result, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group border border-border bg-card overflow-hidden hover:border-secondary/50 transition-colors duration-300"
      data-testid={`project-card-${index}`}
    >
      <div className="p-8 md:p-10">
        <div className="flex items-center justify-between mb-4">
          <div className="text-xs font-semibold uppercase tracking-widest text-secondary">
            {clientType}
          </div>
        </div>
        <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground">
          {title}
        </h3>
        {client && (
          <p className="text-sm text-muted-foreground mb-6 font-medium">{client}</p>
        )}

        <div className="space-y-5">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-2">The Challenge</h4>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {problem}
            </p>
          </div>
          {solution && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-2">Our Approach</h4>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {solution}
              </p>
            </div>
          )}
          <div className="bg-muted/50 border-l-2 border-secondary p-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-secondary mb-2">The Result</h4>
            <p className="text-foreground font-medium text-sm leading-relaxed">
              {result}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

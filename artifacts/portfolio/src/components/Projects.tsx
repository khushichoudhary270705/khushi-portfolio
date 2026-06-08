import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "AI Caption Generator",
    description:
      "A web application that generates intelligent, context-aware captions for images using AI. Built end-to-end with a Django backend powering the AI processing pipeline and a clean, responsive frontend.",
    tech: ["HTML", "CSS", "JavaScript", "Django", "Python"],
    highlights: ["AI-Powered Caption Generation", "Full Stack Architecture", "REST API Backend"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-card/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Projects</h2>
          <div className="w-20 h-1 bg-secondary rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full bg-background border-border hover:border-primary/40 transition-all duration-300 group shadow-sm hover:shadow-lg hover:shadow-primary/5 rounded-2xl overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-primary to-secondary w-full" />
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

                  <div className="mb-6">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Key Features</p>
                    <ul className="space-y-1">
                      {project.highlights.map((h) => (
                        <li key={h} className="text-sm text-foreground/80 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Briefcase, Code2 } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Experience</h2>
          <div className="w-20 h-1 bg-secondary rounded-full"></div>
        </motion.div>

        <div className="relative ml-4 md:ml-8">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border"></div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative pl-10 pb-12"
          >
            <div className="absolute -left-4 top-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
              <Briefcase className="h-4 w-4 text-primary-foreground" />
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-colors shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">Full Stack Developer Intern</h3>
                  <p className="text-primary font-medium mt-1">Software Development</p>
                </div>
                <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full whitespace-nowrap">
                  Work Experience
                </span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Gained hands-on experience in full-stack web development, working with front-end and back-end technologies to build functional, production-ready web applications.
              </p>

              <div className="flex flex-wrap gap-3">
                {["Frontend Development", "Backend Development", "Web Applications", "Full Stack"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative pl-10"
          >
            <div className="absolute -left-4 top-1 w-8 h-8 rounded-full bg-secondary/80 flex items-center justify-center shadow-md">
              <Code2 className="h-4 w-4 text-secondary-foreground" />
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-secondary/30 transition-colors shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">B.Tech Computer Science</h3>
                  <p className="text-muted-foreground font-medium mt-1">Shri Ramswaroop Memorial College of Engineering & Management</p>
                </div>
                <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full whitespace-nowrap">
                  2023 – 2027
                </span>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Pursuing a Bachelor of Technology in Computer Science with a focus on software engineering, data structures, OOP principles, and modern web technologies.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

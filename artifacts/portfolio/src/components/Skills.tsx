import { motion } from "framer-motion";
import { SiPython, SiJavascript, SiHtml5, SiGit, SiDjango } from "react-icons/si";
import { Code2, Database, Monitor, Users, Clock, Lightbulb, Target, MessageCircle, Palette } from "lucide-react";

const techSkills = [
  { name: "Python", icon: SiPython, color: "text-yellow-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: Palette, color: "text-blue-500" },
  { name: "Git", icon: SiGit, color: "text-red-500" },
  { name: "Django", icon: SiDjango, color: "text-green-600" },
  { name: "Java", icon: Code2, color: "text-red-400" },
  { name: "C", icon: Code2, color: "text-blue-400" },
  { name: "DBMS", icon: Database, color: "text-purple-500" },
  { name: "Data Structures", icon: Monitor, color: "text-teal-500" },
  { name: "OOP", icon: Code2, color: "text-indigo-500" },
  { name: "OS", icon: Monitor, color: "text-gray-500" },
];

const softSkills = [
  { name: "Communication", icon: MessageCircle },
  { name: "Team Work", icon: Users },
  { name: "Problem Solving", icon: Lightbulb },
  { name: "Time Management", icon: Clock },
  { name: "Dedication", icon: Target },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120, damping: 12 } },
};

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Skills</h2>
          <div className="w-20 h-1 bg-secondary rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-primary" />
              Technical Skills
            </motion.h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-wrap gap-3"
            >
              {techSkills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 group cursor-default shadow-sm"
                  >
                    <Icon className={`h-4 w-4 ${skill.color} group-hover:scale-110 transition-transform`} />
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-secondary" />
              Soft Skills
            </motion.h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="space-y-4"
            >
              {softSkills.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { opacity: 1, x: 0, transition: { delay: i * 0.08, duration: 0.4 } },
                    }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-secondary/40 hover:bg-secondary/5 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                      <Icon className="h-5 w-5 text-secondary-foreground" />
                    </div>
                    <span className="font-medium text-foreground">{skill.name}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 p-6 rounded-2xl bg-card border border-border/60"
        >
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Tools & Platforms</p>
          <div className="flex flex-wrap gap-2">
            {["VS Code", "Excel", "Git", "GitHub"].map((tool) => (
              <span
                key={tool}
                className="text-sm px-3 py-1.5 rounded-lg bg-muted text-muted-foreground border border-border"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

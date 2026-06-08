import { motion } from "framer-motion";
import { Award, Code2, Trophy, Star, BookCheck, Shield } from "lucide-react";

const achievements = [
  {
    icon: Code2,
    title: "Completed RAG Workshop",
    description: "Hands-on training in Retrieval-Augmented Generation, a cutting-edge AI technique.",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  },
  {
    icon: Award,
    title: "J.P. Morgan Software Engineering Virtual Experience",
    description: "Completed the Software Engineering Virtual Experience program on Forage by J.P. Morgan.",
    color: "bg-primary/10 text-primary border-primary/20",
  },
  {
    icon: BookCheck,
    title: "Online Certifications — Forage",
    description: "Completed multiple professional certifications through the Forage platform.",
    color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
  },
  {
    icon: Code2,
    title: "Coding Competitions & Hackathons",
    description: "Active participant in various competitive programming events and hackathons.",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  },
  {
    icon: Star,
    title: "Scholarship — Academic Excellence",
    description: "Recipient of a scholarship recognizing outstanding academic performance.",
    color: "bg-secondary/10 text-secondary-foreground border-secondary/20",
  },
  {
    icon: Trophy,
    title: "Gold Medalist — Zonal Badminton",
    description: "Gold medalist at the Zonal level and State-level representative in Badminton.",
    color: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20",
  },
  {
    icon: Shield,
    title: "NCC 'B' Certificate",
    description: "Earned the National Cadet Corps 'B' Certificate, reflecting discipline and leadership.",
    color: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 14 } },
};

export function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-card/30 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Achievements & Certifications
          </h2>
          <div className="w-20 h-1 bg-secondary rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="bg-background border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 ${item.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-foreground mb-2 leading-snug">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

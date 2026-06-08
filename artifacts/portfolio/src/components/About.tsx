import { motion } from "framer-motion";
import { BookOpen, GraduationCap, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-secondary rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-7 prose prose-lg dark:prose-invert"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              I am an ambitious and detail-oriented B.Tech Computer Science student with a profound passion for full-stack web development. I thrive at the intersection of logic and creativity, where complex problems are solved with elegant, efficient code.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Beyond the screen, I bring the discipline of a state-level badminton gold medalist and the leadership of an NCC 'B' Certificate holder into my professional life. I believe great software is built on a foundation of teamwork, dedication, and clear communication.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Currently, I am seeking opportunities to leverage my technical skills and internship experience to contribute meaningfully to innovative tech teams.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-5 space-y-6"
          >
            <Card className="bg-background/50 backdrop-blur border-primary/20 shadow-lg shadow-primary/5 hover:border-primary/40 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">B.Tech in Computer Science</h3>
                    <p className="text-primary font-medium mb-2">2023 – 2027</p>
                    <p className="text-sm text-muted-foreground">Shri Ramswaroop Memorial College of Engineering & Management, Lucknow</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur border-border hover:border-primary/40 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-xl text-secondary-foreground">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">Intermediate & High School</h3>
                    <p className="text-sm text-muted-foreground mb-1">CBSE Board</p>
                    <p className="text-sm text-muted-foreground">Kendriya Vidyalaya No 1 AFS Gorakhpur</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex items-center gap-2 text-muted-foreground ml-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Based in Lucknow, India</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

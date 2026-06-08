import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-[100dvh] flex flex-col justify-center relative overflow-hidden pt-20"
    >
      {/* Background decorations */}
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium border border-secondary/30">
              Aspiring Full Stack Developer
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-tight tracking-tight mb-6"
          >
            Hi, I'm <span className="text-primary relative">
              Khushi
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0,10 Q50,0 100,10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            A B.Tech Computer Science student crafting clean, precision-driven applications. Driven by curiosity, fueled by logic, and grounded in purpose.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
            <Button size="lg" className="rounded-full gap-2 px-8 h-14 text-base" asChild>
              <a href="#projects">
                View My Work <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full gap-2 px-8 h-14 text-base bg-background/50 backdrop-blur-sm" asChild>
              <a href="#contact">
                Contact Me
              </a>
            </Button>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex items-center gap-5 mt-12 pt-8 border-t border-border/50">
            <a href="https://linkedin.com/in/khushi-choudhary" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:khushichoudhary270705@gmail.com" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

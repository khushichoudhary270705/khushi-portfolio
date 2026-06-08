import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, ArrowRight } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "khushichoudhary270705@gmail.com",
    href: "mailto:khushichoudhary270705@gmail.com",
    display: "khushichoudhary270705@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-7897056665",
    href: "tel:+917897056665",
    display: "+91-7897056665",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/khushi-choudhary",
    href: "https://linkedin.com/in/khushi-choudhary",
    display: "linkedin.com/in/khushi-choudhary",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lucknow, India",
    href: null,
    display: "Lucknow, India",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-secondary rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              Let's build something together.
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
              I'm actively seeking internship and entry-level opportunities where I can contribute, grow, and make a real impact. Whether you have a role in mind or just want to connect — my inbox is always open.
            </p>

            <a
              href="mailto:khushichoudhary270705@gmail.com"
              data-testid="button-contact-email"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all hover:gap-3 shadow-lg shadow-primary/20"
            >
              Say Hello <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            {contactItems.map((item, i) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-1">{item.label}</p>
                    <p className="text-foreground font-medium truncate group-hover:text-primary transition-colors">{item.display}</p>
                  </div>
                </div>
              );

              return item.href ? (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  data-testid={`link-contact-${item.label.toLowerCase()}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * i }}
                >
                  {content}
                </motion.a>
              ) : (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * i }}
                >
                  {content}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

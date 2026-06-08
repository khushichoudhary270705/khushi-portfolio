import { Mail, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30 py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-xl font-serif font-bold text-primary"
            >
              KC.
            </a>
            <p className="text-sm text-muted-foreground mt-1">Aspiring Full Stack Developer</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:khushichoudhary270705@gmail.com"
              data-testid="footer-link-email"
              className="p-2.5 rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/khushi-choudhary"
              target="_blank"
              rel="noreferrer"
              data-testid="footer-link-linkedin"
              className="p-2.5 rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Khushi Choudhary. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

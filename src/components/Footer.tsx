import { motion } from "framer-motion";
import { Heart, ShieldCheck, Question, EnvelopeSimple } from "@phosphor-icons/react";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="mt-auto py-8 border-t border-glass-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">M</span>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                © 2024 Malta Hub. Made with{" "}
                <Heart weight="fill" className="inline w-4 h-4 text-primary" /> in
                Malta
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ShieldCheck weight="duotone" className="w-4 h-4" />
              Privacy Policy
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Question weight="duotone" className="w-4 h-4" />
              FAQ
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <EnvelopeSimple weight="duotone" className="w-4 h-4" />
              Contact
            </a>
          </div>

          {/* Emergency */}
          <div className="text-sm text-muted-foreground">
            Emergency:{" "}
            <span className="text-primary font-semibold">112</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

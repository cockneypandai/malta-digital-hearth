import { motion } from "framer-motion";
import { CheckCircle, Warning } from "@phosphor-icons/react";

interface StatusBannerProps {
  hasOutage?: boolean;
  message?: string;
}

export function StatusBanner({ hasOutage = false, message }: StatusBannerProps) {
  const defaultMessage = hasOutage
    ? "⚠️ ACTIVE OUTAGE: Power disruption reported in Sliema area. Estimated restoration: 2 hours."
    : "✓ All systems operational • Power Grid: Normal • Water Supply: Normal • Emergency Services: Active";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className={`fixed top-[72px] left-0 right-0 z-40 overflow-hidden ${
        hasOutage ? "bg-destructive" : "bg-secondary/80 backdrop-blur-sm"
      }`}
    >
      <div className="relative h-8 flex items-center">
        <div className="marquee whitespace-nowrap flex items-center gap-4">
          {hasOutage ? (
            <Warning weight="bold" className="w-4 h-4 text-destructive-foreground inline" />
          ) : (
            <CheckCircle weight="bold" className="w-4 h-4 text-success inline" />
          )}
          <span
            className={`text-sm font-medium ${
              hasOutage ? "text-destructive-foreground" : "text-success"
            }`}
          >
            {message || defaultMessage}
          </span>
          <span className="mx-8">•</span>
          {hasOutage ? (
            <Warning weight="bold" className="w-4 h-4 text-destructive-foreground inline" />
          ) : (
            <CheckCircle weight="bold" className="w-4 h-4 text-success inline" />
          )}
          <span
            className={`text-sm font-medium ${
              hasOutage ? "text-destructive-foreground" : "text-success"
            }`}
          >
            {message || defaultMessage}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

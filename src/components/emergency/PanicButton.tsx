import { PhoneCall } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export const PanicButton = () => {
  return (
    <div className="space-y-2">
      <motion.a
        href="tel:112"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="
          flex items-center justify-center w-full
          bg-emergency hover:bg-emergency-hover text-white
          font-bold text-2xl uppercase tracking-wide
          py-5 rounded-2xl shadow-lg transition-colors
        "
        style={{
          boxShadow: "0 4px 20px hsl(0 72% 44% / 0.3)",
        }}
      >
        <PhoneCall weight="fill" className="w-8 h-8 mr-4" />
        Call 112 (Emergency)
      </motion.a>
      
      <p className="text-center text-emergency font-semibold text-sm opacity-90">
        Use for: Immediate Danger • Fire • Serious Injury • Crime in Progress
      </p>
      
      <p className="text-center text-muted-foreground text-xs">
        Last verified: January 2026
      </p>
    </div>
  );
};

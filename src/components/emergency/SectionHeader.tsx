import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  icon: ReactNode;
}

export const SectionHeader = ({ title, icon }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-3 mt-8 mb-4 text-red-400 border-b border-emergency/20 pb-2"
    >
      <span className="text-2xl">{icon}</span>
      <h2 className="text-xl font-bold uppercase tracking-wide text-red-300">
        {title}
      </h2>
    </motion.div>
  );
};

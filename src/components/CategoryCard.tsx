import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CategoryCardProps {
  title: string;
  icon: ReactNode;
  description?: string;
  onClick?: () => void;
  delay?: number;
}

export function CategoryCard({
  title,
  icon,
  description,
  onClick,
  delay = 0,
}: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.03, y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="glass-card-hover cursor-pointer p-6 flex items-center gap-5 group"
    >
      <div className="relative">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
          <div className="text-primary group-hover:text-accent transition-colors duration-300">
            {icon}
          </div>
        </div>
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-gradient-to-br from-primary/40 to-accent/40" />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-foreground group-hover:gradient-text transition-all duration-300">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-muted-foreground mt-1 truncate">
            {description}
          </p>
        )}
      </div>

      <motion.div
        className="text-muted-foreground group-hover:text-primary transition-colors"
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </motion.div>
    </motion.div>
  );
}

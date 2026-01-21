import { ReactNode } from "react";
import { motion } from "framer-motion";

interface EmergencyCardProps {
  title: string;
  icon: ReactNode;
  description: string;
  scope?: {
    label: string;
    type: "emergency" | "urgent";
  };
  primaryAction?: {
    label: string;
    href: string;
    icon?: ReactNode;
    isExternal?: boolean;
  };
  secondaryActions?: {
    label: string;
    href: string;
    icon?: ReactNode;
  }[];
  tertiaryInfo?: string;
  fullWidth?: boolean;
}

export const EmergencyCard = ({
  title,
  icon,
  description,
  scope,
  primaryAction,
  secondaryActions,
  tertiaryInfo,
  fullWidth = false,
}: EmergencyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`
        bg-secondary border border-border/50 border-l-4 border-l-emergency
        rounded-xl p-5 flex flex-col gap-3 transition-transform
        active:scale-[0.98] h-full
        ${fullWidth ? "col-span-full" : ""}
      `}
    >
      {/* Title Row */}
      <div className="flex justify-between items-center text-foreground">
        <h3 className="text-lg font-bold">{title}</h3>
        <span className="text-xl text-muted-foreground">{icon}</span>
      </div>

      {/* Description & Scope Row - aligned */}
      <div className="flex justify-between items-center gap-2">
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        {scope && (
          <span
            className={`
              text-xs uppercase tracking-wide px-2 py-0.5 rounded whitespace-nowrap shrink-0
              ${
                scope.type === "emergency"
                  ? "bg-emergency/20 text-red-400 border border-emergency/30"
                  : "bg-urgent/20 text-orange-400 border border-urgent/30"
              }
            `}
          >
            {scope.label}
          </span>
        )}
      </div>

      {/* Actions - mt-auto pushes to bottom for consistent alignment */}
      <div className="flex flex-col gap-2 mt-auto">
        {primaryAction && (
          <a
            href={primaryAction.href}
            target={primaryAction.isExternal ? "_blank" : undefined}
            rel={primaryAction.isExternal ? "noopener noreferrer" : undefined}
            className="
              inline-flex items-center justify-start gap-3 w-full
              bg-emergency/15 text-red-400 hover:bg-emergency/25 hover:text-red-300
              px-4 py-3 rounded-lg font-bold text-lg transition-colors
            "
          >
            {primaryAction.icon}
            {primaryAction.label}
          </a>
        )}

        {secondaryActions && secondaryActions.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {secondaryActions.map((action, index) => (
              <a
                key={index}
                href={action.href}
                className="
                  flex-1 min-w-[120px] inline-flex items-center justify-center gap-2
                  bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground
                  px-3 py-2 rounded-lg font-semibold text-sm transition-colors
                "
              >
                {action.icon}
                {action.label}
              </a>
            ))}
          </div>
        )}

        {tertiaryInfo && (
          <p className="text-xs text-muted-foreground/70 mt-1">{tertiaryInfo}</p>
        )}
      </div>
    </motion.div>
  );
};

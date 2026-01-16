import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowSquareOut } from "@phosphor-icons/react";
import { ReactNode } from "react";

interface Link {
  name: string;
  url: string;
  description?: string;
}

interface CategoryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  icon: ReactNode;
  links: Link[];
}

export function CategoryModal({
  open,
  onOpenChange,
  title,
  icon,
  links,
}: CategoryModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass border-glass-border max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-foreground">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary">
              {icon}
            </div>
            {title}
          </DialogTitle>
        </DialogHeader>

        <div className="mt-4 space-y-2">
          {links.map((link, index) => (
            <motion.a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
            >
              <div>
                <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {link.name}
                </p>
                {link.description && (
                  <p className="text-sm text-muted-foreground">{link.description}</p>
                )}
              </div>
              <ArrowSquareOut
                weight="bold"
                className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
              />
            </motion.a>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

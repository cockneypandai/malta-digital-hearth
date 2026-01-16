import { motion } from "framer-motion";
import { Buildings, Phone, Gavel, Scales, CurrencyDollar } from "@phosphor-icons/react";

const governmentLinks = [
  {
    name: "Government of Malta",
    url: "https://www.gov.mt",
    icon: Buildings,
    description: "Official government portal",
  },
  {
    name: "Identity Malta",
    url: "https://identitymalta.com",
    icon: Scales,
    description: "ID cards, passports, visas",
  },
  {
    name: "Inland Revenue",
    url: "https://cfr.gov.mt",
    icon: CurrencyDollar,
    description: "Tax services",
  },
  {
    name: "Courts of Justice",
    url: "https://judiciary.mt",
    icon: Gavel,
    description: "Legal services",
  },
];

export function GovernmentSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="mt-12"
    >
      <div className="flex items-center gap-3 mb-6">
        <Buildings weight="duotone" className="w-7 h-7 text-primary" />
        <h2 className="text-2xl font-bold text-foreground">Government Directory</h2>
      </div>

      <div className="glass-card p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {governmentLinks.map((link, index) => (
            <motion.a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all">
                <link.icon
                  weight="duotone"
                  className="w-6 h-6 text-primary"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground group-hover:text-primary transition-colors truncate">
                  {link.name}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {link.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-6 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Phone weight="fill" className="w-6 h-6 text-primary" />
              <div>
                <p className="font-semibold text-foreground">Emergency Services</p>
                <p className="text-sm text-muted-foreground">
                  Police, Ambulance, Fire
                </p>
              </div>
            </div>
            <div className="text-3xl font-bold gradient-text">112</div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

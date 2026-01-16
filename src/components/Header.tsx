import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MagnifyingGlass,
  Pulse,
  Sun,
  Cloud,
  CloudRain,
  X,
  CaretDown,
  Lightning,
  Drop,
  Wrench,
  CheckCircle,
  Warning,
} from "@phosphor-icons/react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const languages = [
  { code: "EN", label: "English" },
  { code: "MT", label: "Malti" },
  { code: "IT", label: "Italiano" },
  { code: "DE", label: "Deutsch" },
  { code: "FR", label: "Français" },
  { code: "ES", label: "Español" },
];

const mockStatus = {
  power: { status: "operational", message: "All systems running normally" },
  water: { status: "operational", message: "No disruptions reported" },
  maintenance: [
    { area: "Sliema", date: "Jan 20", type: "Power", time: "02:00 - 06:00" },
    { area: "Valletta", date: "Jan 22", type: "Water", time: "00:00 - 04:00" },
  ],
};

export function Header({ onSearch }: { onSearch: (query: string) => void }) {
  const [time, setTime] = useState(new Date());
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusOpen, setStatusOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 glass border-b border-glass-border"
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-semibold text-foreground">Malta Hub</h1>
                <p className="text-xs text-muted-foreground">Digital Gateway</p>
              </div>
            </motion.div>

            {/* Center Widgets */}
            <div className="hidden md:flex items-center gap-6">
              {/* Weather Widget */}
              <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-secondary/50">
                <Sun weight="duotone" className="w-8 h-8 text-warning" />
                <div>
                  <p className="text-lg font-semibold text-foreground">18°C</p>
                  <p className="text-xs text-muted-foreground">Partly Cloudy</p>
                </div>
              </div>

              {/* Clock Widget */}
              <div className="flex flex-col items-center px-4 py-2 rounded-lg bg-secondary/50">
                <p className="text-2xl font-bold text-foreground tracking-wider">
                  {formatTime(time)}
                </p>
                <p className="text-xs text-muted-foreground">{formatDate(time)}</p>
              </div>
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <AnimatePresence>
                {searchOpen ? (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 200, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    className="relative"
                  >
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      autoFocus
                      className="w-full px-4 py-2 rounded-lg bg-secondary border border-glass-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50"
                    />
                    <button
                      onClick={() => {
                        setSearchOpen(false);
                        handleSearch("");
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      <X weight="bold" className="w-4 h-4" />
                    </button>
                  </motion.div>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSearchOpen(true)}
                    className="p-2.5 rounded-lg bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <MagnifyingGlass weight="bold" className="w-5 h-5" />
                  </motion.button>
                )}
              </AnimatePresence>

              {/* Status Pulse */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setStatusOpen(true)}
                className="p-2.5 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors glow-pulse"
              >
                <Pulse weight="bold" className="w-5 h-5 text-primary" />
              </motion.button>

              {/* Language Picker */}
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-1 px-3 py-2 rounded-lg bg-secondary/50 hover:bg-secondary text-foreground text-sm font-medium transition-colors"
                >
                  {selectedLang}
                  <CaretDown weight="bold" className="w-3 h-3" />
                </motion.button>

                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 py-2 w-36 rounded-lg glass border border-glass-border shadow-lg"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setSelectedLang(lang.code);
                            setLangOpen(false);
                          }}
                          className={`w-full px-4 py-2 text-left text-sm hover:bg-secondary/50 transition-colors ${
                            selectedLang === lang.code
                              ? "text-primary"
                              : "text-foreground"
                          }`}
                        >
                          <span className="font-medium">{lang.code}</span>
                          <span className="text-muted-foreground ml-2">
                            {lang.label}
                          </span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Status Modal */}
      <Dialog open={statusOpen} onOpenChange={setStatusOpen}>
        <DialogContent className="glass border-glass-border max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-foreground">
              <Pulse weight="duotone" className="w-6 h-6 text-primary" />
              System Status
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            {/* Power Status */}
            <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
              <div className="flex items-center gap-3">
                <Lightning weight="duotone" className="w-6 h-6 text-warning" />
                <div>
                  <p className="font-medium text-foreground">Power Grid</p>
                  <p className="text-sm text-muted-foreground">
                    {mockStatus.power.message}
                  </p>
                </div>
              </div>
              <CheckCircle weight="fill" className="w-6 h-6 text-success" />
            </div>

            {/* Water Status */}
            <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
              <div className="flex items-center gap-3">
                <Drop weight="duotone" className="w-6 h-6 text-blue-400" />
                <div>
                  <p className="font-medium text-foreground">Water Supply</p>
                  <p className="text-sm text-muted-foreground">
                    {mockStatus.water.message}
                  </p>
                </div>
              </div>
              <CheckCircle weight="fill" className="w-6 h-6 text-success" />
            </div>

            {/* Planned Maintenance */}
            <div className="p-4 rounded-lg bg-secondary/50">
              <div className="flex items-center gap-2 mb-3">
                <Wrench weight="duotone" className="w-5 h-5 text-muted-foreground" />
                <p className="font-medium text-foreground">Planned Maintenance</p>
              </div>
              <div className="space-y-2">
                {mockStatus.maintenance.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between text-sm"
                  >
                    <div className="flex items-center gap-2">
                      <Warning weight="fill" className="w-4 h-4 text-warning" />
                      <span className="text-foreground">{item.area}</span>
                      <span className="text-muted-foreground">• {item.type}</span>
                    </div>
                    <div className="text-muted-foreground">
                      {item.date} • {item.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

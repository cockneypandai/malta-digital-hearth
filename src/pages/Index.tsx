import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { StatusBanner } from "@/components/StatusBanner";
import { CategoryCard } from "@/components/CategoryCard";
import { CategoryModal } from "@/components/CategoryModal";
import { GovernmentSection } from "@/components/GovernmentSection";
import { Footer } from "@/components/Footer";
import { categories } from "@/data/categories";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[0] | null>(null);

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories;
    const query = searchQuery.toLowerCase();
    return categories.filter(
      (cat) =>
        cat.title.toLowerCase().includes(query) ||
        cat.description?.toLowerCase().includes(query) ||
        cat.links.some((link) => link.name.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Background gradient effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <Header onSearch={setSearchQuery} />
      <StatusBanner />

      {/* Main Content */}
      <main className="flex-1 pt-32 pb-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Welcome to{" "}
              <span className="gradient-text">Malta Hub</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Your premier digital gateway to essential services, news, and
              resources across the Maltese islands.
            </p>
          </motion.section>

          {/* Category Grid */}
          <section className="mb-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-between mb-6"
            >
              <h2 className="text-2xl font-bold text-foreground">
                Explore Services
              </h2>
              {searchQuery && (
                <p className="text-sm text-muted-foreground">
                  {filteredCategories.length} results for "{searchQuery}"
                </p>
              )}
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCategories.map((category, index) => (
                <CategoryCard
                  key={category.id}
                  title={category.title}
                  description={category.description}
                  icon={category.icon}
                  delay={0.1 * index}
                  onClick={() => setSelectedCategory(category)}
                />
              ))}
            </div>

            {filteredCategories.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-muted-foreground">
                  No services found for "{searchQuery}"
                </p>
              </motion.div>
            )}
          </section>

          {/* Government Section */}
          <GovernmentSection />
        </div>
      </main>

      <Footer />

      {/* Category Modal */}
      {selectedCategory && (
        <CategoryModal
          open={!!selectedCategory}
          onOpenChange={(open) => !open && setSelectedCategory(null)}
          title={selectedCategory.title}
          icon={selectedCategory.icon}
          links={selectedCategory.links}
        />
      )}
    </div>
  );
};

export default Index;

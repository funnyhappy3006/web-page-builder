import { motion } from "framer-motion";
import heroFloral from "@/assets/hero-floral.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroFloral}
          alt="Floral arrangement celebrating International Women's Day"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-accent font-body font-medium tracking-[0.3em] uppercase text-sm mb-6"
        >
          March 8 — International Women's Day
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-900 leading-[0.9] mb-8 text-foreground"
        >
          Celebrate
          <span className="block italic text-primary">Her</span>
          Strength
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Honoring the courage, resilience, and extraordinary achievements 
          of women around the world — today and every day.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <div className="w-px h-24 bg-gradient-to-b from-primary/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

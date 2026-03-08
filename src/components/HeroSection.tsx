import { motion } from "framer-motion";
import heroFloral from "@/assets/hero-floral.png";

const floatingVariants = {
  animate: {
    y: [0, -15, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const },
  },
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary/20"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            y: [0, -200],
            x: [0, (i % 2 === 0 ? 1 : -1) * 50],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeOut",
          }}
          style={{ left: `${15 + i * 14}%`, top: `${60 + (i % 3) * 10}%` }}
        />
      ))}

      {/* Background image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <img
          src={heroFloral}
          alt="Floral arrangement celebrating International Women's Day"
          className="w-full h-full object-cover opacity-30 dark:opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </motion.div>

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
          <motion.span
            className="inline-block"
            variants={floatingVariants}
            animate="animate"
          >
            Celebrate
          </motion.span>
          <motion.span
            className="block italic text-primary"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Her
          </motion.span>
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Strength
          </motion.span>
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
          <motion.div
            className="w-px h-24 bg-gradient-to-b from-primary/60 to-transparent"
            animate={{ scaleY: [0, 1] }}
            transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

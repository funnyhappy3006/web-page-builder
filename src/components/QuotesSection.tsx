import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const quotes = [
  {
    text: "A woman is the full circle. Within her is the power to create, nurture and transform.",
    author: "Diane Mariechild",
  },
  {
    text: "There is no limit to what we, as women, can accomplish.",
    author: "Michelle Obama",
  },
  {
    text: "The question isn't who's going to let me; it's who's going to stop me.",
    author: "Ayn Rand",
  },
  {
    text: "Well-behaved women seldom make history.",
    author: "Laurel Thatcher Ulrich",
  },
];

const QuotesSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Decorative animated rings */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-primary/5"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-accent/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-3xl mx-auto text-center min-h-[200px] flex flex-col items-center justify-center relative z-10">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={current}
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-4xl italic leading-snug text-foreground"
          >
            "{quotes[current].text}"
          </motion.blockquote>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={`author-${current}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-6 font-body text-sm tracking-[0.2em] uppercase text-accent"
          >
            — {quotes[current].author}
          </motion.p>
        </AnimatePresence>

        <div className="flex gap-2 mt-10">
          {quotes.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-colors duration-300 ${
                i === current ? "bg-primary" : "bg-border"
              }`}
              animate={{ width: i === current ? 32 : 8 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              whileHover={{ scale: 1.3 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;

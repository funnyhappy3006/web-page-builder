import { motion } from "framer-motion";
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
    <section className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center min-h-[200px] flex flex-col items-center justify-center">
        <motion.blockquote
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="font-display text-3xl md:text-4xl italic leading-snug text-foreground"
        >
          "{quotes[current].text}"
        </motion.blockquote>
        <motion.p
          key={`author-${current}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 font-body text-sm tracking-[0.2em] uppercase text-accent"
        >
          — {quotes[current].author}
        </motion.p>

        <div className="flex gap-2 mt-10">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary w-8" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;

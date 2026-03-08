import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { number: 47, suffix: "%", label: "of the global workforce are women" },
  { number: 130, suffix: "+", label: "countries have gender equality laws" },
  { number: 39, suffix: "%", label: "of global parliament seats held by women" },
  { number: null, display: "∞", label: "potential waiting to be unlocked" },
];

const AnimatedNumber = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return <span ref={ref}>{value}{suffix}</span>;
};

const StatsSection = () => {
  return (
    <section className="py-24 px-6 bg-primary relative overflow-hidden">
      {/* Animated glow */}
      <motion.div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-primary-foreground/5 blur-3xl"
        animate={{ scale: [1.3, 1, 1.3], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center font-body text-sm uppercase text-primary-foreground/60 mb-16"
        >
          Progress in numbers
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center"
            >
              <div className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-3">
                {stat.number !== null ? (
                  <AnimatedNumber target={stat.number} suffix={stat.suffix!} />
                ) : (
                  stat.display
                )}
              </div>
              <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

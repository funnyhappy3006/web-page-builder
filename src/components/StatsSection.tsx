import { motion } from "framer-motion";

const stats = [
  { number: "47%", label: "of the global workforce are women" },
  { number: "130+", label: "countries have gender equality laws" },
  { number: "39%", label: "of global parliament seats held by women" },
  { number: "∞", label: "potential waiting to be unlocked" },
];

const StatsSection = () => {
  return (
    <section className="py-24 px-6 bg-primary">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center font-body text-sm tracking-[0.3em] uppercase text-primary-foreground/60 mb-16"
        >
          Progress in numbers
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-3">
                {stat.number}
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

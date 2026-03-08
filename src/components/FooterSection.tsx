import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const FooterSection = () => {
  return (
    <section className="py-24 px-6 text-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        <motion.h2
          className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6"
          whileInView={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          Be the change.
        </motion.h2>
        <p className="font-body text-muted-foreground mb-10 leading-relaxed">
          Inspire inclusion. Champion equality. Lift each other up.
          Every action counts — today and every day.
        </p>
        <motion.div
          className="flex items-center justify-center gap-2 text-primary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Heart className="w-5 h-5 fill-current" />
          </motion.div>
          <span className="font-body text-sm tracking-widest uppercase">
            Happy Women's Day 2026
          </span>
          <motion.div
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          >
            <Heart className="w-5 h-5 fill-current" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FooterSection;

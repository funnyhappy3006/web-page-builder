import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const FooterSection = () => {
  return (
    <section className="py-24 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
          Be the change.
        </h2>
        <p className="font-body text-muted-foreground mb-10 leading-relaxed">
          Inspire inclusion. Champion equality. Lift each other up.
          Every action counts — today and every day.
        </p>
        <div className="flex items-center justify-center gap-2 text-primary">
          <Heart className="w-5 h-5 fill-current" />
          <span className="font-body text-sm tracking-widest uppercase">
            Happy Women's Day 2026
          </span>
          <Heart className="w-5 h-5 fill-current" />
        </div>
      </motion.div>
    </section>
  );
};

export default FooterSection;

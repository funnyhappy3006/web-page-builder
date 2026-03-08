import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { useState } from "react";

const ProposalSection = () => {
  const [answered, setAnswered] = useState(false);

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Floating hearts background */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/10"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            y: [0, -300],
            x: Math.sin(i) * 60,
          }}
          transition={{
            duration: 5 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.7,
            ease: "easeOut",
          }}
          style={{ left: `${5 + i * 8}%`, bottom: "0%" }}
        >
          <Heart className="w-4 h-4 fill-current" />
        </motion.div>
      ))}

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block mb-8"
          >
            <Sparkles className="w-10 h-10 text-accent mx-auto" />
          </motion.div>

          <motion.p
            className="font-body text-sm tracking-[0.3em] uppercase text-accent mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            A special question for you
          </motion.p>

          <motion.h2
            className="font-display text-5xl md:text-7xl font-bold text-foreground mb-4 italic"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Marry me?
          </motion.h2>

          <motion.p
            className="font-body text-muted-foreground text-lg mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            You are the most beautiful chapter of my life. <br />
            I want every chapter after this to be with you. 💍
          </motion.p>

          {!answered ? (
            <motion.div
              className="flex gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setAnswered(true)}
                className="px-10 py-4 bg-primary text-primary-foreground font-body font-medium tracking-widest uppercase text-sm rounded-full shadow-lg hover:shadow-xl transition-shadow"
              >
                💕 Yes!
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, x: [0, -10, 10, -10, 10, 0] }}
                className="px-10 py-4 bg-muted text-muted-foreground font-body font-medium tracking-widest uppercase text-sm rounded-full cursor-not-allowed"
                onClick={(e) => {
                  e.preventDefault();
                  const btn = e.currentTarget;
                  btn.style.position = "relative";
                  btn.style.left = `${Math.random() * 200 - 100}px`;
                  btn.style.top = `${Math.random() * 100 - 50}px`;
                }}
              >
                No
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-6xl mb-4"
              >
                💖
              </motion.div>
              <p className="font-display text-3xl md:text-4xl italic text-primary">
                I love you forever!
              </p>
              {/* Confetti burst */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    background: ["hsl(345,60%,42%)", "hsl(38,70%,55%)", "hsl(345,50%,75%)"][i % 3],
                    left: "50%",
                    top: "50%",
                  }}
                  initial={{ x: 0, y: 0, opacity: 1 }}
                  animate={{
                    x: Math.cos((i * Math.PI * 2) / 20) * (150 + Math.random() * 100),
                    y: Math.sin((i * Math.PI * 2) / 20) * (150 + Math.random() * 100) - 50,
                    opacity: 0,
                    scale: [1, 1.5, 0],
                  }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ProposalSection;

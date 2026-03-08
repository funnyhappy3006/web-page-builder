import { motion, AnimatePresence } from "framer-motion";
import { Music, Pause, Play, Volume2 } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
    setShowHint(false);
  };

  return (
    <>
      <audio ref={audioRef} src="/romantic-piano.mp3" loop preload="auto" />

      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <AnimatePresence>
          {showHint && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-card/90 backdrop-blur-md border border-border rounded-full px-4 py-2 shadow-lg"
            >
              <span className="font-body text-xs text-muted-foreground flex items-center gap-1.5">
                <Volume2 className="w-3 h-3" /> Play romantic music
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          onClick={toggle}
          className="relative p-4 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={playing ? "Pause music" : "Play music"}
        >
          {playing && (
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary/40"
              animate={{ scale: [1, 1.5, 1.8], opacity: [0.6, 0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            />
          )}
          <AnimatePresence mode="wait">
            {playing ? (
              <motion.div key="pause" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <Pause className="w-5 h-5" />
              </motion.div>
            ) : (
              <motion.div key="play" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                <Music className="w-5 h-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  );
};

export default MusicPlayer;

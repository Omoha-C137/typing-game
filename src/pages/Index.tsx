import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';

const SAMPLE_TEXT = "The quick brown fox jumps over the lazy dog";

interface TypingStats {
  wpm: number;
  accuracy: number;
  time: number;
}

const Index = () => {
  const [currentText, setCurrentText] = useState('');
  const [isStarted, setIsStarted] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [stats, setStats] = useState<TypingStats | null>(null);
  const { toast } = useToast();

  const calculateStats = useCallback(() => {
    if (!startTime) return null;
    
    const timeElapsed = (Date.now() - startTime) / 1000; // in seconds
    const wordsTyped = currentText.trim().split(' ').length;
    const wpm = Math.round((wordsTyped / timeElapsed) * 60);
    
    const correctChars = currentText.split('').filter((char, i) => char === SAMPLE_TEXT[i]).length;
    const accuracy = Math.round((correctChars / currentText.length) * 100);

    return {
      wpm,
      accuracy,
      time: Math.round(timeElapsed)
    };
  }, [currentText, startTime]);

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if (!isStarted) {
      setIsStarted(true);
      setStartTime(Date.now());
    }

    if (e.key === 'Backspace') {
      setCurrentText(prev => prev.slice(0, -1));
      return;
    }

    if (e.key.length === 1) {
      setCurrentText(prev => {
        const newText = prev + e.key;
        if (newText.length === SAMPLE_TEXT.length) {
          const finalStats = calculateStats();
          if (finalStats) {
            setStats(finalStats);
            toast({
              title: "Test completed!",
              description: `WPM: ${finalStats.wpm} | Accuracy: ${finalStats.accuracy}%`,
            });
          }
        }
        return newText.length <= SAMPLE_TEXT.length ? newText : prev;
      });
    }
  }, [isStarted, calculateStats, toast]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  const reset = () => {
    setCurrentText('');
    setIsStarted(false);
    setStartTime(null);
    setStats(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl"
      >
        <div className="mb-8 text-center">
          <motion.h1 
            className="text-4xl font-light mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            typing test
          </motion.h1>
          <motion.p 
            className="text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Start typing to begin
          </motion.p>
        </div>

        <motion.div 
          className="bg-card rounded-lg p-8 shadow-sm mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="typing-text text-xl leading-relaxed mb-4">
            {SAMPLE_TEXT.split('').map((char, index) => {
              const userChar = currentText[index];
              const isActive = index === currentText.length;
              
              return (
                <span
                  key={index}
                  className={`transition-colors duration-150 ${
                    isActive ? 'animate-cursor border-r-2 border-primary' : ''
                  } ${
                    userChar === undefined
                      ? 'text-muted-foreground'
                      : userChar === char
                      ? 'text-primary'
                      : 'text-destructive'
                  }`}
                >
                  {char}
                </span>
              );
            })}
          </div>
        </motion.div>

        {stats && (
          <motion.div 
            className="grid grid-cols-3 gap-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-card p-4 rounded-lg">
              <div className="text-3xl font-light text-primary">{stats.wpm}</div>
              <div className="text-sm text-muted-foreground">WPM</div>
            </div>
            <div className="bg-card p-4 rounded-lg">
              <div className="text-3xl font-light text-primary">{stats.accuracy}%</div>
              <div className="text-sm text-muted-foreground">Accuracy</div>
            </div>
            <div className="bg-card p-4 rounded-lg">
              <div className="text-3xl font-light text-primary">{stats.time}s</div>
              <div className="text-sm text-muted-foreground">Time</div>
            </div>
          </motion.div>
        )}

        {stats && (
          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <button
              onClick={reset}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Try again
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Index;
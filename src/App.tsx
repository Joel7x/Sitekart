import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WelcomePage } from '@/components/WelcomePage';
import { MainSite } from '@/components/MainSite';
import { ThemeProvider } from 'next-themes';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // No localStorage logic: always show WelcomePage on load

  const handleEnterSite = () => {
    setIsTransitioning(true);
    // No localStorage set
    setTimeout(() => {
      setShowWelcome(false);
      setIsTransitioning(false);
    }, 1000);
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white overflow-hidden">
        <AnimatePresence mode="wait">
          {showWelcome ? (
            <motion.div
              key="welcome"
              initial={{ opacity: 1 }}
              exit={{ 
                opacity: 0,
                scale: 0.95,
                filter: "blur(10px)"
              }}
              transition={{ 
                duration: 1,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <WelcomePage onEnterSite={handleEnterSite} />
            </motion.div>
          ) : (
            <motion.div
              key="main"
              initial={{ 
                opacity: 0,
                scale: 1.05,
                filter: "blur(10px)"
              }}
              animate={{ 
                opacity: 1,
                scale: 1,
                filter: "blur(0px)"
              }}
              transition={{ 
                duration: 1,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <MainSite />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Transition Overlay */}
        <AnimatePresence>
          {isTransitioning && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            >
              <div className="text-center text-white">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full mx-auto mb-6"
                />
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl font-medium text-blue-300"
                >
                  Entering SiteKart...
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;
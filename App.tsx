import React, { useState, useRef, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { DetailsSection } from './components/DetailsSection';
import { AboutSection } from './components/AboutSection';
import { LoanModal } from './components/LoanModal';
import { VideoModal } from './components/VideoModal';

const App: React.FC = () => {
  const [isLoanModalOpen, setIsLoanModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  
  const mainRef = useRef<HTMLElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (mainRef.current && progressBarRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = mainRef.current;
        const totalScroll = scrollHeight - clientHeight;
        
        // Calculate progress ratio (0 to 1)
        // Prevent divide by zero if content doesn't scroll
        const progress = totalScroll > 0 ? scrollTop / totalScroll : 0;
        
        // Clamp between 0 and 1 just in case
        const clampedProgress = Math.max(0, Math.min(1, progress));
        
        // Use transform for performant updates
        progressBarRef.current.style.transform = `scaleX(${clampedProgress})`;
      }
    };

    const container = mainRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      // Trigger once to set initial state
      handleScroll();
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Visual Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1.5 z-40 bg-gray-800/10 pointer-events-none">
         <div 
           ref={progressBarRef}
           className="h-full bg-blue-500 origin-left transform scale-x-0"
           style={{ transition: 'transform 0.1s linear', willChange: 'transform' }} 
         />
      </div>

      {/* Main Scroll Container */}
      <main 
        ref={mainRef}
        className="h-full w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar relative"
      >
        <HeroSection 
          onOpenLoan={() => setIsLoanModalOpen(true)}
          onOpenVideo={() => setIsVideoModalOpen(true)}
        />

        <DetailsSection 
          onOpenLoan={() => setIsLoanModalOpen(true)}
        />

        <AboutSection 
          onOpenLoan={() => setIsLoanModalOpen(true)}
        />
      </main>

      {/* Modals placed outside main scroll container to ensure full viewport coverage */}
      <LoanModal 
        isOpen={isLoanModalOpen} 
        onClose={() => setIsLoanModalOpen(false)} 
      />
      
      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
      />
    </div>
  );
};

export default App;
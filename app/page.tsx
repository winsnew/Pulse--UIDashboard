'use client';

import { useState, useEffect } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { TopBar } from '@/components/TopBar';
import { InfluencerIntel } from '@/components/widgets/InfluencerIntel';
import { AssetRadar } from '@/components/widgets/AssetRadar';
import { NewsPulse } from '@/components/widgets/NewsPulse';
import { SmartAlerts } from '@/components/widgets/SmartAlerts';
import { MarketViewAI } from '@/components/widgets/MarketViewAI';

// Enhanced animated background component
function AnimatedBackground() {
  const [dots, setDots] = useState<Array<{ id: number; left: number; delay: number }>>([]);

  useEffect(() => {
    const generateDots = () => {
      const newDots = [];
      for (let i = 0; i < 80; i++) {
        newDots.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 30,
        });
      }
      setDots(newDots);
    };

    generateDots();
  }, []);

  return (
    <div className="animated-bg">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="dot"
          style={{
            left: `${dot.left}%`,
            animationDelay: `${dot.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

// Scroll reveal hook
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
}

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  
  useScrollReveal();

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#000000' }}>
      <AnimatedBackground />
      
      <div className="flex relative z-10">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="flex-1 flex flex-col min-h-screen">
          <TopBar />
          
          <main className="flex-1 p-4 lg:p-6 overflow-auto">
            <div className="max-w-7xl mx-auto">
              <div className="mb-6 scroll-reveal">
                <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  Market Intelligence Dashboard
                </h1>
                <p className="text-gray-400">
                  Real-time insights powered by AI for smarter trading decisions
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left Column - Main Widgets */}
                <div className="lg:col-span-8 space-y-6">
                  <div className="scroll-reveal scroll-reveal-delay-1">
                    <InfluencerIntel />
                  </div>
                  <div className="scroll-reveal scroll-reveal-delay-2">
                    <AssetRadar />
                  </div>
                  <div className="scroll-reveal scroll-reveal-delay-3">
                    <NewsPulse />
                  </div>
                </div>

                {/* Right Column - Side Widgets */}
                <div className="lg:col-span-4 space-y-6">
                  <div className="scroll-reveal scroll-reveal-delay-4">
                    <SmartAlerts />
                  </div>
                  <div className="scroll-reveal scroll-reveal-delay-delay-5">
                    <MarketViewAI />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
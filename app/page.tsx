'use client';

import { useState, useEffect } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { TopBar } from '@/components/TopBar';
import { InfluencerIntel } from '@/components/widgets/InfluencerIntel';
import { AssetRadar } from '@/components/widgets/AssetRadar';
import { NewsPulse } from '@/components/widgets/NewsPulse';
import { SmartAlerts } from '@/components/widgets/SmartAlerts';
import { MarketViewAI } from '@/components/widgets/MarketViewAI';
import { TopMovers } from '@/components/widgets/TopMovers';

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useScrollReveal();
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#000000' }}>
      <AnimatedBackground />

      <div className="flex relative z-10">
        <Sidebar activeTab={activeTab} setActiveTab={handleTabChange} isMobileOpen={isSidebarOpen} onMobileClose={() => setIsSidebarOpen(false)} />

        <div className="flex-1 flex flex-col pt-16 lg:pt-0 h-full">
          <TopBar onToggleMobileSidebar={() => setIsSidebarOpen(true)} />

          <main className="flex-1 p-4 max-w-full lg:p-6 overflow-x-hidden">
            <div className="w-full mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
                <div className="lg:col-span-12 scroll-reveal mb-0">
                  <TopMovers />
                </div>
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
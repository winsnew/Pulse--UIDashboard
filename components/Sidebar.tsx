'use client';

import { useState, useEffect } from 'react';
import {
  Home,
  Users,
  TrendingUp,
  Newspaper,
  Bell,
  BarChart3,
  Menu
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isMobileOpen?: boolean;
  onMobileClose?: () => void;
}

const navigation = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'influencers', label: 'Influencers', icon: Users },
  { id: 'assets', label: 'Assets', icon: TrendingUp },
  { id: 'news', label: 'News', icon: Newspaper },
  { id: 'alerts', label: 'Alerts', icon: Bell },
  { id: 'market', label: 'MarketView', icon: BarChart3 },
];

export function Sidebar({
  activeTab,
  setActiveTab,
  isMobileOpen = false,
  onMobileClose }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleSidebar = () => setIsCollapsed(prev => !prev);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsCollapsed(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className={`
      flex lg:h-auto fixed lg:sticky lg:min-h-screen 
      ${isCollapsed ? 'w-16' : 'w-64'}
      sidebar-transition glass-effect h-full flex-col z-40 flex-shrink-0
      ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} 
      lg:translate-x-0
    `}>
        {/* Header with Logo and Toggle */}
        <div className="h-16 p-4 border-b border-gray-800/50 flex items-center">
          <div className={`flex items-center ${isCollapsed ? 'justify-center w-full' : 'justify-between w-full'}`}>
            {!isCollapsed && (
              <div className="flex items-center space-x-3 overflow-hidden">
                <img src="/logo.png" alt="Pulse Logo" width={32} height={32} className="rounded-lg" />
                <span className="text-xl font-bold text-white sidebar-logo-text sidebar-logo-text-visible">
                  Pulse
                </span>
              </div>
            )}

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="apple-button text-gray-400 hover:text-white hover:bg-gray-800/50 flex-shrink-0 h-8 w-8"
            >
              {isCollapsed ? <Menu size={16} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3">
          <ul className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveTab(item.id)
                      if (onMobileClose) onMobileClose();
                    }}
                    className={`
                    w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg 
                    apple-button transition-all duration-200 group relative overflow-hidden
                    ${isActive
                        ? 'bg-gray-800/60 text-white border border-gray-700/50 shadow-lg'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800/40'
                      }
                  `}
                    title={isCollapsed ? item.label : undefined}
                  >
                    <Icon size={18} className="flex-shrink-0" />
                    <span className={`
                    font-medium sidebar-label whitespace-nowrap text-sm
                    ${isCollapsed ? 'sidebar-label-hidden' : 'sidebar-label-visible'}
                  `}>
                      {item.label}
                    </span>

                    {/* Active indicator */}
                    {/* {isActive && (
                    <div className="absolute right-3 w-1.5 h-1.5 bg-white rounded-full opacity-60" />
                  )} */}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-800/50 text-center text-xs text-gray-500 shrink-0">
          {!isCollapsed ? (
            <>
              <div>Pulse v2.0</div>
              <div className="flex justify-center items-center space-x-1 mt-1">
                <div className="w-2 h-2 bg-green-400 rounded-full pulse-animation" />
                <span>Live</span>
              </div>
            </>
          ) : (
            <div className="flex justify-center items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full pulse-animation" title="Live" />
            </div>
          )}
        </div>
      </div>
      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-30 lg:hidden"
          onClick={onMobileClose}
        />
      )}
    </>
  );
}
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
  onCollapseChange?: (collapsed: boolean) => void;
}

const navigation = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'influencers', label: 'Influencers', icon: Users },
  { id: 'assets', label: 'Assets', icon: TrendingUp },
  { id: 'news', label: 'News', icon: Newspaper },
  { id: 'alerts', label: 'Alerts', icon: Bell },
  { id: 'market', label: 'MarketView', icon: BarChart3 },
];

export function Sidebar({ activeTab, setActiveTab, onCollapseChange }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    const newCollapsed = !isCollapsed;
    setIsCollapsed(newCollapsed);
    onCollapseChange?.(newCollapsed);
  };

  useEffect(() => {
    onCollapseChange?.(isCollapsed);
  }, [isCollapsed, onCollapseChange]);

  return (
    <div className={`
      ${isCollapsed ? 'w-16' : 'w-64'} 
      sidebar-transition glass-effect flex flex-col relative z-20 flex-shrink-0
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
            <Menu size={16} />
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
                  onClick={() => setActiveTab(item.id)}
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
      <div className="p-4 border-t border-gray-800/50">
        <div className={`
          text-xs text-gray-500 text-center sidebar-label
          ${isCollapsed ? 'sidebar-label-hidden' : 'sidebar-label-visible'}
        `}>
          <div className="mb-1">Pulse v2.0</div>
          <div className="flex items-center justify-center space-x-1">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full pulse-animation"></div>
            <span>Live</span>
          </div>
        </div>
      </div>
    </div>
  );
}
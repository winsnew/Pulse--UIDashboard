'use client';

import { useState } from 'react';
import { Search, Bell, User, Moon, Sun, Settings, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface TopBarProps {
  onToggleMobileSidebar?: () => void;
  isSidebarCollapsed?: boolean;
}

export function TopBar({ onToggleMobileSidebar, isSidebarCollapsed = false }: TopBarProps) {
  const [isDark, setIsDark] = useState(true);

  return (
    <header className="h-16 fixed top-0 left-0 right-0 gap-3 w-full lg:static glass-effect border-b border-gray-800/50 flex items-center justify-between lg:px-6 px-3 z-30">
      <div className="flex items-center space-x-3 flex-1 lg:space-x-0">
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleMobileSidebar}
          className="lg:hidden text-gray-400 hover:text-white hover:bg-gray-800/50"
        >
          <Menu size={20} />
        </Button>
        <div className="relative w-full max-w-full sm:max-w-xs md:max-w-sm lg:max-w-md block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <Input
            placeholder="Search assets, influencers, news..."
            className="pl-10 h-10 text-sm bg-gray-900/50 border-gray-700/50 text-white placeholder:text-gray-400 focus:border-gray-600 apple-button"
          />
        </div>
      </div>

      <div className="flex items-center space-x-2 flex-wrap">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsDark(!isDark)}
          className="apple-button text-gray-400 hover:text-white hover:bg-gray-800/50 h-10 w-10"
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="apple-button text-gray-400 hover:text-white hover:bg-gray-800/50 h-10 w-10"
        >
          <Settings size={16} />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="apple-button text-gray-400 hover:text-white hover:bg-gray-800/50 relative h-10 w-10"
        >
          <Bell size={16} />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full pulse-animation"></span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="apple-button text-gray-400 hover:text-white hover:bg-gray-800/50 h-10 w-10"
        >
          <User size={16} />
        </Button>
      </div>
    </header>
  );
}
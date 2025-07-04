'use client';

import { useState } from 'react';
import { Search, Bell, User, Moon, Sun, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function TopBar() {
  const [isDark, setIsDark] = useState(true);

  return (
    <header className="h-16 glass-effect border-b border-gray-800/50 flex items-center justify-between px-6 relative z-20">
      <div className="flex items-center space-x-4 flex-1 max-w-lg">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <Input
            placeholder="Search assets, influencers, news..."
            className="pl-10 h-10 text-sm bg-gray-900/50 border-gray-700/50 text-white placeholder:text-gray-400 focus:border-gray-600 apple-button"
          />
        </div>
      </div>

      <div className="flex items-center space-x-2">
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
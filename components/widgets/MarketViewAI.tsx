'use client';

import { TrendingUp, TrendingDown, Activity, Brain } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const marketMetrics = {
  volatility: 6.8,
  momentum: 7.2,
  sentiment: 8.1,
  healthScore: 74,
};

const sectors = [
  { name: 'Tech', performance: 8.2, color: 'bg-green-400' },
  { name: 'Finance', performance: 6.1, color: 'bg-gray-400' },
  { name: 'Energy', performance: 4.3, color: 'bg-red-400' },
  { name: 'Healthcare', performance: 7.8, color: 'bg-green-400' },
  { name: 'Consumer', performance: 5.9, color: 'bg-yellow-400' },
  { name: 'Utilities', performance: 3.2, color: 'bg-red-400' },
  { name: 'Materials', performance: 6.7, color: 'bg-gray-400' },
  { name: 'Industrials', performance: 7.1, color: 'bg-green-400' },
];

const trendData = [65, 68, 72, 69, 74, 78, 74];

function CircularGauge({ value, label, max = 10 }: { value: number; label: string; max?: number }) {
  const percentage = (value / max) * 100;
  const strokeDasharray = 2 * Math.PI * 16;
  const strokeDashoffset = strokeDasharray - (strokeDasharray * percentage) / 100;

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="relative w-12 h-12">
        <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
          <circle
            cx="18"
            cy="18"
            r="16"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-gray-700/30"
          />
          <circle
            cx="18"
            cy="18"
            r="16"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className={`${
              value >= 7 ? 'text-green-400' : value >= 5 ? 'text-yellow-400' : 'text-red-400'
            } transition-all duration-1000 ease-out`}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-medium text-white">{value}</span>
        </div>
      </div>
      <span className="text-xs text-gray-400 text-center">{label}</span>
    </div>
  );
}

function MiniTrendChart({ data }: { data: number[] }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  return (
    <div className="flex items-end space-x-1 h-8">
      {data.map((value, index) => (
        <div
          key={index}
          className="w-1 bg-gray-400 rounded-t-sm opacity-80 transition-all duration-300"
          style={{
            height: `${((value - min) / range) * 100}%`,
            minHeight: '4px',
          }}
        />
      ))}
    </div>
  );
}

export function MarketViewAI() {
  return (
    <Card className="p-6 glass-effect">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white">MarketView AI</h2>
        <Badge variant="outline" className="text-gray-400 border-gray-600/30">
          <Brain className="w-3 h-3 mr-1" />
          AI Powered
        </Badge>
      </div>

      {/* Market Health Score */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-400">Market Health Score</span>
          <span className="text-lg font-semibold text-white">{marketMetrics.healthScore}/100</span>
        </div>
        <div className="h-3 bg-gray-800/50 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-gray-600 to-gray-400 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${marketMetrics.healthScore}%` }}
          />
        </div>
      </div>

      {/* Market Metrics Gauges */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <CircularGauge value={marketMetrics.volatility} label="Volatility" />
        <CircularGauge value={marketMetrics.momentum} label="Momentum" />
        <CircularGauge value={marketMetrics.sentiment} label="Sentiment" />
      </div>

      {/* AI Summary */}
      <div className="mb-6 p-4 glass-effect rounded-lg apple-button">
        <div className="flex items-center space-x-2 mb-2">
          <Brain className="w-4 h-4 text-gray-400" />
          <span className="text-sm font-medium text-white">AI Market Analysis</span>
        </div>
        <p className="text-sm text-gray-300 leading-relaxed">
          Markets showing <span className="text-green-400">strong momentum</span> with tech sector leading gains. 
          Current volatility levels suggest <span className="text-gray-400">consolidation phase</span> before next move. 
          Sentiment remains <span className="text-green-400">bullish</span> despite recent corrections.
        </p>
      </div>

      {/* Sector Heatmap */}
      <div className="mb-4">
        <h3 className="text-sm font-medium text-white mb-3">Sector Performance</h3>
        <div className="grid grid-cols-2 gap-2">
          {sectors.map((sector) => (
            <div
              key={sector.name}
              className="p-2 glass-effect rounded-lg hover:bg-gray-900/60 transition-all cursor-pointer apple-button"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs text-white">{sector.name}</span>
                <div className="flex items-center space-x-1">
                  {sector.performance >= 7 ? (
                    <TrendingUp className="w-3 h-3 text-green-400" />
                  ) : sector.performance >= 5 ? (
                    <Activity className="w-3 h-3 text-yellow-400" />
                  ) : (
                    <TrendingDown className="w-3 h-3 text-red-400" />
                  )}
                  <span className="text-xs text-gray-400">{sector.performance}</span>
                </div>
              </div>
              <div className="mt-1 h-1 bg-gray-800/50 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${sector.color} rounded-full transition-all duration-500`}
                  style={{ width: `${(sector.performance / 10) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trend Indicator */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs text-gray-400">7-Day Trend</span>
          <div className="flex items-center space-x-2 mt-1">
            <MiniTrendChart data={trendData} />
            <TrendingUp className="w-4 h-4 text-green-400" />
          </div>
        </div>
        <div className="text-right">
          <span className="text-xs text-gray-400">Next Update</span>
          <div className="text-xs text-white mt-1">2 minutes</div>
        </div>
      </div>
    </Card>
  );
}
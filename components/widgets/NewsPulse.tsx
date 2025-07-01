'use client';

import { Clock, ExternalLink, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const news = [
  {
    id: 1,
    headline: 'Bitcoin ETF Sees Record $2.4B Inflow as Institutional Adoption Accelerates',
    source: 'CoinDesk',
    timestamp: '5 minutes ago',
    sentiment: 'Positive',
    impact: 'High',
    summary: 'Major financial institutions are pouring capital into Bitcoin ETFs, signaling widespread institutional adoption and potential price catalysts.',
  },
  {
    id: 2,
    headline: 'Fed Chair Powell Hints at Slower Rate Cuts, Tech Stocks React',
    source: 'Reuters',
    timestamp: '12 minutes ago',
    sentiment: 'Neutral',
    impact: 'Medium',
    summary: 'Federal Reserve signals more cautious approach to monetary policy, creating mixed reactions across equity markets.',
  },
  {
    id: 3,
    headline: 'Ethereum Layer 2 Solutions See 300% Growth in Transaction Volume',
    source: 'The Block',
    timestamp: '18 minutes ago',
    sentiment: 'Positive',
    impact: 'Medium',
    summary: 'Scaling solutions are gaining massive traction as users seek lower fees and faster transactions on Ethereum network.',
  },
  {
    id: 4,
    headline: 'Major Exchange Lists New AI-Focused Tokens Amid Growing Demand',
    source: 'CryptoSlate',
    timestamp: '23 minutes ago',
    sentiment: 'Positive',
    impact: 'Low',
    summary: 'Artificial intelligence themed cryptocurrencies continue to attract investor interest and exchange listings.',
  },
];

export function NewsPulse() {
  return (
    <Card className="p-6 glass-effect">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white">NewsPulse</h2>
        <Badge variant="outline" className="text-green-400 border-green-400/30 pulse-animation">
          Live Feed
        </Badge>
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto">
        {news.map((item) => (
          <div
            key={item.id}
            className="p-4 glass-effect rounded-lg hover:bg-gray-900/60 transition-all cursor-pointer group apple-button"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-medium text-white group-hover:text-gray-300 transition-colors line-clamp-2 flex-1 pr-2">
                {item.headline}
              </h3>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-300 flex-shrink-0" />
            </div>

            <div className="flex items-center space-x-3 mb-2">
              <span className="text-sm text-gray-400">{item.source}</span>
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3 text-gray-400" />
                <span className="text-xs text-gray-400">{item.timestamp}</span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Badge 
                  variant="outline" 
                  className={`text-xs ${
                    item.sentiment === 'Positive' 
                      ? 'text-green-400 border-green-400/30' 
                      : item.sentiment === 'Negative'
                      ? 'text-red-400 border-red-400/30'
                      : 'text-yellow-400 border-yellow-400/30'
                  }`}
                >
                  {item.sentiment}
                </Badge>
                <Badge 
                  variant="outline" 
                  className={`text-xs ${
                    item.impact === 'High' 
                      ? 'text-orange-400 border-orange-400/30' 
                      : item.impact === 'Medium'
                      ? 'text-gray-400 border-gray-600/30'
                      : 'text-gray-500 border-gray-700/50'
                  }`}
                >
                  {item.impact} Impact
                </Badge>
              </div>
              <TrendingUp className="w-4 h-4 text-gray-400" />
            </div>

            <p className="text-sm text-gray-400 line-clamp-2">
              {item.summary}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}
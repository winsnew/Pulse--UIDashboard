'use client';

import { TrendingUp, Shield, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const assets = [
  {
    id: 1,
    name: 'LayerZero',
    symbol: 'ZRO',
    exchange: 'Binance',
    logo: '🔗',
    risk: 7.2,
    growth: 8.5,
    sentiment: 'bullish',
    sparkline: [20, 25, 22, 28, 32, 29, 35],
  },
  {
    id: 2,
    name: 'Notcoin',
    symbol: 'NOT',
    exchange: 'OKX',
    logo: '🎯',
    risk: 8.8,
    growth: 6.2,
    sentiment: 'neutral',
    sparkline: [15, 18, 16, 19, 17, 21, 18],
  },
  {
    id: 3,
    name: 'Pepe Unchained',
    symbol: 'PEPU',
    exchange: 'Uniswap',
    logo: '🐸',
    risk: 9.1,
    growth: 9.2,
    sentiment: 'bullish',
    sparkline: [10, 12, 15, 18, 22, 25, 28],
  },
  {
    id: 4,
    name: 'Render Token',
    symbol: 'RNDR',
    exchange: 'Coinbase',
    logo: '🎨',
    risk: 5.5,
    growth: 7.8,
    sentiment: 'bullish',
    sparkline: [30, 32, 35, 33, 37, 39, 42],
  },
];

const filters = ['All', 'Crypto', 'Stocks', 'Low Risk', 'High Growth'];

export function AssetRadar() {
  return (
    <Card className="p-6 glass-effect">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white">Asset Radar</h2>
        <div className="flex space-x-2">
          {filters.slice(0, 3).map((filter) => (
            <Button
              key={filter}
              variant={filter === 'All' ? 'default' : 'outline'}
              size="sm"
              className={`apple-button ${filter === 'All' 
                ? 'bg-gray-800/60 text-white border-gray-700/30 hover:bg-gray-800/80' 
                : 'text-gray-400 border-gray-700/50 hover:text-white hover:border-gray-600'
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {assets.map((asset) => (
          <div
            key={asset.id}
            className="p-4 glass-effect rounded-lg hover:bg-gray-900/60 transition-all cursor-pointer apple-button"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{asset.logo}</span>
                <div>
                  <h3 className="font-medium text-white">{asset.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400">{asset.symbol}</span>
                    <Badge variant="outline" className="text-xs text-gray-400 border-gray-700/50">
                      {asset.exchange}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-3">
              <div className="space-y-1">
                <div className="flex items-center space-x-1">
                  <Shield className="w-3 h-3 text-red-400" />
                  <span className="text-xs text-gray-400">Risk Score</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 h-2 bg-gray-800/50 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ${
                        asset.risk < 6 ? 'bg-green-400' : asset.risk < 8 ? 'bg-yellow-400' : 'bg-red-400'
                      }`}
                      style={{ width: `${(asset.risk / 10) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-white">{asset.risk}</span>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center space-x-1">
                  <Zap className="w-3 h-3 text-green-400" />
                  <span className="text-xs text-gray-400">Growth</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 h-2 bg-gray-800/50 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-green-400 rounded-full transition-all duration-1000"
                      style={{ width: `${(asset.growth / 10) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-white">{asset.growth}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-400">Sentiment:</span>
                <span className={`text-xs ${
                  asset.sentiment === 'bullish' ? 'text-green-400' : 
                  asset.sentiment === 'bearish' ? 'text-red-400' : 'text-yellow-400'
                }`}>
                  {asset.sentiment === 'bullish' ? '🐂' : asset.sentiment === 'bearish' ? '🐻' : '⚖️'} {asset.sentiment}
                </span>
              </div>
              <TrendingUp className="w-4 h-4 text-green-400" />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
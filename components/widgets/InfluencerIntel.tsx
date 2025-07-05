'use client';

import { Star, TrendingUp, TrendingDown } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const influencers = [
  {
    id: 1,
    name: 'Elon Musk',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg/640px-Elon_Musk_Colorado_2022_%28cropped2%29.jpg',
    reputation: 5.0,
    sentiment: 9.5,
    impact: 'Very High',
    assets: ['BTC', 'DOGE', 'TSLA'],
  },
  {
    id: 2,
    name: 'Donald Trump',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/640px-Donald_Trump_official_portrait.jpg',
    reputation: 4.8,
    sentiment: 8.8,
    impact: 'Very High',
    assets: ['TRUMP', 'DWAC', 'SPY'],
  },
  {
    id: 3,
    name: 'Michael Saylor',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Michael_Saylor_by_Gage_Skidmore.jpg/640px-Michael_Saylor_by_Gage_Skidmore.jpg',
    reputation: 4.9,
    sentiment: 9.1,
    impact: 'High',
    assets: ['BTC', 'ETH', 'SOL'],
  },
  {
    id: 4,
    name: 'Cathie Wood',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Cathie_Wood_ARK_Invest_Photo.jpg/640px-Cathie_Wood_ARK_Invest_Photo.jpg',
    reputation: 4.7,
    sentiment: 7.5,
    impact: 'High',
    assets: ['AAPL', 'NVDA', 'TSLA'],
  },
  {
    id: 5,
    name: 'Charles Hoskinson',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Charles_Hoskinson_Profile_Colour_Hi-Res-3.jpg/640px-Charles_Hoskinson_Profile_Colour_Hi-Res-3.jpg',
    reputation: 4.7,
    sentiment: 8.3,
    impact: 'High',
    assets: ['ADA', 'DOT', 'LINK'],
  },
  {
    id: 6,
    name: 'Raoul Pal',
    avatar: 'https://goodmoneyguide.com/wp-content/uploads/2019/09/Raoul-Pal-Real-Vision.jpeg',
    reputation: 4.5,
    sentiment: 6.4,
    impact: 'Medium',
    assets: ['SPY', 'QQQ', 'VTI'],
  }
  // {
  //   id: 1,
  //   name: 'CryptoWhale',
  //   avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=64&h=64',
  //   reputation: 4.8,
  //   sentiment: 8.2,
  //   impact: 'High',
  //   assets: ['BTC', 'ETH', 'SOL'],
  // },
  // {
  //   id: 2,
  //   name: 'TechAnalyst',
  //   avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=64&h=64',
  //   reputation: 4.6,
  //   sentiment: 6.5,
  //   impact: 'Medium',
  //   assets: ['AAPL', 'NVDA', 'TSLA'],
  // },
  // {
  //   id: 3,
  //   name: 'DeFiExpert',
  //   avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=64&h=64',
  //   reputation: 4.9,
  //   sentiment: 7.8,
  //   impact: 'High',
  //   assets: ['UNI', 'AAVE', 'COMP'],
  // },
  // {
  //   id: 4,
  //   name: 'MarketGuru',
  //   avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=64&h=64',
  //   reputation: 4.3,
  //   sentiment: 5.2,
  //   impact: 'Medium',
  //   assets: ['SPY', 'QQQ', 'VTI'],
  // },
  // {
  //   id: 5,
  //   name: 'BlockchainBull',
  //   avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=64&h=64',
  //   reputation: 4.7,
  //   sentiment: 8.5,
  //   impact: 'High',
  //   assets: ['ADA', 'DOT', 'LINK'],
  // },
  // {
  //   id: 6,
  //   name: 'AITrader',
  //   avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=64&h=64',
  //   reputation: 4.4,
  //   sentiment: 7.1,
  //   impact: 'Medium',
  //   assets: ['GOOGL', 'MSFT', 'META'],
  // },
];

// Duplicate the array for seamless looping
const duplicatedInfluencers = [...influencers, ...influencers];

export function InfluencerIntel() {
  return (
    <Card className="p-6 glass-effect">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white">Influencer Intel</h2>
        <Badge variant="outline" className="text-green-400 border-green-400/30 pulse-animation">
          Live
        </Badge>
      </div>

      <div className="auto-scroll-container">
        <div className="auto-scroll-content">
          {duplicatedInfluencers.map((influencer, index) => (
            <div
              key={`${influencer.id}-${index}`}
              className="flex-shrink-0 w-64 p-4 glass-effect rounded-lg hover:bg-gray-900/60 transition-all cursor-pointer mr-4 apple-button"
            >
              <div className="flex items-center space-x-3 mb-3">
                <img
                  src={influencer.avatar}
                  alt={influencer.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-700/50"
                />
                <div>
                  <h3 className="font-medium text-white">{influencer.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-xs text-gray-400">{influencer.reputation}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">Sentiment</span>
                  <div className="flex items-center space-x-1">
                    {influencer.sentiment >= 7 ? (
                      <TrendingUp className="w-3 h-3 text-green-400" />
                    ) : (
                      <TrendingDown className="w-3 h-3 text-red-400" />
                    )}
                    <span className={`text-xs ${
                      influencer.sentiment >= 7 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {influencer.sentiment}/10
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">Impact</span>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${
                      influencer.impact === 'High' 
                        ? 'text-orange-400 border-orange-400/30' 
                        : 'text-gray-400 border-gray-600/30'
                    }`}
                  >
                    {influencer.impact}
                  </Badge>
                </div>
              </div>

              <div className="flex flex-wrap gap-1">
                {influencer.assets.map((asset) => (
                  <Badge 
                    key={asset} 
                    variant="secondary" 
                    className="text-xs bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 transition-colors"
                  >
                    {asset}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
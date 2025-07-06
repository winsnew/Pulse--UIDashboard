'use client';

import { useState } from 'react';
import { Star, TrendingUp, TrendingDown, Search, Filter, Calendar, ExternalLink, MessageSquare, ArrowLeft, Eye, BarChart3 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const influencers = [
  {
    id: 1,
    name: 'Elon Musk',
    reputation: 5.0,
    sentiment: 9.5,
    impact: 'Very High',
    assets: ['BTC', 'DOGE', 'TSLA'],
    followers: '150M',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg/640px-Elon_Musk_Colorado_2022_%28cropped2%29.jpg',
    statements: [
      {
        id: 1,
        date: '2024-01-15',
        statement: 'Bitcoin is the future of money. Tesla will continue to hold and accept BTC for payments.',
        impact: 'Very High',
        sentiment: 'Bullish',
        assets: ['BTC', 'TSLA'],
        source: 'Twitter',
        marketReaction: '+12.5%',
        engagement: '2.1M'
      },
      {
        id: 2,
        date: '2024-01-10',
        statement: 'Dogecoin to the moon! Much wow, such currency. The people\'s crypto.',
        impact: 'High',
        sentiment: 'Bullish',
        assets: ['DOGE'],
        source: 'Twitter',
        marketReaction: '+8.3%',
        engagement: '1.8M'
      },
      {
        id: 3,
        date: '2024-01-05',
        statement: 'AI will revolutionize everything. Investing heavily in neural networks and autonomous systems.',
        impact: 'Medium',
        sentiment: 'Bullish',
        assets: ['TSLA', 'NVDA'],
        source: 'Interview',
        marketReaction: '+5.2%',
        engagement: '950K'
      }
    ]
  },
  {
    id: 2,
    name: 'Donald Trump',
    reputation: 4.8,
    sentiment: 8.8,
    impact: 'Very High',
    assets: ['TRUMP', 'DWAC', 'SPY'],
    followers: '87M',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/640px-Donald_Trump_official_portrait.jpg',
    statements: [
      {
        id: 4,
        date: '2024-01-14',
        statement: 'America First policies will boost our markets tremendously. Greatest economy ever!',
        impact: 'Very High',
        sentiment: 'Bullish',
        assets: ['SPY', 'DWAC'],
        source: 'Rally',
        marketReaction: '+15.2%',
        engagement: '3.2M'
      },
      {
        id: 5,
        date: '2024-01-08',
        statement: 'Truth Social is the future of social media platforms. Big Tech monopoly ends now.',
        impact: 'High',
        sentiment: 'Bullish',
        assets: ['DWAC'],
        source: 'Truth Social',
        marketReaction: '+22.1%',
        engagement: '2.7M'
      }
    ]
  },
  {
    id: 3,
    name: 'Michael Saylor',
    reputation: 4.9,
    sentiment: 9.1,
    impact: 'High',
    assets: ['BTC', 'ETH', 'SOL'],
    followers: '3.1M',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Michael_Saylor_by_Gage_Skidmore.jpg/640px-Michael_Saylor_by_Gage_Skidmore.jpg',
    statements: [
      {
        id: 6,
        date: '2024-01-12',
        statement: 'Bitcoin is digital gold. MicroStrategy will never sell our Bitcoin treasury.',
        impact: 'Very High',
        sentiment: 'Bullish',
        assets: ['BTC'],
        source: 'Conference',
        marketReaction: '+18.7%',
        engagement: '1.2M'
      },
      {
        id: 7,
        date: '2024-01-07',
        statement: 'Ethereum smart contracts are revolutionary for enterprise blockchain adoption.',
        impact: 'Medium',
        sentiment: 'Bullish',
        assets: ['ETH'],
        source: 'Podcast',
        marketReaction: '+6.4%',
        engagement: '780K'
      }
    ]
  },
  {
    id: 4,
    name: 'Cathie Wood',
    reputation: 4.7,
    sentiment: 7.5,
    impact: 'High',
    assets: ['AAPL', 'NVDA', 'TSLA'],
    followers: '1.8M',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Cathie_Wood_ARK_Invest_Photo.jpg/640px-Cathie_Wood_ARK_Invest_Photo.jpg',
    statements: [
      {
        id: 8,
        date: '2024-01-11',
        statement: 'Innovation stocks are undervalued. This is a generational buying opportunity.',
        impact: 'High',
        sentiment: 'Bullish',
        assets: ['TSLA', 'NVDA'],
        source: 'CNBC',
        marketReaction: '+9.8%',
        engagement: '650K'
      },
      {
        id: 9,
        date: '2024-01-06',
        statement: 'Apple\'s AI integration will drive the next major growth cycle in tech.',
        impact: 'Medium',
        sentiment: 'Bullish',
        assets: ['AAPL'],
        source: 'Report',
        marketReaction: '+4.1%',
        engagement: '420K'
      }
    ]
  },
  {
    id: 5,
    name: 'Charles Hoskinson',
    reputation: 4.7,
    sentiment: 8.3,
    impact: 'High',
    assets: ['ADA', 'DOT', 'LINK'],
    followers: '2.4M',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Charles_Hoskinson_Profile_Colour_Hi-Res-3.jpg/640px-Charles_Hoskinson_Profile_Colour_Hi-Res-3.jpg',
    statements: [
      {
        id: 10,
        date: '2024-01-13',
        statement: 'Cardano\'s peer-reviewed approach will win in the long term. Science-based blockchain.',
        impact: 'High',
        sentiment: 'Bullish',
        assets: ['ADA'],
        source: 'YouTube',
        marketReaction: '+11.3%',
        engagement: '890K'
      }
    ]
  },
  {
    id: 6,
    name: 'Raoul Pal',
    reputation: 4.5,
    sentiment: 6.4,
    impact: 'Medium',
    assets: ['SPY', 'QQQ', 'VTI'],
    followers: '1.2M',
    avatar: 'https://goodmoneyguide.com/wp-content/uploads/2019/09/Raoul-Pal-Real-Vision.jpeg',
    statements: [
      {
        id: 12,
        date: '2024-01-04',
        statement: 'Macro conditions suggest a potential market correction ahead. Be cautious.',
        impact: 'High',
        sentiment: 'Bearish',
        assets: ['SPY', 'QQQ'],
        source: 'Newsletter',
        marketReaction: '-7.2%',
        engagement: '560K'
      }
    ]
  },
];

// Duplicate the array for seamless looping
const duplicatedInfluencers = [...influencers, ...influencers];

export function InfluencerIntel() {
  const [selectedInfluencer, setSelectedInfluencer] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [impactFilter, setImpactFilter] = useState('All');
  const [sentimentFilter, setSentimentFilter] = useState('All');

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Very High': return 'text-red-400 border-red-400/30 bg-red-400/10';
      case 'High': return 'text-orange-400 border-orange-400/30 bg-orange-400/10';
      case 'Medium': return 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10';
      case 'Low': return 'text-gray-400 border-gray-600/30 bg-gray-400/10';
      default: return 'text-gray-400 border-gray-600/30 bg-gray-400/10';
    }
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'Bullish': return 'text-green-400 border-green-400/30 bg-green-400/10';
      case 'Bearish': return 'text-red-400 border-red-400/30 bg-red-400/10';
      case 'Neutral': return 'text-gray-400 border-gray-600/30 bg-gray-400/10';
      default: return 'text-gray-400 border-gray-600/30 bg-gray-400/10';
    }
  };

  const getMarketReactionColor = (reaction: string) => {
    return reaction.startsWith('+') ? 'text-green-400' : 'text-red-400';
  };

  const filteredStatements = selectedInfluencer
    ? influencers.find(inf => inf.id === selectedInfluencer)?.statements.filter(statement => {
      const matchesSearch = statement.statement.toLowerCase().includes(searchTerm.toLowerCase()) ||
        statement.assets.some(asset => asset.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesImpact = impactFilter === 'All' || statement.impact === impactFilter;
      const matchesSentiment = sentimentFilter === 'All' || statement.sentiment === sentimentFilter;
      return matchesSearch && matchesImpact && matchesSentiment;
    }) || []
    : [];

  const selectedInfluencerData = influencers.find(inf => inf.id === selectedInfluencer);

  return (
    <Card className="p-4 glass-effect border border-gray-800/30 shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
          <h2 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-white">
            Influencer Intel
          </h2>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="text-green-400 border-green-400/30 bg-green-400/10 pulse-animation text-xs font-medium">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5 animate-pulse"></div>
            Live Feed
          </Badge>
          {selectedInfluencer && (
            <Button
              size="sm"
              variant="outline"
              onClick={() => setSelectedInfluencer(null)}
              className="apple-button text-gray-300 border-gray-600/50 hover:text-white hover:border-gray-500 hover:bg-gray-800/50 h-8 px-3 text-xs font-medium transition-all duration-200"
            >
              <ArrowLeft className="w-3 h-3 mr-1" />
              Back
            </Button>
          )}
        </div>
      </div>

      {!selectedInfluencer ? (
        // Enhanced Influencer Cards View with Clean Avatars
        <div className="auto-scroll-container">
          <div className="auto-scroll-content">
            {duplicatedInfluencers.map((influencer, index) => (
              <div
                key={`${influencer.id}-${index}`}
                className="flex-shrink-0 w-64 p-4 glass-effect rounded-xl hover:bg-gray-900/60 transition-all duration-300 cursor-pointer mr-4 apple-button border border-gray-800/30 hover:border-gray-700/50 group"
                onClick={() => setSelectedInfluencer(influencer.id)}
              >
                {/* Header with Clean Avatar and Basic Info */}
                <div className="flex items-center space-x-3 mb-3">
                  <div className="relative">
                    <img
                      src={influencer.avatar}
                      alt={influencer.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-700/50 shadow-lg group-hover:ring-gray-600/50 transition-all duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white text-sm group-hover:text-gray-200 transition-colors">
                      {influencer.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-400">{influencer.reputation}</span>
                      </div>
                      <div className="text-xs text-gray-500">•</div>
                      <span className="text-xs text-gray-400">{influencer.followers}</span>
                    </div>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-1">
                      <BarChart3 className="w-3 h-3 text-blue-400" />
                      <span className="text-xs text-gray-400">Sentiment</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {influencer.sentiment >= 7 ? (
                        <TrendingUp className="w-3 h-3 text-green-400" />
                      ) : (
                        <TrendingDown className="w-3 h-3 text-red-400" />
                      )}
                      <span className={`text-xs font-medium ${influencer.sentiment >= 7 ? 'text-green-400' : 'text-red-400'
                        }`}>
                        {influencer.sentiment}/10
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center space-x-1">
                      <MessageSquare className="w-3 h-3 text-purple-400" />
                      <span className="text-xs text-gray-400">Statements</span>
                    </div>
                    <Badge
                      variant="outline"
                      className="text-xs text-blue-400 border-blue-400/30 bg-blue-400/10 font-medium"
                    >
                      {influencer.statements.length} posts
                    </Badge>
                  </div>
                </div>

                {/* Impact Badge */}
                <div className="mb-3">
                  <Badge
                    variant="outline"
                    className={`text-xs font-medium ${getImpactColor(influencer.impact)}`}
                  >
                    {influencer.impact} Impact
                  </Badge>
                </div>

                {/* Asset Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {influencer.assets.slice(0, 3).map((asset) => (
                    <Badge
                      key={asset}
                      variant="secondary"
                      className="text-xs bg-gray-800/60 text-gray-300 hover:bg-gray-700/60 transition-colors border border-gray-700/30"
                    >
                      {asset}
                    </Badge>
                  ))}
                  {influencer.assets.length > 3 && (
                    <Badge
                      variant="secondary"
                      className="text-xs bg-gray-800/60 text-gray-400 border border-gray-700/30"
                    >
                      +{influencer.assets.length - 3}
                    </Badge>
                  )}
                </div>

                {/* View Details Button */}
                <Button
                  size="sm"
                  className="w-full apple-button bg-gray-800/60 text-white border border-gray-700/30 hover:bg-gray-800/80 hover:border-gray-600/50 h-8 text-xs font-medium transition-all duration-200"
                >
                  <Eye className="w-3 h-3 mr-1" />
                  View Statements
                </Button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Compact and Elegant Statements Archive View
        <div className="space-y-3">
          {/* Compact Selected Influencer Header with Clean Avatar */}
          <div className="p-3 glass-effect rounded-lg border border-gray-800/30">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src={selectedInfluencerData?.avatar}
                  alt={selectedInfluencerData?.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-700/50 shadow-lg"
                />
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border border-gray-900">
                  <div className="w-1 h-1 bg-white rounded-full animate-pulse m-0.5"></div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white">{selectedInfluencerData?.name}</h3>
                <div className="flex items-center space-x-3 text-xs text-gray-400">
                  <span className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span>{selectedInfluencerData?.reputation}</span>
                  </span>
                  <span>{selectedInfluencerData?.statements.length} statements</span>
                  <span>{selectedInfluencerData?.followers} followers</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className={`text-xs ${getImpactColor(selectedInfluencerData?.impact || '')}`}>
                  {selectedInfluencerData?.impact}
                </Badge>
                <Badge variant="outline" className="text-xs text-green-400 border-green-400/30 bg-green-400/10">
                  {selectedInfluencerData?.sentiment}/10
                </Badge>
              </div>
            </div>
          </div>

          {/* Compact Search and Filters */}
          <div className="p-3 glass-effect rounded-lg border border-gray-800/30">
            <div className="flex items-center space-x-2">
              <div className="relative flex-1">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} />
                <Input
                  placeholder="Search statements..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8 h-8 text-xs bg-gray-900/50 border-gray-700/50 text-white placeholder:text-gray-400 focus:border-gray-600"
                />
              </div>
              <select
                value={impactFilter}
                onChange={(e) => setImpactFilter(e.target.value)}
                className="bg-gray-900/50 border border-gray-700/50 rounded px-2 py-1 text-xs text-white focus:border-gray-600"
              >
                <option value="All">All Impact</option>
                <option value="Very High">Very High</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
              </select>
              <select
                value={sentimentFilter}
                onChange={(e) => setSentimentFilter(e.target.value)}
                className="bg-gray-900/50 border border-gray-700/50 rounded px-2 py-1 text-xs text-white focus:border-gray-600"
              >
                <option value="All">All Sentiment</option>
                <option value="Bullish">Bullish</option>
                <option value="Bearish">Bearish</option>
                <option value="Neutral">Neutral</option>
              </select>
            </div>
          </div>

          {/* Compact Statements List */}
          <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
            {filteredStatements.length > 0 ? (
              filteredStatements.map((statement) => (
                <div
                  key={statement.id}
                  className="p-3 glass-effect rounded-lg hover:bg-gray-900/60 transition-all duration-200 apple-button border border-gray-800/30 hover:border-gray-700/50 group"
                >
                  {/* Compact Statement Header */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2 text-xs text-gray-400">
                      <Calendar className="w-3 h-3" />
                      <span>{statement.date}</span>
                      <Badge variant="outline" className="text-xs text-gray-400 border-gray-600/30 bg-gray-600/10 px-1 py-0">
                        {statement.source}
                      </Badge>
                    </div>
                    <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-gray-300 transition-colors cursor-pointer" />
                  </div>

                  {/* Statement Content */}
                  <div className="mb-2">
                    <p className="text-sm text-white leading-relaxed line-clamp-2">
                      "{statement.statement}"
                    </p>
                  </div>

                  {/* Compact Metrics Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className={`text-xs ${getImpactColor(statement.impact)}`}>
                        {statement.impact}
                      </Badge>
                      <Badge variant="outline" className={`text-xs ${getSentimentColor(statement.sentiment)}`}>
                        {statement.sentiment === 'Bullish' ? '🐂' : statement.sentiment === 'Bearish' ? '🐻' : '⚖️'}
                      </Badge>
                      <div className="flex flex-wrap gap-1">
                        {statement.assets.slice(0, 2).map((asset) => (
                          <Badge
                            key={asset}
                            variant="secondary"
                            className="text-xs bg-gray-800/60 text-gray-300 border border-gray-700/30 px-1 py-0"
                          >
                            {asset}
                          </Badge>
                        ))}
                        {statement.assets.length > 2 && (
                          <Badge variant="secondary" className="text-xs bg-gray-800/60 text-gray-400 border border-gray-700/30 px-1 py-0">
                            +{statement.assets.length - 2}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 text-xs">
                      <div className="flex items-center space-x-1 text-gray-400">
                        <Eye className="w-3 h-3" />
                        <span>{statement.engagement}</span>
                      </div>
                      <span className={`font-bold ${getMarketReactionColor(statement.marketReaction)}`}>
                        {statement.marketReaction}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 glass-effect rounded-lg border border-gray-800/30">
                <MessageSquare className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <h3 className="text-sm font-semibold text-white mb-1">No Statements Found</h3>
                <p className="text-xs text-gray-400">Try adjusting your search criteria</p>
              </div>
            )}
          </div>
        </div>
      )}
    </Card>
  );
}
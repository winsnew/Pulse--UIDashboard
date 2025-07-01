'use client';

import { Bell, Mail, MessageSquare, Plus, Settings } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const alerts = [
  {
    id: 1,
    asset: 'BTC',
    type: 'Price Target',
    trigger: '$72,000',
    status: 'Active',
    methods: ['push', 'email'],
    effectiveness: '95%',
    lastTriggered: '2 hours ago',
  },
  {
    id: 2,
    asset: 'ETH',
    type: 'Volume Spike',
    trigger: '+50% avg',
    status: 'Active',
    methods: ['push'],
    effectiveness: '87%',
    lastTriggered: '1 day ago',
  },
  {
    id: 3,
    asset: 'NVDA',
    type: 'News Sentiment',
    trigger: 'Positive',
    status: 'Paused',
    methods: ['email', 'sms'],
    effectiveness: '92%',
    lastTriggered: '3 days ago',
  },
];

const alertTemplates = [
  'Price Breakout',
  'Volume Anomaly',
  'Sentiment Shift',
  'Technical Pattern',
  'Whale Movement',
];

export function SmartAlerts() {
  return (
    <Card className="p-6 glass-effect">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white">SmartAlerts</h2>
        <Button
          size="sm"
          className="apple-button bg-gray-800/60 text-white border border-gray-700/30 hover:bg-gray-800/80"
        >
          <Plus className="w-4 h-4 mr-2" />
          New Alert
        </Button>
      </div>

      <div className="space-y-3 mb-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="p-3 glass-effect rounded-lg apple-button"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="bg-gray-800/50 text-gray-300">
                  {alert.asset}
                </Badge>
                <span className="text-sm text-white">{alert.type}</span>
              </div>
              <Badge 
                variant="outline" 
                className={`text-xs ${
                  alert.status === 'Active' 
                    ? 'text-green-400 border-green-400/30 pulse-animation' 
                    : 'text-yellow-400 border-yellow-400/30'
                }`}
              >
                {alert.status}
              </Badge>
            </div>

            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-1">
                <span className="text-xs text-gray-400">Trigger:</span>
                <span className="text-xs text-white">{alert.trigger}</span>
              </div>
              <div className="flex items-center space-x-1">
                {alert.methods.includes('push') && <Bell className="w-3 h-3 text-gray-400" />}
                {alert.methods.includes('email') && <Mail className="w-3 h-3 text-gray-400" />}
                {alert.methods.includes('sms') && <MessageSquare className="w-3 h-3 text-gray-400" />}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center space-x-3">
                <span className="text-gray-400">Effectiveness: <span className="text-green-400">{alert.effectiveness}</span></span>
              </div>
              <span className="text-gray-400">Last: {alert.lastTriggered}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-white">Quick Templates</h3>
        <div className="grid grid-cols-1 gap-2">
          {alertTemplates.slice(0, 3).map((template) => (
            <Button
              key={template}
              variant="outline"
              size="sm"
              className="apple-button justify-start text-gray-400 border-gray-700/50 hover:text-white hover:border-gray-600"
            >
              <Plus className="w-3 h-3 mr-2" />
              {template}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
}
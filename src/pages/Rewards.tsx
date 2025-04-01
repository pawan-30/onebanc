
import React from 'react';
import { Shield, Award, Gift, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BottomNavigation from '@/components/layout/BottomNavigation';

const Rewards = () => {
  const rewardCategories = [
    {
      title: 'Cashback Rewards',
      icon: Shield,
      description: 'Earn up to 5% cashback on all your transactions',
      points: '2,450',
    },
    {
      title: 'Loyalty Points',
      icon: Award,
      description: 'Collect points with every purchase and redeem for rewards',
      points: '5,680',
    },
    {
      title: 'Special Offers',
      icon: Gift,
      description: 'Exclusive deals and discounts from our partners',
      points: '1,200',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex-1 p-4 pb-20">
        <h1 className="text-2xl font-bold text-onebanc-base-dark mb-6">Rewards</h1>
        
        {/* Total Rewards Card */}
        <Card className="mb-6 bg-gradient-to-r from-onebanc-brand-blue to-onebanc-accent-cyan text-white">
          <CardContent className="p-6">
            <div className="text-center">
              <h2 className="text-xl font-medium mb-2">Total Reward Points</h2>
              <p className="text-4xl font-bold mb-4">9,330</p>
              <button className="bg-white text-onebanc-brand-blue px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors">
                Redeem Now
              </button>
            </div>
          </CardContent>
        </Card>
        
        {/* Reward Categories */}
        <h2 className="text-lg font-semibold mb-3 text-onebanc-base-dark">Your Rewards</h2>
        <div className="space-y-4">
          {rewardCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center p-4">
                  <div className="bg-onebanc-accent-cyan/10 p-3 rounded-full mr-4">
                    <category.icon className="h-6 w-6 text-onebanc-accent-cyan" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium text-onebanc-base-dark">{category.title}</h3>
                    <p className="text-sm text-gray-500">{category.description}</p>
                  </div>
                  <div className="flex items-center">
                    <div className="text-right mr-2">
                      <span className="block font-bold text-onebanc-brand-blue">{category.points}</span>
                      <span className="text-xs text-gray-500">points</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Recent Earnings */}
        <h2 className="text-lg font-semibold mt-6 mb-3 text-onebanc-base-dark">Recent Earnings</h2>
        <Card>
          <CardContent className="p-4">
            <div className="space-y-4">
              {[
                { name: 'Online Shopping', date: 'May 15', points: '+120' },
                { name: 'Grocery Store', date: 'May 12', points: '+85' },
                { name: 'Movie Tickets', date: 'May 8', points: '+150' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                  <div>
                    <p className="font-medium text-onebanc-base-dark">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.date}</p>
                  </div>
                  <span className="text-green-600 font-medium">{item.points}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Rewards;

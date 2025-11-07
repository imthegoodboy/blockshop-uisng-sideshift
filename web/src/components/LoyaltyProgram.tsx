import React from 'react';
import { Card } from './ui';

interface LoyaltyLevel {
  name: string;
  icon: string;
  requiredPoints: number;
  benefits: string[];
  color: string;
}

const loyaltyLevels: LoyaltyLevel[] = [
  {
    name: "Bronze",
    icon: "🥉",
    requiredPoints: 0,
    benefits: [
      "Access to exclusive digital content",
      "Early access to new listings",
      "Basic support"
    ],
    color: "from-amber-700 to-amber-600"
  },
  {
    name: "Silver",
    icon: "🥈",
    requiredPoints: 100,
    benefits: [
      "1% cashback in any crypto via SideShift",
      "Priority support",
      "Discount on platform fees"
    ],
    color: "from-gray-400 to-gray-300"
  },
  {
    name: "Gold",
    icon: "🥇",
    requiredPoints: 500,
    benefits: [
      "2% cashback in any crypto",
      "VIP support",
      "Exclusive NFT rewards",
      "Zero platform fees"
    ],
    color: "from-yellow-500 to-yellow-400"
  },
  {
    name: "Diamond",
    icon: "💎",
    requiredPoints: 1000,
    benefits: [
      "3% cashback in any crypto",
      "24/7 dedicated support",
      "Early access to premium listings",
      "Free promotional features",
      "Custom payment routes via SideShift"
    ],
    color: "from-blue-400 to-blue-300"
  }
];

interface Props {
  currentPoints: number;
  currentLevel: string;
}

export default function LoyaltyProgram({ currentPoints, currentLevel }: Props) {
  return (
    <div className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Crypto Loyalty Program</h2>
          <p className="text-lg text-gray-600">
            Earn points with every purchase and get rewarded in any cryptocurrency
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {loyaltyLevels.map((level) => (
            <Card 
              key={level.name}
              className={`relative overflow-hidden ${
                currentLevel === level.name ? 'ring-2 ring-yellow-500' : ''
              }`}
            >
              <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${level.color}`} />
              <div className="relative p-6">
                <div className="text-4xl mb-4">{level.icon}</div>
                <h3 className="text-xl font-bold mb-2">{level.name}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {level.requiredPoints} points required
                </p>
                <ul className="space-y-2">
                  {level.benefits.map((benefit, index) => (
                    <li key={index} className="text-sm flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                {currentLevel === level.name && (
                  <div className="mt-4 p-2 bg-yellow-50 rounded-lg text-sm text-yellow-700 text-center">
                    Your Current Level! ({currentPoints} points)
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-6 max-w-2xl">
            <h3 className="text-xl font-bold mb-3">How to Earn Points</h3>
            <ul className="text-left space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-yellow-500">•</span>
                <span>1 point per 1 MATIC spent</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-500">•</span>
                <span>Bonus points for using multiple cryptocurrencies via SideShift</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-500">•</span>
                <span>Extra points for referring new users</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-500">•</span>
                <span>Special event bonuses and seasonal rewards</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
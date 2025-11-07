import React from 'react';
import { Card } from './ui';

export default function FeatureHighlight() {
  const features = [
    {
      title: "Multi-Chain Payments",
      icon: "🌐",
      description: "Accept payments in 50+ cryptocurrencies through SideShift's seamless conversion",
      benefits: [
        "Broader customer reach",
        "No manual currency conversion",
        "Instant settlement in MATIC"
      ]
    },
    {
      title: "Automatic Conversion",
      icon: "⚡",
      description: "SideShift API handles all currency conversions automatically",
      benefits: [
        "Real-time exchange rates",
        "No waiting for manual swaps",
        "Guaranteed settlement"
      ]
    },
    {
      title: "Seller Protection",
      icon: "🛡️",
      description: "Sellers always receive MATIC regardless of buyer's payment method",
      benefits: [
        "Predictable earnings",
        "No currency risk",
        "Simplified accounting"
      ]
    },
    {
      title: "Global Access",
      icon: "🌍",
      description: "Reach customers from any blockchain ecosystem",
      benefits: [
        "Wider market access",
        "Cross-chain compatibility",
        "Increased liquidity"
      ]
    }
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-yellow-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Powered by SideShift</h2>
          <p className="text-lg text-gray-600">
            Experience seamless multi-chain digital commerce
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="text-yellow-500">•</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-6">
            <h3 className="text-xl font-bold mb-3">Why SideShift?</h3>
            <p className="text-gray-600">
              SideShift's robust API enables us to offer a truly universal payment solution, 
              making digital commerce accessible to everyone, regardless of their preferred cryptocurrency.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
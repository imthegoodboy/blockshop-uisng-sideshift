import React from 'react';
import { Card, Button } from './ui';

interface BundleItem {
  id: string;
  name: string;
  description: string;
  originalPrice: number;
  category: string;
}

interface Bundle {
  id: string;
  name: string;
  items: BundleItem[];
  discountPercentage: number;
  acceptedCoins: string[];
}

interface Props {
  bundles: Bundle[];
  onBundlePurchase: (bundleId: string, coin: string) => void;
}

export default function BundleDeals({ bundles, onBundlePurchase }: Props) {
  return (
    <div className="py-12 px-6 bg-gradient-to-b from-yellow-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Multi-Crypto Bundle Deals</h2>
          <p className="text-lg text-gray-600">
            Save more when you buy bundles using different cryptocurrencies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bundles.map((bundle) => {
            const totalOriginalPrice = bundle.items.reduce(
              (sum, item) => sum + item.originalPrice,
              0
            );
            const discountedPrice = totalOriginalPrice * (1 - bundle.discountPercentage / 100);

            return (
              <Card key={bundle.id} className="overflow-hidden">
                <div className="p-6">
                  <div className="bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full w-fit mb-4">
                    Save {bundle.discountPercentage}%
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">{bundle.name}</h3>
                  
                  <div className="space-y-3 mb-6">
                    {bundle.items.map((item) => (
                      <div key={item.id} className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <div className="text-sm text-gray-600 line-through">
                      Original: {totalOriginalPrice} MATIC
                    </div>
                    <div className="text-2xl font-bold text-yellow-600">
                      Now: {discountedPrice.toFixed(2)} MATIC
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-medium">Pay with:</p>
                    <div className="flex flex-wrap gap-2">
                      {bundle.acceptedCoins.map((coin) => (
                        <button
                          key={coin}
                          onClick={() => onBundlePurchase(bundle.id, coin)}
                          className="bg-gray-100 hover:bg-gray-200 text-sm font-medium px-3 py-1 rounded-full transition-colors"
                        >
                          {coin}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 bg-gray-50 border-t">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Bonus:</span> Extra loyalty points when paying with multiple different cryptocurrencies!
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-6">
            <h3 className="text-xl font-bold mb-3">Why Buy Bundles?</h3>
            <ul className="text-left space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-yellow-500">•</span>
                <span>Save up to 30% on curated collections</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-500">•</span>
                <span>Pay with your preferred crypto via SideShift</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-500">•</span>
                <span>Earn 2x loyalty points on bundle purchases</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-500">•</span>
                <span>Get exclusive bundle-only content</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Card } from './ui';

export default function FeatureRoadmap() {
  const items = [
    { title: 'IPFS encryption', status: 'In Progress' },
    { title: 'Gasless checkout', status: 'Planned' },
    { title: 'SideShift multi-coin payments', status: 'Completed' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Roadmap</h2>
      <div className="space-y-3">
        {items.map((it, i) => (
          <Card key={i} className="p-4">
            <div className="flex items-center justify-between">
              <div className="font-medium">{it.title}</div>
              <div className="text-sm text-gray-600">{it.status}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import { Card } from './ui';

const reviews = [
  { author: 'chillerwhale', text: 'Strong technical foundation and clear roadmap.' },
  { author: '0xNXTLVL', text: 'Digital creators need such platforms.' },
];

export default function JudgesReviews() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Judge Reviews</h2>
      <div className="space-y-3">
        {reviews.map((r, i) => (
          <Card key={i} className="p-4">
            <div className="font-medium">{r.author}</div>
            <div className="text-sm text-gray-600">{r.text}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}

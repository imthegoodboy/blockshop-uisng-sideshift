"use client";
import { Card } from "@/components/ui";

export default function FAQPage() {
  const faqs = [
    {
      q: "How does the multi-currency payment system work?",
      a: "We use SideShift API to enable payments in any supported cryptocurrency. When you make a purchase, SideShift automatically converts your chosen cryptocurrency to MATIC, which is then used to complete the purchase on the Polygon network."
    },
    {
      q: "What cryptocurrencies can I use to pay?",
      a: "You can pay with any cryptocurrency supported by SideShift, including BTC, ETH, USDT, XMR, SOL, DOGE, and many more. The payment options are dynamically updated based on SideShift's supported currencies."
    },
    {
      q: "How long do payments take to process?",
      a: "Payment processing times vary depending on the cryptocurrency you use. Most payments are confirmed within a few minutes. Once the payment is confirmed and converted to MATIC, your purchase is completed instantly."
    },
    {
      q: "Are there any extra fees for using different cryptocurrencies?",
      a: "The platform charges a standard 20% fee on all purchases. When using non-MATIC currencies, there may be small conversion fees from SideShift, which are displayed before you confirm your payment."
    },
    {
      q: "Why do sellers receive MATIC?",
      a: "We settle all payments in MATIC to provide a consistent, stable experience for sellers. This ensures they don't have to deal with multiple currencies or conversion rates, while still allowing buyers to pay with their preferred crypto."
    },
    {
      q: "Is my payment secure?",
      a: "Yes! We use SideShift's secure API for all currency conversions, and all transactions are verified on their respective blockchains. The final purchase is recorded on the Polygon blockchain for permanent proof of ownership."
    },
    {
      q: "What happens if the cryptocurrency price changes during my purchase?",
      a: "SideShift quotes are locked in for a short period (usually a few minutes) to protect against price fluctuations. As long as you complete your payment within the quote's expiry time, your purchase price is guaranteed."
    },
    {
      q: "Can I sell my products for currencies other than MATIC?",
      a: "Currently, all products are listed in MATIC to maintain consistency and simplify the selling process. However, buyers can purchase your products using any supported cryptocurrency, which is automatically converted to MATIC for you."
    }
  ];

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
        
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <Card key={i} className="p-6">
              <h3 className="text-xl font-semibold mb-3">{faq.q}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{faq.a}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-yellow-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Still have questions?</h3>
          <p>Contact our support team or check out our detailed documentation for more information about using the platform.</p>
        </div>
      </div>
    </div>
  );
}
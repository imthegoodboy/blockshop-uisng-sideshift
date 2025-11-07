import { useState, useEffect } from 'react';
import { getSupportedCoins, createQuote } from '@/lib/sideshift';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface PaymentSelectorProps {
  priceInMatic: string;
  onPaymentInitiated: (quote: any) => void;
}

export default function PaymentSelector({ priceInMatic, onPaymentInitiated }: PaymentSelectorProps) {
  const [supportedCoins, setSupportedCoins] = useState<any[]>([]);
  const [selectedCoin, setSelectedCoin] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [quote, setQuote] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const coins = await getSupportedCoins();
        setSupportedCoins(coins.filter((coin: any) => coin.status === 'active'));
      } catch (error) {
        console.error('Error fetching supported coins:', error);
      }
    };
    fetchCoins();
  }, []);

  const handleCoinSelect = async (coin: string) => {
    setSelectedCoin(coin);
    setIsLoading(true);
    try {
      const quoteData = await createQuote(coin, 'MATIC', priceInMatic);
      setQuote(quoteData);
    } catch (error) {
      console.error('Error creating quote:', error);
    }
    setIsLoading(false);
  };

  const handlePaymentStart = () => {
    if (quote) {
      onPaymentInitiated(quote);
      setIsDialogOpen(false);
    }
  };

  return (
    <>
      <Button onClick={() => setIsDialogOpen(true)} variant="outline">
        Pay with any cryptocurrency
      </Button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Choose Payment Currency</DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <Select onValueChange={handleCoinSelect} value={selectedCoin}>
              <SelectTrigger>
                <SelectValue placeholder="Select a cryptocurrency" />
              </SelectTrigger>
              <SelectContent>
                {supportedCoins.map((coin) => (
                  <SelectItem key={coin.id} value={coin.id}>
                    {coin.name} ({coin.symbol})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {quote && (
              <div className="p-4 bg-gray-100 rounded-lg">
                <p>Exchange Rate: 1 {selectedCoin} = {quote.rate} MATIC</p>
                <p>You will pay: {quote.depositAmount} {selectedCoin}</p>
                <p>Seller receives: {quote.settleAmount} MATIC</p>
              </div>
            )}

            <Button
              onClick={handlePaymentStart}
              disabled={!quote || isLoading}
              className="w-full"
            >
              {isLoading ? 'Loading...' : 'Proceed with Payment'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
import { NextRequest, NextResponse } from 'next/server';
import { createQuote, createShift, getShiftStatus } from '@/lib/sideshift';

export async function POST(req: NextRequest) {
  try {
    const { depositCoin, productPrice, buyerAddress } = await req.json();

    // Create a quote for the conversion
    const quote = await createQuote(depositCoin, 'MATIC', productPrice);

    // Create a shift (actual payment processing)
    const shift = await createShift(quote.id);

    // Return the payment details to the client
    return NextResponse.json({
      success: true,
      paymentDetails: {
        depositAddress: shift.depositAddress,
        depositAmount: quote.depositAmount,
        depositCoin: quote.depositCoin,
        settleAmount: quote.settleAmount,
        shiftId: shift.id,
        expiresAt: quote.expiresAt,
      },
    });
  } catch (error) {
    console.error('Payment processing error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process payment' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const shiftId = searchParams.get('shiftId');

  if (!shiftId) {
    return NextResponse.json(
      { success: false, error: 'Missing shiftId' },
      { status: 400 }
    );
  }

  try {
    const status = await getShiftStatus(shiftId);
    return NextResponse.json({ success: true, status });
  } catch (error) {
    console.error('Error checking shift status:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to check payment status' },
      { status: 500 }
    );
  }
}
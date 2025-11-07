import { NextResponse } from 'next/server';
import { getSupportedCoins } from '@/lib/sideshift';

export async function GET() {
  try {
    const coins = await getSupportedCoins();
    return NextResponse.json({ success: true, coins });
  } catch (error) {
    console.error('Error fetching supported coins:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch supported coins' },
      { status: 500 }
    );
  }
}
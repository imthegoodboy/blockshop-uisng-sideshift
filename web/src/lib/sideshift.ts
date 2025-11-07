import axios from 'axios';

const SIDESHIFT_API_BASE = 'https://sideshift.ai/api/v2';

interface SideShiftQuote {
  id: string;
  createdAt: string;
  depositCoin: string;
  depositNetwork: string;
  settleCoin: string;
  settleNetwork: string;
  depositAmount: string;
  settleAmount: string;
  rate: string;
  expiresAt: string;
  depositAddress: string;
}

export const getSupportedCoins = async () => {
  const response = await axios.get(`${SIDESHIFT_API_BASE}/coins`);
  return response.data;
};

export const createQuote = async (
  depositCoin: string,
  settleCoin: string = 'MATIC',
  settleAmount: string
) => {
  const response = await axios.post(`${SIDESHIFT_API_BASE}/quotes`, {
    depositCoin,
    settleCoin,
    settleAmount,
    settleNetwork: 'MATIC',
  });
  return response.data as SideShiftQuote;
};

export const getQuoteStatus = async (quoteId: string) => {
  const response = await axios.get(`${SIDESHIFT_API_BASE}/quotes/${quoteId}`);
  return response.data;
};

export const createShift = async (quoteId: string) => {
  const response = await axios.post(`${SIDESHIFT_API_BASE}/shifts`, {
    quoteId,
  });
  return response.data;
};

export const getShiftStatus = async (shiftId: string) => {
  const response = await axios.get(`${SIDESHIFT_API_BASE}/shifts/${shiftId}`);
  return response.data;
};
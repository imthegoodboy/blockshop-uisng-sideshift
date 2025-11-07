import { Web3Storage } from 'web3.storage';

function getClient() {
  const token = process.env.WEB3_STORAGE_TOKEN;
  if (!token) {
    throw new Error('Missing Web3.Storage token');
  }
  return new Web3Storage({ token });
}

export async function uploadToWeb3Storage(file: File): Promise<string> {
  const client = getClient();
  const cid = await client.put([file]);
  return cid;
}
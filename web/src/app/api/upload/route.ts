import { NextRequest } from "next/server";
import { Web3Storage } from 'web3.storage';

function getStorageClient() {
  const token = process.env.WEB3_STORAGE_TOKEN;
  if (!token) {
    throw new Error('Web3.Storage token not configured');
  }
  return new Web3Storage({ token });
}

export async function POST(req: NextRequest) {
    try {
        // Get Web3.Storage client
        const client = getStorageClient();

        const formData = await req.formData();
        const file = formData.get("file") as File;
        
        if (!file) {
            return new Response(JSON.stringify({ error: "No file provided" }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        try {
            // Upload to IPFS via Web3.Storage
            const cid = await client.put([file], {
                name: file.name,
                maxRetries: 3
            });

            return new Response(JSON.stringify({ cid }), {
                headers: { "Content-Type": "application/json" }
            });
        } catch (uploadError: any) {
            console.error("Upload to IPFS failed:", uploadError);
            return new Response(JSON.stringify({ 
                error: "Upload to IPFS failed",
                details: uploadError?.message
            }), {
                status: 500,
                headers: { "Content-Type": "application/json" }
            });
        }
    } catch (e: any) {
        console.error("Server error during upload:", e);
        return new Response(JSON.stringify({ error: e?.message || "Upload failed" }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}

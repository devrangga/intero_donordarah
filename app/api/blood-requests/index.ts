import { getBloodRequests, createBloodRequest } from '@/lib/GlobalApi';
import { NextRequest, NextResponse } from 'next/server';

// export default async function handler(req, res) {
//   if (req.method === 'GET') {
//     const response = await getBloodRequests();
//     res.status(response.status).json(response.body);
//   } else if (req.method === 'POST') {
//     const response = await createBloodRequest(req.body);
//     res.status(response.status).json(response.body);
//   } else {
//     res.setHeader('Allow', ['GET', 'POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

export default async function handler(req : NextRequest, res: NextResponse) {
  if (req.method === 'GET') {
    const response = await getBloodRequests();
    return Response.json(response)
  } else if (req.method === 'POST') {
    const response = await createBloodRequest(req.body);
    res.status(response.status).json(response.body);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
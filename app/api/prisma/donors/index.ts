import { getDonors, createDonor } from '@/lib/GlobalApi';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const response = await getDonors();
    res.status(response.status).json(response.body);
  } else if (req.method === 'POST') {
    const response = await createDonor(req.body);
    res.status(response.status).json(response.body);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

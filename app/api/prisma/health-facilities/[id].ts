import { updateHealthFacility, deleteHealthFacility } from '@/lib/GlobalApi';

export default async function handler(req, res) {
  const { id } = req.query;
  
  if (req.method === 'PUT') {
    const response = await updateHealthFacility(Number(id), req.body);
    res.status(response.status).json(response.body);
  } else if (req.method === 'DELETE') {
    const response = await deleteHealthFacility(Number(id));
    res.status(response.status).json(response.body);
  } else {
    res.setHeader('Allow', ['PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
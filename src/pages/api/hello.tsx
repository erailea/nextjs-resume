// pages/api/hello.tsx
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(new Date(), req.method, req.query, req.body);
  if (req.method === 'GET') {
    if(req.query.world == "test")
      res.status(200).json({ message: `Hello World` });
    else
      res.status(400).json({ message: `Error` });
  } else if (req.method === 'POST') {
    if(req.body.world == "test")
      res.status(200).json({ message: `Hello World` });
    else
      res.status(400).json({ message: `Error` });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

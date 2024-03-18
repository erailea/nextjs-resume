// pages/api/hello.tsx
import type { NextApiRequest, NextApiResponse } from 'next';

// Defining the expected structure for the GET query and POST body
interface Query {
  query?: string;
}

interface Body {
  body?: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // For GET requests, return "hello world" + the query parameter
    const { query }: Query = req.query;
    res.status(200).json({ message: `Hello World ${query || ''}` });
  } else if (req.method === 'POST') {
    // For POST requests, return "hello world" + the body content
    const { body }: Body = req.body;
    res.status(200).json({ message: `Hello World ${body || ''}` });
  } else {
    // Handle any other HTTP methods
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

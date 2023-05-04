import type { NextApiRequest, NextApiResponse } from 'next';

type Project = {
  title: string;
  description: string;
  github: string;
  liveLinks: string;
  techStack: string;
  image: string;
};

type Data = {
  success: boolean;
  message?: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  if (req.method === 'GET') {
    res.status(200).json({
      message: 'hi',
      success: true
    })
  }
}

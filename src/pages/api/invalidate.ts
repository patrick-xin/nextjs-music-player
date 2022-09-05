// @ts-ignore
import { verifyWebhookSignature } from '@graphcms/utils';
import { NextApiHandler } from 'next';

const handler: NextApiHandler = async (req, res) => {
  const secret = process.env.INVALIDATE_TOKEN;
  const body = req.body; // Typically req.body
  const signature = req.headers['gcms-signature']; // Typically req.headers['gcms-signature']

  const isValid = verifyWebhookSignature({ body, signature, secret });

  if (!isValid) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    await res.revalidate('/');
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating');
  }
};

export default handler;

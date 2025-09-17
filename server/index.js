// Simple Express server exposing /api/link-preview using server/linkPreview.js
// Note: For production hosting, deploy this separately from a static site host.

import express from 'express';
import cors from 'cors';
import { fetchPreview } from './linkPreview.js';

const PORT = process.env.PORT || 8787;

const app = express();
app.use(cors());

app.get('/api/link-preview', async (req, res) => {
  const url = String(req.query.url || '');
  if (!url) return res.status(400).json({ error: 'Missing url param' });
  try {
    const data = await fetchPreview(url);
    res.json(data);
  } catch (err) {
    const status = err && err.status ? err.status : 500;
    res.status(status).json({ error: err?.message || 'Failed to fetch preview' });
  }
});

app.get('/', (_req, res) => {
  res.type('text/plain').send('Link preview server running. Use /api/link-preview?url=...');
});

app.listen(PORT, () => {
  console.log(`Link preview server listening on http://localhost:${PORT}`);
});

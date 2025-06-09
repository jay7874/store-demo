'use client';
import { use } from 'react';
import { Box, Paper, Typography, Divider } from '@mui/material';
import { storeData } from '../../../data';

function getYoutubeId(url) {
  const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})(?:\?|&|$)/);
  return match ? match[1] : '';
}

export default function StoreDetailPage({ params: paramsPromise }) {
  const params = use(paramsPromise); // ✅ unwrap the params
  const storeId = parseInt(params.id);

  const store = storeData.find((s) => s.id === storeId);

  if (!store) return <Typography sx={{ textAlign: 'center', mt: 5 }}>Loading...</Typography>;

  return (
    <Paper elevation={2} sx={{ maxWidth: 800, mx: 'auto', my: 4 }}>
      <Box p={3}>
        <Typography variant="h5" fontWeight="bold">{store.name}</Typography>
        <Typography sx={{ mb: 2 }}>
          Address: <a href="#">{store.address}</a>
        </Typography>
        <Typography>Genre: {store.genre}</Typography>
        <Typography>Nearest station: {store.nearest}</Typography>
        <Typography>Opening hours: {store.openingHours}</Typography>
        <Typography>Closed: {store.closed}</Typography>
        <Typography>Price: {store.price}</Typography>
      </Box>

      <Divider />

      <Box p={3}>
        <Box
          sx={{
            width: '100%',
            height: { xs: 250, sm: 400 },
            position: 'relative',
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${getYoutubeId(store.videoInfo)}`}
            title="YouTube Video"
            allowFullScreen
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
            }}
          />
        </Box>
      </Box>

      <Divider />

      <Box p={3}>
        <Typography sx={{ fontSize: '12px', color: 'gray', whiteSpace: 'pre-line' }}>
          {store.description}
        </Typography>
      </Box>
    </Paper>
  );
}
"use client";
import { Box, Typography, Button, Divider, Paper, Chip } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const getEmbedUrl = (url) => {
  const match = url.match(/(?:\?v=|\/embed\/|\.be\/)([^&\n?#]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
};

export default function StoreDetail({ stores }) {
  return (
    <>
      {stores.length > 0 &&
        stores.map((store) => (
          <Paper
            key={store.id}
            elevation={3}
            sx={{ maxWidth: 800, mx: "auto", my: 4 }}
          >
            {/* Store Info Section */}
            <Box p={3} borderBottom={1} borderColor="divider">
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                {store.name}
              </Typography>
              <Typography color="text.secondary">{store.location}</Typography>
            </Box>

            {/* Video Embed Section */}
            <Box p={3}>
              <Box
                sx={{
                  width: "100%",
                  height: { xs: 250, sm: 400 },
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: 2,
                }}
              >
                <iframe
                  src={getEmbedUrl(store.videoInfo)}
                  title="YouTube Video"
                  allowFullScreen
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                  }}
                />
              </Box>
            </Box>

            {/* Show More Button */}
            <Box p={3} display="flex" justifyContent="center">
              <Button
                color="inherit"
                endIcon={<ExpandMoreIcon />}
                sx={{
                  textTransform: "none",
                  color: "black",
                  "&:hover": {
                    color: "blue.800",
                    backgroundColor: "transparent",
                  },
                }}
              >
                Show more
              </Button>
            </Box>
          </Paper>
        ))}
    </>
  );
}

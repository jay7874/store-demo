"use client";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/components/AuthContext";
import { Button, Paper, Typography } from "@mui/material";

export default function Profile() {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <Paper
        className="flex justify-center flex-col items-center"
        elevation={2}
        sx={{ maxWidth: 800, mx: "auto", my: 4, padding: 3 }}
      >
        <div className="h-[100px] w-[100px] bg-green-700 rounded-full flex justify-center items-center text-2xl text-white te">
          N
        </div>
        <div className="text-4xl font-bold my-4">nickname</div>
        <Typography sx={{
          py:2
        }}>@87840ae8-2081-7058-9021-ed8247afcd2f</Typography>
        <Button
          className="mx-2"
          variant="contained"
          fullWidth
          color="success"
          sx={{ textTransform: "none" }}
        >
          Search for videos by area and genre
        </Button>

        {/* <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">User Profile</h2>
          <div className="space-y-4">
            <div>
              <p className="text-gray-600">Name:</p>
              <p className="font-medium">{user?.name}</p>
            </div>
            <div>
              <p className="text-gray-600">Email:</p>
              <p className="font-medium">{user?.email}</p>
            </div>
          </div>
        </div> */}
      </Paper>
    </ProtectedRoute>
  );
}

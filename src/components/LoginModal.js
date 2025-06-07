'use client';
import { useState } from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  TextField, 
  Button,
  Box,
  Typography
} from '@mui/material';
import { useAuth } from './AuthContext';

export default function LoginModal() {
  const { loginModalOpen, closeLoginModal, login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    login({
      name: 'Demo User',
      email: email || 'demo@example.com'
    });
  };

  return (
    <Dialog open={loginModalOpen} onClose={closeLoginModal}>
      <DialogTitle>
        <Typography variant="h6" component="div">
          Login to V Report
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
      </DialogContent>
      <DialogActions sx={{ p: 3 }}>
        <Button 
          onClick={closeLoginModal}
          variant="outlined"
          sx={{ mr: 2 }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleLogin}
          variant="contained"
          color="primary"
        >
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
}
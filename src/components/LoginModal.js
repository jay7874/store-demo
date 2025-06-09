'use client';
import { useState } from 'react';
import {
  Dialog,
  Box,
  Tabs,
  Tab,
  IconButton,
  Typography,
  TextField,
  Button
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useAuth } from './AuthContext';

export default function LoginModal() {
  const { loginModalOpen, closeLoginModal, login } = useAuth();
  const [tab, setTab] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    login({
      name: 'Demo User',
      email: email || 'demo@example.com',
    });
    closeLoginModal();
  };

  return (
    <Dialog open={loginModalOpen} onClose={closeLoginModal}>
      <Box sx={{ position: 'relative', width: 500, px: 3, py: 2 }}>
        {/* X Button */}
        <IconButton
          onClick={closeLoginModal}
          sx={{ position: 'absolute', top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>

        {/* Tabs */}
        <Tabs
          value={tab}
          onChange={(_, newValue) => setTab(newValue)}
          variant="fullWidth"
          sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}
        >
          <Tab label="Sign up" />
          <Tab label="Log in" />
        </Tabs>

        {/* Input Fields */}
        <Box component="form" noValidate autoComplete="off">
          <TextField
            fullWidth
            label="email address"
            variant="outlined"
            margin="normal"
            size="small"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Box sx={{ position: 'relative' }}>
            <TextField
              fullWidth
              label="Password (8 or more alphanumeric characters)"
              variant="outlined"
              margin="normal"
              size="small"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <IconButton
              onClick={() => setShowPassword(!showPassword)}
              sx={{ position: 'absolute', right: 8, top: 22 }}
            >
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </Box>

          {tab === 0 && (
            <Typography
              variant="body2"
              sx={{ mt: 1, fontSize: '13px', color: 'text.secondary' }}
            >
              Please agree to the{' '}
              <a href="#" style={{ color: '#1a73e8', fontWeight: 500 }}>terms of use</a>{' '}
              and then press the button below to proceed.
            </Typography>
          )}

          {tab === 1 && (
            <Box sx={{ textAlign: 'right', mt: 1 }}>
              <a href="#" style={{ fontSize: '13px', color: '#555' }}>Forgot your password?</a>
            </Box>
          )}

          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, backgroundColor: '#000', textTransform: 'none' }}
            onClick={handleLogin}
          >
            {tab === 0 ? 'Send verification email' : 'Log in'}
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}
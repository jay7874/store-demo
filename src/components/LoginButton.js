'use client';
import { useAuth } from './AuthContext';
import Button from '@mui/material/Button';

export default function LoginButton() {
  const { user, logout, openLoginModal } = useAuth();

  if (user) {
    return (
      <Button
        onClick={logout}
        variant="outlined"
        color="inherit"
        sx={{ 
          color: 'text.primary',
          borderColor: 'grey.300',
          '&:hover': {
            borderColor: 'grey.400',
            backgroundColor: 'action.hover'
          }
        }}
      >
        Logout
      </Button>
    );
  }

  return (
    <Button
      onClick={openLoginModal}
      variant="contained"
      color="primary"
    >
      Login
    </Button>
  );
}
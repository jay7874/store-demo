import { AuthProvider } from '@/components/AuthContext';
import Layout from '@/components/Layout';
import './globals.css';

export const metadata = {
  title: 'V Report',
  description: 'Saved payment videos by area and genre',
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Layout>{children}</Layout>
        </AuthProvider>
      </body>
    </html>
  );
}
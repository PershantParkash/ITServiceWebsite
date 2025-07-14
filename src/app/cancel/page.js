'use client';

import { Box, Typography, Button, Container, Card, CardContent } from '@mui/material';
import { Cancel, ArrowBack } from '@mui/icons-material';
import Link from 'next/link';

export default function CancelPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4
      }}
    >
      <Container maxWidth="md">
        <Card sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '24px',
          p: 6,
          textAlign: 'center'
        }}>
          <CardContent>
            <Cancel 
              sx={{ 
                fontSize: 80, 
                color: '#ef4444', 
                mb: 3 
              }} 
            />
            
            <Typography 
              variant="h3" 
              component="h1" 
              sx={{ 
                color: '#ffffff', 
                fontWeight: 700, 
                mb: 2 
              }}
            >
              Payment Cancelled
            </Typography>
            
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#94a3b8', 
                mb: 4,
                fontWeight: 400 
              }}
            >
              Your payment was cancelled. No charges were made to your account.
            </Typography>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ color: '#e2e8f0', mb: 2, fontWeight: 600 }}>
                What happened?
              </Typography>
              <Typography variant="body1" sx={{ color: '#94a3b8', mb: 2 }}>
                You cancelled the payment process before it was completed. 
                This is completely normal and no charges were made to your account.
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/#contact" style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<ArrowBack />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                    boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
                    textTransform: 'none',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                      boxShadow: '0 15px 35px rgba(59, 130, 246, 0.4)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Try Again
                </Button>
              </Link>

              <Link href="/" style={{ textDecoration: 'none' }}>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#94a3b8',
                    textTransform: 'none',
                    '&:hover': {
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Back to Home
                </Button>
              </Link>
            </Box>

            <Typography 
              variant="body2" 
              sx={{ 
                color: '#64748b', 
                mt: 3 
              }}
            >
              Need help? Contact us at info@weekenditwiz.co.uk
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
} 
'use client';

import { useState } from 'react';
import { 
  Box, 
  Modal, 
  Typography, 
  Button, 
  CircularProgress,
  Alert,
  Card,
  CardContent,
  Divider,
  Stack,
  IconButton
} from '@mui/material';
import { Close, CheckCircle, Security, Support } from '@mui/icons-material';

export default function PaymentModal({ 
  open, 
  onClose, 
  planDetails,
  onSuccess 
}) {
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);

  // Return null if no plan is selected
  if (!planDetails) return null;

  const handlePayment = async () => {
    setProcessing(true);
    setError(null);

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          amount: planDetails.price,
          planName: planDetails.name,
          duration: planDetails.duration,
          success_url: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${window.location.origin}/cancel`,
        }),
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        setError(data.error || 'Failed to create checkout session');
        setProcessing(false);
        return;
      }

      // Redirect to Stripe Checkout
      window.location.href = data.url;
    } catch (err) {
      console.error('Payment error:', err);
      setError('An unexpected error occurred. Please try again.');
      setProcessing(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="payment-modal-title"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2
      }}
    >
      <Box sx={{
        width: '100%',
        maxWidth: 600,
        maxHeight: '90vh',
        overflow: 'auto',
        backgroundColor: 'rgba(26, 26, 46, 0.95)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '24px',
        p: 4,
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
        position: 'relative'
      }}>
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            color: '#94a3b8',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: '#e2e8f0'
            }
          }}
        >
          <Close />
        </IconButton>

        {/* Header */}
        <Stack spacing={2} alignItems="center" sx={{ mb: 4 }}>
          <Box sx={{
            width: 60,
            height: 60,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
            background: planDetails.color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white'
          }}>
            {/* <Security sx={{ fontSize: '1.5rem' }} /> */}
            {planDetails.icon}
          </Box>
          
          <Typography 
            variant="h5" 
            sx={{ 
              color: '#ffffff', 
              fontWeight: 700,
              textAlign: 'center'
            }}
          >
            Complete Your Booking
          </Typography>
          
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#94a3b8', 
              textAlign: 'center',
              maxWidth: '400px'
            }}
          >
            Secure payment processing powered by Stripe
          </Typography>
        </Stack>

        {/* Plan Details Card */}
        <Card sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '16px',
          mb: 3
        }}>
          <CardContent>
            {/* Plan Header */}
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
              <Typography variant="h6" sx={{ color: '#ffffff', fontWeight: 600 }}>
                {planDetails.name}
              </Typography>
              <Typography variant="h5" sx={{ color: planDetails.color, fontWeight: 800 }}>
                £{planDetails.price}
              </Typography>
            </Stack>
            
            <Typography variant="body2" sx={{ color: '#94a3b8', mb: 2 }}>
              {planDetails.duration} consultation session
            </Typography>
            
            <Divider sx={{ my: 2, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

            {/* Features */}
            <Typography variant="body2" sx={{ color: '#94a3b8', mb: 2 }}>
              What's included:
            </Typography>
            <Stack spacing={1}>
              {planDetails.features.map((feature, index) => (
                <Stack key={index} direction="row" alignItems="center" spacing={1}>
                  <CheckCircle sx={{ color: '#22c55e', fontSize: '1rem' }} />
                  <Typography variant="body2" sx={{ color: '#e2e8f0' }}>
                    {feature}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </CardContent>
        </Card>

        {/* Error Alert */}
        {error && (
          <Alert 
            severity="error" 
            sx={{ 
              mb: 3, 
              backgroundColor: 'rgba(239, 68, 68, 0.1)', 
              border: '1px solid rgba(239, 68, 68, 0.2)',
              color: '#fecaca',
              '& .MuiAlert-icon': {
                color: '#ef4444'
              }
            }}
          >
            {error}
          </Alert>
        )}

        {/* Payment Actions */}
        <Stack spacing={2}>
          <Button
            onClick={handlePayment}
            disabled={processing}
            variant="contained"
            fullWidth
            sx={{
              py: 2,
              fontWeight: 600,
              borderRadius: '12px',
              background: planDetails.color,
              textTransform: 'none',
              fontSize: '1rem',
              '&:hover': {
                opacity:0.9
              },
              '&:disabled': {
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'rgba(255, 255, 255, 0.3)',
              }
            }}
          >
            {processing ? (
              <Stack direction="row" alignItems="center" spacing={1}>
                <CircularProgress size={20} sx={{ color: '#ffffff' }} />
                <Typography>Processing...</Typography>
              </Stack>
            ) : (
              `Pay £${planDetails.price} - Book Now`
            )}
          </Button>
          
          <Button
            onClick={onClose}
            variant="outlined"
            fullWidth
            sx={{
              py: 2,
              fontWeight: 600,
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#94a3b8',
              textTransform: 'none',
              '&:hover': {
                border: '1px solid rgba(255, 255, 255, 0.3)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
              }
            }}
          >
            Cancel
          </Button>
        </Stack>

        {/* Security Notice */}
        <Stack 
          direction="row" 
          alignItems="center" 
          justifyContent="center" 
          spacing={1} 
          sx={{ mt: 3, opacity: 0.7 }}
        >
          <Security sx={{ fontSize: '1rem', color: '#94a3b8' }} />
          <Typography variant="caption" sx={{ color: '#94a3b8' }}>
            Secure payment processing by Stripe
          </Typography>
        </Stack>
      </Box>
    </Modal>
  );
}
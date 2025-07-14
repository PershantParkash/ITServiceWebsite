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
  Divider
} from '@mui/material';

export default function PaymentModal({ open, onClose, amount = 30, onSuccess }) {
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);

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
          amount,
          success_url: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${window.location.origin}/cancel`,
        }),
      });

      const { url, error: sessionError } = await response.json();

      if (sessionError) {
        setError(sessionError);
        setProcessing(false);
        return;
      }

      window.location.href = url;
    } catch (err) {
      setError('An unexpected error occurred');
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
        maxWidth: 500,
        maxHeight: '90vh',
        overflow: 'auto',
        backgroundColor: 'rgba(26, 26, 46, 0.95)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '24px',
        p: 4,
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'
      }}>
        <Card sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '16px',
          mb: 3
        }}>
          <CardContent>
            <Typography variant="h6" sx={{ color: '#ffffff', mb: 2, fontWeight: 600 }}>
              Consultation Payment
            </Typography>
            <Typography variant="body2" sx={{ color: '#94a3b8', mb: 3 }}>
              Complete your payment to book your consultation session
            </Typography>
            
            <Box sx={{ mb: 3 }}>
              <Typography variant="body1" sx={{ color: '#e2e8f0', mb: 1 }}>
                Amount: £{amount}
              </Typography>
              <Divider sx={{ my: 2, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" sx={{ color: '#94a3b8', mb: 2 }}>
                What's included in your consultation:
              </Typography>
              <Box component="ul" sx={{ 
                color: '#e2e8f0', 
                pl: 2,
                '& li': { mb: 1 }
              }}>
                <li>30-minute expert IT consultation</li>
                <li>Problem diagnosis and solution planning</li>
                <li>Priority support scheduling</li>
                <li>Follow-up recommendations</li>
              </Box>
            </Box>

            {error && (
              <Alert severity="error" sx={{ mb: 3, backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                {error}
              </Alert>
            )}

            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                onClick={handlePayment}
                disabled={processing}
                variant="contained"
                fullWidth
                sx={{
                  py: 1.5,
                  fontWeight: 600,
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                  textTransform: 'none',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                  },
                  '&:disabled': {
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'rgba(255, 255, 255, 0.3)',
                  }
                }}
              >
                {processing ? (
                  <>
                    <CircularProgress size={20} sx={{ color: '#ffffff', mr: 1 }} />
                    Processing...
                  </>
                ) : (
                  `Pay £${amount}`
                )}
              </Button>
              
              <Button
                onClick={onClose}
                variant="outlined"
                sx={{
                  py: 1.5,
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
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Modal>
  );
} 
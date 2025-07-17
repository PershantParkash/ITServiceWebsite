'use client'

import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Box, Typography, Button, Container, Alert, Card, CardContent } from '@mui/material'
import { CheckCircle, CalendarMonth } from '@mui/icons-material'

export default function SuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const plan = searchParams.get('plan')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const link = document.createElement('link')
    link.href = 'https://assets.calendly.com/assets/external/widget.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      if (document.head.contains(link)) document.head.removeChild(link)
      if (document.body.contains(script)) document.body.removeChild(script)
    }
  }, [])

  const getCalendlyLinks = () => {
    if (plan === '30min') {
      return {
        inPerson: 'https://calendly.com/pershantparkash/30-minute-meeting',
        online: 'https://calendly.com/pershantparkash/30-minute-online-meeting',
      };
    } else if (plan === '60min') {
      return {
        inPerson: 'https://calendly.com/pershantparkash/60-minute-meeting',
        online: 'https://calendly.com/pershantparkash/60-minute-online-meeting',
      };
    } else {
      return {
        inPerson: 'https://calendly.com/pershantparkash/15-minute-meeting?month=2025-07',
        online: null,
      };
    }
  };

  const handleBookCalendly = (url) => {
    setLoading(true);
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url,
        text: 'Schedule time with me',
        color: '#8b5cf6',
        textColor: '#ffffff',
        branding: true,
      });
    } else {
      window.open(url, '_blank');
    }
    setLoading(false);
  };

  const links = getCalendlyLinks();

  return (
    <Container maxWidth="md">
      <Card
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '24px',
          p: 6,
          textAlign: 'center',
        }}
      >
        <CardContent>
          <CheckCircle sx={{ fontSize: 80, color: '#22c55e', mb: 3 }} />
          <Typography variant="h3" component="h1" sx={{ color: '#ffffff', fontWeight: 700, mb: 2 }}>
            Payment Successful!
          </Typography>
          <Typography variant="h6" sx={{ color: '#94a3b8', mb: 4, fontWeight: 400 }}>
            Thank you for your payment. Your consultation session has been confirmed.
          </Typography>
          {sessionId && (
            <Alert
              severity="info"
              sx={{
                mb: 4,
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                color: '#93c5fd',
              }}
            >
              Session ID: {sessionId}
            </Alert>
          )}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ color: '#e2e8f0', mb: 2, fontWeight: 600 }}>
              What's Next?
            </Typography>
            <Box
              component="ul"
              sx={{
                color: '#94a3b8',
                textAlign: 'left',
                maxWidth: 400,
                mx: 'auto',
                '& li': { mb: 1 },
              }}
            >
              <li>Book your consultation time using the button below</li>
              <li>You'll receive a confirmation email with meeting details</li>
              <li>Prepare any questions or issues you'd like to discuss</li>
              <li>Join the meeting at your scheduled time</li>
            </Box>
          </Box>
          {plan === '30min' || plan === '60min' ? (
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 2 }}>
              <Button
                onClick={() => handleBookCalendly(links.online)}
                disabled={loading}
                variant="contained"
                size="large"
                startIcon={<CalendarMonth />}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                  boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
                  textTransform: 'none',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                    boxShadow: '0 15px 35px rgba(59, 130, 246, 0.4)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                {loading ? 'Loading...' : 'Book Online Meeting'}
              </Button>
              <Button
                onClick={() => handleBookCalendly(links.inPerson)}
                disabled={loading}
                variant="outlined"
                size="large"
                startIcon={<CalendarMonth />}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  borderRadius: '12px',
                  color: '#8b5cf6',
                  borderColor: '#8b5cf6',
                  background: 'rgba(139, 92, 246, 0.08)',
                  textTransform: 'none',
                  '&:hover': {
                    background: 'rgba(139, 92, 246, 0.18)',
                    borderColor: '#8b5cf6',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                {loading ? 'Loading...' : 'Book In-Person Meeting'}
              </Button>
            </Box>
          ) : (
            <Button
              onClick={() => handleBookCalendly(links.inPerson)}
              disabled={loading}
              variant="contained"
              size="large"
              startIcon={<CalendarMonth />}
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: 600,
                fontSize: '1.1rem',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                boxShadow: '0 10px 25px rgba(139, 92, 246, 0.3)',
                textTransform: 'none',
                '&:hover': {
                  background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
                  boxShadow: '0 15px 35px rgba(139, 92, 246, 0.4)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
                mb: 2
              }}
            >
              {loading ? 'Loading...' : 'Book Your Consultation Now'}
            </Button>
          )}
          <Typography variant="body2" sx={{ color: '#64748b', mt: 3 }}>
            Need help? Contact us at info@weekenditwiz.co.uk
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}

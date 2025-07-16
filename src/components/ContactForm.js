'use client';

import { useState, useEffect } from "react";
import { Box, Typography, TextField, Button, Container, Alert, Grid, Chip } from "@mui/material";
import { Email, Phone, LocationOn, Send, CalendarMonth } from "@mui/icons-material";
import PaymentModal from "./PaymentModal";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [consultationAmount] = useState(30);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCalendlyClick = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/pershantparkash',
        text: 'Schedule time with me',
        color: '#8b5cf6',
        textColor: '#ffffff',
        branding: true
      });
    } else {
      window.open('https://calendly.com/pershantparkash', '_blank');
    }
  };

  const handleBookConsultation = () => {
    setPaymentModalOpen(true);
  };

  const handlePaymentSuccess = () => {
    handleCalendlyClick();
  };

  const contactInfo = [
    { icon: <LocationOn />, label: "Location", value: "20 Wenlock Road, London, England, N1 7GU" },
    { icon: <Email />, label: "Email", value: "info@weekenditwiz.co.uk" },
    { icon: <Phone />, label: "Phone", value: "07424 665990" },
  ];




  return (
    <Box
      id="contact"
      sx={{
        py: 12,
        background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 70% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 30% 80%, rgba(139, 92, 246, 0.06) 0%, transparent 50%)',
          pointerEvents: 'none',
        },
      }}
    >


      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 3, md: 4 },
          py: { xs: 4, md: 8 },
          zIndex: 1,
        }}
      >
        <Grid
          container
          spacing={4}
          alignItems="flex-start"

          sx={{
            boxSizing: 'border-box',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'stretch',
          }}
        >
          <Grid item xs={12} md={5} sx={{
            flex: 1,
             alignItems: { xs: 'center', md: 'flex-start' },
              textAlign: { xs: 'center', md: 'left' },
          }}>
            <Chip
              label="Get In Touch"
              sx={{
                mb: 3,
                px: 2,
                py: 1,
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                color: '#3b82f6',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                fontWeight: 500,
                fontSize: '0.9rem'
              }}
            />

            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 800,
                color: '#ffffff',
                fontSize: { xs: '2rem', md: '2.5rem' },
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                mb: 3,
                background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Get In Touch With
              <Box component="span" sx={{
                display: 'block',
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Our Experts
              </Box>
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: '#94a3b8',
                fontWeight: 400,
                lineHeight: 1.6,
                mb: 4,
                fontSize: { xs: '1rem', md: '1.1rem' },
                // maxWidth: '400px',
                mx: 'auto',
                '@media (min-width: 901px)': {
                  mx: 0
                }
              }}
            >
              Have a question or need urgent IT support? Fill out the form or book a consultation — our certified team will respond promptly, even on weekends.
            </Typography>

            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              alignItems: 'center',

              '@media (min-width: 901px)': {
                alignItems: 'flex-start'
              }
            }}>
              {contactInfo.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    justifyContent: 'center',

                    '@media (min-width: 901px)': {
                      justifyContent: 'flex-start'
                    }
                  }}
                >
                  <Box sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '12px',
                    background: 'rgba(59, 130, 246, 0.1)',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '& svg': {
                      color: '#3b82f6',
                      fontSize: '1.2rem'
                    },
                    '@media (max-width: 900px)': {
                      display: 'none'
                    }
                  }}>
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ color: '#94a3b8', fontWeight: 500 }}>
                      {item.label}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#e2e8f0', fontWeight: 600 }}>
                      {item.value}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            <Box sx={{
              mt: 4,
              display: 'flex',
              justifyContent: 'center',
              '@media (min-width: 901px)': {
                justifyContent: 'flex-start'
              }
            }}>
              <Button
                onClick={handleBookConsultation}
                variant="outlined"
                size="large"
                startIcon={<CalendarMonth />}
                sx={{
                  px: 3,
                  py: 1.5,
                  fontWeight: 600,
                  fontSize: '1rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  color: '#8b5cf6',
                  backgroundColor: 'rgba(139, 92, 246, 0.1)',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: 'rgba(139, 92, 246, 0.2)',
                    border: '1px solid rgba(139, 92, 246, 0.5)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Book Consultation - £{consultationAmount}
              </Button>
            </Box>
          </Grid>


          <Grid item xs={12} md={7} sx={{
            flex: 0.75,
            my: "auto"
          }}>
            <Box sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '24px',
              p: { xs: 4, md: 6 },
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
              width: '100%',
              maxWidth: { xs: 'none', md: 'none' },
              '@media (max-width: 900px)': {
                width: '100%',
                maxWidth: '100%'
              }
            }}>
              <Box
                component="form"
                action="https://formspree.io/f/manjrvke"
                method="POST"
                sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
              >

                <TextField
                  label="Full Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '12px',
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(59, 130, 246, 0.5)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#3b82f6',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: '#94a3b8',
                    },
                    '& .MuiInputBase-input': {
                      color: '#e2e8f0',
                    },
                  }}
                />

                <TextField
                  label="Email Address"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  variant="outlined"
                  type="email"
                  fullWidth
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '12px',
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(59, 130, 246, 0.5)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#3b82f6',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: '#94a3b8',
                    },
                    '& .MuiInputBase-input': {
                      color: '#e2e8f0',
                    },
                  }}
                />

                <TextField
                  label="Describe your IT issue or request"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  variant="outlined"
                  multiline
                  minRows={4}
                  fullWidth
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '12px',
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(59, 130, 246, 0.5)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#3b82f6',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: '#94a3b8',
                    },
                    '& .MuiInputBase-input': {
                      color: '#e2e8f0',
                    },
                  }}
                />

                {error && (
                  <Alert
                    severity="error"
                    sx={{
                      backgroundColor: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid rgba(239, 68, 68, 0.2)',
                      borderRadius: '12px',
                      color: '#fca5a5',
                      '& .MuiAlert-icon': {
                        color: '#ef4444'
                      }
                    }}
                  >
                    {error}
                  </Alert>
                )}

                {submitted && (
                  <Alert
                    severity="success"
                    sx={{
                      backgroundColor: 'rgba(34, 197, 94, 0.1)',
                      border: '1px solid rgba(34, 197, 94, 0.2)',
                      borderRadius: '12px',
                      color: '#86efac',
                      '& .MuiAlert-icon': {
                        color: '#22c55e'
                      }
                    }}
                  >
                    Thank you! We'll be in touch within 24 hours.
                  </Alert>
                )}

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  startIcon={<Send />}
                  sx={{
                    mt: 2,
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
                  Send Message
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>





      <PaymentModal
        open={paymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
        amount={consultationAmount}
        onSuccess={handlePaymentSuccess}
      />
    </Box>
  );
}
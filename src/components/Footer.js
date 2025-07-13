'use client';

import { Box, Typography, Container, Grid, Chip, Divider } from "@mui/material";
import { TrendingUp, Security, Cloud, Email, Phone, LocationOn, Apple } from "@mui/icons-material";

export default function Footer() {
  const services = [
    "User & Device Support",
    "Office 365 & Email Support", 
    "Network & Remote Access",
    "Apple Device Management (JAMF)",
    "Cybersecurity & Compliance"
  ];

  const contactInfo = [
     { icon: <LocationOn />, text: "20 Wenlock Road, London, England, N1 7GU" },
    { icon: <Email />, text: "info@weekenditwiz.co.uk" },
    { icon: <Phone />, text: "07424 665990" },
   
  ];

  const highlights = [
     { icon: <TrendingUp />, text: "Scalable IT Solutions" },
    { icon: <Security />, text: "Cybersecurity Ready" },
    { icon: <Apple  />, text: "Apple Device Management" }
  ];

  return (
    <Box sx={{ 
      background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%)',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)',
        pointerEvents: 'none',
      },
    }}>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Main Footer Content */}
        <Box sx={{ py: 8, width: '100%' }}>
          <Grid container spacing={6} sx={{ width: '100%' }}>
            {/* Company Info */}
            <Grid item xs={12} md={4} sx={{ width: '100%' }}>
              <Box sx={{ 
                mb: 4,
                textAlign: { xs: 'center', md: 'left' },
                width: '100%'
              }}>
                <Typography 
                  variant="h5" 
                  component="h3" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 800, 
                    color: '#ffffff',
                    fontSize: '1.5rem',
                    letterSpacing: '-0.02em',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                    WeekendItWiz
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#94a3b8',
                    lineHeight: 1.6,
                    mb: 3,
                    fontSize: '0.95rem'
                  }}
                >
                  Empowering businesses with expert IT support, Azure cloud solutions, and strategic consulting. Your trusted partner in secure and scalable digital transformation.
                </Typography>
                
                {/* Highlight Chips */}
                <Box sx={{ 
                  display: 'flex', 
                  gap: 1, 
                  flexWrap: 'wrap',
                  justifyContent: { xs: 'center', md: 'flex-start' }
                }}>
                  {highlights.map((item, index) => (
                    <Chip
                      key={index}
                      icon={item.icon}
                      label={item.text}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        color: '#e2e8f0',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        fontWeight: 500,
                        fontSize: '0.75rem',
                        '& .MuiChip-icon': {
                          color: '#3b82f6',
                          fontSize: '0.9rem'
                        }
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Grid>

            {/* Services */}
            <Grid item xs={12} md={4} sx={{ width: '100%' }}>
              <Box sx={{ 
                textAlign: { xs: 'center', md: 'left' },
                width: '100%'
              }}>
                <Typography 
                  variant="h6" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 700, 
                    color: '#ffffff',
                    mb: 3,
                    fontSize: '1.1rem'
                  }}
                >
                  Our Services
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {services.map((service, index) => (
                    <Typography 
                      key={index}
                      variant="body2" 
                      sx={{ 
                        color: '#94a3b8',
                        fontSize: '0.9rem',
                        '&:hover': {
                          color: '#3b82f6',
                          cursor: 'pointer',
                          transition: 'color 0.3s ease'
                        }
                      }}
                    >
                      {service}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} md={4} sx={{ width: '100%' }}>
              <Box sx={{ 
                textAlign: { xs: 'center', md: 'left' },
                width: '100%'
              }}>
                <Typography 
                  variant="h6" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 700, 
                    color: '#ffffff',
                    mb: 3,
                    fontSize: '1.1rem'
                  }}
                >
                  Get In Touch
                </Typography>
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: 2.5,
                  alignItems: { xs: 'center', md: 'flex-start' }
                }}>
                  {contactInfo.map((item, index) => (
                    <Box 
                      key={index}
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 2
                      }}
                    >
                      <Box sx={{
                        width: 36,
                        height: 36,
                        borderRadius: '8px',
                        background: 'rgba(59, 130, 246, 0.1)',
                        border: '1px solid rgba(59, 130, 246, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '& svg': {
                          color: '#3b82f6',
                          fontSize: '1rem'
                        }
                      }}>
                        {item.icon}
                      </Box>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: '#94a3b8',
                          fontSize: '0.9rem',
                          '&:hover': {
                            color: '#3b82f6',
                            cursor: 'pointer',
                            transition: 'color 0.3s ease'
                          }
                        }}
                      >
                        {item.text}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Divider */}
        <Divider sx={{ 
          borderColor: 'rgba(255, 255, 255, 0.1)',
          my: 4
        }} />

        {/* Bottom Footer */}
        <Box sx={{ 
          py: 4, 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 2, md: 0 },
          textAlign: { xs: 'center', md: 'left' }
        }}>
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#64748b',
              fontSize: '0.85rem'
            }}
          >
            &copy; {new Date().getFullYear()} Powered by Zaptech LTD. All rights reserved.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#64748b',
                fontSize: '0.85rem',
                '&:hover': {
                  color: '#3b82f6',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease'
                }
              }}
            >
              Privacy Policy
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#64748b',
                fontSize: '0.85rem',
                '&:hover': {
                  color: '#3b82f6',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease'
                }
              }}
            >
              Terms of Service
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
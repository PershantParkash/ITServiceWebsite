'use client';

import { Box, Typography, Container, Grid, Chip, Divider } from "@mui/material";
import { TrendingUp, Security, Cloud, Email, Phone, LocationOn } from "@mui/icons-material";

export default function Footer() {
  const services = [
    "IT Support & Maintenance",
    "Azure Cloud Solutions", 
    "Network Security",
    "Data Backup & Recovery",
    "Strategic IT Consulting"
  ];

  const contactInfo = [
    { icon: <Email />, text: "hello@itservices.com" },
    { icon: <Phone />, text: "+1 (555) 123-4567" },
    { icon: <LocationOn />, text: "New York, NY" }
  ];

  const highlights = [
    { icon: <TrendingUp />, text: "Growth Focused" },
    { icon: <Security />, text: "Secure Solutions" },
    { icon: <Cloud />, text: "Azure Certified" }
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
        <Box sx={{ py: 8 }}>
          <Grid container spacing={6}>
            {/* Company Info */}
            <Grid item xs={12} md={4}>
              <Box sx={{ mb: 4 }}>
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
                  Premium IT Services
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
                  Transforming businesses through expert IT solutions, Azure cloud services, 
                  and strategic consulting. Your trusted partner for digital transformation.
                </Typography>
                
                {/* Highlight Chips */}
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
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
            <Grid item xs={12} md={4}>
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
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} md={4}>
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
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
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

              {/* CTA Text */}
              <Box sx={{ 
                mt: 4, 
                p: 3, 
                borderRadius: '12px',
                background: 'rgba(59, 130, 246, 0.05)',
                border: '1px solid rgba(59, 130, 246, 0.1)'
              }}>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: '#3b82f6',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    lineHeight: 1.5
                  }}
                >
                  Ready to transform your IT infrastructure? Get your free consultation today.
                </Typography>
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
          gap: { xs: 2, md: 0 }
        }}>
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#64748b',
              fontSize: '0.85rem'
            }}
          >
            &copy; {new Date().getFullYear()} Premium IT Services. All rights reserved.
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
'use client';

import { Box, Typography, Grid, Card, CardContent, Container, Chip, Button } from "@mui/material";
import {
  SupportAgent,
  Star,
  Cloud,
  Security,
  Devices,
  MailOutline,
  Wifi,
  Apple,
  CheckCircle,
  ArrowForward,
} from "@mui/icons-material";
import { useState, useEffect } from "react";
import PaymentModal from "./PaymentModal";

const services = [
  {
    title: "User & Device Support",
    icon: <Devices fontSize="large" />,
    desc: "Troubleshooting, optimization, and setup for Windows, macOS, printers, and peripherals.",
    features: [
      "PC & Mac Optimization",
      "Device Setup",
      "Printer & Scanner Help",
      "User Onboarding"
    ],
    color: "#3b82f6",
    bgGradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 100%)",
    popular: true
  },
  {
    title: "Office 365 & Email Support",
    icon: <MailOutline fontSize="large" />,
    desc: "Reliable setup, migration, and issue resolution for Outlook, OneDrive, and SharePoint.",
    features: [
      "Outlook Troubleshooting",
      "Email Migration",
      "License Issues",
      "Domain & DNS Help"
    ],
    color: "#0ea5e9",
    bgGradient: "linear-gradient(135deg, rgba(14, 165, 233, 0.15) 0%, rgba(14, 165, 233, 0.05) 100%)",
    popular: false
  },
  {
    title: "Network & Remote Access",
    icon: <Wifi fontSize="large" />,
    desc: "Get secure and stable access through VPNs, Wi-Fi setup, and remote desktop support.",
    features: [
      "Wi-Fi Troubleshooting",
      "VPN Setup",
      "Remote Desktop Fixes",
      "Router & Firewall Help"
    ],
    color: "#10b981",
    bgGradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.05) 100%)",
    popular: false
  },
  {
    title: "Apple Device Management (JAMF)",
    icon: <Apple fontSize="large" />,
    desc: "Manage, monitor, and control Macs and Apple devices with JAMF administration.",
    features: [
      "Mac Enrollment",
      "Remote Lock & Wipe",
      "App Installation",
      "Device Grouping"
    ],
    color: "#8b5cf6",
    bgGradient: "linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.05) 100%)",
    popular: false
  },
  {
    title: "Cybersecurity & Compliance",
    icon: <Security fontSize="large" />,
    desc: "Protect your business with antivirus setup, access control, and security audits.",
    features: [
      "Security Audits",
      "Antivirus Setup",
      "BitLocker/FileVault",
      "GDPR Guidance"
    ],
    color: "#f59e0b",
    bgGradient: "linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.05) 100%)",
    popular: false
  },
];

export default function Services() {
  // const [mobileOpen, setMobileOpen] = useState(false);
  // const [scrolled, setScrolled] = useState(false);
  // const [calendlyLoaded, setCalendlyLoaded] = useState(false);
  // const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  // const [consultationAmount] = useState(30);

  // useEffect(() => {
  //   const link = document.createElement('link');
  //   link.href = 'https://assets.calendly.com/assets/external/widget.css';
  //   link.rel = 'stylesheet';
  //   document.head.appendChild(link);

  //   const script = document.createElement('script');
  //   script.src = 'https://assets.calendly.com/assets/external/widget.js';
  //   script.async = true;
  //   script.onload = () => setCalendlyLoaded(true);
  //   document.body.appendChild(script);

  //   return () => {
  //     // Cleanup
  //     if (document.head.contains(link)) {
  //       document.head.removeChild(link);
  //     }
  //     if (document.body.contains(script)) {
  //       document.body.removeChild(script);
  //     }
  //   };
  // }, []);

  // const handleCalendlyClick = (e) => {
  //   e.preventDefault();

  //   if (window.Calendly && calendlyLoaded) {
  //     window.Calendly.initPopupWidget({
  //       url: 'https://calendly.com/pershantparkash',
  //       text: 'Schedule time with me',
  //       color: '#3b82f6',
  //       textColor: '#ffffff',
  //       branding: true
  //     });
  //   } else {
  //     // Fallback to opening in new tab if widget fails to load
  //     window.open('https://calendly.com/pershantparkash', '_blank');
  //   }
  // };

  // const handleBookConsultation = () => {
  //   setPaymentModalOpen(true);
  // };

  // const handlePaymentSuccess = () => {
  //   handleCalendlyClick();
  // };

  return (
    <Box
      id="services"
      sx={{
        py: 12,
        background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.06) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.06) 0%, transparent 50%)',
          pointerEvents: 'none',
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Chip
            label="Our Premium Services"
            sx={{
              mb: 3,
              px: 3,
              py: 1,
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              color: '#3b82f6',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              fontWeight: 600,
              fontSize: '0.9rem'
            }}
          />

          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 800,
              color: '#ffffff',
              fontSize: { xs: '2.2rem', md: '2.8rem', lg: '3.2rem' },
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              mb: 4,
              background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Our Premium IT Services
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: '#94a3b8',
              fontWeight: 400,
              lineHeight: 1.6,
              maxWidth: '700px',
              mx: 'auto',
              fontSize: { xs: '1.1rem', md: '1.25rem' }
            }}
          >
            Advanced, business-critical solutions designed for professionals and organizations that demand top-tier support, security, and performance — even on weekends.
          </Typography>
        </Box>

        <Box sx={{ mb: 8 }}>
          <Grid 
            container 
            spacing={4} 
            sx={{ 
              justifyContent: 'center',
              '@media (max-width: 599px)': {
                justifyContent: 'center'
              }
            }}
          >
            {services.map((service, idx) => (
              <Grid 
                item 
                xs={6}  
                sm={6}  
                md={4}  
                key={service.title}
                sx={{
                  '@media (min-width: 500px)': {
                    maxWidth: '350px',
                    flexBasis: '350px'
                  },
                  // ...(idx === services.length - 1 && {
                  //   '@media (max-width: 599px)': {
                  //     gridColumn: '1 / -1',
                  //     maxWidth: '300px',
                  //     margin: '0 auto'
                  //   }
                  // })
                  
                }}
              >
                <Card
                  sx={{
                    height: { xs: 320, sm: 420 }, 
                    background: service.bgGradient,
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 3,
                    p: { xs: 2, sm: 3 }, 
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 25px 50px -12px ${service.color}30`,
                      borderColor: `${service.color}60`,
                      '& .service-icon': {
                        transform: 'scale(1.1) rotate(3deg)',
                        color: service.color,
                      },
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: `linear-gradient(90deg, ${service.color} 0%, transparent 100%)`,
                    }
                  }}
                >
                  {service.popular && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 15,
                        right: 15,
                        background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                        color: 'white',
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 2,
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        boxShadow: '0 4px 12px rgba(245, 158, 11, 0.4)'
                      }}
                    >
                      <Star sx={{ fontSize: '0.8rem' }} />
                      Popular
                    </Box>
                  )}

                  <CardContent sx={{ p: 0, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    {/* Icon */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: { xs: 50, sm: 60 },
                        height: { xs: 50, sm: 60 },
                        borderRadius: 3,
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        mb: { xs: 2, sm: 3 },
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                    >
                      <Box
                        className="service-icon"
                        sx={{
                          color: '#94a3b8',
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          '& svg': {
                            fontSize: { xs: '1.5rem', sm: '1.8rem' }
                          }
                        }}
                      >
                        {service.icon}
                      </Box>
                    </Box>

                    {/* Title */}
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontWeight: 700,
                        color: '#ffffff',
                        mb: 2,
                        fontSize: { xs: '1.1rem', sm: '1.3rem' },
                        lineHeight: 1.3
                      }}
                    >
                      {service.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      sx={{
                        color: '#94a3b8',
                        lineHeight: 1.6,
                        mb: { xs: 2, sm: 3 },
                        fontSize: { xs: '0.8rem', sm: '0.9rem' },
                        flexGrow: 1
                      }}
                    >
                      {service.desc}
                    </Typography>

                    {/* Features */}
                    <Box sx={{ mt: 'auto' }}>
                      {service.features.map((feature, index) => (
                        <Box
                          key={index}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: { xs: 1, sm: 1.2 }
                          }}
                        >
                          <CheckCircle
                            sx={{
                              color: service.color,
                              fontSize: { xs: '0.9rem', sm: '1rem' },
                              mr: 1.5
                            }}
                          />
                          <Typography
                            sx={{
                              color: '#e2e8f0',
                              fontSize: { xs: '0.75rem', sm: '0.85rem' },
                              fontWeight: 500
                            }}
                          >
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Bottom CTA Section */}
        {/* <Box
          sx={{
            textAlign: 'center',
            mt: 12,
            p: 6,
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
            borderRadius: 4,
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: '#ffffff',
              mb: 2,
              fontWeight: 700,
              fontSize: { xs: '1.8rem', md: '2rem' }
            }}
          >
            Ready to Transform Your Business?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#94a3b8',
              mb: 4,
              fontWeight: 400,
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            Get a consultation and discover how our premium IT services
            can accelerate your business growth and digital transformation.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              px: 6,
              py: 2,
              borderRadius: 3,
              fontWeight: 600,
              fontSize: '1.1rem',
              textTransform: 'none',
              background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
              '&:hover': {
                background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                boxShadow: '0 15px 35px rgba(59, 130, 246, 0.4)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease'
            }}
             onClick={handleBookConsultation}
          >
            Get Consultation - £{consultationAmount}
          </Button>
        </Box> */}
      </Container>
      {/* <PaymentModal
        open={paymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
        amount={consultationAmount}
        onSuccess={handlePaymentSuccess}
      /> */}
    </Box>
  );
}
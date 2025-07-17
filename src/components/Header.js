'use client';

import { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  Box, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  useScrollTrigger,
  Slide,
  Chip,
  Divider,
  Fade,
  Zoom
} from "@mui/material";
import { 
  Menu, 
  Close, 
  TrendingUp, 
  Security, 
  Cloud, 
  ArrowForward,
  Phone,
  Email,
  Star
} from "@mui/icons-material";
import PaymentModal from "./PaymentModal";

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50
  });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [consultationAmount] = useState(30); 
  // Add this useEffect to load Calendly scripts
  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Load Calendly JS
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => setCalendlyLoaded(true);
    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // // Add this function to handle Calendly popup
  const handleCalendlyClick = (e) => {
    e.preventDefault();
    
    // Check if Calendly is loaded
    if (window.Calendly && calendlyLoaded) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/pershantparkash',
        text: 'Schedule time with me',
        color: '#3b82f6',
        textColor: '#ffffff',
        branding: true
      });
    } else {
      // Fallback to opening in new tab if widget fails to load
      window.open('https://calendly.com/pershantparkash', '_blank');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Smooth scrolling function
  const handleSmoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerHeight = 80; // Approximate header height
      const targetPosition = targetElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    // Close mobile drawer if open
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

   const handleBookConsultation = () => {
    setPaymentModalOpen(true);
  };

  const handlePaymentSuccess = () => {
    handleCalendlyClick();
  };


  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
    
  ];

  const highlights = [
    { icon: <TrendingUp />, text: "Growth Focused" },
    { icon: <Security />, text: "Secure Solutions" },
    { icon: <Cloud />, text: "Azure Certified" }
  ];

  const drawer = (
    <Box sx={{ 
      width: 350,
      height: '100vh',
      background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)',
        pointerEvents: 'none',
      },
    }}>
      {/* Fixed Header - Won't scroll */}
      <Box sx={{ 
        position: 'relative',
        zIndex: 1,
        p: 4,
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        background: 'rgba(255, 255, 255, 0.02)',
        backdropFilter: 'blur(10px)',
        flexShrink: 0,
      }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Box sx={{
                padding:"8px",
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
              }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#ffffff', 
                    fontWeight: 800,
                    fontSize: '1.1rem'
                  }}
                >
                  WIZ
                </Typography>
              </Box>
              <Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 800,
                    fontSize: '1.2rem',
                    color: '#ffffff',
                    lineHeight: 1.2
                  }}
                >
                  WeekendItWiz
                </Typography>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    color: '#94a3b8',
                    fontSize: '0.85rem',
                    fontWeight: 500
                  }}
                >
                  Expert Solutions Provider
                </Typography>
              </Box>
            </Box>
          </Box>
          
          <IconButton 
            onClick={handleDrawerToggle}
            sx={{ 
              color: '#e2e8f0',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              width: 40,
              height: 40,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                transform: 'rotate(90deg)',
              },
              transition: 'all 0.3s ease'
            }}
          >
            <Close />
          </IconButton>
        </Box>
      </Box>
      
      {/* Scrollable Content */}
      <Box sx={{ 
        flex: 1,
        overflowY: 'auto',
        overflowX: 'hidden',
        position: 'relative',
        zIndex: 1,
        // Custom scrollbar styling
        '&::-webkit-scrollbar': {
          width: '6px',
        },
        '&::-webkit-scrollbar-track': {
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '10px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
          borderRadius: '10px',
          '&:hover': {
            background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
          }
        },
        // Firefox scrollbar styling
        scrollbarWidth: 'thin',
        scrollbarColor: '#3b82f6 rgba(255, 255, 255, 0.05)',
      }}>
        {/* Navigation Menu */}
        <Box sx={{ p: 3 }}>
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#94a3b8', 
              mb: 2,
              fontWeight: 600,
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}
          >
            Navigation
          </Typography>
          
          <List sx={{ p: 0 }}>
            {navItems.map((item, index) => (
              <Fade in timeout={300 + index * 100} key={index}>
                <ListItem 
                  component="button" 
                  onClick={() => handleSmoothScroll(item.href.substring(1))}
                  sx={{
                    borderRadius: '12px',
                    mb: 1,
                    p: 2,
                    position: 'relative',
                    overflow: 'hidden',
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    width: '100%',
                    textAlign: 'left',
                    cursor: 'pointer',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent)',
                      transition: 'left 0.5s ease',
                    },
                    '&:hover': {
                      backgroundColor: 'rgba(59, 130, 246, 0.1)',
                      transform: 'translateX(8px)',
                      borderColor: 'rgba(59, 130, 246, 0.2)',
                      '&::before': {
                        left: '100%',
                      }
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  <ListItemText 
                    primary={item.label}
                    sx={{
                      '& .MuiListItemText-primary': {
                        color: '#e2e8f0',
                        fontWeight: 600,
                        fontSize: '1.1rem',
                        letterSpacing: '-0.01em'
                      }
                    }}
                  />
                  <ArrowForward sx={{ color: '#94a3b8', fontSize: '1.2rem' }} />
                </ListItem>
              </Fade>
            ))}
          </List>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', mx: 3 }} />
          
        {/* Expertise Highlights */}
        <Box sx={{ p: 3 }}>
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#94a3b8', 
              mb: 2,
              fontWeight: 600,
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}
          >
            Our Expertise
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            {highlights.map((item, index) => (
              <Zoom in timeout={400 + index * 100} key={index}>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  p: 2,
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    transform: 'translateY(-2px)',
                    borderColor: 'rgba(59, 130, 246, 0.2)',
                  },
                  transition: 'all 0.3s ease'
                }}>
                  <Box sx={{
                    width: 36,
                    height: 36,
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.1) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#3b82f6'
                  }}>
                    {item.icon}
                  </Box>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#e2e8f0', 
                      fontWeight: 600,
                      fontSize: '0.95rem'
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              </Zoom>
            ))}
          </Box>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', mx: 3 }} />

        {/* Contact Section */}
        <Box sx={{ p: 3 }}>
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#94a3b8', 
              mb: 2,
              fontWeight: 600,
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}
          >
            Get In Touch
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 2,
              p: 2,
              borderRadius: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}>
              <Phone sx={{ fontSize: '1.2rem', color: '#10b981' }} />
              <Typography variant="body2" sx={{ color: '#e2e8f0', fontWeight: 500 }}>
              07424 665990
              </Typography>
            </Box>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 2,
              p: 2,
              borderRadius: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}>
              <Email sx={{ fontSize: '1.2rem', color: '#3b82f6' }} />
              <Typography variant="body2" sx={{ color: '#e2e8f0', fontWeight: 500 }}>
                info@weekenditwiz.co.uk
              </Typography>
            </Box>
          </Box>

          {/* CTA Button */}
          <Button
            variant="contained"
            fullWidth
            sx={{ 
              px: 3, 
              py: 2,
              fontWeight: 600, 
              fontSize: '1rem', 
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
              textTransform: 'none',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                transition: 'left 0.6s ease',
              },
              '&:hover': {
                background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                boxShadow: '0 15px 35px rgba(59, 130, 246, 0.4)',
                transform: 'translateY(-2px)',
                '&::before': {
                  left: '100%',
                }
              },
              transition: 'all 0.3s ease'
            }}
            onClick={() => handleSmoothScroll("pricing")}
          >
            Get Consultation
          </Button>
        </Box>

        {/* Trust Badge */}
        {/* <Box sx={{ 
          p: 3,
          pt: 2,
          pb: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          opacity: 0.8,
        }}>
          <Star sx={{ fontSize: '1.1rem', color: '#fbbf24' }} />
          <Typography variant="body2" sx={{ color: '#94a3b8', fontWeight: 500 }}>
            Trusted by 500+ Companies
          </Typography>
        </Box> */}
      </Box>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar 
          position="fixed" 
          elevation={0}
          sx={{ 
            // Completely transparent background - no color at all
            backgroundColor: scrolled 
              ? 'rgba(10, 10, 15, 0.95)' 
              : 'transparent',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            border: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
            boxShadow: scrolled 
              ? '0 8px 32px rgba(0, 0, 0, 0.3)' 
              : 'none',
            transition: 'all 0.3s ease',
            // Remove any default MUI AppBar background
            '&.MuiAppBar-root': {
              backgroundColor: scrolled 
                ? 'rgba(10, 10, 15, 0.95)' 
                : 'transparent !important',
            }
          }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ justifyContent: 'space-between', 
            py: 2,
             }}>
              {/* Logo */}
              <Box sx={{ display: 'flex', alignItems: 'center',
               gap: 2
                }}>
                <Box sx={{
                  // width: 40,
                  // height: 40,
                  padding:"8px",
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: '#ffffff', 
                      fontWeight: 800,
                      fontSize: '1.1rem'
                    }}
                  >
                    WIZ
                  </Typography>
                </Box>
                <Typography 
                  variant="h6" 
                  component="h1" 
                  sx={{ 
                    fontWeight: 800, 
                    color: '#ffffff',
                    fontSize: '1.3rem',
                    letterSpacing: '-0.02em',
                    display: { xs: 'none', sm: 'block' }
                  }}
                >
                  WeekendItWiz
                </Typography>
              </Box>

              {/* Desktop Navigation */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
                {navItems.map((item, index) => (
                  <Button
                    key={index}
                    href={item.href}
                    onClick={() => handleSmoothScroll(item.href.substring(1))}
                    sx={{
                      color: '#e2e8f0',
                      fontWeight: 500,
                      fontSize: '0.95rem',
                      px: 2,
                      py: 1,
                      borderRadius: '8px',
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        color: '#3b82f6',
                        transform: 'translateY(-1px)',
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>

              {/* Desktop CTA Button */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
                <Button
                  variant="contained"
                  // onClick={handleCalendlyClick}
                  //  onClick={handleBookConsultation}
              onClick={() => handleSmoothScroll("pricing")}
                  sx={{ 
                    px: 3, 
                    py: 1,
                    fontWeight: 600, 
                    fontSize: '0.95rem', 
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                    boxShadow: '0 6px 20px rgba(59, 130, 246, 0.3)',
                    textTransform: 'none',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                      boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Get Consultation
                </Button>
              </Box>

              {/* Mobile Menu Button */}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ 
                  display: { md: 'none' },
                  color: '#e2e8f0',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    backgroundColor: 'rgba(59, 130, 246, 0.2)',
                    color: '#3b82f6',
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <Menu />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Enhanced Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 350,
            border: 'none',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.6)',
          },
        }}
      >
        {drawer}
      </Drawer>

        <PaymentModal
              open={paymentModalOpen}
              onClose={() => setPaymentModalOpen(false)}
              amount={consultationAmount}
              onSuccess={handlePaymentSuccess}
            />
    </>
  );
}
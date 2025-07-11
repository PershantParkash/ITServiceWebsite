'use client';

import { Box, Typography, Grid, Card, CardContent, Container, Chip, Button } from "@mui/material";
import { 
  SupportAgent, 
  TipsAndUpdates, 
  Cloud, 
  WorkspacePremium,
  ArrowForward,
  CheckCircle,
  Star
} from "@mui/icons-material";

const services = [
  {
    title: "24/7 IT Support",
    icon: <SupportAgent fontSize="large" />,
    desc: "Round-the-clock technical support to keep your business running smoothly with zero downtime.",
    features: ["24/7 Monitoring", "Rapid Response", "Remote Support", "Proactive Maintenance"],
    color: "#3b82f6",
    bgGradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 100%)",
    popular: false
  },
  {
    title: "Azure Cloud Solutions",
    icon: <Cloud fontSize="large" />,
    desc: "Complete cloud transformation with Microsoft Azure expertise and certified professionals.",
    features: ["Cloud Migration", "Azure Management", "Security & Compliance", "Cost Optimization"],
    color: "#0078d4",
    bgGradient: "linear-gradient(135deg, rgba(0, 120, 212, 0.15) 0%, rgba(0, 120, 212, 0.05) 100%)",
    popular: true
  },
  {
    title: "Strategic IT Consulting",
    icon: <TipsAndUpdates fontSize="large" />,
    desc: "Expert strategic guidance to optimize your IT infrastructure and accelerate business growth.",
    features: ["Strategic Planning", "Digital Transformation", "Risk Assessment", "Technology Roadmap"],
    color: "#10b981",
    bgGradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.05) 100%)",
    popular: false
  },
  {
    title: "Premium Support",
    icon: <WorkspacePremium fontSize="large" />,
    desc: "VIP-level support with dedicated account managers and priority access to our expert team.",
    features: ["Dedicated Manager", "Priority Support", "Custom Solutions", "SLA Guarantee"],
    color: "#8b5cf6",
    bgGradient: "linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.05) 100%)",
    popular: false
  },
];

export default function Services() {
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
            Enterprise-Grade IT Solutions
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
            Comprehensive IT services designed to transform your business operations, 
            boost productivity, and drive sustainable growth.
          </Typography>
        </Box>

        {/* Services Grid - 2x2 Layout */}
        <Grid container spacing={4}>
          {services.map((service, idx) => (
            <Grid item xs={12} md={6} key={service.title}>
              <Card 
                sx={{
                  minHeight: 420,
                  background: service.bgGradient,
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 5,
                  p: 4,
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-12px)',
                    boxShadow: `0 30px 60px -12px ${service.color}30`,
                    borderColor: `${service.color}60`,
                    '& .service-icon': {
                      transform: 'scale(1.15) rotate(5deg)',
                      color: service.color,
                    },
                    '& .service-arrow': {
                      transform: 'translateX(8px)',
                      opacity: 1,
                    },
                    '& .service-button': {
                      background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}dd 100%)`,
                      transform: 'translateY(-2px)',
                      boxShadow: `0 8px 25px ${service.color}40`,
                    }
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '5px',
                    background: `linear-gradient(90deg, ${service.color} 0%, transparent 100%)`,
                  }
                }}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 20,
                      right: 20,
                      background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                      color: 'white',
                      px: 2,
                      py: 0.5,
                      borderRadius: 3,
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      boxShadow: '0 4px 12px rgba(245, 158, 11, 0.4)'
                    }}
                  >
                    <Star sx={{ fontSize: '0.9rem' }} />
                    Most Popular
                  </Box>
                )}

                <CardContent sx={{ p: 0, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  {/* Icon */}
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      width: 80,
                      height: 80,
                      borderRadius: 4,
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      mb: 3,
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    <Box 
                      className="service-icon"
                      sx={{ 
                        color: '#94a3b8',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                    >
                      {service.icon}
                    </Box>
                  </Box>

                  {/* Title */}
                  <Typography 
                    variant="h4" 
                    component="h3"
                    sx={{ 
                      fontWeight: 700,
                      color: '#ffffff',
                      mb: 2,
                      fontSize: { xs: '1.5rem', md: '1.6rem' },
                      lineHeight: 1.3
                    }}
                  >
                    {service.title}
                  </Typography>

                  {/* Description */}
                  <Typography 
                    sx={{ 
                      color: '#94a3b8',
                      lineHeight: 1.7,
                      mb: 4,
                      fontSize: '1rem',
                      flexGrow: 1
                    }}
                  >
                    {service.desc}
                  </Typography>

                  {/* Features */}
                  <Box sx={{ mb: 4 }}>
                    {service.features.map((feature, index) => (
                      <Box 
                        key={index}
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          mb: 1.5
                        }}
                      >
                        <CheckCircle 
                          sx={{ 
                            color: service.color, 
                            fontSize: '1.1rem', 
                            mr: 2 
                          }} 
                        />
                        <Typography 
                          sx={{ 
                            color: '#e2e8f0',
                            fontSize: '0.95rem',
                            fontWeight: 500
                          }}
                        >
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  {/* CTA Button */}
                  <Button
                    className="service-button"
                    variant="contained"
                    endIcon={<ArrowForward className="service-arrow" />}
                    sx={{
                      alignSelf: 'flex-start',
                      mt: 'auto',
                      px: 4,
                      py: 1.5,
                      borderRadius: 3,
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      textTransform: 'none',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: '#ffffff',
                      border: `1px solid ${service.color}40`,
                      transition: 'all 0.3s ease',
                      '& .service-arrow': {
                        transition: 'all 0.3s ease',
                        opacity: 0.8,
                      }
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Bottom CTA Section */}
        <Box 
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
            Get a free consultation and discover how our premium IT services 
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
            href="#contact"
          >
            Get Free Consultation
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
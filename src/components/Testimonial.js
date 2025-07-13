'use client';

import { useState } from "react";
import { Box, Typography, Container, Grid, Chip, Avatar, IconButton, Card, CardContent } from "@mui/material";
import { FormatQuote, ArrowBack, ArrowForward, Star } from "@mui/icons-material";

export default function TestimonialComponent() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CTO",
      company: "TechCorp Solutions",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      quote: "The IT infrastructure transformation exceeded our expectations. Their team's expertise and dedication to our success was evident from day one. We saw a 40% improvement in system performance within the first month.",
      results: ["40% faster performance", "99.9% uptime", "50% cost reduction"]
    },
    {
      name: "Michael Chen",
      title: "Operations Director",
      company: "Global Manufacturing Inc.",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      quote: "Outstanding service and support. They didn't just implement solutions - they became our strategic IT partner. The cloud migration was seamless and our team productivity has never been higher.",
      results: ["Zero downtime migration", "3x faster deployment", "Enhanced security"]
    },
    {
      name: "Emily Rodriguez",
      title: "CEO",
      company: "StartupNext",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      quote: "As a growing startup, we needed scalable IT solutions that could grow with us. Their proactive approach and 24/7 support gives us the confidence to focus on what we do best - building our business.",
      results: ["24/7 support", "Scalable infrastructure", "Proactive monitoring"]
    },
    {
      name: "David Thompson",
      title: "IT Manager",
      company: "Healthcare Plus",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      quote: "The cybersecurity implementation was flawless. They understood our compliance requirements and delivered a solution that not only secured our data but also improved our operational efficiency.",
      results: ["100% compliance", "Enhanced security", "Improved efficiency"]
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        sx={{
          color: index < rating ? '#fbbf24' : 'rgba(255, 255, 255, 0.2)',
          fontSize: '1.2rem'
        }}
      />
    ));
  };

  return (
    <Box 
      id="testimonials" 
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
          background: 'radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.06) 0%, transparent 50%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header Section */}
        <Box sx={{ 
          textAlign: 'center', 
          mb: 8,
          maxWidth: '800px',
          mx: 'auto'
        }}>
          {/* Section Badge */}
          <Chip 
            label="Client Success Stories" 
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

          {/* Main Headline */}
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
            Trusted by Industry
            <Box component="span" sx={{ 
              display: 'block',
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Leaders Worldwide
            </Box>
          </Typography>

          {/* Description */}
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#94a3b8',
              fontWeight: 400,
              lineHeight: 1.6,
              fontSize: { xs: '1rem', md: '1.1rem' },
            }}
          >
            See how we've helped businesses transform their IT infrastructure and achieve remarkable results.
          </Typography>
        </Box>

        {/* Main Testimonial Display */}
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          {/* Featured Testimonial */}
          <Grid item xs={12} lg={8}>
            <Card sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '24px',
              p: { xs: 4, md: 6 },
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
              position: 'relative',
              overflow: 'visible'
            }}>
              {/* Quote Icon */}
              <Box sx={{
                position: 'absolute',
                top: -20,
                left: 40,
                width: 60,
                height: 60,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)'
              }}>
                <FormatQuote sx={{ color: 'white', fontSize: '1.5rem' }} />
              </Box>

              <CardContent sx={{ p: 0 }}>
                {/* Rating */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, mt: 2 }}>
                  {renderStars(testimonials[currentTestimonial].rating)}
                </Box>

                {/* Quote */}
                <Typography 
                  variant="h5" 
                  component="blockquote"
                  sx={{ 
                    color: '#e2e8f0',
                    fontWeight: 400,
                    lineHeight: 1.6,
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                    mb: 4,
                    fontStyle: 'italic'
                  }}
                >
                  "{testimonials[currentTestimonial].quote}"
                </Typography>

                {/* Results */}
                <Box sx={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: 2, 
                  mb: 4 
                }}>
                  {testimonials[currentTestimonial].results.map((result, index) => (
                    <Chip
                      key={index}
                      label={result}
                      sx={{
                        backgroundColor: 'rgba(34, 197, 94, 0.1)',
                        color: '#86efac',
                        border: '1px solid rgba(34, 197, 94, 0.2)',
                        fontWeight: 500,
                        fontSize: '0.85rem'
                      }}
                    />
                  ))}
                </Box>

                {/* Author Info */}
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: 2
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    <Avatar
                      sx={{
                        width: 60,
                        height: 60,
                        background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                        fontSize: '1.5rem',
                        fontWeight: 600
                      }}
                    >
                      {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                    </Avatar>
                    <Box>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          color: '#e2e8f0', 
                          fontWeight: 600,
                          fontSize: '1.1rem'
                        }}
                      >
                        {testimonials[currentTestimonial].name}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: '#94a3b8',
                          fontSize: '0.9rem'
                        }}
                      >
                        {testimonials[currentTestimonial].title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: '#3b82f6',
                          fontWeight: 500,
                          fontSize: '0.9rem'
                        }}
                      >
                        {testimonials[currentTestimonial].company}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Navigation Controls */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <IconButton
                      onClick={prevTestimonial}
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#94a3b8',
                        '&:hover': {
                          backgroundColor: 'rgba(59, 130, 246, 0.1)',
                          borderColor: 'rgba(59, 130, 246, 0.2)',
                          color: '#3b82f6'
                        }
                      }}
                    >
                      <ArrowBack />
                    </IconButton>
                    <IconButton
                      onClick={nextTestimonial}
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#94a3b8',
                        '&:hover': {
                          backgroundColor: 'rgba(59, 130, 246, 0.1)',
                          borderColor: 'rgba(59, 130, 246, 0.2)',
                          color: '#3b82f6'
                        }
                      }}
                    >
                      <ArrowForward />
                    </IconButton>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Testimonial Indicators */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          gap: 1,
          mt: 6
        }}>
          {testimonials.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: index === currentTestimonial ? '#3b82f6' : 'rgba(255, 255, 255, 0.2)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: index === currentTestimonial ? '#2563eb' : 'rgba(255, 255, 255, 0.4)',
                  transform: 'scale(1.2)'
                }
              }}
            />
          ))}
        </Box>

        {/* Stats Section */}
        <Grid container spacing={4} sx={{ mt: 8,justifyContent: 'center'  }}>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ 
              textAlign: 'center',
              p: 3,
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
            }}>
              <Typography 
                variant="h3" 
                sx={{ 
                  color: '#3b82f6', 
                  fontWeight: 800,
                  fontSize: '2rem',
                  mb: 1
                }}
              >
                500+
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#94a3b8',
                  fontWeight: 500
                }}
              >
                Happy Clients
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ 
              textAlign: 'center',
              p: 3,
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
            }}>
              <Typography 
                variant="h3" 
                sx={{ 
                  color: '#8b5cf6', 
                  fontWeight: 800,
                  fontSize: '2rem',
                  mb: 1
                }}
              >
                99.9%
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#94a3b8',
                  fontWeight: 500
                }}
              >
                Uptime Rate
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ 
              textAlign: 'center',
              p: 3,
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
            }}>
              <Typography 
                variant="h3" 
                sx={{ 
                  color: '#22c55e', 
                  fontWeight: 800,
                  fontSize: '2rem',
                  mb: 1
                }}
              >
                24/7
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#94a3b8',
                  fontWeight: 500
                }}
              >
                Support Available
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ 
              textAlign: 'center',
              p: 3,
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
            }}>
              <Typography 
                variant="h3" 
                sx={{ 
                  color: '#f59e0b', 
                  fontWeight: 800,
                  fontSize: '2rem',
                  mb: 1
                }}
              >
                10+
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#94a3b8',
                  fontWeight: 500
                }}
              >
                Years Experience
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
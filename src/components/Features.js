'use client';

import { Box, Typography, Grid, Container, Chip, Paper } from "@mui/material";
import { 
  CheckCircle, 
  Security, 
  Speed, 
  People,
  Verified, SupportAgent, Cloud
} from "@mui/icons-material";


const features = [
  {
    icon: <Verified />,
    title: "Azure & Microsoft Certified",
    description: "Our team holds Microsoft and Azure certifications to ensure reliable, expert-level support every time.",
    color: "#3b82f6"
  },
  {
    icon: <SupportAgent />,
    title: "Weekend Availability",
    description: "Get professional IT help even on Sundays — perfect for urgent fixes or weekend planning.",
    color: "#ef4444"
  },
  {
    icon: <People />,
    title: "Client-First Approach",
    description: "We design IT solutions around your unique business goals, no matter the size of your team.",
    color: "#10b981"
  },
  {
    icon: <Speed />,
    title: "Proactive Monitoring",
    description: "Continuous system monitoring to prevent downtime and resolve issues before they escalate.",
    color: "#f59e0b"
  },
  {
    icon: <Security />,
    title: "Cybersecurity Focused",
    description: "Built-in security auditing, antivirus setup, and compliance help to keep your business safe.",
    color: "#8b5cf6"
  },
  {
    icon: <Cloud />,
    title: "Cloud & Remote Solutions",
    description: "Specialized support for Office 365, VPNs, remote desktops, and hybrid cloud environments.",
    color: "#0ea5e9"
  }
];

const stats = [
  { number: "500+", label: "Projects Completed", color: "#3b82f6" },
  { number: "99.9%", label: "Uptime Guarantee", color: "#10b981" },
  { number: "24/7", label: "Support Available", color: "#f59e0b" },
  { number: "10+", label: "Years Experience", color: "#8b5cf6" }
];

export default function Features() {
  return (
    <Box 
      id="about"
      sx={{ 
        py: 12, 
        background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 50%, #1e293b 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.05) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)',
          pointerEvents: 'none',
        }
      }}>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip 
            label="Why Choose Us" 
            sx={{ 
              mb: 3, 
              px: 3, 
              py: 1,
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              color: '#10b981',
              border: '1px solid rgba(16, 185, 129, 0.2)',
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
              fontSize: { xs: '2.2rem', md: '2.8rem' },
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              mb: 4,
              background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
           Why Clients Trust Us
          </Typography>
          
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#94a3b8',
              fontWeight: 400,
              lineHeight: 1.6,
              maxWidth: '700px',
              mx: 'auto',
              fontSize: { xs: '1.1rem', md: '1.2rem' }
            }}
          >
            We combine certified expertise, personalized service, and proactive support to keep your systems secure, stable, and ready for growth — even when others aren’t available.
          </Typography>
        </Box>

        {/* Stats Section */}
        <Box sx={{ mb: 10 }}>
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid xs={6} md={3} key={index}>
                <Paper
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    background: 'rgba(255, 255, 255, 0.02)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      borderColor: stat.color,
                      boxShadow: `0 10px 30px ${stat.color}20`,
                    }
                  }}
                >
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      fontWeight: 800,
                      color: stat.color,
                      fontSize: { xs: '1.8rem', md: '2.2rem' },
                      mb: 1
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography 
                    sx={{ 
                      color: '#94a3b8',
                      fontWeight: 500,
                      fontSize: '0.9rem'
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Features Grid */}
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid xs={12} sm={6} lg={3} key={index}>
              <Box
                sx={{
                  p: 3,
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 4,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    borderColor: feature.color,
                    boxShadow: `0 20px 40px ${feature.color}15`,
                    '& .feature-icon': {
                      transform: 'scale(1.1)',
                      color: feature.color,
                    },
                    '& .feature-glow': {
                      opacity: 1,
                    }
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: `linear-gradient(90deg, ${feature.color} 0%, transparent 100%)`,
                  }
                }}
              >
                {/* Background Glow Effect */}
                <Box
                  className="feature-glow"
                  sx={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    width: '60px',
                    height: '60px',
                    background: `radial-gradient(circle, ${feature.color}20 0%, transparent 70%)`,
                    borderRadius: '50%',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                    pointerEvents: 'none',
                  }}
                />

                {/* Icon */}
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    width: 60,
                    height: 60,
                    borderRadius: 3,
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    mb: 3,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  <Box 
                    className="feature-icon"
                    sx={{ 
                      color: '#94a3b8',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      fontSize: '1.8rem'
                    }}
                  >
                    {feature.icon}
                  </Box>
                </Box>

                {/* Title */}
                <Typography 
                  variant="h6" 
                  component="h3"
                  sx={{ 
                    fontWeight: 700,
                    color: '#ffffff',
                    mb: 2,
                    fontSize: '1.1rem',
                    lineHeight: 1.3
                  }}
                >
                  {feature.title}
                </Typography>

                {/* Description */}
                <Typography 
                  sx={{ 
                    color: '#94a3b8',
                    lineHeight: 1.6,
                    fontSize: '0.9rem',
                    fontWeight: 400
                  }}
                >
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Bottom CTA */}
        <Box sx={{ textAlign: 'center', mt: 10 }}>
          <Paper
            sx={{
              p: 6,
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 4,
            }}
          >
            <Typography 
              variant="h5" 
              sx={{ 
                color: '#ffffff',
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '1.4rem', md: '1.6rem' }
              }}
            >
              Ready to Experience the Difference?
            </Typography>
            <Typography 
              sx={{ 
                color: '#94a3b8',
                mb: 4,
                fontSize: '1.1rem',
                maxWidth: '500px',
                mx: 'auto'
              }}
            >
              Join hundreds of satisfied clients who trust us with their IT infrastructure.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
              <CheckCircle sx={{ color: '#10b981', fontSize: '1.2rem' }} />
              <Typography sx={{ color: '#10b981', fontWeight: 600 }}>
                Free consultation • No commitment required
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
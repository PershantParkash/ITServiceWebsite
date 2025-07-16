'use client';

import { Box, Typography, Grid, Container, Chip, Paper } from "@mui/material";
import {
  CheckCircle,
  Security,
  Speed,
  People,
  Verified,
  SupportAgent,
  Cloud
} from "@mui/icons-material";

const features = [
  {
    icon: <Verified />,
    title: "Azure & Microsoft Certified",
    color: "#3b82f6"
  },
  {
    icon: <Security />,
    title: "Cybersecurity Focused",
    color: "#8b5cf6"
  },
  {
    icon: <People />,
    title: "Client-First Approach",
    color: "#10b981"
  },
  {
    icon: <Speed />,
    title: "Proactive Monitoring",
    color: "#f59e0b"
  },
  {
    icon: <Cloud />,
    title: "Cloud & Remote Solutions",
    color: "#0ea5e9"
  },
  {
    icon: <SupportAgent />,
    title: "Weekend Availability",
    color: "#ef4444"
  },
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
        py: 6,
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
      <Container maxWidth="lg" sx={{
        position: 'relative', zIndex: 1,
      }}>
        {/* Section Header - More Compact */}
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Chip
            label="Why Choose Us"
            sx={{
              mb: 2,
              // px: 3,
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
              fontSize: { xs: '2rem', md: '2.4rem' },
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              mb: 2,
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
              lineHeight: 1.4,
              maxWidth: '600px',
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.1rem' }
            }}
          >
            Certified expertise and proactive support to keep your systems secure
          </Typography>
        </Box>

        {/* Stats Section - More Compact */}
        <Box sx={{ mb: 4 }}>
          <Grid
            container
            spacing={2}
            sx={{
              justifyContent: 'center',
              // maxWidth: '700px',
              mx: 'auto'
            }}
          >
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Paper
                  sx={{
                    // p: 2,
                     width: 200,
                    height: 120,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    background: 'rgba(255, 255, 255, 0.02)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 4,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      borderColor: stat.color,
                      boxShadow: `0 8px 25px ${stat.color}20`,
                    }
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      color: stat.color,
                      fontSize: { xs: '1.4rem', md: '1.8rem' },
                      mb: 0.5
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#94a3b8',
                      fontWeight: 500,
                      fontSize: '0.8rem'
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

    

        <Grid
          container
          spacing={2} // No gap between boxes
          sx={{
            justifyContent: 'center',
            // backgroundColor: 'yellow',
          }}
        >
          {features.map((feature, index) => (
            <Grid
              item
              xs={12}   // 1 per row on small
              sm={6}    // 2 per row on medium
              lg={4}    // 3 per row on large
              key={index}
            // sx={{ backgroundColor: 'blue' }}
            >
              <Box
                sx={{
                  width: 275,
                  // minWidth:280,
                  // maxWidth:380,
                  height: 120,
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 4,
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    borderColor: feature.color,
                    boxShadow: `0 15px 35px ${feature.color}15`,
                    '& .feature-icon': {
                      transform: 'scale(1.15)',
                      color: feature.color,
                    },
                    '& .feature-glow': {
                      opacity: 1,
                    },
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: `linear-gradient(90deg, ${feature.color} 0%, transparent 100%)`,
                  },
                }}
              >
                {/* Glow Effect */}
                <Box
                  className="feature-glow"
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80px',
                    height: '80px',
                    background: `radial-gradient(circle, ${feature.color}20 0%, transparent 70%)`,
                    borderRadius: '50%',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                    pointerEvents: 'none',
                  }}
                />



                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 45,
                    height: 45,
                    borderRadius: 3,
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    mb: 1.5,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  <Box
                    className="feature-icon"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#94a3b8',
                      transition: 'all 0.4s ease',
                      fontSize: '1.4rem',
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
                    fontSize: '0.9rem',
                    lineHeight: 1.2,
                    zIndex: 1,
                    position: 'relative',
                  }}
                >
                  {feature.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        {/* Trust Badge - More Compact */}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Paper
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 2,
              p: 2.5,
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 4,
            }}
          >
            <CheckCircle sx={{ color: '#10b981', fontSize: '1.2rem' }} />
            <Typography
              sx={{
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '0.9rem'
              }}
            >
              Expert tech support
            </Typography>
            <Box sx={{ width: '1px', height: '20px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
            <Typography
              sx={{
                color: '#10b981',
                fontWeight: 600,
                fontSize: '0.9rem'
              }}
            >
              Free consultation available
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
'use client';

import { useState } from "react";
import {
    Box,
    Typography,
    Container,
    Grid,
    Chip,
    Card,
    CardContent,
    Button,
    Switch,
    FormControlLabel,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Stack
} from "@mui/material";
import {
    AccessTime,
    CheckCircle,
    VideocamOutlined,
    LocationOnOutlined,
    Star,
    TrendingUp,
    Security,
    Support
} from "@mui/icons-material";

export default function ConsultationPricingComponent() {

    const pricingPlans = [
        {
            name: "Quick Start",
            duration: "15 mins",
            price: "Free",
            originalPrice: null,
            popular: false,
            description: "Perfect for initial consultation and basic questions",
            features: [
                "Initial IT assessment",
                "Basic recommendations",
                "Q&A session",
                "Resource sharing"
            ],
            icon: <AccessTime sx={{ fontSize: '2rem' }} />,
            color: "#22c55e",
            gradient: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)"
        },
        {
            name: "Deep Dive",
            duration: "30 mins",
            price: "£50",
            originalPrice: null,
            popular: false,
            description: "Comprehensive consultation for specific IT challenges",
            features: [
                "Detailed system analysis",
                "Custom solution planning",
                "Implementation roadmap",
                "Follow-up recommendations",
                "Priority email support"
            ],
            icon: <TrendingUp sx={{ fontSize: '2rem' }} />,
            color: "#3b82f6",
            gradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)"
        },
        {
            name: "Complete Solution",
            duration: "1 hour",
            price: "£75",
            originalPrice: "£100",
            popular: false,
            description: "Full-scale consultation with detailed project planning",
            features: [
                "Complete infrastructure review",
                "Strategic IT planning",
                "Detailed implementation timeline",
                "Cost-benefit analysis",
                "Security assessment",
                "30-day follow-up support"
            ],
            icon: <Security sx={{ fontSize: '2rem' }} />,
            color: "#8b5cf6",
            gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)"
        }
    ];

    const handleMeetingTypeChange = (event) => {
        setIsOnline(event.target.checked);
    };

    return (
        <Box
            id="pricing"
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
                {/* Header Section - Centered alignment */}
                <Stack
                    spacing={3}
                    alignItems="center"
                    sx={{
                        mb: 8,
                        maxWidth: '800px',
                        mx: 'auto',
                        textAlign: 'center'
                    }}
                >
                    {/* Section Badge */}
                    <Chip
                        label="Consultation Pricing"
                        sx={{
                            px: 3,
                            py: 1,
                            backgroundColor: 'rgba(59, 130, 246, 0.1)',
                            color: '#3b82f6',
                            border: '1px solid rgba(59, 130, 246, 0.2)',
                            fontWeight: 500,
                            fontSize: '0.9rem'
                        }}
                    />

                    {/* Main Headline - Consistent line height and spacing */}
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={1}
                        alignItems="center"
                        justifyContent="center"
                        textAlign="center"
                        flexWrap="wrap"
                    >
                        <Typography
                            variant="h2"
                            component="h2"
                            sx={{
                                fontWeight: 800,
                                fontSize: { xs: '2rem', md: '2.5rem' },
                                lineHeight: 1.2,
                                letterSpacing: '-0.02em',
                                background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            Choose Your Perfect&nbsp;
                        </Typography>
                        <Typography
                            variant="h2"
                            component="h2"
                            sx={{
                                fontWeight: 800,
                                fontSize: { xs: '2rem', md: '2.5rem' },
                                lineHeight: 1.2,
                                letterSpacing: '-0.02em',
                                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            Consultation Plan
                        </Typography>
                    </Stack>


                    {/* Description */}
                    <Typography
                        variant="h6"
                        sx={{
                            color: '#94a3b8',
                            fontWeight: 400,
                            lineHeight: 1.6,
                            fontSize: { xs: '1rem', md: '1.1rem' },
                            maxWidth: '600px',
                            textAlign: 'center'
                        }}
                    >
                        Get expert IT consultation tailored to your needs. Choose between online or in-person meetings.
                    </Typography>

                    {/* <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 3,
            p: 3,
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            width: 'fit-content'
          }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <LocationOnOutlined sx={{ color: !isOnline ? '#3b82f6' : '#64748b' }} />
              <Typography sx={{ 
                color: !isOnline ? '#e2e8f0' : '#64748b', 
                fontWeight: 500,
                fontSize: '0.95rem'
              }}>
                In Person
              </Typography>
            </Stack>
            <Switch
              checked={isOnline}
              onChange={handleMeetingTypeChange}
              sx={{
                '& .MuiSwitch-switchBase.Mui-checked': {
                  color: '#3b82f6',
                },
                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                  backgroundColor: '#3b82f6',
                },
              }}
            />
            <Stack direction="row" alignItems="center" spacing={1}>
              <VideocamOutlined sx={{ color: isOnline ? '#3b82f6' : '#64748b' }} />
              <Typography sx={{ 
                color: isOnline ? '#e2e8f0' : '#64748b', 
                fontWeight: 500,
                fontSize: '0.95rem'
              }}>
                Online
              </Typography>
            </Stack>
          </Box> */}
                </Stack>

                {/* Pricing Cards - Equal Height Cards */}
                <Grid container spacing={4} justifyContent="center" sx={{ mb: 0 }}>
                    {pricingPlans.map((plan, index) => (
                        <Grid item xs={12} md={4} key={index} sx={{ display: 'flex' }}>
                            <Card sx={{
                                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                                backdropFilter: 'blur(10px)',
                                border: plan.popular ? '2px solid #3b82f6' : '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '24px',
                                p: 4,
                                width: '100%',
                                minHeight: '650px',
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'relative',
                                boxShadow: plan.popular
                                    ? '0 25px 50px rgba(59, 130, 246, 0.2)'
                                    : '0 25px 50px rgba(0, 0, 0, 0.1)',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    boxShadow: plan.popular
                                        ? '0 35px 60px rgba(59, 130, 246, 0.3)'
                                        : '0 35px 60px rgba(0, 0, 0, 0.2)',
                                }
                            }}>
                                {/* Popular Badge - Properly positioned */}
                                {plan.popular && (
                                    <Box sx={{
                                        position: 'absolute',
                                        top: -16,
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        px: 3,
                                        py: 1,
                                        backgroundColor: '#3b82f6',
                                        color: 'white',
                                        borderRadius: '20px',
                                        fontSize: '0.8rem',
                                        fontWeight: 600,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        whiteSpace: 'nowrap',
                                        zIndex: 2
                                    }}>
                                        <Star sx={{ fontSize: '1rem' }} />
                                        Most Popular
                                    </Box>
                                )}

                                <CardContent sx={{ p: 0, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                    {/* Plan Header - Fixed height section */}
                                    <Stack spacing={2} alignItems="center" sx={{ mb: 4, minHeight: '200px' }}>
                                        <Box sx={{
                                            width: 80,
                                            height: 80,
                                            borderRadius: '50%',
                                            background: plan.gradient,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white'
                                        }}>
                                            {plan.icon}
                                        </Box>

                                        <Stack spacing={1} alignItems="center">
                                            <Typography
                                                variant="h5"
                                                sx={{
                                                    color: '#e2e8f0',
                                                    fontWeight: 700,
                                                    textAlign: 'center'
                                                }}
                                            >
                                                {plan.name}
                                            </Typography>

                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: '#94a3b8',
                                                    textAlign: 'center',
                                                    maxWidth: '280px',
                                                    minHeight: '40px',
                                                    display: 'flex',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                {plan.description}
                                            </Typography>
                                        </Stack>

                                        {/* Price Section - Aligned baseline */}
                                        <Stack direction="row" alignItems="baseline" spacing={1} justifyContent="center">
                                            <Typography
                                                variant="h3"
                                                sx={{
                                                    color: plan.color,
                                                    fontWeight: 800,
                                                    fontSize: '2.5rem'
                                                }}
                                            >
                                                {plan.price}
                                            </Typography>
                                            {plan.originalPrice && (
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        color: '#64748b',
                                                        textDecoration: 'line-through',
                                                        fontSize: '1.2rem'
                                                    }}
                                                >
                                                    {plan.originalPrice}
                                                </Typography>
                                            )}
                                        </Stack>

                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: '#94a3b8',
                                                textAlign: 'center',
                                                fontSize: '0.9rem'
                                            }}
                                        >
                                            {plan.duration}
                                        </Typography>
                                    </Stack>

                                    {/* Features List - Flexible height */}
                                    <Box sx={{ flexGrow: 1, mb: 3 }}>
                                        <List sx={{ p: 0 }}>
                                            {plan.features.map((feature, featureIndex) => (
                                                <ListItem key={featureIndex} sx={{ px: 0, py: 0.5 }}>
                                                    <ListItemIcon sx={{ minWidth: 36 }}>
                                                        <CheckCircle sx={{ color: plan.color, fontSize: '1.25rem' }} />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={feature}
                                                        primaryTypographyProps={{
                                                            sx: {
                                                                color: '#e2e8f0',
                                                                fontSize: '0.95rem',
                                                                fontWeight: 400,
                                                                lineHeight: 1.5
                                                            }
                                                        }}
                                                    />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Box>

                                    {/* CTA Button - Fixed at bottom */}
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        sx={{
                                            py: 2.5,
                                            background: plan.popular
                                                ? 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'
                                                : 'rgba(255, 255, 255, 0.05)',
                                            color: plan.popular ? 'white' : '#e2e8f0',
                                            border: plan.popular ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
                                            borderRadius: '12px',
                                            fontSize: '1rem',
                                            fontWeight: 600,
                                            textTransform: 'none',
                                            '&:hover': {
                                                background: plan.popular
                                                    ? 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)'
                                                    : 'rgba(255, 255, 255, 0.1)',
                                                transform: 'translateY(-2px)',
                                            }
                                        }}
                                    >
                                        {plan.price === 'Free' ? 'Book Free Consultation' : 'Book Consultation'}
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>


            </Container>
        </Box>
    );
}
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
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Stack
} from "@mui/material";
import {
    AccessTime,
    CheckCircle,
    TrendingUp,
    Security,
    Star,
    ArrowForward,
    CalendarMonth
} from "@mui/icons-material";
import PaymentModal from './PaymentModal'; // Import your payment modal
import MeetingTypeModal from './MeetingTypeModal';

export default function ConsultationPricingComponent() {
    const [paymentModalOpen, setPaymentModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [meetingTypeModalOpen, setMeetingTypeModalOpen] = useState(false);
    const [pendingPlan, setPendingPlan] = useState(null);
    const [meetingType, setMeetingType] = useState(null);

    const pricingPlans = [
        {
            name: "Quick Start",
            duration: "15 mins",
            price: 0,
            priceDisplay: "Free",
            originalPrice: null,
            popular: false,
            description: "Perfect for initial consultation and basic questions",
            features: [
                "Basic recommendations",
                "Initial IT assessment",
                "Resource sharing",
                "Q&A session",
            ],
            icon: <AccessTime sx={{ fontSize: '2rem' }} />,
            color: "#22c55e",
            bgGradient: "linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(22, 163, 74, 0.05) 100%)"
        },
        {
            name: "Deep Dive",
            duration: "30 mins",
            price: 50,
            priceDisplay: "£50",
            originalPrice: null,
            popular: false,
            description: "Comprehensive consultation for specific IT challenges",
            features: [
                "Follow-up recommendations",
                "Custom solution planning",
                "Implementation roadmap",
                "Detailed system analysis",
                "Priority email support"
            ],
            icon: <TrendingUp sx={{ fontSize: '2rem' }} />,
            color: "#3b82f6",
            bgGradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(37, 99, 235, 0.05) 100%)"
        },
        {
            name: "Complete Solution",
            duration: "1 hour",
            price: 75,
            priceDisplay: "£75",
            originalPrice: "£100",
            popular: false,
            description: "Full-scale consultation with detailed project planning",
            features: [
                "Detailed implementation timeline",
                "Complete infrastructure review",
                "30-day follow-up support",
                "Cost-benefit analysis",
                "Security assessment",
                "Strategic IT planning",


            ],
            icon: <Security sx={{ fontSize: '2rem' }} />,
            color: "#8b5cf6",
            bgGradient: "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(124, 58, 237, 0.05) 100%)"
        }
    ];

    const handleBookConsultation = (plan) => {
        setPendingPlan(plan);
        setMeetingTypeModalOpen(true);
    };

    const handleMeetingTypeSelect = (type) => {
        setMeetingTypeModalOpen(false);
        if (!pendingPlan) return;
        if (pendingPlan.price === 0) {
            // Free plan: open correct Calendly link
            if (type === 'online') {
                window.open('https://calendly.com/pershantparkash/15-minute-online-meeting', '_blank');
            } else {
                window.open('https://calendly.com/pershantparkash/15-minute-meeting', '_blank');
            }
            setPendingPlan(null);
        } else {
            // Paid plan: open PaymentModal with meetingType
            setSelectedPlan({ ...pendingPlan, meetingType: type });
            setPaymentModalOpen(true);
            setPendingPlan(null);
        }
    };

    const handlePaymentSuccess = () => {
        setPaymentModalOpen(false);
        setSelectedPlan(null);
        // Optionally: show a success message or redirect
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
                {/* Header Section */}
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
                </Stack>

                {/* Enhanced Pricing Cards with Beautiful Design */}
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
                        {pricingPlans.map((plan, idx) => (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                key={plan.name}
                                sx={{
                                    '@media (min-width: 900px)': {
                                        maxWidth: '350px',
                                        flexBasis: '350px'
                                    },
                                    display: 'flex'
                                }}
                            >
                                <Card
                                    sx={{
                                        height: 'auto',
                                        width: '100%',
                                        background: plan.bgGradient,
                                        backdropFilter: 'blur(20px)',
                                        border: plan.popular ? `2px solid ${plan.color}60` : '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: 3,
                                        px: { xs: 2, sm: 3 },
                                        py: { xs: 1, sm: 1 },
                                        position: 'relative',
                                        overflow: 'hidden',
                                        cursor: 'pointer',
                                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: `0 25px 50px -12px ${plan.color}30`,
                                            borderColor: `${plan.color}60`,
                                            '& .service-icon': {
                                                transform: 'scale(1.1) rotate(3deg)',
                                                color: plan.color,
                                            },
                                            '& .cta-button': {
                                                background: `linear-gradient(135deg, ${plan.color} 0%, ${plan.color}dd 100%)`,
                                                color: 'white',
                                                '& .MuiSvgIcon-root': {
                                                    transform: 'translateX(4px)',
                                                }
                                            }
                                        },
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            height: '4px',
                                            background: `linear-gradient(90deg, ${plan.color} 0%, transparent 100%)`,
                                        }
                                    }}
                                >
                                    {plan.popular && (
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: -1,
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                                                color: 'white',
                                                px: 3,
                                                py: 1,
                                                borderRadius: '0 0 12px 12px',
                                                fontSize: '0.8rem',
                                                fontWeight: 700,
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 0.5,
                                                boxShadow: '0 4px 12px rgba(245, 158, 11, 0.4)',
                                                letterSpacing: '0.5px',
                                                textTransform: 'uppercase'
                                            }}
                                        >
                                            <Star sx={{ fontSize: '0.9rem' }} />
                                            Most Popular
                                        </Box>
                                    )}

                                    <CardContent sx={{ p: 0, height: '100%', display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center', }}>
                                        {/* Icon */}
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                mt:2,
                                                width: { xs: 70, sm: 80 },
                                                height: { xs: 70, sm: 80 },
                                                borderRadius: '50%',
                                                backgroundColor: `${plan.color}15`,
                                                border: `2px solid ${plan.color}30`,
                                                mb: { xs: 2, sm: 3 },
                                                mx: 'auto',
                                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                                            }}
                                        >
                                            <Box
                                                className="service-icon"
                                                sx={{
                                                    color: plan.color,
                                                 
                                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                                    '& svg': {
                                                        fontSize: { xs: '2rem', sm: '2.2rem' }
                                                    }
                                                }}
                                            >
                                                {plan.icon}
                                            </Box>
                                        </Box>

                                        {/* Title */}
                                        <Typography
                                            variant="h5"
                                            component="h3"
                                            sx={{
                                                fontWeight: 700,
                                                color: '#ffffff',
                                                mb: 1,
                                                fontSize: { xs: '1.3rem', sm: '1.5rem' },
                                                lineHeight: 1.3
                                            }}
                                        >
                                            {plan.name}
                                        </Typography>

                                        {/* Duration */}
                                        <Typography
                                            sx={{
                                                color: plan.color,
                                                fontSize: { xs: '1rem', sm: '1.1rem' },
                                                fontWeight: 600,
                                                mb: 2
                                            }}
                                        >
                                            {plan.duration}
                                        </Typography>

                                        {/* Price */}
                                        <Box sx={{ mb: 2 }}>
                                            <Stack direction="row" alignItems="baseline" spacing={1} justifyContent="center">
                                                <Typography
                                                    variant="h3"
                                                    sx={{
                                                        color: plan.color,
                                                        fontWeight: 800,
                                                        fontSize: { xs: '2.2rem', sm: '2.5rem' }
                                                    }}
                                                >
                                                    {plan.priceDisplay}
                                                </Typography>
                                                {plan.originalPrice && (
                                                    <Typography
                                                        variant="h6"
                                                        sx={{
                                                            color: '#64748b',
                                                            textDecoration: 'line-through',
                                                            fontSize: '1.1rem'
                                                        }}
                                                    >
                                                        {plan.originalPrice}
                                                    </Typography>
                                                )}
                                            </Stack>
                                        </Box>

                                        {/* Description */}
                                        <Typography
                                            sx={{
                                                color: '#94a3b8',
                                                lineHeight: 1.6,
                                                mb: { xs: 3, sm: 4 },
                                                fontSize: { xs: '0.9rem', sm: '0.95rem' },
                                                px: 1
                                            }}
                                        >
                                            {plan.description}
                                        </Typography>

                                        {/* Features - Fixed height container */}


                                        <Box
                                            sx={{
                                                mb: 2,
                                                minHeight: '200px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-start',
                                                    width: '100%',
                                                    maxWidth: '280px',
                                                }}
                                            >
                                                {plan.features.map((feature, index) => (
                                                    <Box
                                                        key={index}
                                                        sx={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            mb: 1.5,
                                                        }}
                                                    >
                                                        <CheckCircle
                                                            sx={{
                                                                color: plan.color,
                                                                fontSize: '1.1rem',
                                                                mr: 1.5,
                                                                flexShrink: 0
                                                            }}
                                                        />
                                                        <Typography
                                                            sx={{
                                                                color: '#e2e8f0',
                                                                fontSize: { xs: '0.85rem', sm: '0.9rem' },
                                                                fontWeight: 500,
                                                                textAlign: 'left'
                                                            }}
                                                        >
                                                            {feature}
                                                        </Typography>
                                                    </Box>
                                                ))}
                                            </Box>
                                        </Box>


                                        {/* Enhanced CTA Button */}
                                        <Box sx={{ mt: 'auto', width: '100%' }}>
                                            <Box
                                                sx={{
                                                    width: '100%',
                                                    borderRadius: '20px',
                                                    overflow: 'hidden',
                                                    position: 'relative',
                                                    background: plan.popular
                                                        ? `linear-gradient(135deg, ${plan.color} 0%, ${plan.color}cc 100%)`
                                                        : 'rgba(255, 255, 255, 0.05)',
                                                    border: plan.popular ? 'none' : `1px solid ${plan.color}40`,
                                                    boxShadow: plan.popular ? `0 8px 28px ${plan.color}30` : '0 4px 12px rgba(255,255,255,0.08)',
                                                    transition: 'all 0.3s ease',
                                                    '&:hover': {
                                                        boxShadow: `0 12px 36px ${plan.color}40`,
                                                        transform: 'translateY(-2px)',
                                                    },
                                                }}
                                            >
                                                <Button
                                                    onClick={() => handleBookConsultation(plan)}
                                                    fullWidth
                                                    variant="text"
                                                    disableElevation
                                                    sx={{
                                                        py: 2.5,
                                                        px: 3,
                                                        width: '100%',
                                                        height: '100%',
                                                        color: plan.popular ? '#ffffff' : '#e2e8f0',
                                                        fontWeight: 700,
                                                        fontSize: '1rem',
                                                        textTransform: 'none',
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        background: 'transparent',
                                                        '&:hover': {
                                                            background: 'transparent',
                                                        }
                                                    }}
                                                >
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                        <CalendarMonth sx={{ fontSize: '1.2rem' }} />
                                                        {plan.price === 0 ? 'Book Free Session' : 'Book Consultation'}
                                                    </Box>
                                                    <ArrowForward sx={{ fontSize: '1.3rem', transition: 'transform 0.3s ease' }} />
                                                </Button>
                                            </Box>
                                        </Box>

                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>

            {/* Payment Modal */}
            <PaymentModal
                open={paymentModalOpen}
                onClose={() => setPaymentModalOpen(false)}
                planDetails={selectedPlan}
                onSuccess={handlePaymentSuccess}
            />
            <MeetingTypeModal
                open={meetingTypeModalOpen}
                onClose={() => setMeetingTypeModalOpen(false)}
                onSelect={handleMeetingTypeSelect}
            />
        </Box>
    );
}
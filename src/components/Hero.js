// 'use client';

// import { Box, Typography, Button, Container, Grid, Chip } from "@mui/material";
// import { TrendingUp, Security, Apple } from "@mui/icons-material";

// export default function Hero() {
//   // Smooth scrolling function
//   const handleSmoothScroll = (targetId) => {
//     const targetElement = document.getElementById(targetId);
//     if (targetElement) {
//       const headerHeight = 80; // Approximate header height
//       const targetPosition = targetElement.offsetTop - headerHeight;
      
//       window.scrollTo({
//         top: targetPosition,
//         behavior: 'smooth'
//       });
//     }
//   };
  
//   const highlights = [
//     { icon: <TrendingUp />, text: "Scalable IT Solutions" },
//     { icon: <Security />, text: "Cybersecurity Ready" },
//     { icon: <Apple  />, text: "Apple Device Management" }
//   ];

//   return (
//     <Box 
//       id="hero"
//       sx={{
//         minHeight: '85vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)',
//         position: 'relative',
//         overflow: 'hidden',
//         '&::before': {
//           content: '""',
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: 'radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)',
//           pointerEvents: 'none',
//         },
//         py: 12,
//       }}>
//       <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
//         <Grid container spacing={4} alignItems="center">
//           {/* Main Content */}
//           <Grid 
//             item 
//             xs={12} 
//             sx={{
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: {
//                 xs: 'center',
//                 sm: 'center', 
//                 md: 'center',
//                 lg: 'flex-start',
//                 xl: 'flex-start'
//               }
//             }}
//           >
//             <Box sx={{ 
//               textAlign: { 
//                 xs: 'center', 
//                 sm: 'center',
//                 md: 'center',
//                 lg: 'left',
//                 xl: 'left'
//               },
//               width: '100%',
//               maxWidth: { xs: '100%', xl: 'none' }
//             }}>
//               {/* Subtitle Badge */}
//               <Chip 
//                 label="Premium IT Solutions Provider" 
//                 sx={{ 
//                   mb: 3, 
//                   px: 2, 
//                   py: 1,
//                   backgroundColor: 'rgba(59, 130, 246, 0.1)',
//                   color: '#3b82f6',
//                   border: '1px solid rgba(59, 130, 246, 0.2)',
//                   fontWeight: 500,
//                   fontSize: '0.9rem'
//                 }} 
//               />
//               {/* <Box sx={{ 
//               display: { xs: 'none', sm: 'none', md: 'block', lg: 'none', xl: 'none' },
//               position: 'relative',
//               height: { md: '300px', lg: '400px' },
//               width: '100%',
//               '&::before': {
//                 content: '""',
//                 position: 'absolute',
//                 top: '50%',
//                 left: '50%',
//                 // transform: 'translate(-50%, -50%)',
//                 width: { md: '240px', lg: '300px' },
//                 height: { md: '240px', lg: '300px' },
//                 background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.1) 100%)',
//                 borderRadius: '50%',
//                 filter: 'blur(40px)',
//                 animation: 'pulse 4s ease-in-out infinite',
//               },
//               '@keyframes pulse': {
//                 '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
//                 '50%': { transform: 'translate(-50%, -50%) scale(1.1)' },
//               }
//             }}>
//               <Box sx={{
//                 position: 'absolute',
//                 top: '50%',
//                 left: '50%',
//                 transform: 'translate(-50%, -50%)',
//                 width: { md: '160px', lg: '200px' },
//                 height: { md: '160px', lg: '200px' },
//                 border: '2px solid rgba(59, 130, 246, 0.3)',
//                 borderRadius: '20px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 backgroundColor: 'rgba(255, 255, 255, 0.02)',
//                 backdropFilter: 'blur(10px)',
//               }}>
//                 <Typography 
//                   variant="h3" 
//                   sx={{ 
//                     color: '#3b82f6', 
//                     fontWeight: 700,
//                     fontSize: { md: '2.5rem', lg: '3rem' }
//                   }}
//                 >
//                   IT
//                 </Typography>
//               </Box>
//             </Box> */}
//               {/* Main Headline */}
//               <Typography 
//                 variant="h1" 
//                 component="h1" 
//                 gutterBottom 
//                 sx={{ 
//                   fontWeight: 800, 
//                   color: '#ffffff',
//                   fontSize: { 
//                     xs: '2.5rem', 
//                     sm: '3rem',
//                     md: '3rem', 
//                     lg: '3.5rem',
//                     xl: '4rem'
//                   },
//                   lineHeight: 1.1,
//                   letterSpacing: '-0.02em',
//                   mb: 3,
//                   background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   backgroundClip: 'text',
//                 }}
//               >
//                 Professional IT Support Services
//                 <Box component="span" sx={{ 
//                   display: 'block',
//                   background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   backgroundClip: 'text',
//                 }}>
//                   Available Every Weekend
//                 </Box>
//               </Typography>
              
//               {/* Description */}
//               <Typography 
//                 variant="h6" 
//                 sx={{ 
//                   color: '#94a3b8',
//                   fontWeight: 400,
//                   lineHeight: 1.6,
//                   mb: 4,
//                   fontSize: { 
//                     xs: '1.1rem', 
//                     sm: '1.15rem',
//                     md: '1.2rem',
//                     lg: '1.25rem'
//                   },
//                   maxWidth: { xs: '100%', lg: '600px', xl: '600px' },
//                   mx: { 
//                     xs: 'auto', 
//                     sm: 'auto',
//                     md: 'auto',
//                     lg: 0,
//                     xl: 0
//                   }
//                 }}
//               >
//           Expert tech support when you need it most — for offices, freelancers, and homes. Fast solutions, no stress.
//               </Typography>
              
//               {/* Highlight Chips */}
//               <Box sx={{ 
//                 display: 'flex', 
//                 gap: 2, 
//                 mb: 5, 
//                 flexWrap: 'wrap', 
//                 justifyContent: { 
//                   xs: 'center', 
//                   sm: 'center',
//                   md: 'center',
//                   lg: 'flex-start',
//                   xl: 'flex-start'
//                 } 
//               }}>
//                 {highlights.map((item, index) => (
//                   <Chip
//                     key={index}
//                     icon={item.icon}
//                     label={item.text}
//                     sx={{
//                       backgroundColor: 'rgba(255, 255, 255, 0.05)',
//                       color: '#e2e8f0',
//                       border: '1px solid rgba(255, 255, 255, 0.1)',
//                       fontWeight: 500,
//                       fontSize: { xs: '0.85rem', sm: '0.9rem' },
//                       '& .MuiChip-icon': {
//                         color: '#3b82f6'
//                       },
//                       '&:hover': {
//                         backgroundColor: 'rgba(255, 255, 255, 0.08)',
//                         transform: 'translateY(-2px)',
//                         transition: 'all 0.3s ease'
//                       }
//                     }}
//                   />
//                 ))}
//               </Box>
              
//               {/* CTA Buttons */}
//               <Box sx={{ 
//                 display: 'flex', 
//                 gap: 3, 
//                 flexDirection: { xs: 'column', sm: 'row' }, 
//                 justifyContent: { 
//                   xs: 'center', 
//                   sm: 'center',
//                   md: 'center',
//                   lg: 'flex-start',
//                   xl: 'flex-start'
//                 },
//                 alignItems: { 
//                   xs: 'center', 
//                   sm: 'center', 
//                   md: 'center',
//                   lg: 'flex-start',
//                   xl: 'flex-start'
//                 }
//               }}>
//                 <Button
//                   variant="contained"
//                   size="large"
//                   sx={{ 
//                     px: 4, 
//                     py: 1.5,
//                     fontWeight: 600, 
//                     fontSize: { xs: '1rem', sm: '1.1rem' }, 
//                     borderRadius: 3,
//                     background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
//                     boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
//                     textTransform: 'none',
//                     '&:hover': {
//                       background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
//                       boxShadow: '0 15px 35px rgba(59, 130, 246, 0.4)',
//                       transform: 'translateY(-2px)',
//                     },
//                     transition: 'all 0.3s ease'
//                   }}
//                   onClick={() => handleSmoothScroll('contact')}
//                 >
//                   Get Free Consultation
//                 </Button>
                
//                 <Button
//                   variant="outlined"
//                   size="large"
//                   sx={{ 
//                     px: 4, 
//                     py: 1.5,
//                     fontWeight: 600, 
//                     fontSize: { xs: '1rem', sm: '1.1rem' }, 
//                     borderRadius: 3,
//                     borderColor: 'rgba(255, 255, 255, 0.2)',
//                     color: '#e2e8f0',
//                     textTransform: 'none',
//                     '&:hover': {
//                       borderColor: '#3b82f6',
//                       backgroundColor: 'rgba(59, 130, 246, 0.1)',
//                       color: '#3b82f6',
//                       transform: 'translateY(-2px)',
//                     },
//                     transition: 'all 0.3s ease'
//                   }}
//                   onClick={() => handleSmoothScroll('services')}
//                 >
//                   View Services
//                 </Button>
//               </Box>
//             </Box>
//           </Grid>
          
//           {/* Right side - Visual Element - Only shows above 1200px */}
//           <Grid item xs={12} md={5} lg={4} >
//             <Box sx={{ 
//               display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' },
//               position: 'relative',
//               height: { md: '300px', lg: '400px' },
//               width: '100%',
//               '&::before': {
//                 content: '""',
//                 position: 'absolute',
//                 top: '50%',
//                 left: '50%',
//                 transform: 'translate(-50%, -50%)',
//                 width: { md: '240px', lg: '300px' },
//                 height: { md: '240px', lg: '300px' },
//                 background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.1) 100%)',
//                 borderRadius: '50%',
//                 filter: 'blur(40px)',
//                 animation: 'pulse 4s ease-in-out infinite',
//               },
//               '@keyframes pulse': {
//                 '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
//                 '50%': { transform: 'translate(-50%, -50%) scale(1.1)' },
//               }
//             }}>
//               <Box sx={{
//                 position: 'absolute',
//                 top: '50%',
//                 left: '50%',
//                 transform: 'translate(-50%, -50%)',
//                 width: { md: '160px', lg: '200px' },
//                 height: { md: '160px', lg: '200px' },
//                 border: '2px solid rgba(59, 130, 246, 0.3)',
//                 borderRadius: '20px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 backgroundColor: 'rgba(255, 255, 255, 0.02)',
//                 backdropFilter: 'blur(10px)',
//               }}>
//                 <Typography 
//                   variant="h3" 
//                   sx={{ 
//                     color: '#3b82f6', 
//                     fontWeight: 700,
//                     fontSize: { md: '2.5rem', lg: '3rem' }
//                   }}
//                 >
//                   WIZ
//                 </Typography>
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// }
'use client';

import { Box, Typography, Button, Container, Grid, Chip } from "@mui/material";
import { TrendingUp, Security, Apple } from "@mui/icons-material";
import { useState, useEffect } from 'react';
export default function Hero() {
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
  };
  
  const highlights = [
    { icon: <TrendingUp />, text: "Scalable IT Solutions" },
    { icon: <Security />, text: "Cybersecurity Ready" },
    { icon: <Apple  />, text: "Apple Device Management" }
  ];

  const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [calendlyLoaded, setCalendlyLoaded] = useState(false);
  
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
  
    // Add this function to handle Calendly popup
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

  return (
    <Box 
      id="hero"
      sx={{
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
          background: 'radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)',
          pointerEvents: 'none',
        },
        py: 12,
      }}>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* Main Content */}
          <Grid 
            item 
            xs={12}
            md={12}
            lg={8}
            xl={8}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: {
                xs: 'center',
                sm: 'center', 
                md: 'center',
                lg: 'flex-start',
                xl: 'flex-start'
              }
            }}
          >
            <Box sx={{ 
              textAlign: { 
                xs: 'center', 
                sm: 'center',
                md: 'center',
                lg: 'left',
                xl: 'left'
              },
              width: '100%',
              maxWidth: { xs: '100%', xl: 'none' }
            }}>
              {/* Subtitle Badge */}
              <Chip 
                label="Premium IT Solutions Provider" 
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
                variant="h1" 
                component="h1" 
                gutterBottom 
                sx={{ 
                  fontWeight: 800, 
                  color: '#ffffff',
                  fontSize: { 
                    xs: '2.5rem', 
                    sm: '3rem',
                    md: '3rem', 
                    lg: '3.5rem',
                    xl: '4rem'
                  },
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  mb: 3,
                  background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Professional IT Support Services
                <Box component="span" sx={{ 
                  display: 'block',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Available Every Weekend
                </Box>
              </Typography>
              
              {/* Description */}
              <Typography 
                variant="h6" 
                sx={{ 
                  color: '#94a3b8',
                  fontWeight: 400,
                  lineHeight: 1.6,
                  mb: 4,
                  fontSize: { 
                    xs: '1.1rem', 
                    sm: '1.15rem',
                    md: '1.2rem',
                    lg: '1.25rem'
                  },
                  maxWidth: { xs: '100%', lg: '600px', xl: '600px' },
                  mx: { 
                    xs: 'auto', 
                    sm: 'auto',
                    md: 'auto',
                    lg: 0,
                    xl: 0
                  }
                }}
              >
          Expert tech support when you need it most — for offices, freelancers, and homes. Fast solutions, no stress.
              </Typography>
              
              {/* Highlight Chips */}
              <Box sx={{ 
                display: 'flex', 
                gap: 2, 
                mb: 5, 
                flexWrap: 'wrap', 
                justifyContent: { 
                  xs: 'center', 
                  sm: 'center',
                  md: 'center',
                  lg: 'flex-start',
                  xl: 'flex-start'
                } 
              }}>
                {highlights.map((item, index) => (
                  <Chip
                    key={index}
                    icon={item.icon}
                    label={item.text}
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: '#e2e8f0',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      fontWeight: 500,
                      fontSize: { xs: '0.85rem', sm: '0.9rem' },
                      '& .MuiChip-icon': {
                        color: '#3b82f6'
                      },
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        transform: 'translateY(-2px)',
                        transition: 'all 0.3s ease'
                      }
                    }}
                  />
                ))}
              </Box>
              
              {/* CTA Buttons */}
              <Box sx={{ 
                display: 'flex', 
                gap: 3, 
                flexDirection: { xs: 'column', sm: 'row' }, 
                justifyContent: { 
                  xs: 'center', 
                  sm: 'center',
                  md: 'center',
                  lg: 'flex-start',
                  xl: 'flex-start'
                },
                alignItems: { 
                  xs: 'center', 
                  sm: 'center', 
                  md: 'center',
                  lg: 'flex-start',
                  xl: 'flex-start'
                }
              }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ 
                    px: 4, 
                    py: 1.5,
                    fontWeight: 600, 
                    fontSize: { xs: '1rem', sm: '1.1rem' }, 
                    borderRadius: 3,
                    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                    boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
                    textTransform: 'none',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                      boxShadow: '0 15px 35px rgba(59, 130, 246, 0.4)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease'
                  }}
                  // onClick={() => handleSmoothScroll('contact')}
                     onClick={handleCalendlyClick}
                >
                  Get Consultation
                </Button>
                
                <Button
                  variant="outlined"
                  size="large"
                  sx={{ 
                    px: 4, 
                    py: 1.5,
                    fontWeight: 600, 
                    fontSize: { xs: '1rem', sm: '1.1rem' }, 
                    borderRadius: 3,
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    color: '#e2e8f0',
                    textTransform: 'none',
                    '&:hover': {
                      borderColor: '#3b82f6',
                      backgroundColor: 'rgba(59, 130, 246, 0.1)',
                      color: '#3b82f6',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => handleSmoothScroll('services')}
                >
                  View Services
                </Button>
              </Box>
            </Box>
          </Grid>
          
          {/* Right side - Visual Element - Only shows above 1200px */}
          <Grid 
            item 
            xs={12} 
            md={0} 
            lg={4} 
            xl={4}
            sx={{
              display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }
            }}
          >
            <Box sx={{ 
              position: 'relative',
              height: { lg: '400px' },
              width: '100%',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: { lg: '300px' },
                height: { lg: '300px' },
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.1) 100%)',
                borderRadius: '50%',
                filter: 'blur(40px)',
                animation: 'pulse 4s ease-in-out infinite',
              },
              '@keyframes pulse': {
                '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
                '50%': { transform: 'translate(-50%, -50%) scale(1.1)' },
              }
            }}>
              <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: { lg: '200px' },
                height: { lg: '200px' },
                border: '2px solid rgba(59, 130, 246, 0.3)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                backdropFilter: 'blur(10px)',
              }}>
                <Typography 
                  variant="h3" 
                  sx={{ 
                    color: '#3b82f6', 
                    fontWeight: 700,
                    fontSize: { lg: '3rem' }
                  }}
                >
                  WIZ
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
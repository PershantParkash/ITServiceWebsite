

// 'use client';

// import { Box, Typography, Container, Grid, Chip, Divider, Link, IconButton } from "@mui/material";
// import { TrendingUp, Security, Cloud, Email, Phone, LocationOn, Apple, LinkedIn, Twitter, Facebook, ArrowUpward } from "@mui/icons-material";
// import { useState } from "react";

// export default function Footer() {
//   const [hoveredService, setHoveredService] = useState(null);

//   const services = [
//     { name: "User & Device Support", description: "24/7 technical assistance" },
//     { name: "Office 365 & Email Support", description: "Cloud productivity solutions" }, 
//     { name: "Network & Remote Access", description: "Secure connectivity solutions" },
//     { name: "Apple Device Management (JAMF)", description: "Enterprise Mac management" },
//     { name: "Cybersecurity & Compliance", description: "Protect your business assets" }
//   ];

//   const contactInfo = [
//     { icon: <LocationOn />, text: "20 Wenlock Road, London, England, N1 7GU", href: "https://maps.google.com/?q=20+Wenlock+Road,+London,+England,+N1+7GU" },
//     { icon: <Email />, text: "info@weekenditwiz.co.uk", href: "mailto:info@weekenditwiz.co.uk" },
//     { icon: <Phone />, text: "07424 665990", href: "tel:+447424665990" },
//   ];

//   const highlights = [
//     { icon: <TrendingUp />, text: "Scalable IT Solutions" },
//     { icon: <Security />, text: "Cybersecurity Ready" },
//     { icon: <Apple />, text: "Apple Device Management" }
//   ];

//   const socialLinks = [
//     { icon: <LinkedIn />, href: "#", label: "LinkedIn" },
//     { icon: <Twitter />, href: "#", label: "Twitter" },
//     { icon: <Facebook />, href: "#", label: "Facebook" }
//   ];

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <>
//       {/* SEO Schema Markup */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "Organization",
//             "name": "WeekendItWiz",
//             "url": "https://weekenditwiz.co.uk",
//             "logo": "https://weekenditwiz.co.uk/logo.png",
//             "description": "Expert IT support, Azure cloud solutions, and strategic consulting services for businesses",
//             "address": {
//               "@type": "PostalAddress",
//               "streetAddress": "20 Wenlock Road",
//               "addressLocality": "London",
//               "addressCountry": "England",
//               "postalCode": "N1 7GU"
//             },
//             "contactPoint": {
//               "@type": "ContactPoint",
//               "telephone": "+447424665990",
//               "contactType": "customer service",
//               "email": "info@weekenditwiz.co.uk"
//             },
//             "sameAs": [
//               "https://linkedin.com/company/weekenditwiz",
//               "https://twitter.com/weekenditwiz"
//             ]
//           })
//         }}
//       />

//       <Box 
//         component="footer"
//         role="contentinfo"
//         sx={{ 
//           background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%)',
//           position: 'relative',
//           overflow: 'hidden',
//           '&::before': {
//             content: '""',
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             background: 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)',
//             pointerEvents: 'none',
//           },
//         }}
//       >
//         <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
//           {/* Main Footer Content */}
//           <Box sx={{ py: 5 }}>
//             <Grid container spacing={4}>
//               {/* Company Info */}
//               <Grid item xs={12} md={4}>
//                 <Box sx={{ mb: 3 }}>
//                   <Typography 
//                     variant="h5" 
//                     component="h2" 
//                     gutterBottom 
//                     sx={{ 
//                       fontWeight: 800, 
//                       color: '#ffffff',
//                       fontSize: '1.5rem',
//                       letterSpacing: '-0.02em',
//                       background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
//                       WebkitBackgroundClip: 'text',
//                       WebkitTextFillColor: 'transparent',
//                       backgroundClip: 'text',
//                       mb: 2
//                     }}
//                   >
//                     WeekendItWiz
//                   </Typography>
//                   <Typography 
//                     variant="body1" 
//                     sx={{ 
//                       color: '#94a3b8',
//                       lineHeight: 1.6,
//                       mb: 3,
//                       fontSize: '0.95rem'
//                     }}
//                   >
//                     Empowering businesses with expert IT support, Azure cloud solutions, and strategic consulting. Your trusted partner in secure and scalable digital transformation.
//                   </Typography>
                  
//                   {/* Highlight Chips */}
//                   <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
//                     {highlights.map((item, index) => (
//                       <Chip
//                         key={index}
//                         icon={item.icon}
//                         label={item.text}
//                         size="small"
//                         sx={{
//                           backgroundColor: 'rgba(255, 255, 255, 0.05)',
//                           color: '#e2e8f0',
//                           border: '1px solid rgba(255, 255, 255, 0.1)',
//                           fontWeight: 500,
//                           fontSize: '0.75rem',
//                           transition: 'all 0.3s ease',
//                           '&:hover': {
//                             backgroundColor: 'rgba(59, 130, 246, 0.1)',
//                             borderColor: 'rgba(59, 130, 246, 0.3)',
//                             transform: 'translateY(-1px)'
//                           },
//                           '& .MuiChip-icon': {
//                             color: '#3b82f6',
//                             fontSize: '0.9rem'
//                           }
//                         }}
//                       />
//                     ))}
//                   </Box>

//                   {/* Social Links */}
//                   <Box sx={{ display: 'flex', gap: 1 }}>
//                     {socialLinks.map((social, index) => (
//                       <IconButton
//                         key={index}
//                         href={social.href}
//                         aria-label={social.label}
//                         size="small"
//                         sx={{
//                           color: '#64748b',
//                           backgroundColor: 'rgba(255, 255, 255, 0.05)',
//                           border: '1px solid rgba(255, 255, 255, 0.1)',
//                           transition: 'all 0.3s ease',
//                           '&:hover': {
//                             color: '#3b82f6',
//                             backgroundColor: 'rgba(59, 130, 246, 0.1)',
//                             borderColor: 'rgba(59, 130, 246, 0.3)',
//                             transform: 'translateY(-2px)'
//                           }
//                         }}
//                       >
//                         {social.icon}
//                       </IconButton>
//                     ))}
//                   </Box>
//                 </Box>
//               </Grid>

//               {/* Services */}
//               <Grid item xs={12} md={4}>
//                 <Typography 
//                   variant="h6" 
//                   gutterBottom 
//                   sx={{ 
//                     fontWeight: 700, 
//                     color: '#ffffff',
//                     mb: 2,
//                     fontSize: '1.1rem'
//                   }}
//                 >
//                   Our Services
//                 </Typography>
//                 <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
//                   {services.map((service, index) => (
//                     <Box
//                       key={index}
//                       onMouseEnter={() => setHoveredService(index)}
//                       onMouseLeave={() => setHoveredService(null)}
//                       sx={{
//                         p: 1.5,
//                         borderRadius: 1,
//                         transition: 'all 0.3s ease',
//                         cursor: 'pointer',
//                         '&:hover': {
//                           backgroundColor: 'rgba(59, 130, 246, 0.08)',
//                           transform: 'translateX(4px)'
//                         }
//                       }}
//                     >
//                       <Typography 
//                         variant="body2" 
//                         sx={{ 
//                           color: hoveredService === index ? '#3b82f6' : '#e2e8f0',
//                           fontSize: '0.9rem',
//                           fontWeight: 500,
//                           transition: 'color 0.3s ease',
//                           mb: 0.5
//                         }}
//                       >
//                         {service.name}
//                       </Typography>
//                       <Typography 
//                         variant="caption" 
//                         sx={{ 
//                           color: '#94a3b8',
//                           fontSize: '0.8rem',
//                           display: hoveredService === index ? 'block' : 'none'
//                         }}
//                       >
//                         {service.description}
//                       </Typography>
//                     </Box>
//                   ))}
//                 </Box>
//               </Grid>

//               {/* Contact Info */}
//               <Grid item xs={12} md={4}>
//                 <Typography 
//                   variant="h6" 
//                   gutterBottom 
//                   sx={{ 
//                     fontWeight: 700, 
//                     color: '#ffffff',
//                     mb: 2,
//                     fontSize: '1.1rem'
//                   }}
//                 >
//                   Get In Touch
//                 </Typography>
//                 <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//                   {contactInfo.map((item, index) => (
//                     <Link
//                       key={index}
//                       href={item.href}
//                       target={item.href.startsWith('http') ? '_blank' : '_self'}
//                       rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
//                       sx={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: 2,
//                         textDecoration: 'none',
//                         p: 1.5,
//                         borderRadius: 1,
//                         transition: 'all 0.3s ease',
//                         '&:hover': {
//                           backgroundColor: 'rgba(59, 130, 246, 0.08)',
//                           transform: 'translateX(4px)'
//                         }
//                       }}
//                     >
//                       <Box sx={{
//                         width: 36,
//                         height: 36,
//                         borderRadius: '8px',
//                         background: 'rgba(59, 130, 246, 0.1)',
//                         border: '1px solid rgba(59, 130, 246, 0.2)',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         '& svg': {
//                           color: '#3b82f6',
//                           fontSize: '1rem'
//                         }
//                       }}>
//                         {item.icon}
//                       </Box>
//                       <Typography 
//                         variant="body2" 
//                         sx={{ 
//                           color: '#94a3b8',
//                           fontSize: '0.9rem',
//                           '&:hover': {
//                             color: '#3b82f6'
//                           }
//                         }}
//                       >
//                         {item.text}
//                       </Typography>
//                     </Link>
//                   ))}
//                 </Box>
//               </Grid>
//             </Grid>
//           </Box>

//           {/* Divider */}
//           <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />

//           {/* Bottom Footer */}
//           <Box sx={{ 
//             py: 3, 
//             display: 'flex', 
//             justifyContent: 'space-between', 
//             alignItems: 'center',
//             flexDirection: { xs: 'column', md: 'row' },
//             gap: { xs: 2, md: 0 }
//           }}>
//             <Typography 
//               variant="body2" 
//               sx={{ 
//                 color: '#64748b',
//                 fontSize: '0.85rem'
//               }}
//             >
//               &copy; {new Date().getFullYear()} Powered by Zaptech LTD. All rights reserved.
//             </Typography>
            
//             <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
//               <Link 
//                 href="/privacy-policy"
//                 sx={{ 
//                   color: '#64748b',
//                   fontSize: '0.85rem',
//                   textDecoration: 'none',
//                   transition: 'color 0.3s ease',
//                   '&:hover': {
//                     color: '#3b82f6'
//                   }
//                 }}
//               >
//                 Privacy Policy
//               </Link>
//               <Link 
//                 href="/terms-of-service"
//                 sx={{ 
//                   color: '#64748b',
//                   fontSize: '0.85rem',
//                   textDecoration: 'none',
//                   transition: 'color 0.3s ease',
//                   '&:hover': {
//                     color: '#3b82f6'
//                   }
//                 }}
//               >
//                 Terms of Service
//               </Link>
//               <IconButton
//                 onClick={scrollToTop}
//                 size="small"
//                 sx={{
//                   color: '#64748b',
//                   backgroundColor: 'rgba(255, 255, 255, 0.05)',
//                   border: '1px solid rgba(255, 255, 255, 0.1)',
//                   transition: 'all 0.3s ease',
//                   '&:hover': {
//                     color: '#3b82f6',
//                     backgroundColor: 'rgba(59, 130, 246, 0.1)',
//                     borderColor: 'rgba(59, 130, 246, 0.3)',
//                     transform: 'translateY(-2px)'
//                   }
//                 }}
//                 aria-label="Scroll to top"
//               >
//                 <ArrowUpward />
//               </IconButton>
//             </Box>
//           </Box>
//         </Container>
//       </Box>
//     </>
//   );
// }

'use client';

import { Box, Typography, Container, Grid, Chip, Divider, Link, IconButton } from "@mui/material";
import { TrendingUp, Security, Cloud, Email, Phone, LocationOn, Apple, LinkedIn, Twitter, Facebook, ArrowUpward } from "@mui/icons-material";
import { useState } from "react";

export default function Footer() {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    { name: "User & Device Support", description: "24/7 technical assistance" },
    { name: "Office 365 & Email Support", description: "Cloud productivity solutions" }, 
    { name: "Network & Remote Access", description: "Secure connectivity solutions" },
    { name: "Apple Device Management (JAMF)", description: "Enterprise Mac management" },
    { name: "Cybersecurity & Compliance", description: "Protect your business assets" }
  ];

  const contactInfo = [
    { icon: <LocationOn />, text: "20 Wenlock Road, London, England, N1 7GU", href: "https://maps.google.com/?q=20+Wenlock+Road,+London,+England,+N1+7GU" },
    { icon: <Email />, text: "info@weekenditwiz.co.uk", href: "mailto:info@weekenditwiz.co.uk" },
    { icon: <Phone />, text: "07424 665990", href: "tel:+447424665990" },
  ];

  const highlights = [
    { icon: <TrendingUp />, text: "Scalable IT Solutions" },
    { icon: <Security />, text: "Cybersecurity Ready" },
    { icon: <Apple />, text: "Apple Device Management" }
  ];

  const socialLinks = [
    { icon: <LinkedIn />, href: "#", label: "LinkedIn" },
    { icon: <Twitter />, href: "#", label: "Twitter" },
    { icon: <Facebook />, href: "#", label: "Facebook" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* SEO Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "WeekendItWiz",
            "url": "https://weekenditwiz.co.uk",
            "logo": "https://weekenditwiz.co.uk/logo.png",
            "description": "Expert IT support, Azure cloud solutions, and strategic consulting services for businesses",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "20 Wenlock Road",
              "addressLocality": "London",
              "addressCountry": "England",
              "postalCode": "N1 7GU"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+447424665990",
              "contactType": "customer service",
              "email": "info@weekenditwiz.co.uk"
            },
            "sameAs": [
              "https://linkedin.com/company/weekenditwiz",
              "https://twitter.com/weekenditwiz"
            ]
          })
        }}
      />

      <Box 
        component="footer"
        role="contentinfo"
        sx={{ 
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
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          {/* Main Footer Content */}
          <Box sx={{ py: 3.5 }}>
            <Grid container spacing={3}>
              {/* Company Info */}
              <Grid item xs={12} md={4}>
                <Box sx={{ mb: 2 }}>
                  <Typography 
                    variant="h5" 
                    component="h2" 
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
                      mb: 1.5
                    }}
                  >
                    WeekendItWiz
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: '#94a3b8',
                      lineHeight: 1.6,
                      mb: 2,
                      fontSize: '0.95rem'
                    }}
                  >
                    Empowering businesses with expert IT support, Azure cloud solutions, and strategic consulting. Your trusted partner in secure and scalable digital transformation.
                  </Typography>
                  
                  {/* Highlight Chips */}
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
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
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: 'rgba(59, 130, 246, 0.1)',
                            borderColor: 'rgba(59, 130, 246, 0.3)',
                            transform: 'translateY(-1px)'
                          },
                          '& .MuiChip-icon': {
                            color: '#3b82f6',
                            fontSize: '0.9rem'
                          }
                        }}
                      />
                    ))}
                  </Box>

                  {/* Social Links */}
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    {socialLinks.map((social, index) => (
                      <IconButton
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        size="small"
                        sx={{
                          color: '#64748b',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            color: '#3b82f6',
                            backgroundColor: 'rgba(59, 130, 246, 0.1)',
                            borderColor: 'rgba(59, 130, 246, 0.3)',
                            transform: 'translateY(-2px)'
                          }
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    ))}
                  </Box>
                </Box>
              </Grid>

              {/* Services */}
              <Grid item xs={12} md={4} sx={{ width:300}}>
                <Typography 
                  variant="h6" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 700, 
                    color: '#ffffff',
                    mb: 2,
                    fontSize: '1.1rem'
                  }}
                >
                  Our Services
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {services.map((service, index) => (
                    <Box
                      key={index}
                      onMouseEnter={() => setHoveredService(index)}
                      onMouseLeave={() => setHoveredService(null)}
                      sx={{
                        // p: 1.5,
                        borderRadius: 1,
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        '&:hover': {
                          backgroundColor: 'rgba(59, 130, 246, 0.08)',
                          transform: 'translateX(4px)',
                          p: 1.5,
                        }
                      }}
                    >
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: hoveredService === index ? '#3b82f6' : '#e2e8f0',
                          fontSize: '0.9rem',
                          fontWeight: 500,
                          transition: 'color 0.3s ease',
                          mb: 0.5
                        }}
                      >
                        {service.name}
                      </Typography>
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          color: '#94a3b8',
                          fontSize: '0.8rem',
                          display: hoveredService === index ? 'block' : 'none'
                        }}
                      >
                        {service.description}
                      </Typography>
                    </Box>
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
                    mb: 2,
                    fontSize: '1.1rem'
                  }}
                >
                  Get In Touch
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {contactInfo.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : '_self'}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        textDecoration: 'none',
                        // p: 1.5,
                        borderRadius: 1,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: 'rgba(59, 130, 246, 0.08)',
                          transform: 'translateX(4px)',
                           p: 1.5,
                        }
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
                            color: '#3b82f6'
                          }
                        }}
                      >
                        {item.text}
                      </Typography>
                    </Link>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Divider */}
          <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />

          {/* Bottom Footer */}
          <Box sx={{ 
            py: 3, 
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
              &copy; {new Date().getFullYear()} Powered by Zaptech LTD. All rights reserved.
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
              <Link 
                href="/privacy-policy"
                sx={{ 
                  color: '#64748b',
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: '#3b82f6'
                  }
                }}
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms-of-service"
                sx={{ 
                  color: '#64748b',
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: '#3b82f6'
                  }
                }}
              >
                Terms of Service
              </Link>
              <IconButton
                onClick={scrollToTop}
                size="small"
                sx={{
                  color: '#64748b',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    borderColor: 'rgba(59, 130, 246, 0.3)',
                    transform: 'translateY(-2px)'
                  }
                }}
                aria-label="Scroll to top"
              >
                <ArrowUpward />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
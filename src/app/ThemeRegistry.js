'use client';

import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3a86ff',
    },
    secondary: {
      main: '#9d4edd',
    },
    background: {
      default: '#101014',
      paper: '#181824',
    },
    text: {
      primary: '#fff',
      secondary: '#b0b0c3',
    },
  },
  typography: {
    fontFamily: [
      'var(--font-geist-sans)',
      'sans-serif',
    ].join(','),
    fontFamilyMono: [
      'var(--font-geist-mono)',
      'monospace',
    ].join(','),
  },
  shape: {
    borderRadius: 12,
  },
});

export default function ThemeRegistry({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
} 
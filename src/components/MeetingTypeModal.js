import { Modal, Box, Typography, Button, Stack, IconButton } from '@mui/material';
import { Close, CalendarMonth, People } from '@mui/icons-material';

export default function MeetingTypeModal({ open, onClose, onSelect }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="meeting-type-modal-title"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2
      }}
    >
      <Box sx={{
        width: '100%',
        maxWidth: 600,
        backgroundColor: 'rgba(26, 26, 46, 0.95)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '24px',
        py: 4,
        px: {xs: 4, sm: 8},
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
        position: 'relative',
        textAlign: 'center',
      }}>
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            color: '#94a3b8',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: '#e2e8f0'
            }
          }}
        >
          <Close />
        </IconButton>
        <Typography variant="h5" sx={{ color: '#fff', fontWeight: 700, mb: 2 }}>
          How would you like to meet?
        </Typography>
        <Typography variant="body2" sx={{ color: '#94a3b8', mb: 4 }}>
          Please choose your preferred meeting type for your consultation.
        </Typography>
       
        <Stack direction={{ xs: 'column', sm: 'row', }} spacing={2} justifyContent="center" alignItems="center">
  <Button
    variant="contained"
    startIcon={<CalendarMonth />}
    onClick={() => onSelect('online')}
    fullWidth
    sx={{
      background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
      color: '#fff',
      fontWeight: 700,
      fontSize: '1rem',
      px: {xs: 1, sm: 2},
      py: {xs: 2, sm: 2},
      borderRadius: '14px',
      boxShadow: '0 2px 12px #3b82f630',
      textTransform: 'none',
      // maxWidth: 300, // Optional: set a maximum width
      '&:hover': {
        background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
        transform: 'translateY(-2px)',
      },
      transition: 'all 0.3s ease',
    }}
  >
    Online Meeting
  </Button>
  <Button
    variant="outlined"
    startIcon={<People />}
    onClick={() => onSelect('inperson')}
    fullWidth
    sx={{
      borderColor: '#8b5cf6',
      color: '#8b5cf6',
      fontWeight: 700,
      fontSize: '1rem',
      px: {xs: 1, sm: 2},
      py: 2,
      borderRadius: '14px',
      backgroundColor: 'rgba(139, 92, 246, 0.08)',
      boxShadow: '0 2px 8px #8b5cf630',
      textTransform: 'none',
      // maxWidth: 300, // Optional: set a maximum width
      '&:hover': {
        backgroundColor: 'rgba(139, 92, 246, 0.18)',
        borderColor: '#8b5cf6',
      },
      transition: 'all 0.3s ease',
    }}
  >
    In-Person Meeting
  </Button>
</Stack>
      </Box>
    </Modal>
  );
} 
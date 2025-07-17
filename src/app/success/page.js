'use client'

import { Suspense } from 'react'
import { Box } from '@mui/material'
import SuccessContent from './SuccessContent'

export default function SuccessPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4,
      }}
    >
      <Suspense fallback={<div style={{ color: 'white' }}>Loading...</div>}>
        <SuccessContent />
      </Suspense>
    </Box>
  )
}

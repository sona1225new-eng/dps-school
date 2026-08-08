import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: ['dps-school.onrender.com', '.onrender.com'],
  },
  server: {
    allowedHosts: ['dps-school.onrender.com', '.onrender.com'],
  },
})

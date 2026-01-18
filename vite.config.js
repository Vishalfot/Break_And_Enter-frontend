import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  // below this i added for bypasssing the login/signup
  server: {
    proxy: {
      '/api': 'http://localhost:5000',   
    //  '/signup': 'http://localhost:5000', 
    // '/login': 'http://localhost:5000',
    // '/logout': 'http://localhost:5000',
    // '/dashboard': 'http://localhost:5000',
    // '/analyze': 'http://localhost:5000',
    // '/resumes': 'http://localhost:5000',
    // '/resume': 'http://localhost:5000',
    // '/profile': 'http://localhost:5000',
    },
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
    // Reduce chunk size warnings threshold
    chunkSizeWarningLimit: 600,
    // Enable source maps for production debugging (optional: set to false for pure performance)
    sourcemap: false,
    // Minification
    minify: 'esbuild',
    // Target modern browsers for smaller output
    target: 'es2020',
    // CSS code splitting
    cssCodeSplit: true,
  },
  // Optimize dependencies pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
})

export default {
  build: {
    rollupOptions: {
      external: ['@vercel/analytics', '@vercel/speed-insights']
    }
  }
}

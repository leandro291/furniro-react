import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // DEV_API_PROXY (sin prefijo VITE_, no llega al cliente): en dev reenvía /api al backend remoto
  // y evita el CORS, que el backend desplegado solo abre para el dominio de Vercel.
  const { DEV_API_PROXY } = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react(), tailwindcss()],
    server: DEV_API_PROXY ? { proxy: { '/api': { target: DEV_API_PROXY, changeOrigin: true } } } : {},
  }
})

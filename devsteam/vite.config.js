import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
  port: 3000, //direcionou a porta para 3000 que é a porta padrão do react
  open: true, //abre o navegador automaticamente
  host: true, //permite o local dentro da rede
  },
})

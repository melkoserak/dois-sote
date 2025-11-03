/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. INFORMA AO NEXT.JS QUE O SITE ESTARÁ EM /institucional
  basePath: '/institucional',
  assetPrefix: '/institucional',

  // 2. Garante que o app rode como um servidor (necessário para o futuro)
  output: 'standalone', 
  
  reactStrictMode: true,
  images: {
    unoptimized: true, // Mantém igual ao simulador por enquanto
  },
};

module.exports = nextConfig;
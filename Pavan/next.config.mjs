const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/pavan-ambekar.github.io-main/' : '',
  basePath: isProd ? '/pavan-ambekar.github.io-main' : '',
  output: 'export'
};

export default nextConfig;




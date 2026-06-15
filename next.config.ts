import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  
  // Optimize images
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Enable experimental features for better SEO
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  
  // Headers for better SEO and security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
        ],
      },
      // Headers for APK downloads
      {
        source: '/:file*.apk',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/vnd.android.package-archive'
          },
          {
            key: 'Content-Disposition',
            value: 'attachment; filename=":file.apk"'
          },
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow'
          },
        ],
      },
    ];
  },
  
  // Redirects for canonical URLs
  async redirects() {
    return [
      // Redirect non-www to www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'jaiminraval.in',
          },
        ],
        destination: 'https://www.jaiminraval.in/:path*',
        permanent: true,
      },
      // Redirect old blog URLs to articles page or new structure
      {
        source: '/blog/:path*',
        destination: '/articles',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

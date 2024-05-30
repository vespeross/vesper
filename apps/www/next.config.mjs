/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["tsx", "ts", "js", "mjs", "mdx"],
  experimental: {
    mdxRs: false,
  },
  redirects: async () => {
    return [
      {
        source: "/github",
        destination: "https://github.com/vespeross",
        permanent: true,
      },
      {
        source: "/git",
        destination: "https://github.com/vespeross",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "neon.tech",
      },
    ],
  },
};

export default nextConfig;

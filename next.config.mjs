import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: ['package-name'],
        esmExternals: 'loose'
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
                port: "",
                pathname: "**"
            }
        ]
    },
    transpilePackages: ['next-mdx-remote'],
    pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
};

const bundle = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

export default nextConfig;
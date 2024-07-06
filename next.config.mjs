/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: ['package-name'],
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

export default nextConfig;

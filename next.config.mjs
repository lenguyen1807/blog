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
    pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js']
};

export default nextConfig;

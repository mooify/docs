import type {NextConfig} from "next";
import nextra from 'nextra'

// Set up Nextra with its configuration
const withNextra = nextra({
    // ... Add Nextra-specific options here
})

const nextConfig: NextConfig = {
    devIndicators: false,
};

export default withNextra(nextConfig);

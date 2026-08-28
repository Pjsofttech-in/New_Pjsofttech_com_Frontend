/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: process.cwd(),
  webpack(config) {
    const visit = (rules) => {
      for (const rule of rules) {
        if (rule.oneOf) visit(rule.oneOf);
        if (Array.isArray(rule.use)) {
          for (const loader of rule.use) {
            if (loader.loader?.includes("css-loader") && loader.options?.modules) {
              loader.options.modules.mode = "local";
            }
          }
        }
      }
    };

    visit(config.module.rules);
    return config;
  },
};

export default nextConfig;

import type { NextConfig } from "next";
const config: NextConfig = {
  async redirects() {
    return [
      { source: "/contact", destination: "/join", permanent: true },
      {
        source: "/rainbow",
        destination:
          "https://docs.google.com/forms/d/e/1FAIpQLSehksMqyMcjoGBzjVTWztFLLfGuS73e6vxILwOYKr8vNDK6oA/viewform",
        permanent: false,
      },
    ];
  },
};
export default config;

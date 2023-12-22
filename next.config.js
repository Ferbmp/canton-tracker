/** @type {import('next').NextConfig} */

const withAntdLess = require("next-plugin-antd-less");

const nextConfig = withAntdLess({
  modifyVars: { "@body-background": "#f5f5f5" },
});

module.exports = nextConfig;

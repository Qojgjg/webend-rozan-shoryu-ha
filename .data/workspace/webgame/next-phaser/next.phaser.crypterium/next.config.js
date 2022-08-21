/** @type {import('next').NextConfig} */
module.exports = {
  rewrites: async () => [
    {
      source: "/dist/index.html",
      destination: "/pages/api/game.ts",
    },
  ],
  reactStrictMode: true,
}

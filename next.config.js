/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async() => {
    return[
      {
        source: '/Home',
        destination: '/',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig



module.exports = ({ env }) => ({
  host: env('HOST', '157.245.53.130'),
  port: env.int('PORT', 7272),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '848f5df2c4c764e68ad91b53d0aa2a8d'),
    },
  },
});

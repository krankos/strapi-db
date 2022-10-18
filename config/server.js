module.exports = ({ env }) => ({
  host: env("HOST", "127.0.0.1"),
  port: env.int("PORT", 1337),
  url: "https://zippy-stroopwafel-eb73fa.netlify.app/",
  admin: {
    url: "https://zippy-stroopwafel-eb73fa.netlify.app/",
    serveAdminPanel: false,
  },
  app: {
    keys: env.array("APP_KEYS"),
  },
});

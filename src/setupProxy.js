const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api/addUser", {
      target: "https://sgserver-todolist.herokuapp.com",
      changeOrigin: true,
    })
  );
};

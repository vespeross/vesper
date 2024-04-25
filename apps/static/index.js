const app = require("express")();
require("dotenv").config({
  path: require("path").join(__dirname, ".env"),
});

const cors_origin = process.env.CORS_ORIGIN.split(",");

app.use(
  require("cors")({
    origin: cors_origin,
  })
);
app.use(require("express").static("static"));

app.set("HTTP_PORT", process.env.HTTP_PORT || 8080);
app.set("HTTP_HOST", process.env.HTTP_HOST || "127.0.0.1");
app.set("trust proxy", true);
app.set("json spaces", 2);

app.get("*", (_, res) => {
  res.status(404).json({
    message: "Resource not found.",
  });
});

app.listen(app.get("HTTP_PORT"), app.get("HTTP_HOST"), () => {
  console.log(
    `Server is running on http://${app.get("HTTP_HOST")}:${app.get("HTTP_PORT")}`
  );
  console.log(`CORS_ORIGIN: ${cors_origin.join(", ")}`);
});

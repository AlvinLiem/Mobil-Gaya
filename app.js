const express = require(`express`);
const app = express();
const port = 3000;
const routes = require(`./routes`);
const session = require(`express-session`);

app.set(`view engine`, `ejs`);

app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: "coba tebak",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      sameSite: true,
    },
  })
);

app.use(express.static("public"));

app.use(`/`, routes);

app.listen(port, () => {
  console.log(`Pair Project Group 5 Mobil Gaya`);
});

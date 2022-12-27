const app = require("./app");

app.listen(process.env.PORT || 5000, () => {
  console.log("Started server at port 5000");
});

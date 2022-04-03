const app = require("./index");

const connect = require("./configs/db");

app.listen(4700, async function () {
  try {
    await connect();
    console.log("listening on port 4700");
    
  } catch (err) {

    console.log(err.message);
  }
});

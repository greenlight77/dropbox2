const App = require("./App");
const http = require("http");
const server = http.createServer(App);
server.listen(process.env.PORT || 3000);

const EventEmmitter = require("events");
const uuid = require("uuid");

class Logger extends EventEmmitter {
    log(msg) {
        this.emit("message", {id: uuid.v6(), msg});
    }
}

// module.exports = Logger;

// const Logger = require("./logger");

const logger = new Logger();

logger.on("message", data => console.log(data));
logger.log("Hello World!");
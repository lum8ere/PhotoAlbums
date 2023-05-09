import winston, { createLogger, transports, format } from "winston";

let myCustomFormat = winston.format.combine(
  winston.format.colorize({ all: true }),
  winston.format.label({ label: "[LOGGER]" }),
  winston.format.timestamp({ format: "YYYY-MM-DD HH:MM:SS" }),
  winston.format.printf((info: any) => {
    return `${info.label} ${info.timestamp} ${info.level}: ${info.message}`;
  })
);

winston.addColors({
  info: "bold blue",
  warn: "italic yellow",
  error: "bold red",
  debug: "green",
});

var transportsArr = [
  new winston.transports.Console({
    format: winston.format.combine(myCustomFormat),
  }),
];

var logsLevel = "info";

const logger = winston.createLogger({
  level: logsLevel,
  transports: transportsArr,
});

export default logger;
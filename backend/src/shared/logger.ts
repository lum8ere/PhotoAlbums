import winston, { createLogger, transports, format } from "winston";

let myCustomFormat = format.combine(
  format.colorize({ all: true }),
  format.label({ label: "[LOGGER]" }),
  format.timestamp({ format: "YYYY-MM-DD HH:MM:SS" }),
  format.printf((info: any) => {
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
  new transports.Console({
    format: winston.format.combine(myCustomFormat),
  }),
];

var logsLevel = "info";

const logger = createLogger({
  level: logsLevel,
  transports: transportsArr,
});

export default logger;
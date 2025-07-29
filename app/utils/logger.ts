import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json(),
    winston.format.uncolorize(),
  ),
  transports: [
    //
    // - Write all logs with importance level of `error` or higher to `error.log`
    //   (i.e., error, fatal, but not other levels)
    //
    new DailyRotateFile({
      filename: 'logs/error-%DATE%.log',
      level: 'error',
      maxFiles: '14d',
    }),
    //
    // - Write all logs with importance level of `info` or higher to `log.log`
    //   (i.e., fatal, error, warn, and info, but not trace)
    //
    new DailyRotateFile({
      filename: 'logs/log-%DATE%.log',
      level: 'info',
      maxFiles: '14d',
    }),
  ],
}) as Pick<
  winston.Logger,
  'error' | 'warn' | 'info' | 'http' | 'verbose' | 'debug' | 'silly' | 'log'
>;

// @ts-expect-error-next-line
logger.add(
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.timestamp(),
      process.env.NODE_ENV !== 'production'
        ? winston.format.prettyPrint({ colorize: true })
        : winston.format.json(),
      winston.format.errors({ stack: true }),
    ),
  }),
);

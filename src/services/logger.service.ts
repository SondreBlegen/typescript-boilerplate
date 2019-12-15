import * as winston from 'winston';

export class LoggerService {
    public logger: winston.Logger;

    constructor() {
        // Winston logger setup
        this.logger = winston.createLogger({
            // Setting up a JSON logger format with timestamp included
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json(),
            ),
            // Using the log level specified as an environment variable, if not provided the default will be info
            level: process.env.log_level || 'info',
            transports: [
                new winston.transports.Console(),

            ],
        });
    }
}

import { FetchError } from 'ofetch';
import { H3Error } from 'h3';
import { logger } from '~/utils/logger';

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('error', (error, { event }) => {
    if (error instanceof FetchError) {
      logger.error('fetch error', {
        event: 'server-fetch-error',
        error,
        ...error,
        request: event,
      });
    } else if (error instanceof H3Error) {
      logger.error('nitro error', {
        event: 'server-h3-error',
        error,
        ...error,
        stack: error.stack,
        message: error.message,
        statusCode: error.statusCode,
        cause: {
          error: error.cause,
          stack: (error.cause as Error).stack,
          ...(error.cause as object),
        },
        request: event,
      });
    } else if (error instanceof Error) {
      logger.error('generic error', {
        event: 'server-generic-error',
        error,
        cause: {
          error: error.cause,
          stack: (error.cause as Error).stack,
          ...(error.cause as object),
        },
        stack: error.stack,
        message: error.message,
        request: event,
      });
    }
  });
});

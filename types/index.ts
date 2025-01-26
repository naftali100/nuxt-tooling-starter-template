import type { User } from '@clerk/backend';

declare module 'h3' {
  interface H3EventContext {
    user: User;
  }
}

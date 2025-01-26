import { clerkClient, getAuth } from 'vue-clerk/server';

// makes sure that only authenticated users can access the api
export default defineEventHandler(async (event) => {
  const path = event.path;
  if (!path.startsWith('/api')) {
    return;
  }

  const auth = getAuth(event);

  const userId = auth?.userId;
  if (!userId) {
    throw createError({
      status: 401,
      statusMessage: 'Unauthorized',
      message: 'no clerk user id',
    });
  }
  const user = await clerkClient(event).users.getUser(userId);
  if (!user) {
    throw createError({
      status: 401,
      statusMessage: 'Unauthorized',
      message: 'no clerk user',
    });
  }

  event.context.user = user;
});

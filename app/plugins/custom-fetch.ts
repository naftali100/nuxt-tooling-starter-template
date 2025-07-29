import { toast } from 'vue-sonner';

export default defineNuxtPlugin((nuxtApp) => {
  const api = $fetch.create({
    onRequestError({ error }) {
      toast.error(error.message ?? 'failed to request');
    },
    onResponse({ error }) {
      if (error) {
        toast.error(error.message);
      }
    },
  });
  return {
    provide: {
      api,
    },
  };
});

<script setup lang="ts">
definePageMeta({
  layout: 'protected',
  middleware: 'auth',
  auth: {
    navigateUnauthenticatedTo: '/sign-in',
    guestRedirectUrl: '/sign-in',
  },
});
</script>
<template>
  <div>
    <div class="mb-5" />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
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
    <UserButton />
  </div>
</template>

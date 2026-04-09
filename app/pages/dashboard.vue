<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
});
</script>
<template>
  <div>
    <div class="mb-5" />
    <NuxtPage />
  </div>
</template>

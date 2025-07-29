<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps({
  error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: '/' });
</script>

<template>
  <div
    class="flex min-h-screen flex-col items-center justify-center space-y-5 px-4 py-12 sm:px-6 lg:px-8"
  >
    <h1>{{ $t(String(error?.statusCode) ?? '404') }}</h1>
    <div>
      {{ $t('errorCode') }}:
      {{ error?.statusCode }}
      {{ error?.message }}
    </div>
    <Button @click="handleError">{{ $t('backHome') }}</Button>
  </div>
</template>

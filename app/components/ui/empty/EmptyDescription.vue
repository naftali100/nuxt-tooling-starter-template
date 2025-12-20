<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';

const props = defineProps<{
  class?: HTMLAttributes['class'];
}>();
</script>

<template>
  <p
    data-slot="empty-description"
    :class="
      cn(
        'text-sm/relaxed text-slate-500 dark:text-slate-400 [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-slate-900 dark:[&>a:hover]:text-slate-50',
        props.class,
      )
    "
  >
    <slot />
  </p>
</template>

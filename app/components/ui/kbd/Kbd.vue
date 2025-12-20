<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';

const props = defineProps<{
  class?: HTMLAttributes['class'];
}>();
</script>

<template>
  <kbd
    :class="
      cn(
        'pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm bg-slate-100 px-1 font-sans text-xs font-medium text-slate-500 select-none dark:bg-slate-800 dark:text-slate-400',
        '[&_svg:not([class*=\'size-\'])]:size-3',
        '[[data-slot=tooltip-content]_&]:bg-white/20 [[data-slot=tooltip-content]_&]:text-white dark:[[data-slot=tooltip-content]_&]:bg-slate-950/20 dark:[[data-slot=tooltip-content]_&]:bg-white/10 dark:dark:[[data-slot=tooltip-content]_&]:bg-slate-950/10 dark:[[data-slot=tooltip-content]_&]:text-slate-950',
        props.class,
      )
    "
  >
    <slot />
  </kbd>
</template>

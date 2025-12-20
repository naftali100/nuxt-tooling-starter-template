<script setup lang="ts">
import type { NavigationMenuViewportProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import { reactiveOmit } from '@vueuse/core';
import { NavigationMenuViewport, useForwardProps } from 'reka-ui';
import { cn } from '@/lib/utils';

const props = defineProps<
  NavigationMenuViewportProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = reactiveOmit(props, 'class');

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <div class="absolute top-full left-0 flex justify-center">
    <NavigationMenuViewport
      v-bind="forwardedProps"
      :class="
        cn(
          'origin-top-center data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative left-[var(--reka-navigation-menu-viewport-left)] mt-1.5 h-[--reka-navigation-menu-viewport-height] w-full overflow-hidden rounded-md border border-slate-200 bg-white text-slate-950 shadow md:w-[--reka-navigation-menu-viewport-width] dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50',
          props.class,
        )
      "
    />
  </div>
</template>

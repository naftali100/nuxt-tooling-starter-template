<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { reactiveOmit } from '@vueuse/core';
import {
  MenubarTrigger,
  type MenubarTriggerProps,
  useForwardProps,
} from 'reka-ui';
import { cn } from '@/lib/utils';

const props = defineProps<
  MenubarTriggerProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = reactiveOmit(props, 'class');

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <MenubarTrigger
    data-slot="menubar-trigger"
    v-bind="forwardedProps"
    :class="
      cn(
        'flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none focus:bg-slate-100 focus:text-slate-900 data-[state=open]:bg-slate-100 data-[state=open]:text-slate-900 dark:focus:bg-slate-800 dark:focus:text-slate-50 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-50',
        props.class,
      )
    "
  >
    <slot />
  </MenubarTrigger>
</template>

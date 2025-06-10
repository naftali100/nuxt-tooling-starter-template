<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { reactiveOmit } from '@vueuse/core';
import {
  PinInputInput,
  type PinInputInputProps,
  useForwardProps,
} from 'reka-ui';
import { cn } from '@/lib/utils';

const props = defineProps<
  PinInputInputProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = reactiveOmit(props, 'class');

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <PinInputInput
    data-slot="pin-input-slot"
    v-bind="forwardedProps"
    :class="
      cn(
        'relative flex h-9 w-9 items-center justify-center border-y border-r border-slate-200 text-center text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md focus:z-10 focus:border-slate-950 focus:ring-[3px] focus:ring-slate-950/50 aria-invalid:border-red-500 focus:aria-invalid:border-red-500 focus:aria-invalid:ring-red-500/20 dark:border-slate-800 dark:bg-slate-200/30 dark:dark:bg-slate-800/30 dark:focus:border-slate-300 dark:focus:ring-slate-300/50 dark:aria-invalid:border-red-900 dark:focus:aria-invalid:border-red-900 dark:dark:focus:aria-invalid:ring-red-900/40 dark:focus:aria-invalid:ring-red-500/40 dark:focus:aria-invalid:ring-red-900/20',
        props.class,
      )
    "
  />
</template>

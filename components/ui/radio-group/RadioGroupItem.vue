<script setup lang="ts">
import type { RadioGroupItemProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import { reactiveOmit } from '@vueuse/core';
import { CircleIcon } from 'lucide-vue-next';
import { RadioGroupIndicator, RadioGroupItem, useForwardProps } from 'reka-ui';
import { cn } from '@/lib/utils';

const props = defineProps<
  RadioGroupItemProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = reactiveOmit(props, 'class');

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <RadioGroupItem
    data-slot="radio-group-item"
    v-bind="forwardedProps"
    :class="
      cn(
        'aspect-square size-4 shrink-0 rounded-full border border-slate-200 text-slate-900 shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-slate-950 focus-visible:ring-[3px] focus-visible:ring-slate-950/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-red-500 aria-invalid:ring-red-500/20 dark:border-slate-800 dark:bg-slate-200/30 dark:dark:bg-slate-800/30 dark:text-slate-50 dark:focus-visible:border-slate-300 dark:focus-visible:ring-slate-300/50 dark:aria-invalid:border-red-900 dark:aria-invalid:ring-red-500/40 dark:aria-invalid:ring-red-900/20 dark:dark:aria-invalid:ring-red-900/40',
        props.class,
      )
    "
  >
    <RadioGroupIndicator
      data-slot="radio-group-indicator"
      class="relative flex items-center justify-center"
    >
      <CircleIcon
        class="fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2"
      />
    </RadioGroupIndicator>
  </RadioGroupItem>
</template>

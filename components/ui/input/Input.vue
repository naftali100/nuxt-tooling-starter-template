<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { useVModel } from '@vueuse/core';
import { cn } from '@/lib/utils';

const props = defineProps<{
  defaultValue?: string | number;
  modelValue?: string | number;
  class?: HTMLAttributes['class'];
}>();

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void;
}>();

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
});
</script>

<template>
  <input
    v-model="modelValue"
    data-slot="input"
    :class="
      cn(
        'flex h-9 w-full min-w-0 rounded-md border border-slate-200 bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-slate-900 selection:text-slate-50 file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-slate-950 placeholder:text-slate-500 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-slate-800 dark:bg-slate-200/30 dark:dark:bg-slate-800/30 dark:selection:bg-slate-50 dark:selection:text-slate-900 dark:file:text-slate-50 dark:placeholder:text-slate-400',
        'focus-visible:border-slate-950 focus-visible:ring-[3px] focus-visible:ring-slate-950/50 dark:focus-visible:border-slate-300 dark:focus-visible:ring-slate-300/50',
        'aria-invalid:border-red-500 aria-invalid:ring-red-500/20 dark:aria-invalid:border-red-900 dark:aria-invalid:ring-red-500/40 dark:aria-invalid:ring-red-900/20 dark:dark:aria-invalid:ring-red-900/40',
        props.class,
      )
    "
  />
</template>

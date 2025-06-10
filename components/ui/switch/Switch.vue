<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { reactiveOmit } from '@vueuse/core';
import {
  SwitchRoot,
  type SwitchRootEmits,
  type SwitchRootProps,
  SwitchThumb,
  useForwardPropsEmits,
} from 'reka-ui';
import { cn } from '@/lib/utils';

const props = defineProps<
  SwitchRootProps & { class?: HTMLAttributes['class'] }
>();

const emits = defineEmits<SwitchRootEmits>();

const delegatedProps = reactiveOmit(props, 'class');

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <SwitchRoot
    data-slot="switch"
    v-bind="forwarded"
    :class="
      cn(
        'peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-slate-200 border-transparent shadow-xs transition-all outline-none focus-visible:border-slate-950 focus-visible:ring-[3px] focus-visible:ring-slate-950/50 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-slate-900 data-[state=unchecked]:bg-slate-200 dark:border-slate-800 dark:focus-visible:border-slate-300 dark:focus-visible:ring-slate-300/50 dark:data-[state=checked]:bg-slate-50 dark:dark:data-[state=unchecked]:bg-slate-800/80 dark:data-[state=unchecked]:bg-slate-200/80 dark:data-[state=unchecked]:bg-slate-800',
        props.class,
      )
    "
  >
    <SwitchThumb
      data-slot="switch-thumb"
      :class="
        cn(
          'pointer-events-none block size-4 rounded-full bg-white ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0 dark:bg-slate-950 dark:dark:data-[state=checked]:bg-slate-900 dark:data-[state=checked]:bg-slate-50 dark:dark:data-[state=unchecked]:bg-slate-50 dark:data-[state=unchecked]:bg-slate-950',
        )
      "
    >
      <slot name="thumb" />
    </SwitchThumb>
  </SwitchRoot>
</template>

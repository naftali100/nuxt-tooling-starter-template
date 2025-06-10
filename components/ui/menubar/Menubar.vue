<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { reactiveOmit } from '@vueuse/core';
import {
  MenubarRoot,
  type MenubarRootEmits,
  type MenubarRootProps,
  useForwardPropsEmits,
} from 'reka-ui';
import { cn } from '@/lib/utils';

const props = defineProps<
  MenubarRootProps & { class?: HTMLAttributes['class'] }
>();
const emits = defineEmits<MenubarRootEmits>();

const delegatedProps = reactiveOmit(props, 'class');

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <MenubarRoot
    data-slot="menubar"
    v-bind="forwarded"
    :class="
      cn(
        'flex h-9 items-center gap-1 rounded-md border border-slate-200 bg-white p-1 shadow-xs dark:border-slate-800 dark:bg-slate-950',
        props.class,
      )
    "
  >
    <slot />
  </MenubarRoot>
</template>

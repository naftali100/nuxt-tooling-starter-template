<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import type { ButtonGroupVariants } from '.';
import { Primitive } from 'reka-ui';
import { cn } from '@/lib/utils';

interface Props extends PrimitiveProps {
  class?: HTMLAttributes['class'];
  orientation?: ButtonGroupVariants['orientation'];
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
});
</script>

<template>
  <Primitive
    role="group"
    data-slot="button-group"
    :data-orientation="props.orientation"
    :as="as"
    :as-child="asChild"
    :class="
      cn(
        'flex items-center gap-2 rounded-md border border-slate-200 bg-slate-100 px-4 text-sm font-medium shadow-xs dark:border-slate-800 dark:bg-slate-800 [&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-4',
        props.class,
      )
    "
  >
    <slot />
  </Primitive>
</template>

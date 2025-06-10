<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { reactiveOmit } from '@vueuse/core';
import { TabsList, type TabsListProps } from 'reka-ui';
import { cn } from '@/lib/utils';

const props = defineProps<
  TabsListProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = reactiveOmit(props, 'class');
</script>

<template>
  <TabsList
    data-slot="tabs-list"
    v-bind="delegatedProps"
    :class="
      cn(
        'inline-flex h-9 w-fit items-center justify-center rounded-lg bg-slate-100 p-[3px] text-slate-500 dark:bg-slate-800 dark:text-slate-400',
        props.class,
      )
    "
  >
    <slot />
  </TabsList>
</template>

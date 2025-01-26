<script setup lang="ts">
import { HelpCircle } from 'lucide-vue-next';

const { delayDuration = 100 } = defineProps<{
  content: string;
  delayDuration?: number;
}>();
</script>
<template>
  <TooltipProvider>
    <Tooltip :delay-duration="delayDuration">
      <TooltipTrigger as-child>
        <slot>
          <HelpCircle class="text-muted-foreground h-4 w-4" />
        </slot>
      </TooltipTrigger>
      <TooltipContent>
        <p>{{ content }}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>

<style lang="scss" scoped></style>

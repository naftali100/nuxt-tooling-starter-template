<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import {
  DateFormatter,
  type DateValue,
  getLocalTimeZone,
} from '@internationalized/date';
import { Calendar as CalendarIcon } from 'lucide-vue-next';

const { locale } = useI18n();
const df = computed(
  () =>
    new DateFormatter(locale.value, {
      dateStyle: 'full',
    }),
);

const props = defineProps<{ minValue?: DateValue; closeOnSelect?: boolean }>();

const value = defineModel<DateValue>();

const isOpen = ref(false);
function close() {
  if (props.closeOnSelect) {
    isOpen.value = false;
  }
}
</script>

<template>
  <Popover :open="isOpen" @update:open="isOpen = $event">
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        :class="
          cn(
            'w-full justify-start font-normal',
            !value && 'text-slate-500 dark:text-slate-400',
          )
        "
      >
        <CalendarIcon class="mr-2 h-4 w-4" />
        {{
          value ? df.format(value.toDate(getLocalTimeZone())) : $t('pickADate')
        }}
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0">
      <slot>
        <Calendar
          v-bind="props"
          v-model="value"
          initial-focus
          @update:model-value="$event && close()"
        />
      </slot>
    </PopoverContent>
  </Popover>
</template>

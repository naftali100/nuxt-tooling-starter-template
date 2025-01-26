<script setup lang="ts">
import { CheckIcon, CopyIcon, EyeIcon, EyeOffIcon } from 'lucide-vue-next';
import { ref, computed } from 'vue';

const { value = '' } = defineProps<{
  value?: string;
  label: string;
}>();

const copied = ref(false);
const isRevealed = ref(false);

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(value);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
};

const displayedValue = computed(() =>
  isRevealed.value ? value : value.replace(/./g, '•'),
);

const toggleReveal = () => {
  isRevealed.value = !isRevealed.value;
};
</script>

<template>
  <div class="space-y-2">
    <Label for="value-input">
      {{ label }}
    </Label>
    <div class="flex">
      <Input
        id="value-input"
        type="text"
        :value="displayedValue"
        readonly
        class="flex-grow rounded-e-none font-mono"
      />
      <Button
        type="button"
        variant="outline"
        class="h-26 rounded-none"
        :aria-label="`Reveal ${label}`"
        @click="toggleReveal"
      >
        <component :is="isRevealed ? EyeOffIcon : EyeIcon" class="h-4 w-4" />
      </Button>
      <Button
        type="button"
        variant="outline"
        class="h-26 rounded-s-none"
        :aria-label="`Copy ${label}`"
        @click="copyToClipboard"
      >
        <component :is="copied ? CheckIcon : CopyIcon" class="h-4 w-4" />
      </Button>
    </div>
    <p v-if="copied" class="text-sm text-green-600" aria-live="polite">
      Copied to clipboard!
    </p>
  </div>
</template>

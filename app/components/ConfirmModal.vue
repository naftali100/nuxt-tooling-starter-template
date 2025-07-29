<script setup lang="ts">
defineProps({
  btnText: {
    type: String,
    default: 'delete',
  },
  title: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    default: null,
  },
  confirm: {
    type: String,
    default: null,
    required: false,
  },
});

defineEmits(['confirm']);
</script>
<template>
  <AlertDialog>
    <AlertDialogTrigger as-child>
      <slot>
        <Button class="font-semibold" variant="destructive">
          {{ btnText ?? $t('delete') }}
        </Button>
      </slot>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>{{ title ?? $t('areYouSure') }}</AlertDialogTitle>
        <AlertDialogDescription>
          {{ description ?? $t('deleteConfirm') }}
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>{{ $t('cancel') }}</AlertDialogCancel>
        <AlertDialogAction @click="$emit('confirm')">
          {{ confirm ?? $t('delete') }}
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>

<style lang="scss" scoped></style>

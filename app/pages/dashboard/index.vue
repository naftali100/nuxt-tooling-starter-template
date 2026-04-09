<script setup lang="ts"></script>
<template>
  <div class="mx-auto w-1/2 space-y-5 rounded-lg border p-10 text-xl">
    <h1>{{ $t('welcome') }}</h1>
    <div class="flex items-center justify-center gap-5">
      <Show when="signed-in">
        <UserButton />
      </Show>
      <Show when="signed-out">
        <SignInButton />
      </Show>
      <LanguageSwitch />
      <ThemeSwitch />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

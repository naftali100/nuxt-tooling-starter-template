<script setup lang="ts">
import { Toaster } from '@/components/ui/sonner';
import { dark } from '@clerk/themes';
import { ConfigProvider as RadixConfigProvider } from 'radix-vue';
const clerk = useClerk();
const colorMode = useColorMode();
const { locale, localeProperties } = useI18n();
watchEffect(() => {
  // clerk.value?.
  // if (colorMode.value === 'dark') {
  //   clerk.__unstable__updateProps({ appearance: { baseTheme: dark } });
  // } else {
  //   clerk.__unstable__updateProps({ appearance: {} });
  // }

  useHead({
    htmlAttrs: {
      dir: localeProperties.value.dir,
      lang: locale.value,
    },
  });
});
defineOgImageComponent('Pergel', {
  headline: '',
  title: 'CHANGE_ME',
  description: 'CHANGE_ME',
  colorMode: colorMode.preference,
});

useSeoMeta({
  titleTemplate: null,
});

useHead({
  title: 'CHANGE_ME',
  meta: [
    {
      name: 'description',
      content: 'CHANGE_ME',
    },
    {
      name: 'keywords',
      content: 'CHANGE_ME',
    },
    {
      name: 'apple-mobile-web-app-title',
      content: 'CHANGE_ME',
    },
  ],
});
</script>
<template>
  <div class="">
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    <RadixConfigProvider :dir="localeProperties.dir === 'rtl' ? 'rtl' : 'ltr'">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </RadixConfigProvider>
    <ClientOnly>
      <Toaster
        rich-colors
        :theme="$colorMode.value === 'dark' ? 'dark' : 'light'"
        :position="
          useTextDirection().value === 'rtl' ? 'bottom-left' : 'bottom-right'
        "
      />
    </ClientOnly>
  </div>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.1s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>

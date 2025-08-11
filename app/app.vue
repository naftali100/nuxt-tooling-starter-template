<script setup lang="ts">
import { Toaster } from '@/components/ui/sonner';
// import { dark, shadcn } from '@clerk/themes';
import { heIL, enUS, frFR, arSA } from '@clerk/localizations';
import { ConfigProvider as RekaConfigProvider } from 'reka-ui';

const clerk = useClerk();
const colorMode = useColorMode();
const { locale, localeProperties } = useI18n();
watchEffect(() => {
  if (clerk.value?.loaded) {
    // if (colorMode.value === 'dark') {
    //   // TODO: theme switcher not working
    //   updateClerkOptions({
    //     appearance: {
    //       baseTheme: shadcn,
    //     },
    //   });
    // } else {
    //   updateClerkOptions({
    //     appearance: {
    //       baseTheme: undefined,
    //     },
    //   });
    // }

    const clerkLanguages = {
      he: heIL,
      en: enUS,
      fr: frFR,
      ar: arSA,
    };

    const clerkLanguage = clerkLanguages[locale.value];

    if (clerkLanguage) {
      updateClerkOptions({
        localization: clerkLanguage,
      });
    }
  }

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
    <RekaConfigProvider :dir="localeProperties.dir === 'rtl' ? 'rtl' : 'ltr'">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </RekaConfigProvider>
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

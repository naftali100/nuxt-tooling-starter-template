<script setup lang="ts">
import type { Component } from 'vue';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { HomeIcon } from '@lucide/vue';

const {
  listClasses = 'flex items-center gap-x-2 text-sm font-medium',
  activeClasses = 'text-gray-400 hover:text-gray-500',
  homeElement = HomeIcon,
  capitalizeLinks = false,
  className: _className = '',
  separatorComponent = undefined,
} = defineProps<{
  className?: string;
  separatorComponent?: Component;
  listClasses?: string;
  activeClasses?: string;
  homeElement?: Component;
  capitalizeLinks?: boolean;
}>();

const { localeCodes } = useI18n();

const pathNames = computed(() => {
  const { path } = useRoute();
  return path.split('/').filter((path) => path);
});
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbPage>
          <component :is="homeElement" aria-label="Home" />
        </BreadcrumbPage>
      </BreadcrumbItem>
      <BreadcrumbSeparator class="rtl:rotate-180" />
      <template v-for="(pathPart, index) in pathNames" :key="index">
        <template v-if="!localeCodes.includes(pathPart as any)">
          <BreadcrumbItem>
            <BreadcrumbPage
              v-if="
                $route.path === `/${pathNames.slice(0, index + 1).join('/')}`
              "
              :class="[listClasses, activeClasses]"
              >{{ $t(pathPart) }}</BreadcrumbPage
            >
            <BreadcrumbLink v-else as-child>
              <NuxtLinkLocale
                :to="{
                  path: `/${pathNames.slice(0, index + 1).join('/')}`,
                }"
                :class="{ capitalize: capitalizeLinks }"
                >{{ $t(pathPart) }}</NuxtLinkLocale
              >
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator
            v-if="index < pathNames.length - 1"
            class="rtl:rotate-180"
          >
            <component :is="separatorComponent" v-if="!separatorComponent" />
          </BreadcrumbSeparator>
        </template>
      </template>
    </BreadcrumbList>
  </Breadcrumb>
</template>

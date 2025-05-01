<template>
  <header class="w-full bg-white dark:bg-gray-900 shadow-logo dark:shadow-gray-800 transition-colors duration-200">
    <!-- Theme Toggle - Fixed Position -->
    <div class="fixed right-4 top-4 z-50">
      <button 
        @click="toggleColorMode" 
        class="p-2 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 transition-colors rounded-full"
        aria-label="Toggle dark mode"
      >
        <svg v-if="colorMode.value === 'dark'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      </button>
    </div>

    <div class="mx-auto max-w-6xl px-4 py-3 md:py-4">
      <!-- Logo Header -->
      <div class="flex justify-center mb-3 md:mb-4">
        <NuxtLink to="/" class="flex items-center hover:opacity-90 transition-opacity duration-200">
          <img 
            src="/images/logo.jpg" 
            alt="Abingdon Antiques and More Logo" 
            :class="[
              'w-auto transition-all duration-500 ease-in-out transform',
              route.path === '/information' ? 'h-24' : 'h-36'
            ]"
            width="400"
            height="130"
            loading="eager"
            decoding="async"
          />
        </NuxtLink>
      </div>

      <!-- Navigation -->
      <nav class="border-t border-b border-logo-200 dark:border-gray-700 py-2 md:py-3">
        <ul class="flex justify-center space-x-4 md:space-x-8 text-lg">
          <li v-for="item in navItems" :key="item.href">
            <NuxtLink 
              :to="item.href"
              class="text-link-light dark:text-link-dark hover:underline transition-colors"
              active-class="text-logo-800 dark:text-white font-semibold"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Add dark mode support
const colorMode = useColorMode();
const route = useRoute();

// Navigation items
const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Information', href: '/information' },
];

// Toggle between light and dark mode
const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};
</script> 
<template>
  <header class="w-full bg-white dark:bg-gray-900 shadow-logo dark:shadow-gray-800 transition-colors duration-200">

      <div class="bg-logo-50 dark:bg-gray-800 border-b border-logo-200 dark:border-gray-700 py-2">
    <div class="mx-auto max-w-6xl px-4">
      <div class="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-6 text-sm">
        <!-- Mobile: Phone and Location on first line -->
        <div class="flex items-center justify-center gap-4 sm:gap-6 sm:contents">
          <!-- Phone -->
          <a href="tel:+12764771515" class="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <span class="font-medium">276-477-1515</span>
          </a>

          <!-- Location -->
          <AddressLink class="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span class="hidden sm:inline">227 W Main St, Abingdon, VA</span>
            <span class="sm:hidden">227 W Main St</span>
          </AddressLink>
        </div>

        <!-- Store Status - Second line on mobile, inline on desktop -->
        <div class="flex items-center gap-1 text-gray-500 dark:text-gray-400 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
            <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
          </svg>
          <span>Mon-Sat 10-6, Sun 1-4</span>
        </div>
      </div>
    </div>
  </div>

    <!-- Theme Toggle - Fixed Position -->
    <div class="fixed right-4 top-15 z-50">
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
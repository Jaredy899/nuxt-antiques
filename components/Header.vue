<template>
  <header class="bg-white dark:bg-gray-900 transition-colors duration-200">
    <div class="container mx-auto px-4">
      <!-- Dark Mode Toggle - Top Right -->
      <div class="flex justify-end py-0.5">
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
      
      <div class="flex flex-col items-center py-1">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center mb-3 hover:opacity-90 transition-opacity duration-200">
          <img 
            src="/images/logo.jpg" 
            alt="Abingdon Antiques and More Logo" 
            :class="[
              'w-auto transition-all duration-500 ease-in-out transform',
              isInformationPage ? 'h-24' : 'h-36'
            ]"
            width="400"
            height="130"
            loading="eager"
            decoding="async"
          />
        </NuxtLink>

        <!-- Navigation -->
        <nav class="flex flex-wrap justify-center items-center gap-8">
          <NuxtLink 
            to="/" 
            class="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 transition-colors font-serif text-lg"
            active-class="text-red-600 dark:text-red-500 font-semibold"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            to="/information" 
            class="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 transition-colors font-serif text-lg"
            active-class="text-red-600 dark:text-red-500 font-semibold"
          >
            Information
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Add dark mode support
const colorMode = useColorMode();
const route = useRoute();

// Computed property to check if we're on the information page
const isInformationPage = computed(() => route.path === '/information');

// Toggle between light and dark mode
const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};
</script> 
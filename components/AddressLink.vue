<template>
  <a 
    :href="mapsUrl"
    :class="className"
    @click.prevent="openMaps"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
interface Props {
  address: string;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  class: "text-logo-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors underline hover:underline-offset-4"
});

const className = computed(() => props.class);
const mapsUrl = computed(() => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(props.address)}`);

const openMaps = () => {
  window.open(mapsUrl.value, '_blank');
};
</script> 
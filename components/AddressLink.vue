<template>
  <a
    :href="mapsUrl"
    :class="className"
    @click="handleClick"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
interface Props {
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  class: "text-logo-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
});

const className = computed(() => props.class);
const address = "227 W Main St, Abingdon, VA 24210";
const mapsUrl = computed(() => 
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
);

const handleClick = (e: Event) => {
  e.preventDefault();
  window.open(mapsUrl.value, '_blank');
};
</script>
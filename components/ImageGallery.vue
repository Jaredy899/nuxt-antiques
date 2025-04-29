<template>
  <section class="py-8">
    <h2 v-if="title" class="text-3xl font-serif font-bold text-center mb-8 text-gray-900 dark:text-white">{{ title }}</h2>
    
    <div :class="gridColsClass">
      <div
        v-for="(image, index) in images"
        :key="index"
        :data-image="image"
        :class="[aspectRatioClass, 'relative cursor-pointer group gallery-image']"
        @click="openLightbox(image)"
      >
        <img
          :src="image"
          :alt="`Gallery image ${index + 1}`"
          class="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg" />
      </div>
    </div>

    <!-- Simple Lightbox -->
    <div
      ref="lightbox"
      class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 hidden overflow-auto cursor-pointer"
      @click="closeLightbox"
    >
      <div class="relative w-full h-full flex items-center justify-center">
        <img
          ref="lightboxImage"
          :src="selectedImage"
          alt="Selected item"
          class="max-w-full max-h-[90vh] object-contain"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  images: string[];
  title?: string;
  columns?: 1 | 2 | 3 | 4;
  aspectRatio?: 'square' | 'video' | 'auto';
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  columns: 3,
  aspectRatio: 'square'
});

const lightbox = ref<HTMLElement | null>(null);
const lightboxImage = ref<HTMLImageElement | null>(null);
const selectedImage = ref('');

const gridColsClass = computed(() => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };
  return `grid ${gridCols[props.columns]} gap-6`;
});

const aspectRatioClass = computed(() => {
  const aspectRatioClasses = {
    'square': 'aspect-square',
    'video': 'aspect-video',
    'auto': 'aspect-auto'
  };
  return aspectRatioClasses[props.aspectRatio];
});

const openLightbox = (image: string) => {
  selectedImage.value = image;
  if (lightbox.value) {
    lightbox.value.classList.remove('hidden');
  }
};

const closeLightbox = () => {
  if (lightbox.value) {
    lightbox.value.classList.add('hidden');
  }
};
</script>

<style scoped>
#lightbox-image {
  transition: transform 0.3s ease-in-out;
}
</style> 
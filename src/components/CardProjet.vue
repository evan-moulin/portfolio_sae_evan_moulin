<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { defineProps } from 'vue'
const { title, description, image, tags, link } = defineProps<{
  title: string,
  description: string,
  image: string,
  tags: string,
  link: string
}>()
</script>


<template>
  <div class="max-w-xs rounded overflow-hidden shadow-lg m-4 relative">
    <img class="w-full" :src="image" alt="Project 1" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ title }}</div>
      <p class="text-gray-700 text-base">
        {{ description }}
      </p>
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2"
        >{{ tags }}</span
      >
    </div>
    <RouterLink
      class="absolute bottom-0 right-0 mb-4 mr-4 flex items-center text-blue-500 hover:text-slate-900"
      :to="link"
    >
      <span>En savoir plus</span>
    </RouterLink>
  </div>
</template>

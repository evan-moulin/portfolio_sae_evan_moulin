<script setup lang="ts">
import { defineProps } from "vue";

const { title, description, svg, bgColor, iconColor } = defineProps<{
  title: string;
  description: string;
  svg: string;
  bgColor: string;
  iconColor: string;
}>();
</script>

<template>
  <div class="rounded-xl bg-white p-6 text-center shadow-xl">
    <div
      :class="[
        'mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full',
        bgColor,
      ]"
    >
      <img
        :src="svg"
        :style="{ color: iconColor }"
        alt="Icon"
        class="w-10 h-10"
      />
    </div>
    <h1 class="text-darken mb-3 text-xl font-medium lg:px-14">{{ title }}</h1>
    <p class="px-4 text-gray-500">{{ description }}</p>
  </div>
</template>

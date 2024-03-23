<script setup>
import HeaderPage from "./components/HeaderPage.vue";
import FooterPage from "./components/FooterPage.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <HeaderPage />
  <body>
    <RouterView />
  </body>
  <FooterPage />
</template>

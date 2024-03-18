<script setup>
import HeaderPage from './components/HeaderPage.vue';
import FooterPage from './components/FooterPage.vue';
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <HeaderPage />
  <body class="bg-zinc-950">
    <RouterView /> 
  </body>     
  <FooterPage />
</template>

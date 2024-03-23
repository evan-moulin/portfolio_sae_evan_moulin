<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);

  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <header class="bg-zinc-950 py-4 p-4 fixed w-full z-10">
    <div class="container mx-auto">
      <div class="flex items-center justify-between">
        <a class="text-white text-2xl font-bold" href="/">EvanMoulin</a>
        <button
          @click="toggleMobileMenu"
          class="text-white focus:outline-none md:hidden mr-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <nav class="hidden md:block">
          <ul class="flex space-x-10 pr-4 font-medium">
            <li>
              <button
                @click="scrollToSection('home')"
                class="text-white menu-link"
              >
                Home
              </button>
            </li>
            <li>
              <button
                @click="scrollToSection('about')"
                class="text-white menu-link"
              >
                About
              </button>
            </li>
            <li>
              <button
                @click="scrollToSection('portfolio')"
                class="text-white menu-link"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                @click="scrollToSection('contact')"
                class="text-white menu-link"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div v-if="isMobileMenuOpen" class="md:hidden">
      <nav class="bg-zinc-950 px-4 pt-2 pb-4 rounded-lg shadow-lg">
        <ul class="flex flex-col space-y-2">
          <li>
            <button
              @click="scrollToSection('home')"
              class="text-white font-semibold py-2 px-4 rounded-lg"
            >
              Home
            </button>
          </li>
          <li>
            <button
              @click="scrollToSection('about')"
              class="text-white font-semibold py-2 px-4 rounded-lg"
            >
              About
            </button>
          </li>
          <li>
            <button
              @click="scrollToSection('portfolio')"
              class="text-white font-semibold py-2 px-4 rounded-lg"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              @click="scrollToSection('contact')"
              class="text-white font-semibold py-2 px-4 rounded-lg"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

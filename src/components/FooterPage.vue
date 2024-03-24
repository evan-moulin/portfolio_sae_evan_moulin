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
  <footer class="bg-black py-8">
    <div
      class="container mx-auto flex flex-col md:flex-row items-center justify-between px-4"
    >
      <!-- Informations de contact -->
      <div class="mb-4 md:mb-0 text-center md:text-left">
        <h2 class="text-white text-lg font-semibold mb-2">Contactez moi</h2>
        <p class="text-gray-400">101 Ter Grande rue</p>
        <p class="text-gray-400">Bavans, France</p>
        <p class="text-gray-400">evanmoulin25@gmail.com</p>
      </div>

      <!-- Liens de navigation -->
      <nav class="mb-4 md:mb-0 text-center">
        <h2 class="text-white text-lg font-semibold mb-2">Liens utiles</h2>

        <li>
          <button
            @click="scrollToSection('home')"
            class="text-gray-400 hover:text-white"
          >
            Home
          </button>
        </li>
        <li>
          <button
            @click="scrollToSection('about')"
            class="text-gray-400 hover:text-white"
          >
            About
          </button>
        </li>
        <li>
          <button
            @click="scrollToSection('portfolio')"
            class="text-gray-400 hover:text-white"
          >
            Projects
          </button>
        </li>
        <li>
          <button
            @click="scrollToSection('contact')"
            class="text-gray-400 hover:text-white"
          >
            Contact
          </button>
        </li>
      </nav>

      <!-- Réseaux sociaux -->
      <div class="text-center md:text-right">
        <h2 class="text-white text-lg font-semibold mb-2">Suivez-moi</h2>
        <div class="flex items-center justify-center md:justify-end space-x-4">
          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/in/evan-moulin-501616256/"
            class="text-gray-300 hover:text-white"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 0H2C0.895 0 0 0.895 0 2V20C0 21.105 0.895 22 2 22H20C21.105 22 22 21.105 22 20V2C22 0.895 21.105 0 20 0ZM6.954 18H4.004V8.508H6.954V18ZM5.449 7.151C4.498 7.151 3.729 6.38 3.729 5.431C3.729 4.482 4.499 3.712 5.449 3.712C6.397 3.712 7.168 4.483 7.168 5.431C7.168 6.38 6.397 7.151 5.449 7.151ZM18.004 18H15.056V13.384C15.056 12.283 15.036 10.867 13.523 10.867C11.988 10.867 11.752 12.066 11.752 13.304V18H8.804V8.508H11.634V9.805H11.674C12.068 9.059 13.03 8.272 14.465 8.272C17.452 8.272 18.004 10.238 18.004 12.794V18Z"
                fill="white"
              />
            </svg>
          </a>

          <!-- GitHub -->
          <a
            href="https://github.com/evan-moulin"
            class="text-gray-300 hover:text-white"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z"
                fill="white"
              />
            </svg>
          </a>

          <!-- Behance -->
          <a
            href="https://www.behance.net/evanmoulin"
            class="text-gray-300 hover:text-white"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.4061 11.8621C8.13924 11.7392 7.7641 11.6777 7.28277 11.6721H4.86914V14.6705H7.24435C7.73266 14.6705 8.1106 14.6062 8.38375 14.4728C8.87486 14.2283 9.12216 13.7609 9.12216 13.0686C9.12216 12.4839 8.88394 12.0808 8.4061 11.8621Z"
                fill="white"
              />
              <path
                d="M8.43684 9.53231C8.74073 9.34719 8.89162 9.01815 8.89162 8.54381C8.89162 8.02056 8.69183 7.67336 8.28874 7.5064C7.94224 7.39113 7.49863 7.33105 6.96142 7.33105H4.86914V9.81175H7.24784C7.73615 9.81105 8.13226 9.71814 8.43684 9.53231Z"
                fill="white"
              />
              <path
                d="M15.7293 9.73901C15.1879 9.73901 14.7687 9.8955 14.4711 10.2008C14.1728 10.5075 13.987 10.9224 13.9102 11.4478H17.5393C17.4981 10.8896 17.3116 10.4648 16.9749 10.1763C16.6416 9.88502 16.226 9.73901 15.7293 9.73901Z"
                fill="white"
              />
              <path
                d="M0 0V22H22V0H0ZM13.4472 5.8444H17.9747V6.96913H13.4472V5.8444ZM10.9916 15.0225C10.7778 15.3732 10.5131 15.668 10.1952 15.9069C9.83685 16.1821 9.4135 16.3708 8.92658 16.4714C8.43827 16.5734 7.90874 16.6236 7.34009 16.6236H2.27461V5.37914H7.70615C9.07399 5.3994 10.045 5.7962 10.6179 6.57653C10.9623 7.05506 11.132 7.62721 11.132 8.29226C11.132 8.98177 10.9595 9.53086 10.6116 9.94792C10.4195 10.1833 10.1337 10.3957 9.75581 10.5878C10.328 10.7988 10.7618 11.1264 11.0517 11.5819C11.3437 12.0332 11.4897 12.5844 11.4897 13.2278C11.4904 13.8957 11.3269 14.4943 10.9916 15.0225ZM19.724 12.838H13.8586C13.8915 13.6477 14.1702 14.2135 14.7011 14.5384C15.0204 14.7416 15.4081 14.8401 15.8615 14.8401C16.3414 14.8401 16.7284 14.7193 17.0302 14.472C17.1937 14.3407 17.3369 14.1541 17.462 13.9194H19.6115C19.5556 14.3979 19.2972 14.8814 18.8312 15.3753C18.1116 16.1584 17.1008 16.5517 15.8028 16.5517C14.7298 16.5517 13.7853 16.2185 12.9651 15.5597C12.1478 14.8988 11.7356 13.8237 11.7356 12.3336C11.7356 10.9371 12.1045 9.86689 12.8443 9.12219C13.5869 8.37749 14.5453 8.00584 15.726 8.00584C16.4266 8.00584 17.0568 8.13089 17.6205 8.38099C18.1815 8.63387 18.6454 9.03067 19.0093 9.57418C19.3412 10.0541 19.5521 10.6081 19.6527 11.2417C19.71 11.6071 19.7345 12.1408 19.724 12.838Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Barre de copyright -->
    <div
      class="border-t border-gray-100 mt-4 pt-5 text-center text-gray-300 text-sm bg-black"
    >
      © 2024 Evan Moulin. Tous droits réservés.
    </div>
  </footer>
</template>

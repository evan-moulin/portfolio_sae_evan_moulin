<script setup lang="ts">
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);

  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
const texts = [
  "Bonjour Je m'apelle Evan Moulin",
  "Je suis Web Designer",
  "Bienvenue sur mon portfolio",
]; // Liste des textes à afficher
let index = 0; // Index pour parcourir les textes

// Fonction pour changer le texte avec une animation
function switchText() {
  const textElement = document.getElementById("textSwitcher");
  textElement.classList.add("animate-fadeInOut");
  setTimeout(() => {
    textElement.textContent = texts[index];
    index = (index + 1) % texts.length;
    textElement.classList.remove("animate-fadeInOut");
  }, 1000); // Durée de l'animation
}

// Appel de la fonction switchText toutes les 3 secondes
setInterval(switchText, 3000);

import { ref } from "vue";

const email = ref("");
const object = ref("");
const message = ref("");

const submitForm = async () => {
  const formData = new FormData();
  formData.append("email", email.value);
  formData.append("object", object.value);
  formData.append("message", message.value);

  try {
    const response = await fetch("envoyer.php", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("Message envoyé avec succès !");
      email.value = "";
      object.value = "";
      message.value = "";
    } else {
      alert("Erreur lors de l'envoi du message. Veuillez réessayer.");
    }
  } catch (error) {
    console.error("Erreur lors de l'envoi du message:", error);
  }
};
</script>

<template>
  <!-- Section Accueil -->

  <div
    id="home"
    class="h-screen flex flex-col items-center justify-center bg-zinc-950 text-white relative"
  >
    <div class="text-center">
      <h1 class="text-7xl font-bold" id="textSwitcher">
        Bonjour, je m'appelle Evan Moulin
      </h1>
      <p class="mt-4 text-xl">Développeur Web passionné</p>
    </div>
    <!-- Ajout d'une marge supérieure pour faire descendre le bouton -->
    <div class="mt-16">
      <button
        @click="scrollToSection('about')"
        class="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
      >
        Découvrir mon parcours
      </button>
    </div>
    <!-- Ajout des icônes sur le côté droit -->
    <div class="absolute bottom-0 right-0 mb-4 mr-4 flex flex-row items-center">
      <a href=""
        ><img
          src="../components/icons/instagram.svg"
          alt="Logo insta"
          class="mr-4"
      /></a>
      <a href=""
        ><img
          src="../components/icons/linkedin.svg"
          alt="Logo linkedin"
          class="mr-4"
      /></a>
      <a href=""
        ><img
          src="../components/icons/github.svg"
          alt="Logo github"
          class="mr-4"
      /></a>
      <a href=""
        ><img src="../components/icons/behance.svg" alt=" Logo behance"
      /></a>
    </div>
  </div>

  <!-- about -->
  <section id="about" class="py-16 md:py-24 bg-gray-100">
    <div class="container mx-auto px-4 md:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <!-- Image à gauche -->
        <div class="text-center md:text-left">
          <img
            src="../components/icons/pinot_1.png"
            alt="Image About"
            class="w-full md:max-w-md rounded-lg shadow-md mx-auto md:ml-0 animate-float"
          />
        </div>

        <!-- Contenu texte sur la droite -->
        <div class="text-center md:text-left md:mx-auto">
          <!-- Modification de cette ligne -->
          <h1
            class="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-zinc-950 mb-4"
          >
            ABOUT
          </h1>
          <p class="text-base md:text-lg lg:text-xl text-gray-700 mb-6">
            Je suis Evan Moulin, un passionné de design. Actuellement étudiant,
            mon objectif est de créer des designs élégants, fonctionnels et
            innovants qui captivent et inspirent.
          </p>
          <p class="text-base md:text-lg lg:text-xl text-gray-700 mb-6">
            Je me spécialise actuellement dans le design graphique, et j'ai pour
            but de devenir un designer complet pour une grande entreprise.
          </p>
          <p class="text-base md:text-lg lg:text-xl text-gray-700 mb-6">
            Je m'efforce continuellement de repousser les limites de la
            créativité et de l'innovation, tout en restant à l'écoute des
            besoins et des aspirations de mes clients.
          </p>
          <p class="text-base md:text-lg lg:text-xl text-gray-700 mb-4">
            N'hésitez pas à me contacter pour discuter de votre prochain projet
            de design!
          </p>
        </div>
      </div>
    </div>

    <h1 class="text-xl md:text-4xl ml-8 mt-12 font-bold text-zinc-950 mb-4">
      Mes compétences
    </h1>
    <div class="w-full pt-12 p-4">
      <div class="grid gap-14 md:grid-cols-3 md:gap-5">
        <div class="rounded-xl bg-white p-6 text-center shadow-xl">
          <div
            class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 25"
              fill="none"
              stroke="white"
              stroke-width="1"
            >
              <rect x="6" y="8" width="12" height="7" rx="1" ry="1" />
              <line x1="8" y1="19" x2="16" y2="19" />
              <line x1="12" y1="15" x2="12" y2="19" />
            </svg>
          </div>
          <h1 class="text-darken mb-3 text-xl font-medium lg:px-14">
            Développement Web
          </h1>
          <p class="px-4 text-gray-500">
            Lors de mes études, j'ai appris à maîtriser les langages HTML, CSS
            ainsi que Tailwind. J'ai également appris à utiliser des frameworks
            comme Vue.js.
          </p>
        </div>
        <div
          data-aos-delay="150"
          class="rounded-xl bg-white p-6 text-center shadow-xl"
        >
          <div
            class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-rose-500 shadow-rose-500/40"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="white"
              class="bi bi-brush"
              viewBox="0 0 16 16"
            >
              <path
                d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.1 6.1 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.1 8.1 0 0 1-3.078.132 4 4 0 0 1-.562-.135 1.4 1.4 0 0 1-.466-.247.7.7 0 0 1-.204-.288.62.62 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896q.19.012.348.048c.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04M4.705 11.912a1.2 1.2 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.4 3.4 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3 3 0 0 0 .126-.75zm1.44.026c.12-.04.277-.1.458-.183a5.1 5.1 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005zm3.582-3.043.002.001h-.002z"
              />
            </svg>
          </div>
          <h1 class="text-darken mb-3 text-xl font-medium lg:px-14">Design</h1>
          <p class="px-4 text-gray-500">
            En design, j'ai appris à maîtriser les logiciels de design tel que
            Figma, Illustrator et Photoshop.
          </p>
        </div>
        <div
          data-aos-delay="300"
          class="rounded-xl bg-white p-6 text-center shadow-xl"
        >
          <div
            class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-sky-500 shadow-sky-500/40"
          >
            <svg
              viewBox="0 0 55 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-white"
            >
              <path
                d="M8.25 19.25C11.2836 19.25 13.75 16.7836 13.75 13.75C13.75 10.7164 11.2836 8.25 8.25 8.25C5.21641 8.25 2.75 10.7164 2.75 13.75C2.75 16.7836 5.21641 19.25 8.25 19.25ZM46.75 19.25C49.7836 19.25 52.25 16.7836 52.25 13.75C52.25 10.7164 49.7836 8.25 46.75 8.25C43.7164 8.25 41.25 10.7164 41.25 13.75C41.25 16.7836 43.7164 19.25 46.75 19.25ZM49.5 22H44C42.4875 22 41.1211 22.6102 40.1242 23.5984C43.5875 25.4977 46.0453 28.9266 46.5781 33H52.25C53.7711 33 55 31.7711 55 30.25V27.5C55 24.4664 52.5336 22 49.5 22ZM27.5 22C32.8195 22 37.125 17.6945 37.125 12.375C37.125 7.05547 32.8195 2.75 27.5 2.75C22.1805 2.75 17.875 7.05547 17.875 12.375C17.875 17.6945 22.1805 22 27.5 22ZM34.1 24.75H33.3867C31.5992 25.6094 29.6141 26.125 27.5 26.125C25.3859 26.125 23.4094 25.6094 21.6133 24.75H20.9C15.4344 24.75 11 29.1844 11 34.65V37.125C11 39.4023 12.8477 41.25 15.125 41.25H39.875C42.1523 41.25 44 39.4023 44 37.125V34.65C44 29.1844 39.5656 24.75 34.1 24.75ZM14.8758 23.5984C13.8789 22.6102 12.5125 22 11 22H5.5C2.46641 22 0 24.4664 0 27.5V30.25C0 31.7711 1.22891 33 2.75 33H8.41328C8.95469 28.9266 11.4125 25.4977 14.8758 23.5984Z"
                fill="white"
              ></path>
            </svg>
          </div>
          <h1
            class="text-darken mb-3 pt-3 text-xl font-medium lg:h-14 lg:px-14"
          >
            Communication
          </h1>
          <p class="px-4 text-gray-500">
            En Communication, j'ai appris la gestion de projet, ainsi que la
            maîtrise d'outil comme Trello ou la mise en place de Gantt
          </p>
        </div>
      </div>
    </div>
  </section>

  <div id="portfolio" class="container mx-auto py-8 bg-gray-100">
    <h2
      class="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-zinc-950 mb-4"
    >
      Projets
    </h2>

    <div class="flex flex-wrap justify-center">
      <!-- Card 1 -->
      <div class="max-w-xs rounded overflow-hidden shadow-lg m-4 relative">
        <img
          class="w-full"
          src="../components/icons/projet_sml.png"
          alt="Project 1"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Share my loc</div>
          <p class="text-gray-700 text-base">
            Share my Loc est une application web révolutionnaire qui vous permet
            de retrouver facilement amis.
          </p>
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2"
            >#Web</span
          >
        </div>
        <RouterLink
          class="absolute bottom-0 right-0 mb-4 mr-4 flex items-center text-blue-500 hover:text-slate-900"
          to="sml"
        >
          <span>En savoir plus</span>
        </RouterLink>
      </div>

      <!-- Card 2 -->
      <div class="max-w-xs rounded overflow-hidden shadow-lg m-4 relative">
        <img
          class="w-full"
          src="../components/icons/projet_cinephoria.png"
          alt="Project 2"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Cinéphoria</div>
          <p class="text-gray-700 text-base">
            Cinéphoria est la plateforme de streaming idéal pour tout les
            amateurs de film et de série.
          </p>
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2"
            >#Mobile</span
          >
        </div>
        <RouterLink
          class="absolute bottom-0 right-0 mb-4 mr-4 flex items-center text-blue-500 hover:text-slate-900"
          to="sml"
        >
          <span>En savoir plus</span>
        </RouterLink>
      </div>

      <!-- Card 3 -->
      <div class="max-w-xs rounded overflow-hidden shadow-lg m-4 relative">
        <img
          class="w-full"
          src="../components/icons/projet_handball.png"
          alt="Project 3"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Handball league</div>
          <p class="text-gray-700 text-base">
            Handball-League est un site qui recense les équipes et joueurs du
            championnat de France de handball.
          </p>
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2"
            >#Design</span
          >
        </div>

        <div class="absolute bottom-0 right-0 mb-4 mr-4">
          <RouterLink
            class="text-blue-500 flex items-center hover:text-slate-900"
            to="sml"
          >
            <span>En savoir plus</span>
          </RouterLink>
        </div>
      </div>

      <!-- Card 4 -->
      <div class="max-w-xs rounded overflow-hidden shadow-lg m-4 relative">
        <img
          class="w-full"
          src="../components/icons/projet_pinot.png"
          alt="Project 4"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Pinot</div>
          <p class="text-gray-700 text-base">
            Pinot est un site de montre de Luxe dans lequel l'utilisateur peut
            personnaliser sa montre.
          </p>
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2"
            >#UI/UX</span
          >
        </div>
        <div class="absolute bottom-0 right-0 mb-4 mr-4">
          <RouterLink
            to="sml"
            class="text-blue-500 flex items-center hover:text-slate-900"
          >
            <span>En savoir plus</span>
          </RouterLink>
        </div>
      </div>

      <!-- Card 5 -->
      <div class="max-w-xs rounded overflow-hidden shadow-lg m-4 relative">
        <img
          class="w-full"
          src="../components/icons/projet_canopee.png"
          alt="Project 5"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">La Canopée</div>
          <p class="text-gray-700 text-base">
            La Canopée est un chalet de montagne qui souhaitait avoir un logo en
            rapport avec ses valeurs.
          </p>
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2"
            >#Marketing</span
          >
        </div>
        <div class="absolute bottom-0 right-0 mb-4 mr-4">
          <RouterLink
            to="sml"
            class="text-blue-500 flex items-center hover:text-slate-900"
          >
            <span>En savoir plus</span>
          </RouterLink>
        </div>
      </div>

      <!-- Card 6 -->
      <div class="max-w-xs rounded overflow-hidden shadow-lg m-4 relative">
        <img
          class="w-full"
          src="../components/icons/projet_edenio.png"
          alt="Project 6"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Edenio</div>
          <p class="text-gray-700 text-base">
            Edenio est une application web qui vise à créer des recettes et des
            règimes alimentaires.
          </p>
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2"
            >#E-commerce</span
          >
        </div>
        <div class="absolute bottom-0 right-0 mb-4 mr-4">
          <RouterLink
            to="sml"
            class="text-blue-500 flex items-center hover:text-slate-900"
          >
            <span>En savoir plus</span>
          </RouterLink>
        </div>
      </div>

      <div class="max-w-xs rounded overflow-hidden shadow-lg m-4 relative">
        <img
          class="w-full"
          src="../components/icons/projet_benevolaction.png"
          alt="Project 6"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Bénévolaction</div>
          <p class="text-gray-700 text-base">
            Benevolaction est un site qui a pour but de trouver une association
            pour chaque bénévole.
          </p>
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2"
            >#E-commerce</span
          >
        </div>
        <div class="absolute bottom-0 right-0 mb-4 mr-4">
          <RouterLink
            to="sml"
            class="text-blue-500 flex items-center hover:text-slate-900"
          >
            <span>En savoir plus</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto py-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <!-- Card 2 -->
      <div class="relative group">
        <div class="overflow-hidden rounded-lg shadow-lg">
          <RouterLink to="Sml">
            <img
              class="w-full h-auto hover:bg-slate-950"
              src="../components/icons/first_sml.png"
              alt="Placeholder image"
            />
          </RouterLink>
          <div class="absolute bottom-0 right-0 w-full p-4">
            <RouterLink class="text-white menu-link" to="Sml">
              <h2
                class="text-white text-xl font-semibold group-hover:text-gray-900 transition duration-300 ease-in-out"
              >
                Share My Loc
              </h2>
            </RouterLink>
            <RouterLink
              class="absolute top-0 bottom-0 right-0 flex items-center justify-center w-12 text-white group-hover:text-gray-900 transition duration-300 ease-in-out"
              to="Sml"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 -960 960 960"
                width="32"
              >
                <path
                  d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"
                  fill="currentColor"
                />
              </svg>
            </RouterLink>
          </div>
        </div>
      </div>

      <div class="relative group">
        <div class="overflow-hidden rounded-lg shadow-lg">
          <RouterLink to="Sml">
            <img
              class="w-full h-auto hover:bg-slate-950"
              src="../components/icons/first_cine.png"
              alt="Placeholder image"
            />
          </RouterLink>
          <div class="absolute bottom-0 right-0 w-full p-4">
            <RouterLink class="text-white menu-link" to="Sml">
              <h2
                class="text-white text-xl font-semibold group-hover:text-gray-900 transition duration-300 ease-in-out"
              >
                Cinephoria
              </h2>
            </RouterLink>
            <RouterLink
              class="absolute top-0 bottom-0 right-0 flex items-center justify-center w-12 text-white group-hover:text-gray-900 transition duration-300 ease-in-out"
              to="Sml"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 -960 960 960"
                width="32"
              >
                <path
                  d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"
                  fill="currentColor"
                />
              </svg>
            </RouterLink>
          </div>
        </div>
      </div>

      <div class="relative group">
        <div class="overflow-hidden rounded-lg shadow-lg">
          <RouterLink to="Sml">
            <img
              class="w-full h-auto hover:bg-slate-950"
              src="../components/icons/first_handball.png"
              alt="Placeholder image"
            />
          </RouterLink>
          <div class="absolute bottom-0 right-0 w-full p-4">
            <RouterLink class="text-white menu-link" to="Sml">
              <h2
                class="text-white text-xl font-semibold group-hover:text-gray-900 transition duration-300 ease-in-out"
              >
                Cinephoria
              </h2>
            </RouterLink>
            <RouterLink
              class="absolute top-0 bottom-0 right-0 flex items-center justify-center w-12 text-white group-hover:text-gray-900 transition duration-300 ease-in-out"
              to="Sml"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 -960 960 960"
                width="32"
              >
                <path
                  d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"
                  fill="currentColor"
                />
              </svg>
            </RouterLink>
          </div>
        </div>
      </div>

      <div class="relative group">
        <div class="overflow-hidden rounded-lg shadow-lg">
          <RouterLink to="Sml">
            <img
              class="w-full h-auto hover:bg-slate-950"
              src="../components/icons/first_cine.png"
              alt="Placeholder image"
            />
          </RouterLink>
          <div class="absolute bottom-0 right-0 w-full p-4">
            <RouterLink class="text-white menu-link" to="Sml">
              <h2
                class="text-white text-xl font-semibold group-hover:text-gray-900 transition duration-300 ease-in-out"
              >
                Cinephoria
              </h2>
            </RouterLink>
            <RouterLink
              class="absolute top-0 bottom-0 right-0 flex items-center justify-center w-12 text-white group-hover:text-gray-900 transition duration-300 ease-in-out"
              to="Sml"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 -960 960 960"
                width="32"
              >
                <path
                  d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"
                  fill="currentColor"
                />
              </svg>
            </RouterLink>
          </div>
        </div>
      </div>

      <div class="relative group">
        <div class="overflow-hidden rounded-lg shadow-lg">
          <RouterLink to="Sml">
            <img
              class="w-full h-auto hover:bg-slate-950"
              src="../components/icons/first_cine.png"
              alt="Placeholder image"
            />
          </RouterLink>
          <div class="absolute bottom-0 right-0 w-full p-4">
            <RouterLink class="text-white menu-link" to="Sml">
              <h2
                class="text-white text-xl font-semibold group-hover:text-gray-900 transition duration-300 ease-in-out"
              >
                Cinephoria
              </h2>
            </RouterLink>
            <RouterLink
              class="absolute top-0 bottom-0 right-0 flex items-center justify-center w-12 text-white group-hover:text-gray-900 transition duration-300 ease-in-out"
              to="Sml"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 -960 960 960"
                width="32"
              >
                <path
                  d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"
                  fill="currentColor"
                />
              </svg>
            </RouterLink>
          </div>
        </div>
      </div>

      <div class="relative group">
        <div class="overflow-hidden rounded-lg shadow-lg">
          <RouterLink to="Sml">
            <img
              class="w-full h-auto hover:bg-slate-950"
              src="../components/icons/first_handball.png"
              alt="Placeholder image"
            />
          </RouterLink>
          <div class="absolute bottom-0 right-0 w-full p-4">
            <RouterLink class="text-white menu-link" to="Sml">
              <h2
                class="text-white text-xl font-semibold group-hover:text-gray-900 transition duration-300 ease-in-out"
              >
                Cinephoria
              </h2>
            </RouterLink>
            <RouterLink
              class="absolute top-0 bottom-0 right-0 flex items-center justify-center w-12 text-white group-hover:text-gray-900 transition duration-300 ease-in-out"
              to="Sml"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 -960 960 960"
                width="32"
              >
                <path
                  d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"
                  fill="currentColor"
                />
              </svg>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    id="contact"
    class="max-w-md mx-auto mt-8 rounded-lg overflow-hidden shadow-lg"
  >
    <form
      @submit.prevent="submitForm"
      class="max-w-md mx-auto mt-8 p-8 rounded-lg shadow-lg"
    >
      <div class="mb-6">
        <label
          for="email"
          class="block text-sm font-semibold text-gray-700 mb-2"
          >Adresse Email:</label
        >
        <input
          type="email"
          id="email"
          v-model="email"
          required
          placeholder="Entrez votre adresse email"
          class="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
        />
      </div>

      <div class="mb-6">
        <label
          for="object"
          class="block text-sm font-semibold text-gray-700 mb-2"
          >Objet:</label
        >
        <input
          type="text"
          id="object"
          v-model="object"
          required
          placeholder="Sujet de votre message"
          class="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
        />
      </div>

      <div class="mb-6">
        <label
          for="message"
          class="block text-sm font-semibold text-gray-700 mb-2"
          >Message:</label
        >
        <textarea
          id="message"
          v-model="message"
          required
          placeholder="Votre message ici"
          class="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
        ></textarea>
      </div>

      <div class="flex justify-center">
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
        >
          Envoyer
        </button>
      </div>
    </form>
  </div>
</template>

<style>
@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-9px);
  }
  100% {
    transform: translatey(0px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-float-competence {
  animation: float 3s ease-in-out infinite;
}

.card-container .card {
  transition: transform 0.3s ease-in-out;
}

.card-container .card:hover {
  transform: translateY(-5px);
}
</style>

<script setup lang="ts">
import CardProjet from "@/components/CardProjet.vue";
import Competenceperso from "@/components/Competenceperso.vue";
const cards = [
  {
    title: "Share my loc",
    description:
      "Share my Loc est une application web révolutionnaire qui vous permet de retrouver facilement amis.",
    image: "projet_sml.png",
    tags: "#Web",
    link: "sml",
  },
  {
    title: "Cinéphoria",
    description:
      "Cinéphoria est la plateforme de streaming idéal pour tout les amateurs de film et de série.",
    image: "projet_cinephoria.png",
    tags: "#Mobile",
    link: "cinephoria",
  },
  {
    title: "Handball league",
    description:
      "Handball-League est un site qui recense les équipes et joueurs du championnat de France de handball.",
    image: "projet_handball.png",
    tags: "#Design",
    link: "handball",
  },
  {
    title: "Pinot",
    description:
      "Pinot est un site de montre de Luxe dans lequel l'utilisateur peut personnaliser sa montre.",
    image: "projet_pinot.png",
    tags: "#UI/UX",
    link: "pinot",
  },
  {
    title: "La Canopée",
    description:
      "La Canopée est un chalet de montagne qui souhaitait avoir un logo en rapport avec ses valeurs.",
    image: "projet_canopee.png",
    tags: "#Marketing",
    link: "canopee",
  },
  {
    title: "Edenio",
    description:
      "Edenio est une application web qui vise à créer des recettes et des régimes alimentaires.",
    image: "projet_edenio.png",
    tags: "#E-commerce",
    link: "edenio",
  },
  {
    title: "Bénévolaction",
    description:
      "Benevolaction est un site qui a pour but de trouver une association pour chaque bénévole.",
    image: "projet_benevolaction.png",
    tags: "#E-commerce",
    link: "benevolaction",
  },
];

const Competence = [
  {
    title: "Développement Web",
    description:
      "Lors de mes études, j'ai appris à maîtriser les langages HTML, CSS ainsi que Tailwind. J'ai également appris à utiliser des frameworks comme Vue.js.",
    image: "ordi.svg",
    bgColor: "bg-teal-400",
    iconColor: "white",
  },
  {
    title: "Design",
    description:
      "Pendant mes études, en design, j'ai appris à maîtriser les logiciels de design tel que Figma, Illustrator et Photoshop.",
    image: "pinceau.svg",
    bgColor: "bg-rose-500",
    iconColor: "white",
  },
  {
    title: "Communication",
    description:
      "En Communication, j'ai appris la gestion de projet, ainsi que la maîtrise d'outil comme Trello ou la mise en place de Gantt.",
    image: "communication.svg",
    bgColor: "bg-sky-500",
    iconColor: "white",
  },
];

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);

  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
const texts = ["Je suis Web Designer", "Bienvenue sur mon portfolio"];

let index = 0;

function switchText() {
  const textElement = document.getElementById("textSwitcher");
  textElement.classList.add("fade-out");
  setTimeout(() => {
    textElement.textContent = texts[index];
    index = (index + 1) % texts.length;
    textElement.classList.remove("fade-out");
  }, 500); // Durée de la transition
}

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
          <h1
            class="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-zinc-950 mb-4 hover: transition duration-300 ease-in-out transform hover:scale-105"
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
          <div class="flex justify-center md:justify-start">
            <a
              href="src/components/icons/CV_EvanMoulin.pdf"
              download
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Télécharger CV
            </a>
          </div>
        </div>
      </div>
    </div>

    <h1 class="text-xl md:text-4xl ml-8 mt-12 font-bold text-zinc-950 mb-4">
      Mes compétences
    </h1>
    <div class="w-full pt-12 p-4">
      <div class="grid gap-14 md:grid-cols-3 md:gap-5">
        <Competenceperso
          v-for="(uneCompetence, index) in Competence"
          :key="index"
          :title="uneCompetence.title"
          :description="uneCompetence.description"
          :svg="uneCompetence.image"
          :bgColor="uneCompetence.bgColor"
          :iconColor="uneCompetence.iconColor"
        />
      </div>
    </div>
  </section>

  <div id="portfolio" class="container mx-auto py-8 bg-gray-100">
    <h2
      class="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-zinc-950 mb-4 text-center hover: transition duration-300 ease-in-out transform hover:scale-105"
    >
      Projets
    </h2>
    <p class="text-center text-xl mt-10 mb-7">
      Dans cette catégorie, vous trouverez une sélection de mes projets réalisés
      par mes soins.
    </p>

    <div class="flex flex-wrap justify-center">
      <CardProjet
        v-for="(uneCard, index) in cards"
        :key="index"
        :title="uneCard.title"
        :description="uneCard.description"
        :tags="uneCard.tags"
        :image="uneCard.image"
        :link="uneCard.link"
      />
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

#textSwitcher {
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
}

#textSwitcher.fade-out {
  opacity: 0;
}
</style>

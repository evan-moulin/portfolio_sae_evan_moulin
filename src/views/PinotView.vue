<template>
  <div class="mx-auto px-4 py-8">
    <!-- Titre du projet -->
    <h1 class="text-5xl pt-20 font-bold mb-8">Pinot</h1>
    <div class="flex flex-col lg:flex-row items-center">
      <div class="mb-4 lg:mr-4 lg:mb-0 w-full lg:w-1/3 lg:order-last lg:ml-28">
        <img
          src="/public/projet_pinot.png"
          alt="Image du Projet"
          class="w-full rounded-lg shadow-lg"
        />
      </div>

      <div class="w-full lg:w-1/2 lg:order-first">
        <h2 class="text-2xl font-semibold mt-2">Description</h2>
        <p class="text-lg mt-3 text-gray-800 leading-relaxed">
          Bienvenue sur Pinot, votre destination de choix pour des montres de
          qualité exceptionnelle. Notre plateforme vous propose une sélection
          minutieuse de montres haut de gamme, conçues avec précision et souci
          du détail. Chez Pinot, nous croyons en la personnalisation, c'est
          pourquoi nous vous offrons la possibilité de configurer votre montre
          selon vos préférences, jusqu'au moindre détail. Que vous recherchiez
          l'élégance intemporelle d'une montre classique ou la modernité d'un
          design contemporain, Pinot vous accompagne dans la création de la
          montre de vos rêves. Rejoignez-nous pour une expérience unique où le
          savoir-faire horloger rencontre la personnalisation sur mesure.
          Découvrez l'artisanat horloger de qualité supérieure et trouvez la
          montre parfaite qui reflète votre style et votre personnalité chez
          Pinot.
        </p>
      </div>
    </div>

    <!-- Section Caractéristiques/Points forts -->
    <div class="my-8">
      <h2 class="text-2xl font-semibold mb-4">Caractéristiques principales</h2>
      <ul class="list-disc list-inside">
        <li>Configurateur</li>
      </ul>
    </div>

    <div class="my-8">
      <h2 class="text-2xl font-semibold mb-4">Outils utilisé</h2>
      <p class="ml-2">Illustrator, Figma</p>
    </div>

    <div class="my-8">
      <h2 class="text-2xl font-semibold mb-4">Galerie d'images</h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <!-- Image 1 -->
        <div>
          <img
            src="../components/icons/home_pinot.png"
            alt="Image 1"
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <!-- Image 2 -->
        <div>
          <img
            src="../components/icons/configurateur_pinot.png"
            alt="Image 2"
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <!-- Image 3 -->
        <div>
          <img
            src="../components/icons/contact_pinot.png"
            alt="Image 3"
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <!-- Image 4 -->
        <div>
          <img
            src="../components/icons/panier_pinot.png"
            alt="Image 4"
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>

    <!-- Call-to-Action -->
    <h2 class="text-2xl font-semibold mb-4">Liens du projet</h2>
    <div class="my-8 flex items-center">
      <a
        href="https://behance.net/gallery/185052293/Pinot"
        class="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg shadow-lg mr-4 hover:bg-gray-400 transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
        >Behance</a
      >
    </div>

    <!-- Bouton pour revenir à la page d'accueil -->
    <div class="my-8">
      <router-link
        to="/"
        class="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
        >Retour à l'accueil</router-link
      >
    </div>
  </div>
</template>

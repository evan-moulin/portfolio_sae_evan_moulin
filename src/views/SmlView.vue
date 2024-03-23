<template>
  <div class="mx-auto px-4 py-8">
    <!-- Titre du projet -->
    <h1 class="text-5xl pt-20 font-bold mb-8">Share my loc</h1>

    <div class="flex flex-col lg:flex-row items-center">
      <div class="mb-4 lg:mr-4 lg:mb-0 w-full lg:w-1/3 lg:order-last lg:ml-28">
        <img
          src="../components/icons/tel_sml.png"
          alt="Image du Projet"
          class="w-full rounded-lg shadow-lg"
        />
      </div>

      <div class="w-full lg:w-1/2 lg:order-first">
        <h2 class="text-2xl font-semibold mt-2">Description</h2>
        <p class="text-lg mt-3 text-gray-800 leading-relaxed">
          Share my Loc est une application web révolutionnaire qui vous permet
          de vous retrouver facilement avec vos amis. Fini les échanges de
          messages compliqués pour se donner rendez-vous ! Notre application
          simplifie la coordination en permettant à chaque utilisateur de
          partager sa localisation en temps réel. Vous pouvez rapidement
          planifier des rencontres via un point de rendez-vous  le plus proche
          entre chaque position  ou en sélectionnant un lieu spécifique.
          L'application calcule ensuite la meilleure trajectoire pour vous y
          rendre, affichant l'itinéraire et la distance sur une carte
          interactive. De plus, vous pouvez discuter avec vos amis directement
          via notre fonction de chat intégrée, facilitant ainsi la communication
          et la coordination. Ne perdez plus de temps à chercher vos amis,
          utilisez Share my Loc pour des rencontres faciles et rapides.
        </p>
      </div>
    </div>

    <!-- Section Caractéristiques/Points forts -->
    <div class="my-8">
      <h2 class="text-2xl font-semibold mb-4">Caractéristiques principales</h2>
      <ul class="list-disc list-inside">
        <li>Partage de localisation</li>
        <li>Messagerie</li>
        <li>Ajout d'amis</li>
        <li>Itinéraire précis</li>
        <li>Suivi en temps réel</li>
      </ul>
    </div>

    <div class="my-8">
      <h2 class="text-2xl font-semibold mb-4">Outils utilisé</h2>
      <p class="ml-2">Illustrator, Figma,</p>
    </div>

    <div class="my-8">
      <h2 class="text-2xl font-semibold mb-4">Galerie d'images</h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <!-- Image 1 -->
        <div>
          <img
            src="../components/icons/valeur_sml.png"
            alt="Nos valeurs"
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <!-- Image 2 -->
        <div>
          <img
            src="../components/icons/fonctionnalite_sml.png"
            alt="Fonctionnalités du projet"
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <!-- Image 3 -->
        <div>
          <img
            src="../components/icons/charte_sml.png"
            alt="Charte graphique du projet"
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <!-- Image 4 -->
        <div>
          <img
            src="../components/icons/recherche_sml.png"
            alt="Recherche du logo"
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>

    <!-- Call-to-Action -->
    <h2 class="text-2xl font-semibold mb-4">Liens du projet</h2>
    <div class="my-8 flex items-center">
      <a
        href="https://www.behance.net/gallery/184623237/Share-My-Loc"
        class="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg shadow-lg mr-4 hover:bg-gray-400 transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
        >Behance</a
      >
      <a
        href="https://sharemyloc.chatonnay.com/"
        class="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-400 transition duration-300"
        >Essayer le projet</a
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

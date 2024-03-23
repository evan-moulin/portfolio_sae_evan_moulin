<template>
  <div class="mx-auto px-4 py-8">
    <!-- Titre du projet -->
    <h1 class="text-5xl pt-20 font-bold mb-8">Handball-League</h1>

    <div class="flex flex-col lg:flex-row items-center">
      <div class="mb-4 lg:mr-4 lg:mb-0 w-full lg:w-1/3 lg:order-last lg:ml-28">
        <img
          src="/public/projet_handball.png"
          alt="Image du Projet"
          class="w-full rounded-lg shadow-lg"
        />
      </div>

      <div class="w-full lg:w-1/2 lg:order-first">
        <h2 class="text-2xl font-semibold mb-3 mt-2">Description</h2>
        <p class="text-lg text-gray-800 leading-relaxed">
          Bienvenue sur Handball League, la référence en matière d'informations
          sur le handball en France. Notre plateforme vous offre un accès
          privilégié à un univers passionnant où les clubs de handball sont à
          l'honneur et où les performances des joueurs sont scrutées de près.
          Que vous soyez un passionné du sport, un joueur engagé ou un supporter
          fidèle, Handball League est là pour vous fournir les dernières
          actualités, les statistiques détaillées et une couverture complète de
          l'action sur le terrain. Rejoignez-nous pour une expérience immersive
          dans le monde captivant du handball français. Plongez dans l'univers
          des matchs en direct, découvrez les interviews exclusives des joueurs
          et des entraîneurs, et participez à des concours pour gagner des
          billets pour les événements sportifs les plus prestigieux. Avec
          Handball League, vivez le handball comme jamais auparavant et faites
          partie de la communauté passionnée qui façonne l'avenir de ce sport en
          France.
        </p>
      </div>
    </div>

    <!-- Section Caractéristiques/Points forts -->
    <div class="my-8">
      <h2 class="text-2xl font-semibold mb-4">Caractéristiques principales</h2>
      <ul class="list-disc list-inside">
        <li>Statistiques</li>
        <li>description et informations</li>
      </ul>
    </div>

    <div class="my-8">
      <h2 class="text-2xl font-semibold mb-4">Outils utilisé</h2>
      <p class="ml-2">Illustrator, Figma, Wordpress</p>
    </div>

    <div class="my-8">
      <h2 class="text-2xl font-semibold mb-4">Galerie d'images</h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <!-- Image 1 -->
        <div>
          <img
            src="../components/icons/home_handball.png"
            alt="Image 1"
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <!-- Image 2 -->
        <div>
          <img
            src="../components/icons/club_handball.png"
            alt="Image 2"
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <!-- Image 3 -->
        <div>
          <img
            src="../components/icons/joueur_handball.png"
            alt="Image 3"
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <!-- Image 4 -->
        <div>
          <img
            src="../components/icons/card_handball.png"
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
        href="https://www.behance.net/gallery/184756625/Handball-League"
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

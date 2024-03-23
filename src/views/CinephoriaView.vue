<template>
  <div class=" mx-auto px-4 py-8">
    <!-- Titre du projet -->
    <h1 class="text-5xl pt-20 font-bold mb-8">Cinéphoria</h1>

    <div class="flex flex-col lg:flex-row items-center">
      <div class="mb-4 lg:mr-4 lg:mb-0 w-full lg:w-1/3 lg:order-last lg:ml-28">
        <img
          src="/public/projet_cinephoria.png"
          alt="Image du Projet"
          class="w-full rounded-lg shadow-lg"
        />
      </div>

      <div class="w-full lg:w-1/2 lg:order-first">
        <h2 class="text-2xl font-semibold mb-3 mt-2">Description</h2>
        <p class="text-lg text-gray-800 leading-relaxed">
          Cinéphoria est bien plus qu'une simple plateforme de streaming. C'est
          une expérience immersive qui vous transporte instantanément dans un
          univers infini de divertissement cinématographique. Fini les heures
          perdues à chercher le film idéal pour votre soirée ! Notre plateforme
          révolutionnaire simplifie la découverte en mettant à votre disposition
          une sélection soigneusement choisie de films et de séries, adaptée à
          tous les goûts et à tous les publics. Avec Cinéphoria, chaque session
          de visionnage devient une aventure cinématographique passionnante et
          sans effort. Plongez dans un catalogue diversifié de titres, explorez
          des genres variés et découvrez de nouveaux films et séries à chaque
          instant. Transformez vos soirées en moments de pure détente et de
          plaisir cinématographique avec Cinéphoria.
        </p>
      </div>
    </div>

    <!-- Section Caractéristiques/Points forts -->
    <div class="my-8">
      <h2 class="text-2xl font-semibold mb-4">Caractéristiques principales</h2>
      <ul class="list-disc list-inside">
        <li>Film</li>
        <li>Avis</li>
        <li>Communauté</li>
      </ul>
    </div>

    <div class="my-8">
      <h2 class="text-2xl font-semibold mb-4">Outils utilisé</h2>
      <p class="ml-2">Brandmark, Figma</p>
    </div>

    <div class="my-8">
      <h2 class="text-2xl font-semibold mb-4">Galerie d'images</h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <!-- Image 1 -->
        <div>
          <img
            src="../components/icons/Page_connexion_cine.png"
            alt="Image 1"
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <!-- Image 2 -->
        <div>
          <img
            src="../components/icons/home_cine.png"
            alt="Image 2"
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <!-- Image 3 -->
        <div>
          <img
            src="../components/icons/film_cine.png"
            alt="Image 3"
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <!-- Image 4 -->
        <div>
          <img
            src="../components/icons/communauté_cine.png"
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
        href="https://behance.net/gallery/185228623/Cinephoria"
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

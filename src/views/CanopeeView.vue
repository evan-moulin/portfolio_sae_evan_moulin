<template>
  <div class="mx-auto px-4 py-8">
    <!-- Titre du projet -->
    <h1 class="text-5xl pt-20 font-bold mb-8">La Canopée</h1>

    <div class="flex flex-col lg:flex-row items-center">
      <div class="mb-4 lg:mr-4 lg:mb-0 w-full lg:w-1/3 lg:order-last lg:ml-28">
        <img
          src="/public/projet_canopee.png"
          alt="Image du Projet"
          class="w-full rounded-lg shadow-lg"
        />
      </div>

      <div class="w-full lg:w-1/2 lg:order-first">
        <h2 class="text-2xl font-semibold mb-3 mt-2">Description</h2>
        <p class="text-lg text-gray-800 leading-relaxed">
          La Canopée est bien plus qu'un simple chalet haut de gamme ; c'est un
          véritable havre de paix niché au cœur des Vosges, dans la charmante
          commune de Gérardmer. Avec ses paysages pittoresques et ses
          installations modernes, La Canopée offre une expérience de séjour
          inoubliable, alliant confort et authenticité. Notre objectif était de
          créer une identité graphique à la hauteur de ce lieu d'exception. En
          mettant en valeur ses caractéristiques uniques et son ambiance
          chaleureuse, nous avons travaillé avec passion pour refléter l'essence
          même de La Canopée à travers chaque détail de notre conception.
          Explorez un refuge où la tranquillité règne en maître, où chaque
          instant est une invitation à la détente et à la sérénité.
          Rejoignez-nous pour une expérience de séjour inégalée au cœur des
          splendides paysages des Vosges, à La Canopée.
        </p>
      </div>
    </div>

    <!-- Section Caractéristiques/Points forts -->
    <div class="my-8">
      <h2 class="text-2xl font-semibold mb-4">Caractéristiques principales</h2>
      <ul class="list-disc list-inside">
        <li>Identité graphique</li>
      </ul>
    </div>

    <div class="my-8">
      <h2 class="text-2xl font-semibold mb-4">Outils utilisé</h2>
      <p class="ml-2">Illustrator, Figma, Photoshop</p>
    </div>

    <div class="my-8">
      <h2 class="text-2xl font-semibold mb-4">Galerie d'images</h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"
      >
        <!-- Image 1 -->
        <div>
          <img
            src="../components/icons/carte_canopee.png"
            alt="Image 1"
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <!-- Image 2 -->
        <div>
          <img
            src="../components/icons/moodboard.png"
            alt="Image 2"
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <!-- Image 3 -->
        <div>
          <img
            src="../components/icons/recherche_canopee.png"
            alt="Image 3"
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>

    <!-- Call-to-Action -->
    <h2 class="text-2xl font-semibold mb-4">Liens du projet</h2>
    <div class="my-8 flex items-center">
      <a
        href="https://www.behance.net/gallery/184688451/La-Canope"
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

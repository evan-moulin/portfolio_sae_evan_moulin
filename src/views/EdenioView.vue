<template>
  <div class="mx-auto px-4 py-8">
    <!-- Titre du projet -->
    <h1 class="text-5xl pt-20 font-bold mb-8">Edenio</h1>

    <div class="flex flex-col lg:flex-row items-center">
      <div class="mb-4 lg:mr-4 lg:mb-0 w-full lg:w-1/3 lg:order-last lg:ml-28">
        <img
          src="../components/icons/edenio.png"
          alt="Image du Projet"
          class="w-full rounded-lg shadow-lg"
        />
      </div>

      <div class="w-full lg:w-1/2 lg:order-first">
        <h2 class="text-2xl font-semibold mb-3 mt-2">Description</h2>
        <p class="text-lg text-gray-800 leading-relaxed">
          Edenio est bien plus qu'un simple site web ; c'est une plateforme
          complète dédiée au bien-être, à la santé et à la durabilité. Avec une
          boutique en ligne proposant une sélection soigneusement choisie de
          produits bio et éco-responsables, un suivi de santé personnalisé, des
          recettes de cuisine saines et délicieuses, ainsi que des forums de
          discussion animés par une communauté engagée, Edenio offre tout ce
          dont vous avez besoin pour vivre une vie plus saine et plus
          équilibrée. Rejoignez-nous et découvrez une nouvelle façon de prendre
          soin de vous et de la planète. Avec Edenio, vous pouvez explorer des
          articles de blog informatifs sur le bien-être, participer à des cours
          en ligne sur le yoga et la méditation, et trouver des conseils pour
          une vie plus durable. Transformez votre routine quotidienne en une
          expérience enrichissante et respectueuse de l'environnement avec
          Edenio.
        </p>
      </div>
    </div>

    <!-- Section Caractéristiques/Points forts -->
    <div class="my-8">
      <h2 class="text-2xl font-semibold mb-4">Caractéristiques principales</h2>
      <ul class="list-disc list-inside">
        <li>E-commerce</li>
        <li>Suivi de santé</li>
        <li>Recette</li>
        <li>Forum</li>
      </ul>
    </div>

    <div class="my-8">
      <h2 class="text-2xl font-semibold mb-4">Outils utilisé</h2>
      <p class="ml-2">Illustrator, Figma</p>
    </div>

    <div class="my-8">
      <h2 class="text-2xl font-semibold mb-4">Galerie d'images</h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"
      >
        <!-- Image 1 -->
        <div>
          <img
            src="../components/icons/typo_edenio.png"
            alt="Image 1"
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <!-- Image 2 -->
        <div>
          <img
            src="../components/icons/couleur_edenio.png"
            alt="Image 2"
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <!-- Image 3 -->
        <div>
          <img
            src="../components/icons/mockup_edenio.png"
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
        href="https://www.behance.net/gallery/184963943/Edenio"
        class="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg shadow-lg mr-4 hover:bg-gray-400 transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
        >Behance</a
      >
      <a
        href="https://edenio.maximeruchet.fr/"
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

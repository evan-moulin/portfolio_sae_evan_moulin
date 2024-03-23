<template>
  <div class="mx-auto px-4 py-8">
    <!-- Titre du projet -->
    <h1 class="text-5xl pt-20 font-bold mb-8">BenevolAction</h1>
    <div class="flex flex-col lg:flex-row items-center">
      <div class="mb-4 lg:mr-4 lg:mb-0 w-full lg:w-1/3 lg:order-last lg:ml-28">
        <img
          src="../components/icons/benevolaction.png"
          alt="Image du Projet"
          class="w-full rounded-lg shadow-lg"
        />
      </div>

      <div class="w-full lg:w-1/2 lg:order-first">
        <h2 class="text-2xl font-semibold mb-3 mt-2">Description</h2>
        <p class="text-lg text-gray-800 leading-relaxed">
          Bien sûr, voici le texte modifié avec une ligne supplémentaire :
          "Bénévolaction est bien plus qu'une simple plateforme en ligne. C'est
          un portail dédié au volontariat et à l'engagement citoyen, conçu pour
          connecter les individus désireux de faire une différence avec des
          opportunités de bénévolat significatives. Que vous soyez passionné par
          les soins aux animaux, l'informatique, l'éducation, l'environnement ou
          tout autre domaine, Bénévolaction offre une multitude d'opportunités
          pour que chacun puisse contribuer à des causes qui lui tiennent à
          cœur. Plongez dans un réseau dynamique de bénévoles et
          d'organisations, découvrez des projets passionnants et engagez-vous
          pour créer un impact positif dans votre communauté et au-delà.
          Rejoignez-nous dès aujourd'hui et faites partie du mouvement pour un
          monde meilleur. Ensemble, agissons pour un avenir plus solidaire et
          épanouissant. Chaque geste compte dans la construction d'une société
          plus solidaire et respectueuse de l'environnement.
        </p>
      </div>
    </div>

    <!-- Section Caractéristiques/Points forts -->
    <div class="my-8">
      <h2 class="text-2xl font-semibold mb-4">Caractéristiques principales</h2>
      <ul class="list-disc list-inside">
        <li>Forum de discussion</li>
        <li>mission en ligne</li>
        <li>Témoignages</li>
      </ul>
    </div>

    <div class="my-8">
      <h2 class="text-2xl font-semibold mb-4">Outils utilisé</h2>
      <p class="ml-2">Illustrator, Figma, Wordpress</p>
    </div>

    <div class="my-8">
      <h2 class="text-2xl font-semibold mb-4">Galerie d'images</h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"
      >
        <!-- Image 1 -->
        <div>
          <img
            src="../components/icons/stat_benevolaction.png"
            alt="Image 1"
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <!-- Image 2 -->
        <div>
          <img
            src="../components/icons/temoignage_benevolaction.png"
            alt="Image 2"
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <!-- Image 3 -->
        <div>
          <img
            src="../components/icons/charte_benevolaction.png"
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
        href="https://www.behance.net/gallery/171565845/Benevole-Action"
        class="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg shadow-lg mr-4 hover:bg-gray-400 transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
        >Behance</a
      >
      <a
        href="https://benevolaction.maximeruchet.fr/"
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

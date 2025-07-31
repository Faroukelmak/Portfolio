'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

function toggleDetails(item) {
  document.querySelectorAll('.project-item').forEach(el => {
    if (el !== item) {
      el.classList.remove('active-show');
      const details = el.querySelector('.project-details');
      if(details) details.style.maxHeight = null;
    }
  });

  const isActive = item.classList.toggle('active-show');
  const details = item.querySelector('.project-details');

  if (isActive) {
    // Fixe la hauteur au scrollHeight pour que ça s'affiche pleinement
    details.style.maxHeight = details.scrollHeight + "px";
  } else {
    details.style.maxHeight = null;
  }
}

const detailContainer = document.getElementById('project-detail-container');

// Exemple de contenu par projet (id => contenu HTML)
const projectsDetailsContent = [
  `
  <div style="max-width: 800px; margin: 60px auto; font-family: Arial, sans-serif; color: #333; line-height: 1.7; padding: 30px; background-color: #fff; box-shadow: 0 0 10px rgba(0,0,0,0.05); border-radius: 10px;">

  <section>
    <h2 style="font-size: 1.8em; color: #222; margin-bottom: 20px;"> Classification d’Images du Cancer du Col de l’Utérus par Apprentissage Profond</h2>
    <!-- Image -->
    <img src="./assets/images_me/cancer du col de l’utérus.png" alt="Détail projet Cancer du col de l’utérus" 
       style="display: block; margin: 0 auto 1.5rem auto; max-width: 100%; border-radius: 8px;" />
    <section>
      <h3 style="color: #278C5D;">Introduction</h3>
      <p>
        Le cancer du col de l’utérus reste l’un des cancers les plus meurtriers chez la femme, bien qu’il soit
        <strong>hautement évitable grâce à un dépistage précoce</strong>. Selon l’OMS, jusqu’à 90 % des cas pourraient être évités si la détection était plus efficace.
        Aujourd’hui, le test de Papanicolaou (ou frottis cervico-utérin) est la méthode standard, mais il présente des <strong>limites majeures</strong> : il est long, exigeant pour les experts, et sujet à des erreurs humaines.
      </p>
      <p>
        Face à ce constat, ce projet propose une <strong>solution innovante basée sur l’intelligence artificielle</strong> – et plus précisément sur les
        <strong>réseaux de neurones convolutifs (CNN)</strong> – pour <strong>automatiser et fiabiliser la classification des images cellulaires</strong> issues de frottis.
        L’objectif est clair : <em>aider les médecins à détecter plus rapidement et plus précisément les anomalies</em>, tout en réduisant la charge de travail et les erreurs de diagnostic.
      </p>
    </section>

    <section>
      <h3 style="color: #278C5D; margin-top: 5px;"> Méthodologie</h3>

      <h4 style="margin-top: 10px;">1. Exploration et Préparation du Jeu de Données</h4>
      <p>
        Le projet repose sur le jeu de données <strong>Herlev</strong>, une base de référence contenant <strong>917 images</strong> de cellules individuelles issues de frottis, classées selon <strong>7 catégories</strong> :
      </p>
      <ul>
        <li><span style="color: #007BFF; font-weight: bold;">Cellules normales :</span> colonnaire, intermédiaire, superficielle</li>
        <li><span style="color: #007BFF; font-weight: bold;">Cellules anormales :</span>dysplasie légère, modérée, sévère et carcinome in situ</li>
      </ul>

      <h4 style="margin-top: 20px;">2. Prétraitement et Amélioration des Images</h4>
      <p>Un traitement rigoureux a été appliqué pour optimiser les images :</p>
      <ul>
        <li><strong>Normalisation</strong> des intensités</li>
        <li><strong>Filtrage Médian</strong> pour supprimer le bruit</li>
        <li><strong>NLM Denoising</strong> pour préserver les détails</li>
        <li><strong>CLAHE</strong> pour améliorer le contraste local et faire ressortir les contours</li>
      </ul>

      <h4 style="margin-top: 20px;">3. Modélisation par Transfert d’Apprentissage</h4>
      <p>
        Les modèles ont été construits à partir de CNN pré-entraînés sur ImageNet, puis adaptés au problème médical à l’aide de <strong>couches personnalisées</strong>.
        <br>Les architectures testées :
      </p>
      <ul>
        <li><strong>ResNet101</strong> : réseau profond avec connexions résiduelles</li>
        <li><strong>DenseNet121</strong> : architecture dense facilitant la transmission d’information</li>
        <li><strong>XceptionNet</strong> et <strong>InceptionResNetV2</strong></li>
      </ul>
    </section>

    <section>
      <h3 style="color: #278C5D;margin-top: 5px;">Outils et Technologies Utilisés</h3>
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <thead>
          <tr style="background-color: #f0f0f0;">
            <th style="text-align: left; padding: 10px; border: 1px solid #ddd;">Catégorie</th>
            <th style="text-align: left; padding: 10px; border: 1px solid #ddd;">Outils / Technologies</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Langage de programmation</td>
            <td style="padding: 10px; border: 1px solid #ddd;">Python</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Frameworks IA</td>
            <td style="padding: 10px; border: 1px solid #ddd;">TensorFlow, Keras</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Techniques</td>
            <td style="padding: 10px; border: 1px solid #ddd;">Transfert d’apprentissage, Data Augmentation</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Modèles</td>
            <td style="padding: 10px; border: 1px solid #ddd;">CNN , ResNet101, DenseNet121, XceptionNet, InceptionResNetV2</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Traitement d’image</td>
            <td style="padding: 10px; border: 1px solid #ddd;">CLAHE, Filtrage Médian, NLM Denoising</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Données</td>
            <td style="padding: 10px; border: 1px solid #ddd;">Herlev Dataset</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Évaluation</td>
            <td style="padding: 10px; border: 1px solid #ddd;">Précision, Rappel, F1-score, Matrices de confusion</td>
          </tr>
        </tbody>
      </table>
    </section>
  </section>
</div>
  `,
  `<div style="max-width: 800px; margin: 60px auto; font-family: Arial, sans-serif; color: #333; line-height: 1.7; padding: 30px; background-color: #fff; box-shadow: 0 0 10px rgba(0,0,0,0.05); border-radius: 10px;">

  <section>
    <h2 style="font-size: 1.8em; color: #222; margin-bottom: 20px;">Prédiction d'Âge à partir d'Images avec YOLO et CNN</h2>
    <!-- Image -->
    <img src="./assets/images_me/age_pred.png" alt="Détail projet Cancer du col de l’utérus" 
       style="display: block; margin: 0 auto 1.5rem auto; max-width: 100%; border-radius: 8px;" />
    
    <section>
      <h3 style="color: #278C5D;">Introduction</h3>
      <p>
        Ce projet vise à développer un modèle performant capable de prédire l’âge d’une personne à partir d’une image en exploitant les
        techniques avancées de Deep Learning. 
        Pour cela, une approche en deux étapes a été adoptée : la détection automatique des visages avec YOLO et la prédiction de l’âge à l’aide de réseaux de neurones convolutifs (CNN).
      </p>
      <p>
        Nous nous appuyons sur le dataset public <strong>UTKFace</strong>, qui contient des milliers d’images de visages annotées avec l'âge, le sexe et l'origine ethnique, garantissant une base riche et diversifiée pour l'entraînement.
      </p>
    </section>

    <section>
      <h3 style="color: #278C5D; margin-top: 5px;">Méthodologie</h3>

      <h4 style="margin-top: 10px;">1. Détection des Visages avec YOLO</h4>
      <p>
        YOLO (You Only Look Once) a été choisi pour sa rapidité et sa précision en détection d’objets en temps réel, capable de détecter plusieurs visages dans une même image avec localisation précise.
      </p>
      <ul>
        <li>Annotation spécifique du dataset UTKFace pour entraîner YOLO à cibler uniquement les visages.</li>
        <li>Entraînement réalisé avec TensorFlow et PyTorch pour optimiser les performances et sauvegarder les poids du modèle.</li>
        <li>Sortie : coordonnées exactes des visages détectés dans chaque image.</li>
      </ul>

      <h4 style="margin-top: 20px;">2. Prédiction d’Âge avec CNN</h4>
      <p>
        Une fois les visages extraits, plusieurs architectures CNN ont été testées pour estimer l’âge avec précision :
      </p>
      <ul>
        <li><strong>CNN Basique</strong> : modèle construit from scratch avec plusieurs couches convolutives.</li>
        <li><strong>TinyVGG</strong> et <strong>ResNet50</strong> : modèles pré-entraînés optimisés pour la reconnaissance d’images.</li>
        <li><strong>EfficientNetB0</strong> : modèle léger et performant pour la classification et la régression.</li>
      </ul>

      <h4 style="margin-top: 20px;">3. Suivi des Performances avec MLflow</h4>
      <p>
        MLflow a été utilisé pour tracer et comparer les performances des différents modèles, en enregistrant les hyperparamètres, résultats d'entraînement et métriques d’évaluation.
      </p>

      <h4 style="margin-top: 20px;">4. Évaluation et Sélection du Meilleur Modèle</h4>
      <p>
        La sélection s’est faite selon plusieurs critères importants :
      </p>
      <ul>
        <li><strong>MAE (Mean Absolute Error)</strong> : mesure l’erreur moyenne absolue entre âge prédit et âge réel.</li>
        <li><strong>MSE (Mean Squared Error)</strong> : accentue les grosses erreurs pour un meilleur contrôle.</li>
        <li>Vitesse d’inférence, essentielle pour les applications temps réel.</li>
      </ul>

      <h4 style="margin-top: 20px;">5. Pipeline Intégrée YOLO + CNN</h4>
      <img src="./assets/images_me/age_pred1.png" alt="Détail projet Cancer du col de l’utérus" 
       style="display: block; margin: 0 auto 1.5rem auto; max-width: 100%; border-radius: 8px;" />
    
      <p>
        Une pipeline complète a été conçue pour traiter une image en fin de bout en bout :
      </p>
      <img src="./assets/images_me/age_pred2.png" alt="Détail projet Cancer du col de l’utérus" 
       style="display: block; margin: 0 auto 1.5rem auto; max-width: 100%; border-radius: 8px;" />
  
      <p>
        Cette approche permet la gestion de multiples visages dans une même image, est optimisée pour un usage en temps réel, et offre un système modulaire permettant d’améliorer indépendamment la détection ou la prédiction.
      </p>

      <h4 style="margin-top: 20px;">6. Développement d’une Application Web avec Streamlit</h4>
      <p>
        Pour rendre le modèle accessible, une interface utilisateur a été développée avec Streamlit, permettant de charger des images, détecter les visages, et afficher les prédictions d’âge en temps réel.
      </p>
      <ul>
        <li> - Upload simple d’image depuis l’ordinateur.</li>
        <li> - Détection automatique du ou des visages.</li>
        <li> - Prédiction et affichage immédiats de l’âge estimé.</li>
        <li> - Interface légère, rapide et facile à utiliser.</li>
      </ul>
      <img src="./assets/images_me/age_pred3.png" alt="Détail projet Cancer du col de l’utérus" 
       style="display: block; margin: 0 auto 1.5rem auto; max-width: 100%; border-radius: 8px;" />
  
    </section>

    <section>
      <h3 style="color: #278C5D; margin-top: 5px;">Outils et Technologies Utilisés</h3>
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <thead>
          <tr style="background-color: #f0f0f0;">
            <th style="text-align: left; padding: 10px; border: 1px solid #ddd;">Catégorie</th>
            <th style="text-align: left; padding: 10px; border: 1px solid #ddd;">Outils / Technologies</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Détection d’objets</td>
            <td style="padding: 10px; border: 1px solid #ddd;">YOLO</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Modèles CNN</td>
            <td style="padding: 10px; border: 1px solid #ddd;">CNN Basique, TinyVGG, ResNet50, EfficientNetB0</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Frameworks Deep Learning</td>
            <td style="padding: 10px; border: 1px solid #ddd;">TensorFlow, Keras, PyTorch</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Traitement d’images</td>
            <td style="padding: 10px; border: 1px solid #ddd;">OpenCV, NumPy</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Suivi des expériences</td>
            <td style="padding: 10px; border: 1px solid #ddd;">MLflow</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Développement web</td>
            <td style="padding: 10px; border: 1px solid #ddd;">Streamlit</td>
          </tr>
        </tbody>
      </table>
    </section>
  </section>
</div>
`,
`<div style="max-width: 800px; margin: 60px auto; font-family: Arial, sans-serif; color: #333; line-height: 1.7; padding: 30px; background-color: #fff; box-shadow: 0 0 10px rgba(0,0,0,0.05); border-radius: 10px;">

  <section>
    <h2 style="font-size: 1.8em; color: #222; margin-bottom: 20px;">Prédiction du Churn Client avec un Réseau de Neurones Artificiel (ANN)</h2>
    <img src="./assets/images_me/churn_pred.png" alt="Détail projet Cancer du col de l’utérus" 
       style="display: block; margin: 0 auto 1.5rem auto; max-width: 100%; border-radius: 8px;" />
  
    <section>
      <h3 style="color: #278C5D;">Introduction</h3>
      <p>
        La fidélisation client est un enjeu majeur pour les entreprises. Ce projet vise à prédire le départ (churn) des clients d’une banque à l’aide d’un modèle d’intelligence artificielle basé sur un réseau de neurones artificiel (ANN).
        L’objectif est d’identifier efficacement les clients susceptibles de quitter la banque, permettant ainsi de mettre en place des actions préventives ciblées.
      </p>
      <p>
        Le jeu de données utilisé contient des informations démographiques et financières de plusieurs milliers de clients, avec une variable cible indiquant si le client est parti ou non.
      </p>
    </section>

    <section>
      <h3 style="color: #278C5D; margin-top: 5px;">Prétraitement des Données</h3>
      <ul style="list-style-type: none; padding-left: 0;">
        <li>– Suppression des colonnes non pertinentes comme <em>RowNumber, CustomerId, Surname</em> pour se concentrer sur les variables utiles.</li>
        <li>– Encodage de la variable <strong>Genre</strong> en valeurs numériques (0 pour Female, 1 pour Male) via <em>LabelEncoder</em>.</li>
        <li>– Encodage à chaud (<em>One-Hot Encoding</em>) de la variable <strong>Géographie</strong> (France, Espagne, Allemagne) pour permettre au modèle de mieux comprendre les catégories.</li>
        <li>– Normalisation des données numériques avec un <em>StandardScaler</em> pour améliorer la convergence du modèle.</li>
        <li>– Sauvegarde des encodeurs et du scaler pour une utilisation future dans la production.</li>
      </ul>
    </section>

    <section>
      <h3 style="color: #278C5D; margin-top: 5px;">Construction et Entraînement du Modèle ANN</h3>
      <p>
        Un réseau de neurones artificiel (ANN) a été construit avec l’architecture suivante :
      </p>
      <ul style="list-style-type: none; padding-left: 0;">
        <li>– Couche d'entrée avec 12 caractéristiques (features).</li>
        <li>– Première couche cachée dense de 64 neurones avec fonction d’activation ReLU.</li>
        <li>– Deuxième couche cachée dense de 32 neurones avec fonction d’activation ReLU.</li>
        <li>– Couche de sortie avec un neurone unique et activation sigmoid pour prédiction binaire (churn / non churn).</li>
      </ul>

      <p>
        Le modèle a été compilé avec l’optimiseur Adam (learning rate = 0.01) et la fonction de perte <em>Binary Crossentropy</em>. 
      </p>
        <p>
        Des callbacks ont été ajoutés pour améliorer l’entraînement : 
      </p>
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li><strong>EarlyStopping</strong> : arrêt précoce si la perte de validation ne s’améliore pas pendant 10 epochs, évitant le surapprentissage.</li>
        <li><strong>TensorBoard</strong> : pour visualiser les métriques et la progression de l’entraînement.</li>
      </ul>

      <p>
        L’entraînement a été effectué sur 100 epochs avec validation sur un jeu de test séparé (20 % des données).
      </p>
    </section>

    <section>
      <h3 style="color: #278C5D; margin-top: 5px;">Technologies et Outils Utilisés</h3>
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <thead>
          <tr style="background-color: #f0f0f0;">
            <th style="text-align: left; padding: 10px; border: 1px solid #ddd;">Catégorie</th>
            <th style="text-align: left; padding: 10px; border: 1px solid #ddd;">Outils / Technologies</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Analyse de données</td>
            <td style="padding: 10px; border: 1px solid #ddd;">Pandas, Scikit-learn</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Encodage & Prétraitement</td>
            <td style="padding: 10px; border: 1px solid #ddd;">LabelEncoder, OneHotEncoder, StandardScaler</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Modélisation</td>
            <td style="padding: 10px; border: 1px solid #ddd;">TensorFlow, Keras (Sequential, Dense)</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Optimisation & Suivi</td>
            <td style="padding: 10px; border: 1px solid #ddd;">Adam Optimizer, EarlyStopping, TensorBoard</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Sauvegarde des modèles</td>
            <td style="padding: 10px; border: 1px solid #ddd;">Pickle (encodeurs, scaler)</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h3 style="color: #278C5D; margin-top: 5px;">Résultats </h3>
      <p>
        Le modèle ANN a démontré une bonne capacité à prédire le churn avec une précision satisfaisante, grâce à une architecture simple mais efficace et à un prétraitement rigoureux.
      </p>
    </section>

  </section>
</div>
`,
`<div style="max-width: 800px; margin: 60px auto; font-family: Arial, sans-serif; color: #333; line-height: 1.7; padding: 30px; background-color: #fff; box-shadow: 0 0 10px rgba(0,0,0,0.05); border-radius: 10px;">

  <section>
    <h2 style="font-size: 1.8em; color: #222; margin-bottom: 20px;">Analyse de Sentiments des Critiques de Films avec RNN (Recurrent Neural Network)</h2>
    <img src="./assets/images_me/sentiment_anal_film.png" alt="Analyse de sentiments avec RNN" 
       style="display: block; margin: 0 auto 1.5rem auto; max-width: 100%; border-radius: 8px;" />

    <section>
      <h3 style="color: #278C5D;">Introduction</h3>
      <p>
        Ce projet a pour objectif de déterminer automatiquement le <strong>sentiment</strong> (positif ou négatif) d'une critique de film à l'aide d'un modèle de <strong>Réseau de Neurones Récurrent (RNN)</strong>. 
        L'analyse de sentiments joue un rôle crucial dans la compréhension des opinions exprimées dans les textes, étant utilisée dans des systèmes de recommandation, de modération et de veille marketing.
      </p>
    </section>

    <section>
      <h3 style="color: #278C5D; margin-top: 5px;">Prétraitement des Données Textuelles</h3>
      <ul style="list-style-type: none; padding-left: 0;">
        <li>-- Nettoyage des critiques : suppression des ponctuations, conversion en minuscules.</li>
        <li>-- Suppression des mots inutiles (stop words).</li>
        <li>-- Tokenisation des textes avec Keras.</li>
        <li>-- Padding des séquences pour un alignement uniforme.</li>
        <li>-- Transformation des mots en vecteurs via une couche <strong>Embedding</strong>.</li>
      </ul>
    </section>

    <section>
      <h3 style="color: #278C5D; margin-top: 5px;">Construction du Modèle RNN</h3>
      <p>Le modèle RNN utilisé repose sur une architecture séquentielle simple, capable de traiter les dépendances temporelles dans les séquences textuelles :</p>
      <ul style="list-style-type: none; padding-left: 0;">
        <li>-- Couche <strong>Embedding</strong> pour encoder les mots sous forme de vecteurs denses.</li>
        <li>-- Couche <strong>SimpleRNN</strong> de 128 unités pour modéliser les relations séquentielles dans les avis.</li>
        <li>-- Couche <strong>Dense</strong> de sortie avec une activation <code>sigmoid</code> pour une classification binaire (positif / négatif).</li>
      </ul>


      <p style="margin-top: 10px;">Compilation du modèle avec l'optimiseur <strong>Adam</strong> et la fonction de perte <em>binary_crossentropy</em>.</p>

      <p>Suivi de l'entraînement via :</p>
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li><strong>EarlyStopping</strong> : arrêt automatique si la perte de validation stagne.</li>
        <li><strong>TensorBoard</strong> : visualisation des performances et des métriques.</li>
      </ul>
    </section>

    <section>
      <h3 style="color: #278C5D; margin-top: 5px;">Technologies et Outils Utilisés</h3>
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <thead>
          <tr style="background-color: #f0f0f0;">
            <th style="text-align: left; padding: 10px; border: 1px solid #ddd;">Catégorie</th>
            <th style="text-align: left; padding: 10px; border: 1px solid #ddd;">Outils / Technologies</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Traitement de texte</td>
            <td style="padding: 10px; border: 1px solid #ddd;">NLTK, Keras Tokenizer, Padding</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Modélisation</td>
            <td style="padding: 10px; border: 1px solid #ddd;">Keras, RNN, Embedding, Sequential</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Suivi & Optimisation</td>
            <td style="padding: 10px; border: 1px solid #ddd;">Adam, EarlyStopping, TensorBoard</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Visualisation</td>
            <td style="padding: 10px; border: 1px solid #ddd;">Matplotlib, Seaborn</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h3 style="color: #278C5D; margin-top: 5px;">Résultats et Impact</h3>
      <p>
        Le modèle a atteint une bonne précision sur les données de test, mettant en évidence la capacité du RNN à interpréter le contexte et à saisir les nuances émotionnelles des critiques. 
        Ce projet peut être intégré à des outils de veille d'opinion, de modération automatique ou encore d'analyse marketing.
      </p>
    </section>

  </section>
</div>`,
`<div style="max-width: 800px; margin: 60px auto; font-family: Arial, sans-serif; color: #333; line-height: 1.7; padding: 30px; background-color: #fff; box-shadow: 0 0 10px rgba(0,0,0,0.05); border-radius: 10px;">

  <section>
    <h2 style="font-size: 1.8em; color: #222; margin-bottom: 20px;">Prédiction du Défaut de Remboursement avec un Modèle ANN (Artificial Neural Network)</h2>
    <img src="./assets/images_me/default_loan_pred.png" alt="Modèle ANN pour défaut de prêt" 
         style="display: block; margin: 0 auto 1.5rem auto; max-width: 100%; border-radius: 8px;" />

    <section>
      <h3 style="color: #278C5D;">Introduction</h3>
      <p>
        Ce projet vise à prédire si un client fera défaut sur le remboursement d’un prêt à partir de données financières et comportementales.  
        Nous utilisons un <strong>réseau de neurones artificiels (ANN)</strong> simple, adapté aux données tabulaires pour la classification binaire. 
        Cette prédiction aide les institutions financières à mieux gérer leurs risques de crédit.
      </p>
    </section>
    <section>
  <h3 style="color: #278C5D; margin-top: 5px;">Description des Données</h3>
  <p>
    Le jeu de données contient des informations sur des prêts octroyés à des clients, avec les variables suivantes :
  </p>
  <table style="width: 100%; border-collapse: collapse; margin-top: 10px; margin-bottom: 20px;">
    <thead>
      <tr style="background-color: #f0f0f0;">
        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Colonne</th>
        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">ID</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Identifiant unique de l’enregistrement</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">customer_id</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Identifiant du client</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">country_id</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Identifiant du pays</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">tbl_loan_id</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Identifiant du prêt</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">lender_id</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Identifiant du prêteur</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">loan_type</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Type de prêt (ex: Type_1, Type_7)</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">Total_Amount</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Montant total emprunté</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">Total_Amount_to_Repay</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Montant total à rembourser</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">disbursement_date</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Date de déblocage du prêt</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">due_date</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Date d’échéance du remboursement</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">duration</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Durée du prêt en jours</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">New_versus_Repeat</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Indique si le prêt est un premier prêt ou un prêt répété</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">Amount_Funded_By_Lender</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Montant financé par le prêteur</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">Lender_portion_Funded</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Proportion financée par le prêteur</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">Lender_portion_to_be_repaid</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Proportion que le prêteur doit être remboursée</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">target</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Variable cible : 0 = remboursement OK, 1 = défaut de remboursement</td>
      </tr>
    </tbody>
  </table>
</section>


    <section>
      <h3 style="color: #278C5D; margin-top: 5px;">Préparation des Données</h3>
      <ul style="list-style-type: none; padding-left: 0;">
        <img src="./assets/images_me/default_loan_pred1.png" alt="Modèle ANN pour défaut de prêt" 
         style="display: block; margin: 0 auto 1.5rem auto; max-width: 100%; border-radius: 8px;" />

        <li>-- Suppression des colonnes inutiles (identifiants, doublons).</li>
        <li>-- Encodage One-Hot de la variable catégorielle <code>loan_type</code>.</li>
        <li>-- Encodage numérique de <code>New_versus_Repeat</code> avec <code>LabelEncoder</code>.</li>
        <li>-- Extraction des composantes jour/mois/année des dates de déblocage et d’échéance.</li>
        <li>-- Normalisation des variables numériques avec <code>StandardScaler</code>.</li>
      </ul>
    </section>

    <section>
      <h3 style="color: #278C5D; margin-top: 5px;">Construction du Modèle ANN</h3>
      <p>
        Le modèle séquentiel est composé de :
      </p>
      <ul style="list-style-type: none; padding-left: 0;">
        <li>-- Couche d’entrée Dense (64 neurones, activation ReLU).</li>
        <li>-- Couche cachée Dense (32 neurones, activation ReLU).</li>
        <li>-- Couche de sortie Dense (1 neurone, activation <code>sigmoid</code> pour classification binaire).</li>
      </ul>
      <p style="margin-top: 10px;">Compilation avec l’optimiseur <strong>Adam</strong> et la fonction de perte <em>binary_crossentropy</em>.</p>
    </section>

    <section>
      <h3 style="color: #278C5D; margin-top: 5px;">Entraînement et Optimisation</h3>
      <p>Le modèle est entraîné avec :</p>
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li><strong>EarlyStopping</strong> : arrêt automatique si la perte de validation ne s’améliore pas pendant 10 epochs.</li>
        <li><strong>TensorBoard</strong> : pour visualiser les performances et métriques durant l’entraînement.</li>
      </ul>
    </section>

    <section>
      <h3 style="color: #278C5D; margin-top: 5px;">Technologies et Outils Utilisés</h3>
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <thead>
          <tr style="background-color: #f0f0f0;">
            <th style="text-align: left; padding: 10px; border: 1px solid #ddd;">Catégorie</th>
            <th style="text-align: left; padding: 10px; border: 1px solid #ddd;">Outils / Technologies</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Prétraitement</td>
            <td style="padding: 10px; border: 1px solid #ddd;">Pandas, Scikit-learn (OneHotEncoder, LabelEncoder, StandardScaler)</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Modélisation</td>
            <td style="padding: 10px; border: 1px solid #ddd;">TensorFlow, Keras, Réseau de Neurones (Dense Layers)</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Optimisation & Suivi</td>
            <td style="padding: 10px; border: 1px solid #ddd;">Adam, EarlyStopping, TensorBoard</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h3 style="color: #278C5D; margin-top: 5px;">Résultats et Perspectives</h3>
      <p>
        Le modèle atteint une précision de plus de 98% sur les données de validation après une quarantaine d’epochs, 
        démontrant son efficacité à prédire le défaut de remboursement.  
        Ce travail peut être étendu par l’ajout de nouvelles variables, l’optimisation des hyperparamètres, ou l’intégration dans un pipeline de décision bancaire.
      </p>
    </section>

  </section>
</div>
`,
`<div style="max-width: 800px; margin: 60px auto; font-family: Arial, sans-serif; color: #333; line-height: 1.7; padding: 30px; background-color: #fff; box-shadow: 0 0 10px rgba(0,0,0,0.05); border-radius: 10px;">

  <section>
    <h2 style="font-size: 1.8em; color: #222; margin-bottom: 20px;">Correcteur Orthographique Basé sur les Édits de Lettres</h2>
    <img src="./assets/images_me/correct_ortho_nlp.png" alt="Correcteur Orthographique NLP" 
       style="display: block; margin: 0 auto 1.5rem auto; max-width: 100%; border-radius: 8px;" />

    <section>
      <h3 style="color: #278C5D;">Introduction</h3>
      <p>
        Ce projet vise à corriger automatiquement les mots mal orthographiés en générant toutes les variantes de mots à une ou deux modifications proches,
        puis en filtrant ces variantes avec un vocabulaire officiel (corpus NLTK). Les modifications considérées sont : insertion, suppression, remplacement ou échange de lettres.
      </p>
    </section>

    <section>
      <h3 style="color: #278C5D; margin-top: 5px;">Les Opérations de Modification de Mots</h3>
      <ul style="list-style-type: none; padding-left: 0;">
        <li>-- <strong>Suppression</strong> : suppression d’une lettre à chaque position possible dans le mot.</li>
        <li>-- <strong>Insertion</strong> : insertion d’une lettre (a-z) à chaque position possible.</li>
        <li>-- <strong>Remplacement</strong> : remplacement de chaque lettre par toutes les lettres possibles (a-z).</li>
        <li>-- <strong>Échange</strong> : échange de deux lettres adjacentes dans le mot.</li>
      </ul>
    </section>

    <section>
      <h3 style="color: #278C5D; margin-top: 5px;">Génération des Suggestions</h3>
      <p>
        Le système génère d'abord toutes les variantes à une modification (edit distance = 1) puis à deux modifications (edit distance = 2),
        avant de filtrer ces suggestions à l'aide du vocabulaire officiel pour ne garder que des mots valides.
      </p>
      <p>Les suggestions sont ensuite triées selon leur similarité avec le mot d'entrée grâce à la mesure de similarité de <em>difflib.SequenceMatcher</em>.</p>
    </section>
    <section>
  <h3 style="color: #278C5D; margin-top: 5px;">Aperçu de l'Application Streamlit</h3>
  <img src="./assets/images_me/correct_ortho_nlp1.png" alt="Capture d'écran de l'application Streamlit" 
       style="display: block; margin: 0 auto 1.5rem auto; max-width: 100%; border-radius: 8px;" />
</section>

    <section>
      <h3 style="color: #278C5D; margin-top: 5px;">Technologies et Outils Utilisés</h3>
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <thead>
          <tr style="background-color: #f0f0f0;">
            <th style="text-align: left; padding: 10px; border: 1px solid #ddd;">Catégorie</th>
            <th style="text-align: left; padding: 10px; border: 1px solid #ddd;">Outils / Technologies</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Corpus Linguistique</td>
            <td style="padding: 10px; border: 1px solid #ddd;">NLTK (corpus words)</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Traitement du Langage Naturel</td>
            <td style="padding: 10px; border: 1px solid #ddd;">Python, Fonctions d’édition de mots</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Interface Utilisateur</td>
            <td style="padding: 10px; border: 1px solid #ddd;">Streamlit</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Mesure de Similarité</td>
            <td style="padding: 10px; border: 1px solid #ddd;">difflib.SequenceMatcher</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h3 style="color: #278C5D; margin-top: 5px;">Conclusion</h3>
      <p>
        Ce correcteur orthographique simple mais efficace peut être étendu pour intégrer des modèles probabilistes ou des réseaux de neurones pour améliorer la correction contextuelle.
      </p>
    </section>

  </section>
</div>
`,
`<div style="max-width: 800px; margin: 60px auto; font-family: Arial, sans-serif; color: #333; line-height: 1.7; padding: 30px; background-color: #fff; box-shadow: 0 0 10px rgba(0,0,0,0.05); border-radius: 10px;">

  <section>
    <h2 style="font-size: 1.8em; color: #222; margin-bottom: 20px;">
      Projet d'Analyse Émotionnelle des Appels Clients INWI avec ToumAI Analytics
    </h2>
    <img src="./assets/images_me/pfa.png" alt="Capture d'écran de l'application Streamlit" 
       style="display: block; margin: 0 auto 1.5rem auto; max-width: 100%; border-radius: 8px;" />


    <section>
      <h3 style="color: #278C5D;">Présentation du Projet</h3>
      <p>
        Ce projet de fin d'année vise à améliorer un modèle d'analyse émotionnelle sur les appels clients d'INWI pour évaluer les agents du service client.
        Il s'inscrit dans la vision de ToumAI Analytics de révolutionner le service client grâce à des solutions vocales inclusives, multilingues, et adaptées au dialecte marocain (Darija).
      </p>

      <h4 style="margin-top: 15px; color: #3A6351;">Objectifs :</h4>
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li>Générer des transcriptions fidèles à partir de données synthétiques.</li>
        <li>Mettre en place un système de diarisation pour segmenter les enregistrements vocaux.</li>
        <li>Concevoir un modèle d'analyse émotionnelle capable de détecter les classes émotionnelles définies.</li>
      </ul>

      <h4 style="margin-top: 15px; color: #3A6351;">Défis rencontrés :</h4>
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li>Contraintes légales limitant l'accès aux données réelles.</li>
        <li>Faibles ressources linguistiques pour le dialecte marocain.</li>
        <li>Qualité variable des enregistrements (voix haute qualité vs bruit client).</li>
        <li>Absence de modèles pré-entraînés spécifiques au dialecte.</li>
      </ul>
    </section>

    <section>
      <h3 style="color: #278C5D; margin-top: 20px;">Méthodologie</h3>

      <h4 style="color: #3A6351; margin-top: 10px;">1. Génération de Données Synthétiques</h4>
<ul style="list-style-type: disc; padding-left: 20px;">
  <li>- Création de scénarios réalistes d’échanges agent-client avec émotions (heureux, en colère, neutre) via l’API OpenAI.</li>
  <li>- Simulation des appels enregistrés sur Zoom pour obtenir des audios de haute qualité.</li>
</ul>

<h4 style="color: #3A6351; margin-top: 10px;">2. Transcription Automatique (Speech-to-Text)</h4>
<ul style="list-style-type: disc; padding-left: 20px;">
  <li>- Tests initiaux avec Whisper (Azure OpenAI) insatisfaisants pour le Darija.</li>
  <li>- Fine-tuning du modèle de transcription STT-V5 sur les données synthétiques générées et des conversations Darija manuellement transcrites.</li>
  <li>- Prétraitement des audios : conversion en .wav, rééchantillonnage à 16 kHz.</li>
</ul>

<h4 style="color: #3A6351; margin-top: 10px;">3. Diarisation</h4>
<ul style="list-style-type: disc; padding-left: 20px;">
  <li>Diarisation basée sur transcription avec GPT-4 (prompt engineering) pour séparer agent et client.</li>
  <li>- Utilisation de pyannote.audio (modèle speaker-diarization-3.1) pour segmentation précise.</li>
  <li>- Assignation d’horodatages exacts via un prompt dédié combinant diarisation et timestamps.</li>
  <li>- Diarisation des sujets via GPT sur base des segments, avec classification en sous-thèmes prédéfinis.</li>
</ul>


      <h4 style="color: #3A6351; margin-top: 10px;">4. Modèle d’Analyse Émotionnelle (SER)</h4>
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li>Modèles Wav2Vec, Wav2Vec XLSR multilingue et version fine-tunée spécifique Darija.</li>
        <li>Fine-tuning avec tête de classification et padding pour gérer la variabilité des séquences audio.</li>
        <li>Évaluation avec métriques d’Accuracy et MSE.</li>
      </ul>
    </section>

    <section>
      <h3 style="color: #278C5D; margin-top: 20px;">Technologies Utilisées</h3>
      <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
        <thead>
          <tr style="background-color: #f0f0f0;">
            <th style="text-align: left; padding: 10px; border: 1px solid #ddd;">Catégorie</th>
            <th style="text-align: left; padding: 10px; border: 1px solid #ddd;">Outils / Technologies</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Génération de données</td>
            <td style="padding: 10px; border: 1px solid #ddd;">OpenAI API, Zoom</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Transcription</td>
            <td style="padding: 10px; border: 1px solid #ddd;">Azure OpenAI Service (Whisper, STT-V5)</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Diarisation</td>
            <td style="padding: 10px; border: 1px solid #ddd;">GPT-4 (prompt engineering), pyannote.audio</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Analyse émotionnelle</td>
            <td style="padding: 10px; border: 1px solid #ddd;">Wav2Vec, Wav2Vec XLSR, PyTorch, HuggingFace</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Langages & Frameworks</td>
            <td style="padding: 10px; border: 1px solid #ddd;">Python, JSON</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h3 style="color: #278C5D; margin-top: 20px;">Résultats</h3>
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li><strong>Transcription STT :</strong> Réduction du WER de 69% à 34% après fine-tuning sur Darija.</li>
        <li><strong>Diarisation :</strong> Séparation presque parfaite des interventions, malgré les chevauchements non résolus.</li>
        <li><strong>Analyse émotionnelle :</strong> Précision globale de 90%, avec une excellente détection des émotions "angry","neutre" et "happy".</li>
        <li>Validation de la robustesse du modèle et perspectives pour d'autres dialectes arabes peu dotés.</li>
      </ul>
    </section>

  </section>
</div>
`,
`<div style="max-width: 800px; margin: 60px auto; font-family: Arial, sans-serif; color: #333; line-height: 1.7; padding: 30px; background-color: #fff; box-shadow: 0 0 10px rgba(0,0,0,0.05); border-radius: 10px;">

  <section>
    <h2 style="font-size: 1.8em; color: #222; margin-bottom: 20px;">
      Développement d’une Plateforme Assistée par IA Générative pour Optimiser le Processus de Recrutement
    </h2>
    <img src="./assets/images_me/pfe.png" alt="Capture d'écran de l'application Streamlit" 
       style="display: block; margin: 0 auto 1.5rem auto; max-width: 100%; border-radius: 8px;" />


    <section>
      <h3 style="color: #278C5D;">Contexte du Projet</h3>
      <p>
        Le projet s'inscrit dans un contexte de <strong>transformation numérique</strong> redéfinissant les pratiques en ressources humaines. Les recruteurs font face à une <strong>charge de travail importante</strong> liée à la gestion des nombreuses demandes et tâches chronophages, ce qui rallonge les délais de recrutement et impacte la performance des entreprises.
      </p>
      <p>
        Ce Projet de Fin d'Études vise à développer une <strong>plateforme innovante assistée par IA générative</strong> pour automatiser des étapes clés du recrutement : création d'offres, sélection des candidats et correction des tests d’évaluation, afin de gagner en efficacité et qualité.
      </p>
    </section>

    <section>
      <h3 style="color: #278C5D; margin-top: 20px;">Objectifs du Projet</h3>
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li>▶ Automatiser la génération d'offres d'emploi personnalisées adaptées à la marque Capgemini.</li>
        <li>▶ Mettre en place un système intelligent de <em>matching</em> entre CV et offres pour optimiser la sélection.</li>
        <li>▶ Concevoir un outil de génération et correction automatique de tests d’évaluation adaptés aux compétences recherchées.</li>
      </ul>
    </section>

    <section>
      <h3 style="color: #278C5D; margin-top: 20px;">Outils et Technologies</h3>

      <h4 style="color: #3A6351; margin-top: 10px;">1. Intelligence Artificielle Générative et LLMs</h4>
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li>Utilisation de modèles LLM basés sur l'architecture Transformer pour la génération et compréhension du langage naturel.</li>
        <li>▪ <strong>Llama 4 Maverick</strong> pour la génération d'offres d'emploi et le matching intelligent des CV.</li>
        <li>▪ <strong>QwQ 32B</strong> pour la génération et correction automatique des tests techniques.</li>
      </ul>
    </section>

      <section>
  <h3 style="color: #278C5D; margin-top: 20px;">Méthodologie</h3>

  <h4 style="color: #3A6351; margin-top: 10px;">1. Génération Automatisée des Offres d’Emploi</h4>
  <ul style="list-style-type: disc; padding-left: 20px;">
    <li><strong>Identification du Besoin :</strong> 
      <ul style="list-style-type: circle; padding-left: 20px;">
        <li>- Les recruteurs doivent gagner du temps dans la rédaction manuelle des offres, tout en reflétant fidèlement l’identité et les valeurs de la marque Capgemini.</li>
        <li>- Permettre une saisie simple d’informations clés pour générer automatiquement une offre complète et personnalisée, incluant présentation de la marque, valeurs et raisons de la rejoindre.</li>
      </ul>
    </li>
    <li><strong>Collecte et Vectorisation des Données :</strong>
      <ul style="list-style-type: circle; padding-left: 20px;">
        <li> ▪ Extraction des données textuelles issues des sites officiels de Capgemini (Capgemini, Sogeti, Capgemini Engineering, Frog, Capgemini Invent) via Selenium, notamment sur des pages dynamiques JavaScript.</li>
        <li> ▪ Transformation en vecteurs numériques grâce au modèle d'embeddings <code>all-MiniLM-L6-v2</code> sélectionné pour son excellent compromis entre qualité, vitesse et taille.</li>
      </ul>
    </li>
    <li><strong>Stockage et Récupération des Données :</strong>
      <ul style="list-style-type: circle; padding-left: 20px;">
        <li>- Utilisation de la base vectorielle FAISS pour indexer et rechercher rapidement les données par similarité.</li>
        <li>- Implémentation de la technique Retrieval Augmented Generation (RAG) via LangChain pour combiner récupération des informations pertinentes et génération contextuelle par LLM.</li>
      </ul>
    </li>
    <li><strong>Modèle de Langage (LLM) :</strong> Utilisation du modèle <em>Llama 4 Maverick</em> pour sa qualité de génération et capacité à gérer des tâches complexes.</li>
    <li><strong>Framework :</strong> Orchestration avec LangChain pour gérer les interactions, prompts et récupération des données.</li>
  </ul>
  <img src="./assets/images_me/pfe1.png" alt="Capture d'écran de l'application Streamlit" 
       style="display: block; margin: 0 auto 1.5rem auto; max-width: 100%; border-radius: 8px;" />


  <h4 style="color: #3A6351; margin-top: 10px;">2. Matching Intelligent des CV et des Offres d’Emploi</h4>
  <ul style="list-style-type: disc; padding-left: 20px;">
    <li><strong>Identification du Besoin :</strong> Extraire et analyser le texte des CV pour un matching précis et automatique avec les offres.</li>
    <li><strong>Approche par Agents LangChain :</strong> Décomposition du système en agents spécialisés (extraction, analyse multicritères) pour modularité et précision.</li>
    <li><strong>Extraction du Texte :</strong> 
      <ul style="list-style-type: circle; padding-left: 20px;">
        <li>▶ Extraction brute du texte via PyPDF.</li>
        <li>▶ Extraction ciblée des sections clés (Résumé, Expérience, Formation, Projets, Certifications) par Llama 4 Maverick sans reformulation.</li>
      </ul>
    </li>
    <li><strong>Analyse Multicritères et Calcul du Score :</strong> 
      <ul style="list-style-type: circle; padding-left: 20px;">
        <li> ▪ Vérification obligatoire du type de contrat, condition sine qua non pour poursuivre le matching.</li>
        <li> ▪ Évaluation de l’éducation, expérience, compétences et outils avec niveaux (High, Medium, Low).</li>
        <li> ▪ Calcul d’un score global pondéré : <code>Score = (0.25 × Éducation + 0.25 × Expérience + 0.30 × Compétences + 0.20 × Outils) × 100</code>.</li>
      </ul>
    </li>
  </ul>
  <img src="./assets/images_me/pfe2.png" alt="Capture d'écran de l'application Streamlit" 
       style="display: block; margin: 0 auto 1.5rem auto; max-width: 100%; border-radius: 8px;" />

  <h4 style="color: #3A6351; margin-top: 10px;">3. Génération Automatisée et Correction des Tests d’Évaluation</h4>
  <ul style="list-style-type: disc; padding-left: 20px;">
    <li><strong>Identification du Besoin :</strong> Créer et corriger automatiquement des tests adaptés au poste et au niveau d’expérience (10 QCM + 3 exercices pratiques).</li>
    <li><strong>Génération des Tests :</strong>
      <ul style="list-style-type: circle; padding-left: 20px;">
        <li>- Modèle QwQ 32B choisi pour sa performance en génération et correction de code.</li>
        <li>- Guidage par prompt précis (One-Shot Prompting), température 0.1 pour limiter la créativité et garantir la conformité.</li>
        <li>- Contenu généré : questions, options, réponses correctes pour QCM ; énoncé, langage et solution pour exercices pratiques.</li>
      </ul>
    </li>
    <li><strong>Correction des Tests :</strong>
      <ul style="list-style-type: circle; padding-left: 20px;">
        <li>- Correction automatisée des QCM par script Python comparant réponses du candidat aux bonnes réponses.</li>
        <li>- Évaluation des exercices pratiques avec QwQ 32B sur trois critères (compréhension, correction, optimisation), chacun noté sur 1 point.</li>
        <li>- Génération automatique de remarques personnalisées expliquant la note et fournissant un feedback.</li>
      </ul>
    </li>
  </ul>
</section>
<section>
  <h3 style="color: #278C5D; margin-top: 20px;">Technologies et Outils</h3>
  <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
    <thead>
      <tr style="background-color: #f0f0f0;">
        <th style="text-align: left; padding: 10px; border: 1px solid #ddd;">Type</th>
        <th style="text-align: left; padding: 10px; border: 1px solid #ddd;">Outils / Technologies</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd;">Extraction & Scraping</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Selenium, PyPDF</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd;">Vectorisation & Recherche</td>
        <td style="padding: 10px; border: 1px solid #ddd;">all-MiniLM-L6-v2, FAISS</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd;">Modèles de Langage (LLM)</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Llama 4 Maverick, QwQ 32B</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd;">Frameworks & Orchestration</td>
        <td style="padding: 10px; border: 1px solid #ddd;">LangChain, Groq, Flask</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd;">Correction & Évaluation</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Python (scripts de correction)</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd;">Bases de données</td>
        <td style="padding: 10px; border: 1px solid #ddd;">FAISS (base vectorielle) , Postgresql</td>
      </tr>
    </tbody>
  </table>
</section>

    <section>
      <h3 style="color: #278C5D; margin-top: 20px;">Conclusion</h3>
      <p>
        Ce projet illustre comment l'IA générative et les technologies associées peuvent révolutionner le processus de recrutement en automatisant les tâches répétitives, 
        en améliorant la précision des sélections et en offrant un retour rapide aux candidats. Cette plateforme aide les recruteurs à se concentrer sur des activités à forte valeur ajoutée tout en optimisant le temps et la qualité du recrutement.
      </p>
    </section>

  </section>
</div>
`,
`<div style="max-width: 800px; margin: 60px auto; font-family: Arial, sans-serif; color: #333; line-height: 1.7; padding: 30px; background-color: #fff; box-shadow: 0 0 10px rgba(0,0,0,0.05); border-radius: 10px;">

  <section>
    <h2 style="font-size: 1.8em; color: #222; margin-bottom: 20px;">
      Guide Intelligent du Code du Travail Marocain
    </h2>
    <img src="./assets/images_me/Guid_travail_chatbot1.png" alt="Capture d'écran de l'application Streamlit" 
       style="display: block; margin: 0 auto 1.5rem auto; max-width: 100%; border-radius: 8px;" />


    <section>
      <h3 style="color: #278C5D;">Contexte du Projet</h3>
      <p>
        Ce projet vise à développer une application web interactive dédiée à la compréhension du <strong>Code du Travail Marocain</strong>. 
        Il s’adresse à un public varié : juristes, entreprises, employés, avocats, étudiants… en rendant l’information juridique <strong>plus accessible, rapide et contextuelle</strong>.
      </p>
      <p>
        Grâce à l’IA générative et aux techniques modernes de traitement du langage naturel, les utilisateurs peuvent poser des questions et obtenir des réponses instantanées et précises.
      </p>
    </section>

    <section>
      <h3 style="color: #278C5D; margin-top: 20px;">Fonctionnement et Méthodologie</h3>

      <h4 style="color: #3A6351; margin-top: 10px;">1. Traitement des Documents Juridiques</h4>
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li>Extraction du texte à partir du fichier PDF du Code du Travail à l’aide de <strong>PyMuPDF</strong>.</li>
        <li>Segmentation du contenu en petits blocs cohérents (<em>chunks</em>) avec <code>RecursiveCharacterTextSplitter</code>.</li>
      </ul>

      <h4 style="color: #3A6351; margin-top: 10px;">2. Embedding et Indexation</h4>
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li>Vectorisation des chunks à l’aide de <strong>Jina Embeddings</strong> pour capturer le sens sémantique.</li>
        <li>Stockage des vecteurs dans une base de données vectorielle <strong>FAISS</strong> pour permettre des recherches rapides.</li>
      </ul>

      <h4 style="color: #3A6351; margin-top: 10px;">3. Question/Réponse via RAG</h4>
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li>Lors d'une requête utilisateur, sa question est vectorisée pour trouver les chunks les plus similaires.</li>
        <li>Les segments pertinents sont utilisés par <strong>Mistral AI (LLM Français)</strong> pour générer une réponse contextuelle.</li>
        <li>Utilisation du module <strong>RetrievalQA</strong> orchestré par <strong>LangChain</strong>.</li>
      </ul>

      <h4 style="color: #3A6351; margin-top: 10px;">4. Interface Utilisateur</h4>
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li>Interface développée avec <strong>Streamlit</strong> pour une expérience intuitive et accessible.</li>
      </ul>
    </section>
    <img src="./assets/images_me/Guid_travail_chatbot.png" alt="Capture d'écran de l'application Streamlit" 
       style="display: block; margin: 0 auto 1.5rem auto; max-width: 100%; border-radius: 8px;" />


    <section>
  <h3 style="color: #278C5D; margin-top: 20px;">Technologies et Outils</h3>
  <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
    <thead>
      <tr style="background-color: #f0f0f0;">
        <th style="text-align: left; padding: 10px; border: 1px solid #ddd;">Type</th>
        <th style="text-align: left; padding: 10px; border: 1px solid #ddd;">Outils / Technologies</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd;">Traitement de texte et segmentation</td>
        <td style="padding: 10px; border: 1px solid #ddd;">PyMuPDF, RecursiveCharacterTextSplitter</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd;">Embedding et Recherche Sémantique</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Jina Embeddings, FAISS</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd;">Intelligence Artificielle Générative</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Mistral, RetrievalQA, LangChain</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd;">Développement Web</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Streamlit</td>
      </tr>
    </tbody>
  </table>
</section>



    <section>
      <h3 style="color: #278C5D; margin-top: 20px;">Conclusion</h3>
      <p>
        Ce projet démontre le potentiel des <strong>technologies NLP modernes</strong> pour démocratiser l'accès à l'information juridique. 
        Grâce à une interface simple et à l'usage d'une IA contextuelle, les utilisateurs peuvent naviguer efficacement dans le Code du Travail Marocain et obtenir des réponses fiables à leurs interrogations.
      </p>
    </section>

  </section>
</div>
`,
`<div style="max-width: 800px; margin: 60px auto; font-family: Arial, sans-serif; color: #333; line-height: 1.7; padding: 30px; background-color: #fff; box-shadow: 0 0 10px rgba(0,0,0,0.05); border-radius: 10px;">

  <section>
    <h2 style="font-size: 1.8em; color: #222; margin-bottom: 20px;">
      Optimisation de la Relation Client par un Chatbot Intelligent propulsé par Google PaLM et LangChain
    </h2>
    <img src="./assets/images_me/chatbot_entreprise_QA.png" alt="Capture d'écran de l'application Streamlit" 
       style="display: block; margin: 0 auto 1.5rem auto; max-width: 100%; border-radius: 8px;" />


    <section>
      <h3 style="color: #278C5D;">Contexte du Projet</h3>
      <p>
        Ce projet a pour objectif de créer un <strong>chatbot de questions/réponses</strong> intelligent à partir d'une base de données d’entreprise.
        En exploitant le modèle <strong>Google PaLM</strong> combiné à <strong>LangChain</strong>, il permet aux utilisateurs d’obtenir des réponses rapides et précises, améliorant ainsi la <strong>productivité et l'efficacité de la communication</strong>.
      </p>
      <p>
        Il s’agit d’une solution idéale pour automatiser le support interne ou répondre aux FAQ des collaborateurs et clients.
      </p>
    </section>

    <section>
      <h3 style="color: #278C5D; margin-top: 20px;">Fonctionnement et Méthodologie</h3>

      <h4 style="color: #3A6351; margin-top: 10px;">1. Préparation de la Base de Connaissances</h4>
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li>Chargement des questions/réponses depuis un fichier CSV via <code>CSVLoader</code>.</li>
        <li>Nettoyage et structuration des données.</li>
      </ul>

      <h4 style="color: #3A6351; margin-top: 10px;">2. Vectorisation et Indexation</h4>
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li>Encodage des documents avec <strong>Instructor Embeddings</strong> (modèle HuggingFace).</li>
        <li>Création d’un index vectoriel performant à l’aide de <strong>FAISS</strong>.</li>
      </ul>

      <h4 style="color: #3A6351; margin-top: 10px;">3. Recherche et Génération de Réponses</h4>
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li>La question utilisateur est transformée en vecteur sémantique.</li>
        <li>Les documents les plus pertinents sont récupérés depuis l’index avec <strong>RetrievalQA</strong>.</li>
        <li>La réponse est générée à l’aide du modèle <strong>Google PaLM</strong>.</li>
      </ul>

      <h4 style="color: #3A6351; margin-top: 10px;">4. Interface Utilisateur</h4>
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li>Application web conçue avec <strong>Streamlit</strong> pour poser une question et obtenir une réponse en temps réel.</li>
      </ul>
    </section>

    <section>
      <h3 style="color: #278C5D; margin-top: 20px;">Technologies et Outils</h3>
      <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
        <thead>
          <tr style="background-color: #f0f0f0;">
            <th style="text-align: left; padding: 10px; border: 1px solid #ddd;">Type</th>
            <th style="text-align: left; padding: 10px; border: 1px solid #ddd;">Outils / Technologies</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Chargement de données</td>
            <td style="padding: 10px; border: 1px solid #ddd;">CSVLoader</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Embedding sémantique</td>
            <td style="padding: 10px; border: 1px solid #ddd;">HuggingFace Instructor Embeddings</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Vector Store</td>
            <td style="padding: 10px; border: 1px solid #ddd;">FAISS</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Modèle de Langage</td>
            <td style="padding: 10px; border: 1px solid #ddd;">Google PaLM</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Framework d’orchestration</td>
            <td style="padding: 10px; border: 1px solid #ddd;">LangChain</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Interface utilisateur</td>
            <td style="padding: 10px; border: 1px solid #ddd;">Streamlit</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h3 style="color: #278C5D; margin-top: 20px;">Conclusion</h3>
      <p>
        Ce chatbot constitue une solution moderne, rapide et fiable pour automatiser les réponses aux demandes internes. 
        Il met en œuvre les technologies les plus récentes en NLP pour offrir une <strong>expérience utilisateur fluide et pertinente</strong>, tout en réduisant considérablement le temps passé sur des tâches répétitives.
      </p>
    </section>

  </section>
</div>
`,
`<div style="max-width: 900px; margin: 60px auto; font-family: Arial, sans-serif; color: #333; line-height: 1.7; padding: 30px; background-color: #fff; box-shadow: 0 0 10px rgba(0,0,0,0.05); border-radius: 10px;">

  <h2 style="font-size: 1.8em; color: #222; margin-bottom: 20px;">Segmentation Comportementale des Clients e-Commerce par Clustering K-Means</h2>
  <img src="./assets/images_me/segmentation_cust.png" alt="Segmentation des clients e-commerce" 
       style="display: block; margin: 0 auto 1.5rem auto; max-width: 100%; border-radius: 8px;" />

  <section>
    <h3 style="color: #278C5D;">Objectif du Projet</h3>
    <p>
      Mettre en œuvre une stratégie de segmentation comportementale basée sur l’algorithme <strong>K-Means</strong> pour identifier des profils de clients distincts sur une plateforme e-commerce.
      L’objectif final est de personnaliser les actions marketing selon les habitudes et préférences des utilisateurs.
    </p>
  </section>

  <section>
    <h3 style="color: #278C5D;">Cas d’Usage Métier</h3>
    <ul>
      <li>Identifier les clients fidèles, les opportunistes ou les clients à forte valeur potentielle.</li>
      <li>Personnaliser les campagnes d’emailing, les recommandations produit et les offres promotionnelles.</li>
      <li>Améliorer le taux de conversion et la fidélisation grâce à une meilleure connaissance client.</li>
    </ul>
  </section>

  <section>
    <h3 style="color: #278C5D;">1. Préparation et Traitement des Données</h3>
    <ul>
      <li>Lecture des données transactionnelles (historique d’achat, fréquence, panier moyen, etc.).</li>
      <li>Suppression des colonnes non numériques (<em>adresse, identifiants</em>).</li>
      <li>Normalisation des variables comportementales avec <code>StandardScaler</code>.</li>
    </ul>
  </section>

  <section>
    <h3 style="color: #278C5D;">2. Application de l’Algorithme K-Means</h3>
    <ul>
      <li>Utilisation de la méthode du coude (elbow method) pour déterminer le nombre optimal de segments.</li>
      <li>Clustering avec <strong>K-Means</strong> pour former des groupes de clients homogènes.</li>
      <li>Ajout des étiquettes de cluster dans les données pour analyse approfondie.</li>
    </ul>
  </section>

  <section>
    <h3 style="color: #278C5D;">3. Analyse des Segments et Profils Types</h3>
    <ul>
      <li><strong>Cluster 0 :</strong> Clients récents et peu dépensiers — à engager via des campagnes d’activation.</li>
      <li><strong>Cluster 1 :</strong> Clients réguliers avec paniers moyens — candidats idéaux pour la fidélisation.</li>
      <li><strong>Cluster 2 :</strong> Acheteurs fréquents à haute valeur — à privilégier dans les offres premium.</li>
    </ul>
    <p>Chaque segment alimente des décisions ciblées en acquisition, rétention et maximisation de la LTV.</p>
  </section>

  <section>
    <h3 style="color: #278C5D;">Technologies et Outils</h3>
    <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
      <thead>
        <tr style="background-color: #f0f0f0;">
          <th style="text-align: left; padding: 10px; border: 1px solid #ddd;">Type</th>
          <th style="text-align: left; padding: 10px; border: 1px solid #ddd;">Outils / Technologies</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">Analyse & Clustering</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Scikit-learn (KMeans, StandardScaler)</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">Traitement des données</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Pandas, NumPy</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">Visualisation</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Matplotlib, Seaborn, mpl_toolkits.mplot3d</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">Exploration interactive</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Jupyter Notebook</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section>
    <h3 style="color: #278C5D; margin-top: 20px;">Conclusion</h3>
    <p>
      Ce projet démontre comment le clustering K-Means peut transformer des données client brutes en insights opérationnels pour le marketing. 
      Grâce à cette segmentation intelligente, une entreprise e-commerce peut déployer des actions ciblées, pertinentes et mesurables pour augmenter son retour sur investissement.
    </p>
  </section>

</div>
`,
`<div style="max-width: 900px; margin: 60px auto; font-family: Arial, sans-serif; color: #333; line-height: 1.7; padding: 30px; background-color: #fff; box-shadow: 0 0 10px rgba(0,0,0,0.05); border-radius: 10px;">

  <h2 style="font-size: 1.8em; color: #222; margin-bottom: 20px;">Prédiction Médicamenteuse avec Arbre de Décision</h2>

  <img src="./assets/images_me/pred_drug_decisiontree.png" alt="Arbre de Décision pour classification médicale"
       style="display: block; margin: 0 auto 1.5rem auto; max-width: 100%; border-radius: 8px;" />

  <section>
    <h3 style="color: #278C5D;">Objectifs du Projet</h3>
    <ul>
      <li>Construire un <strong>modèle de classification</strong> basé sur les <strong>arbres de décision</strong>.</li>
      <li>Prédire le médicament le plus adapté à un patient en fonction de ses caractéristiques cliniques.</li>
      <li>Accélérer la prise de décision médicale grâce à l’automatisation de recommandations.</li>
    </ul>
  </section>

  <section>
    <h3 style="color: #278C5D;">Contexte</h3>
    <p>
      Dans le cadre d’une étude médicale, un ensemble de données cliniques de patients a été collecté. Ces patients ont reçu différents traitements, et l’objectif est d’identifier le médicament le plus adapté pour un nouveau patient souffrant de la même pathologie, à partir de variables telles que l’âge, le sexe, la pression artérielle, le cholestérol et le taux sodium/potassium.
    </p>
    <p>
      Le modèle développé est un <strong>classificateur multi-classes</strong>, utilisé pour recommander parmi cinq médicaments possibles : Drug A, B, C, X ou Y.
    </p>
  </section>

  <section>
    <h3 style="color: #278C5D;">Pipeline du Projet</h3>
    <ul>
      <li><strong>Chargement</strong> des données depuis IBM Cloud Object Storage.</li>
      <li><strong>Prétraitement</strong> : Encodage des variables catégorielles (sexe, cholestérol, tension artérielle).</li>
      <li><strong>Division</strong> des données en jeux d’entraînement et de test.</li>
      <li><strong>Modélisation</strong> avec <code>DecisionTreeClassifier</code> de Scikit-learn (critère "entropy").</li>
      <li><strong>Évaluation</strong> via la précision du modèle sur le jeu de test.</li>
      <li><strong>Visualisation</strong> de l’arbre de décision pour interprétabilité.</li>
    </ul>
  </section>

  <section>
    <h3 style="color: #278C5D;">Cas d'Usage Réel</h3>
    <p>
      Ce projet peut être utilisé dans des hôpitaux ou des centres médicaux pour :
    </p>
    <ul>
      <li>Aider les médecins à <strong>choisir le traitement</strong> optimal rapidement.</li>
      <li><strong>Standardiser</strong> les décisions thérapeutiques sur la base de données historiques.</li>
      <li>Améliorer l’<strong>efficacité des prescriptions</strong> grâce à la personnalisation.</li>
    </ul>
  </section>

  <section>
    <h3 style="color: #278C5D;">Technologies et Outils</h3>
    <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
      <thead>
        <tr style="background-color: #f0f0f0;">
          <th style="text-align: left; padding: 10px; border: 1px solid #ddd;">Type</th>
          <th style="text-align: left; padding: 10px; border: 1px solid #ddd;">Outils / Technologies</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">Machine Learning</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Scikit-learn (DecisionTreeClassifier)</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">Manipulation de données</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Pandas, NumPy</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">Encodage</td>
          <td style="padding: 10px; border: 1px solid #ddd;">LabelEncoder</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">Évaluation</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Accuracy Score (sklearn.metrics)</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">Visualisation</td>
          <td style="padding: 10px; border: 1px solid #ddd;">export_graphviz (Graphviz, pydotplus)</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section>
    <h3 style="color: #278C5D; margin-top: 20px;">Conclusion</h3>
    <p>
      Grâce à ce projet, l'utilisation des arbres de décision en médecine devient accessible et interprétable. Le modèle permet de recommander un traitement avec transparence, tout en restant rapide et fiable. Il constitue une première étape vers des <strong>outils d'aide à la décision</strong> médicale basés sur l’intelligence artificielle.
    </p>
  </section>
</div>
`,
`<div style="max-width: 900px; margin: 60px auto; font-family: Arial, sans-serif; color: #333; line-height: 1.7; padding: 30px; background-color: #fff; box-shadow: 0 0 10px rgba(0,0,0,0.05); border-radius: 10px;">

  <h2 style="font-size: 1.8em; color: #222; margin-bottom: 20px;">Estimation des Émissions de CO₂ par Régression Linéaire Simple</h2>

  <img src="./assets/images_me/pred_emission_gaz.png" alt="Régression linéaire prédiction CO2"
       style="display: block; margin: 0 auto 1.5rem auto; max-width: 100%; border-radius: 8px;" />

  <section>
    <h3 style="color: #278C5D;">Objectifs du Projet</h3>
    <ul>
      <li>Mettre en œuvre une <strong>régression linéaire simple</strong> à l'aide de <code>scikit-learn</code>.</li>
      <li>Prédire les <strong>émissions de CO₂</strong> des véhicules à partir de leur taille moteur.</li>
      <li>Évaluer les performances du modèle à l'aide de métriques comme le MAE, MSE et R².</li>
    </ul>
  </section>

  <section>
    <h3 style="color: #278C5D;">Contexte</h3>
    <p>
      À partir d’un jeu de données public canadien sur la consommation de carburant et les émissions des véhicules légers, ce projet vise à modéliser la relation entre la taille du moteur et les émissions de CO₂. Une telle modélisation peut être utilisée par les fabricants automobiles pour améliorer la conception de moteurs.
    </p>
    <p>
      Le jeu de données contient plusieurs variables techniques, mais la régression est appliquée sur <code>Engine Size</code> pour prédire <code>CO2 Emissions</code>.
    </p>
  </section>

  <section>
    <h3 style="color: #278C5D;">Pipeline du Projet</h3>
    <ul>
      <li><strong>Téléchargement</strong> et exploration des données <code>FuelConsumption.csv</code>.</li>
      <li><strong>Visualisation</strong> de la relation entre variables : cylindres, taille moteur, consommation, émissions.</li>
      <li><strong>Séparation</strong> du dataset en jeux d'entraînement et de test (80/20).</li>
      <li><strong>Modélisation</strong> via <code>LinearRegression</code> de scikit-learn.</li>
      <li><strong>Évaluation</strong> des performances sur le jeu de test (MAE, MSE, R²-score).</li>
      <li><strong>Affichage</strong> de la droite de régression superposée aux données d'entraînement.</li>
    </ul>
  </section>

  <section>
    <h3 style="color: #278C5D;">Cas d'Usage Réel</h3>
    <p>
      Ce modèle peut être intégré à des :
    </p>
    <ul>
      <li>Plateformes automobiles en ligne pour <strong>informer les acheteurs</strong> sur les émissions potentielles d’un véhicule.</li>
      <li><strong>Simulateurs écologiques</strong> en entreprise pour calculer l’empreinte carbone d'une flotte de véhicules.</li>
      <li>Applications gouvernementales pour <strong>classifier les véhicules</strong> selon leur performance environnementale.</li>
    </ul>
  </section>

  <section>
    <h3 style="color: #278C5D;">Technologies et Outils</h3>
    <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
      <thead>
        <tr style="background-color: #f0f0f0;">
          <th style="text-align: left; padding: 10px; border: 1px solid #ddd;">Type</th>
          <th style="text-align: left; padding: 10px; border: 1px solid #ddd;">Outils / Technologies</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">Langage</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Python</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">Manipulation de données</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Pandas, NumPy</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">Modélisation</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Scikit-learn (LinearRegression)</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">Visualisation</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Matplotlib</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">Évaluation</td>
          <td style="padding: 10px; border: 1px solid #ddd;">MAE, MSE, R²-score</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section>
    <h3 style="color: #278C5D; margin-top: 20px;">Conclusion</h3>
    <p>
      Ce projet démontre la puissance des modèles simples pour des prédictions concrètes et utiles. En reliant une variable mécanique (la taille du moteur) à une conséquence environnementale (émission de CO₂), il constitue une brique fondamentale pour des solutions orientées vers la <strong>mobilité durable</strong> et la <strong>prise de décision écoresponsable</strong>.
    </p>
  </section>
</div>

`,
`<div style="max-width: 900px; margin: 60px auto; font-family: Arial, sans-serif; color: #333; line-height: 1.7; padding: 30px; background-color: #fff; box-shadow: 0 0 10px rgba(0,0,0,0.05); border-radius: 10px;">

  <h2 style="font-size: 1.8em; color: #222; margin-bottom: 20px;">Prédiction de Churn Client avec Régression Logistique</h2>

  <img src="./assets/images_me/churn_pred.png" alt="Régression Logistique pour la prédiction de churn"
       style="display: block; margin: 0 auto 1.5rem auto; max-width: 100%; border-radius: 8px;" />

  <section>
    <h3 style="color: #278C5D;">Objectifs du Projet</h3>
    <ul>
      <li>Utiliser la <strong>régression logistique</strong> pour prédire les départs de clients.</li>
      <li>Identifier les facteurs influençant le <strong>churn client</strong> dans les télécommunications.</li>
      <li>Permettre une <strong>action proactive</strong> pour retenir les clients à risque.</li>
    </ul>
  </section>

  <section>
    <h3 style="color: #278C5D;">Contexte</h3>
    <p>
      Un opérateur télécom souhaite anticiper la perte de clients en identifiant les signaux avant-coureurs du désabonnement. En analysant des données clients historiques (démographie, services utilisés, contrats...), le but est de prédire si un client risque de partir et ainsi déclencher des actions de fidélisation.
    </p>
    <p>
      L'approche repose sur un <strong>modèle binaire de régression logistique</strong> entraîné sur les variables les plus significatives telles que la durée d’abonnement, les revenus ou le type de contrat. Ce modèle fournit une probabilité de churn, interprétable pour les équipes marketing.
    </p>
  </section>

  <section>
    <h3 style="color: #278C5D;">Pipeline du Projet</h3>
    <ul>
      <li><strong>Chargement</strong> des données via un fichier CSV issu de l’Object Storage IBM Cloud.</li>
      <li><strong>Prétraitement</strong> : sélection des variables, normalisation, typage des labels.</li>
      <li><strong>Entraînement</strong> du modèle avec <code>LogisticRegression</code> (Sklearn, solver='liblinear').</li>
      <li><strong>Évaluation</strong> du modèle avec <code>confusion_matrix</code>, <code>jaccard_score</code>, <code>log_loss</code>, <code>classification_report</code>.</li>
      <li><strong>Affichage</strong> de la matrice de confusion pour interpréter les erreurs.</li>
    </ul>
  </section>

  <section>
    <h3 style="color: #278C5D;">Cas d'Usage Réel</h3>
    <p>
      Cette solution permet aux opérateurs télécoms :
    </p>
    <ul>
      <li>De <strong>segmenter les clients à risque</strong> et adapter leur stratégie de rétention.</li>
      <li>De <strong>déclencher des offres ciblées</strong> avant que les clients ne partent chez un concurrent.</li>
      <li>D’améliorer la <strong>fidélité client</strong> tout en réduisant les coûts d’acquisition de nouveaux clients.</li>
    </ul>
  </section>

  <section>
    <h3 style="color: #278C5D;">Technologies et Outils</h3>
    <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
      <thead>
        <tr style="background-color: #f0f0f0;">
          <th style="text-align: left; padding: 10px; border: 1px solid #ddd;">Type</th>
          <th style="text-align: left; padding: 10px; border: 1px solid #ddd;">Outils / Technologies</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">Machine Learning</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Scikit-learn (LogisticRegression)</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">Manipulation de données</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Pandas, NumPy</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">Prétraitement</td>
          <td style="padding: 10px; border: 1px solid #ddd;">StandardScaler, Label Encoding</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">Évaluation</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Confusion Matrix, Jaccard Score, Log Loss</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">Visualisation</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Matplotlib (Confusion Matrix Plot)</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section>
    <h3 style="color: #278C5D; margin-top: 20px;">Conclusion</h3>
    <p>
      Grâce à ce modèle, les équipes commerciales peuvent cibler les clients susceptibles de partir avec précision. La régression logistique offre une solution rapide, fiable et interprétable pour le <strong>churn prediction</strong>. Elle constitue une première brique vers des systèmes de fidélisation intelligents basés sur l’analyse comportementale.
    </p>
  </section>
</div>
`,
  // contenu pour autres projets...
];

function showProjectDetails(index) {
  if (detailContainer.style.display === 'block' && detailContainer.dataset.currentIndex == index) {
    // Si on clique sur le même projet, on ferme la section détail
    detailContainer.style.display = 'none';
    detailContainer.innerHTML = '';
    detailContainer.dataset.currentIndex = '';
  } else {
    detailContainer.innerHTML = projectsDetailsContent[index];
    detailContainer.style.display = 'block';
    detailContainer.dataset.currentIndex = index;

    // Optionnel : scroll vers la section détail
    detailContainer.scrollIntoView({ behavior: 'smooth' });
  }
}


//       herder herbergement et activité                // 

document.addEventListener('DOMContentLoaded', function() {
    const thebergements = document.querySelector('.Thebergements');
    const activites = document.querySelector('.activites');
    const barreBleue = document.querySelector('.barre-bleue');
    
    // Fonction pour mettre en surbrillance l'élément cliqué
    function setActive(element) {
        const elements = document.querySelectorAll('.position-text-header p');
        elements.forEach(el => el.classList.remove('active'));
        element.classList.add('active');
        // Déplacer et afficher la barre bleue au-dessus de l'élément actif
        barreBleue.style.opacity = '1';
        barreBleue.style.width = element.offsetWidth + 'px';
        barreBleue.style.left = element.offsetLeft + 'px';
    }

    // Écouteurs d'événements pour les clics sur les éléments
    thebergements.addEventListener('click', function() {
        setActive(thebergements);
    });

    activites.addEventListener('click', function() {
        setActive(activites);
    });

    // Fonction setActive spécifique pour les écrans de 430px ou moins
    function setActiveResponsive(element) {
        const elements = document.querySelectorAll('.position-text-header p');
        elements.forEach(el => el.classList.remove('active'));
        element.classList.add('active');
        // Afficher la barre bleue à 50% de la largeur de l'écran, à gauche ou à droite en fonction de l'élément cliqué
        barreBleue.style.opacity = '1';
        barreBleue.style.width = '50%';
        if (element === thebergements) {
            barreBleue.style.left = '0';
        } else {
            barreBleue.style.left = '50%';
        }
    }

    // Media query pour ajuster la fonction setActive pour les écrans de 430px ou moins
    const mediaQuery = window.matchMedia('(max-width: 430px)');
    function handleMediaQuery(mediaQuery) {
        if (mediaQuery.matches) {
            // Pour les écrans de 430px ou moins, utiliser setActiveResponsive au lieu de setActive
            thebergements.removeEventListener('click', setActive);
            activites.removeEventListener('click', setActive);
            thebergements.addEventListener('click', function() {
                setActiveResponsive(thebergements);
            });
            activites.addEventListener('click', function() {
                setActiveResponsive(activites);
            });
        } else {
            // Pour les écrans au-dessus de 430px, rétablir setActive
            thebergements.removeEventListener('click', setActiveResponsive);
            activites.removeEventListener('click', setActiveResponsive);
            thebergements.addEventListener('click', function() {
                setActive(thebergements);
            });
            activites.addEventListener('click', function() {
                setActive(activites);
            });
        }
    }

    // Ajouter un écouteur pour le media query
    handleMediaQuery(mediaQuery); // Appliquer la configuration initiale
    mediaQuery.addListener(handleMediaQuery); // Mettre à jour en cas de changement de la largeur de l'écran
});








let regionInput = document.getElementById('regionInput');
regionInput.value = "Nouveau contenu";

function searchRegion() {
    var input = document.getElementById('inputRegion').value;
    // Vous pouvez utiliser la valeur de l'input pour effectuer une recherche, par exemple :
    alert('Vous avez recherché : ' + input);
}

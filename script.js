'use strict';
const shareButton = document.querySelector('.share-icon'); // The arrow SVG
const sharePopup = document.querySelector('.share-popup');

shareButton.addEventListener('click', () => {
  sharePopup.classList.toggle('show'); // Toggle visibility
});

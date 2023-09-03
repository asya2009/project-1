// Erfassen Sie alle card-Elemente
const cardElements = document.querySelectorAll('.card');

// Sortieren Sie die card-Elemente alphabetisch nach dem Text in der Klasse "front"
const sortedCardElements = Array.from(cardElements).sort((a, b) => {
  const textA = a.querySelector('.front span').textContent.trim().toLowerCase();
  const textB = b.querySelector('.front span').textContent.trim().toLowerCase();
  return textA.localeCompare(textB);
});

// Löschen Sie die vorhandenen card-Elemente aus dem DOM
cardElements.forEach((cardElement) => {
  cardElement.parentNode.removeChild(cardElement);
});

// Fügen Sie die sortierten card-Elemente zurück in den DOM ein
const cardContainer = document.body;
sortedCardElements.forEach((sortedCardElement) => {
  cardContainer.appendChild(sortedCardElement);
});
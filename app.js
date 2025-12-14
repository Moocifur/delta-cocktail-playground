// ==========================================
// Simple Cocktail Display App
// ==========================================

// DOM Element References
const elements = {
  main: document.getElementById('main'),
};

// ==========================================
// Utility Functions
// ==========================================

/**
 * Get glass icon for a cocktail
 * @param {string} iconType - The type of glass icon
 * @returns {string} - The icon path or default icon
 */
function getGlassIcon(iconType) {
  return `./images/${iconType}.jpg`;
}

// ==========================================
// Render Functions
// ==========================================

/**
 * Create a cocktail card element
 * @param {Object} cocktail - The cocktail object
 * @returns {HTMLElement} - The card element
 */
function createCard(cocktail) {
  const card = document.createElement('div');
  card.classList.add('card');
  
  // Card Header
  const cardHeader = document.createElement('div');
  cardHeader.classList.add('card-header');
  
  const headerLeft = document.createElement('div');
  headerLeft.classList.add('header-left');
  
  // Icon
  const icon = document.createElement('img');
  icon.classList.add('cocktail-icon');
  icon.src = getGlassIcon(cocktail.iconType);
  icon.alt = `${cocktail.iconType} glass`;
  icon.loading = 'lazy';
  
  // Name
  const cocktailName = document.createElement('h2');
  cocktailName.textContent = cocktail.name;
  
  headerLeft.appendChild(icon);
  headerLeft.appendChild(cocktailName);
  cardHeader.appendChild(headerLeft);
  
  // Preparations
  const preparationDiv = document.createElement('div');
  preparationDiv.classList.add('preparations');
  preparationDiv.textContent = `${cocktail.glass} / ${cocktail.method} / ${cocktail.garnish}`;
  
  // Ingredients
  const ingredientsList = document.createElement('ul');
  ingredientsList.classList.add('ingredients');
  
  cocktail.ingredients.forEach(ingredient => {
    const listItem = document.createElement('li');
    
    const amountSpan = document.createElement('span');
    amountSpan.classList.add('ingredient-amount');
    amountSpan.textContent = ingredient.amount;
    
    const nameSpan = document.createElement('span');
    nameSpan.classList.add('ingredient-name');
    nameSpan.textContent = ingredient.name;
    
    listItem.appendChild(amountSpan);
    listItem.appendChild(nameSpan);
    ingredientsList.appendChild(listItem);
  });
  
  // Assemble card
  card.appendChild(cardHeader);
  card.appendChild(preparationDiv);
  card.appendChild(ingredientsList);
  
  return card;
}

/**
 * Render all cocktails to the DOM
 */
function renderCocktails() {
  elements.main.innerHTML = '';
  
  // Sort alphabetically
  const sorted = [...cocktails].sort((a, b) => 
    a.name.localeCompare(b.name)
  );
  
  // Create and append cards
  const fragment = document.createDocumentFragment();
  sorted.forEach(cocktail => {
    const card = createCard(cocktail);
    fragment.appendChild(card);
  });
  
  elements.main.appendChild(fragment);
}

// ==========================================
// Initialization
// ==========================================

/**
 * Initialize the application
 */
function init() {
  renderCocktails();
}

// Start the app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
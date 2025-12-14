// cocktails.js
// Cocktail recipe database

const cocktails = [
  {
    id: 1,
    name: "Pineapple Under The Sea",
    glass: "Coup/Martini",
    iconType: "martini",
    method: "Shake",
    garnish: "Maybe Dry Pineapple",
    ingredients: [
      { amount: "2oz", name: "Cruzan Rum", type: "Spirit" },
      { amount: "3/4oz", name: "Lime", type: "Citrus" },
      { amount: "1/2oz", name: "Simple", type: "Sweetener" },
      { amount: "3/4oz", name: "Pineapple", type: "Citrus" }
    ],
    categories: ["classic", "spirit-forward", "boozy"],
    favorite: false
  },
  {
    id: 4,
    name: "El Comico",
    glass: "Collins",
    iconType: "collins",
    method: "Shake",
    garnish: "Dry Lime or Reg Lime",
    ingredients: [
      { amount: "2oz", name: "Jaja Tequila", type: "Spirit" },
      { amount: "3/4oz", name: "3/4 Lime", type: "Citrus" },
      { amount: "3/4oz", name: "Grenadine", type: "Sweetener" },
      { amount: "Top", name: "Soda", type: "Modifier" }
    ],
    categories: ["classic", "spirit-forward", "boozy"],
    favorite: false
  },
  {
    id: 3,
    name: "The Gommage",
    glass: "Martini Maybe",
    iconType: "martini",
    method: "Shake",
    garnish: "Orange Twist",
    ingredients: [
      { amount: "2oz", name: "That Canned Vodka", type: "Spirit" },
      { amount: "3/4oz", name: "Lemon", type: "Citrus" },
      { amount: "1/2oz", name: "Aperol", type: "Modifier" },
      { amount: "0.5oz", name: "Simple Syrup", type: "Sweetener" }
    ],
    categories: ["classic", "citrus-forward", "refreshing"],
    favorite: false
  },
  {
    id: 2,
    name: "Kayla's Yuzi Pear Highball",
    glass: "Highball",
    iconType: "collins",
    method: "Shake",
    garnish: "",
    ingredients: [
      { amount: "2oz", name: "Vodka", type: "Spirit" },
      { amount: "1.5oz", name: "Yuzu Juice", type: "Citrus" },
      { amount: "0.5oz", name: "Pear Syrup", type: "Modifier" },
      { amount: "0.5oz", name: "Simple Syrup", type: "Sweetener" },
      { amount: "Top", name: "Club Soda", type: "Sweetener" }
    ],
    categories: ["classic", "citrus-forward", "refreshing"],
    favorite: false
  }
  
  // Add your remaining 100 cocktails here...
  // You can copy from your existing cocktails.js file
];

// If using ES6 modules, export the cocktails array
// export { cocktails };

const recipe = {
  "@context": "https://www.easychineserecipes.com/tanghulu/",
  "@type": "Recipe",
  "author": "Recipe from xiachufang.com",
  "cookTime": "COOK TIME: 40min （ Including prep time)",
  "description": "Creamy Mushroom Bacon Spaghetti is a very easy to make, easy to get started, yet extremely delicious dish. With its rich, milky aroma, this dish is one of the best for me when dining alone.",
  "image": "bananabread.jpg",
  "recipeIngredient": [
    "INGREDIENTS:",
    "200g pasta",
    "2 slices bacon",
    "a few pieces of mushrooms",
    "A piece of butter",
    "A dash of black pepper and cream"
  ],
  "interactionStatistic": {
    "@type": "InteractionCounter",
    "interactionType": "https://schema.org/Comment",
    "userInteractionCount": "140"
  },
  "name": "Creamy Mushroom Bacon Spaghetti",
  "recipeInstructions": ["INSTRUCTIONS:","1. Cook the pasta, drain and set aside",
  "2. A little olive oil, saute the bacon. Slice the mushrooms and fry them in the oil after frying bacon. Sprinkle with black pepper when it's almost good.",
  "3. Melt the butter in a hot pan. Pour in the cream and let it thicken as it bubbles. Season it with salt and sugar.",
  "4. Reduce heat and stir in bacon and mushrooms. Pour in pasta and mix well"],
  "suitableForDiet": "https://schema.org/LowFatDiet"
}

const titleElement = document.getElementById("title");

titleElement.innerText = recipe.name;

document.getElementById("description").innerText = recipe.description;

document.getElementById("author").innerText = recipe.author;

document.getElementById("ingredients").innerText = recipe.recipeIngredient;

document.getElementById("instructions").innerText = recipe.recipeInstructions;

document.getElementById("time").innerText = recipe.cookTime;
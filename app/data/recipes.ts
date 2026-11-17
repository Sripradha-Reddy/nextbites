
export type Recipe = {
  id: string;
  title: string;
  cuisine: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    cuisine: "Italian",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Mozzarella cheese",
      "Fresh basil"
    ],
    steps: [
      "Prepare the pizza dough.",
      "Spread tomato sauce over the dough.",
      "Add mozzarella cheese.",
      "Bake until cooked and add fresh basil."
    ]
  },
  {
    id: "veg-fried-rice",
    title: "Vegetable Fried Rice",
    cuisine: "Chinese",
    ingredients: [
      "Cooked rice",
      "Carrots",
      "Beans",
      "Soy sauce"
    ],
    steps: [
      "Chop the vegetables.",
      "Cook the vegetables in a pan.",
      "Add cooked rice and soy sauce.",
      "Mix everything well and serve."
    ]
  },
  {
    id: "pasta",
    title: "Creamy Pasta",
    cuisine: "Italian",
    ingredients: [
      "Pasta",
      "Milk",
      "Cheese",
      "Garlic"
    ],
    steps: [
      "Boil the pasta.",
      "Prepare the sauce with milk, cheese and garlic.",
      "Add the cooked pasta.",
      "Mix well and serve."
    ]
  }
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}

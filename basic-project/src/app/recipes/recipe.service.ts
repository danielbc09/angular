import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';


export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A test Recipe',
            'Simple Test',
            'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'Combo Burger',
            'Simple Test2',
            'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
            [
                new Ingredient('Buns', 1),
                new Ingredient('Meat', 1),
                new Ingredient('Tomatoes', 1),
                new Ingredient('Lettuce', 20)
            ]),
        new Recipe(
            'Soup',
            'Simple Test3',
            'https://upload.wikimedia.org/wikipedia/commons/7/77/Beef_stew.jpg',
            [
                new Ingredient('Water', 1),
                new Ingredient('Carrots', 2),
                new Ingredient('Beans', 1),
                new Ingredient('Sausages', 3)
            ]
            ),
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}

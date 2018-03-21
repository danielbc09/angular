import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredients.model';
import { Subject } from 'rxjs/Subject';


export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();

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

      getRecipe(index: number) {
        return this.recipes[index];
      }

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe:Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());

      }
}

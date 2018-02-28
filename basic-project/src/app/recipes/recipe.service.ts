import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A test Recipe', 'Simple Test',  'http://lorempixel.com/200/200/food/'),
        new Recipe('Another Recipe', 'Simple Test2', 'http://lorempixel.com/200/200/food/'),
        new Recipe('Another Dummy Recipe', 'Simple Test3', 'http://lorempixel.com/200/200/food/'),
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}

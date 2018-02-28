import { Ingredient } from '../shared/ingredients.model';

export class ShoppingListService {

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 6),
        new Ingredient('Tomatoes', 20),
      ];

     getIngredients() {
        return this.ingredients.slice();
     }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }
}

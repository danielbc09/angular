import { Ingredient } from '../shared/ingredients.model';
import { EventEmitter } from '@angular/core';


export class ShoppingListService {

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 6),
        new Ingredient('Tomatoes', 20),
      ];

     getIngredients() {
        return this.ingredients.slice();
     }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}

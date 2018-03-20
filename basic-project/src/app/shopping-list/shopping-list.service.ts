import { Ingredient } from '../shared/ingredients.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';


export class ShoppingListService {

    ingredientsChanged = new Subject<Ingredient[]>();
    starterdEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 6),
        new Ingredient('Tomatoes', 20),
      ];

     getIngredients() {
        return this.ingredients.slice();
     }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
       /* spread operator ES6*/
         this.ingredients.push(... ingredients);
       this.ingredientsChanged.next(this.ingredients.slice());
    }
}

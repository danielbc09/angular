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

     getIngredientById(index: number) {
        return this.ingredients[index];
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

    updateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}

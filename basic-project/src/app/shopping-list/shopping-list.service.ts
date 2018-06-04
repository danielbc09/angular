import { Ingredient } from '../shared/ingredients.model';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';
import { ShoppingListModule } from './shopping-list.module';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingListService {

    ingredientsChanged = new Subject<Ingredient[]>();
    starterdEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 6),
        new Ingredient('Tomatoes', 20),
      ];

    constructor(private store: Store<{shoppingList: {ingredients: Ingredient[]}}>) {}


     getIngredientById(index: number) {
        return this.ingredients[index];
     }

    addIngredients(ingredients: Ingredient[]) {
         this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}

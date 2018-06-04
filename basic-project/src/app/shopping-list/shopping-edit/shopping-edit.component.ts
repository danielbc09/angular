import { Component, OnInit, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('form') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemId: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService, private store: Store<{shoppingList: {ingredients: Ingredient[]}}>) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.starterdEditing
        .subscribe(
          (index: number) => {
            this.editedItemId = index;
            this.editMode = true;
            this.editedItem =  this.shoppingListService.getIngredientById(index);
            this.slForm.setValue({
              name: this.editedItem.name,
              amount: this.editedItem.amount
            });
          }
        );
  }

  onAddItem(form: NgForm) {
    const formValues  = form.value;
    const newIngredient = new Ingredient(formValues.name, formValues.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemId, newIngredient);
    } else {
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
    }
    this.editMode = false;
    form.reset();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onClear(): void {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemId);
    this.onClear();
  }
}

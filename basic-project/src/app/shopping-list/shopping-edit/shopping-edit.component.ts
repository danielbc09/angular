import { Component, OnInit, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromApp from '../../store/app.reducers';
import { stat } from 'fs';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('form') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItem: Ingredient;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.subscription = this.store.select('shoppingList')
        .subscribe(
          data => {
            if (data.editedIngredientIndex > -1) {
              this.editedItem = data.editedIngredient;
              this.editMode = true;
              this.slForm.setValue({
                name: this.editedItem.name,
                amount: this.editedItem.amount
              });
            } else {
              this.editMode = false;
            }
          }
        );
  }

  onAddItem(form: NgForm) {
    const formValues  = form.value;
    const newIngredient = new Ingredient(formValues.name, formValues.amount);
    if (this.editMode) {
      this.store.dispatch(new ShoppingListActions.UpdateIngredient({ingredient: newIngredient}));
    } else {
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
    }
    this.editMode = false;
    form.reset();
  }

  onClear(): void {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
    this.onClear();
  }

  ngOnDestroy(): void {
    this.store.dispatch(new ShoppingListActions.StopEdit());
    this.subscription.unsubscribe();
  }

}

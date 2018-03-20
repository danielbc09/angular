import { Component, OnInit, ElementRef, OnDestroy} from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy{

  subscription: Subscription;
  editMode = false;
  editedItemId: number;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription= this.shoppingListService.starterdEditing
        .subscribe(
          (index: number) => {
            this.editedItemId = index;
            this.editMode = true;
          }
        );
  }

  onAddItem(form: NgForm) {
    const formValues  = form.value;
    const newIngredient = new Ingredient(formValues.name, formValues.amount);
    this.shoppingListService.addIngredient(newIngredient);
  }

  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }
}

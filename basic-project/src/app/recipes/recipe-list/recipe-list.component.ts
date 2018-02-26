import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'Simple Test',  'http://lorempixel.com/200/200/food/'),
    new Recipe('Another Recipe', 'Simple Test2', 'http://lorempixel.com/200/200/food/'),
    new Recipe('Another Dummy Recipe', 'Simple Test3', 'http://lorempixel.com/200/200/food/'),
  ];
  @Output()
  recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}

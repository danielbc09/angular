import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import * as fromShoppingList from '../../shopping-list/store/shopping-list.reducers';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  id: number;

  constructor(private shoppingListService: ShoppingListService,
              private recipeServices: RecipeService,
              private route: ActivatedRoute,
              private router: Router,
              private store: Store<fromShoppingList.AppState>) { }

  ngOnInit() {
    this.route.params
        .subscribe(
          (params: Params) => {
            this.id = +params['id'];
            this.recipe = this.recipeServices.getRecipe(this.id);
          }
        );
  }

  addRecipeIngredients() {
    this.store.dispatch(new ShoppingListActions.AddIngredients(this.recipe.ingredients));
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.recipeServices.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}

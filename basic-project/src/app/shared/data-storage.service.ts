import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/add/operator/map';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
    constructor(private httpClient: HttpClient,
                private recipeService: RecipeService,
                private authServices: AuthService) {}

    storeRecipes() {
        const token = this.authServices.getToken();
        return this.httpClient
                    .put('https://ng-recipe-book-985da.firebaseio.com/recipes.json?auth=' + token,
                        this.recipeService.getRecipes(), {
                          observe:'events'
                        });
    }

    getRecipes () {
        const token = this.authServices.getToken();

          this.httpClient
            .get<Recipe[]>('https://ng-recipe-book-985da.firebaseio.com/recipes.json?auth=' + token, {
              observe: 'body',
              responseType: 'json',
            })
            .map(
                (recipes) => {
                  console.log(recipes);

                    for(let recipe of recipes){
                        if (!recipe['ingredients']){
                            console.log(recipe);
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipes;

                }
            )
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);
                }
            );
    }
}

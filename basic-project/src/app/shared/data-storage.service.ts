import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
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
       //const header = new HttpHeaders().set('Authorization', 'Tokkasdkasdkasd');
    //    return this.httpClient
    //                .put('https://ng-recipe-book-985da.firebaseio.com/recipes.json',
    //                    this.recipeService.getRecipes(), {
    //                      observe:'events',
    //                      params: new HttpParams().set('auth', token),
    //                    });

        const req = new HttpRequest('PUT',
          'https://ng-recipe-book-985da.firebaseio.com/recipes.json',
           this.recipeService.getRecipes(),
          {reportProgress: true, params: new HttpParams().set('auth', token)});

        return this.httpClient.request(req);
    }

    getRecipes () {
        const token = this.authServices.getToken();

          this.httpClient
            .get<Recipe[]>('https://ng-recipe-book-985da.firebaseio.com/recipes.json', {
              observe: 'body',
              responseType: 'json',
              params: new HttpParams().set('auth', token),
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

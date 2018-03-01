import { Component } from '@angular/core';

@Component({
    selector: 'app-ingredient',
    templateUrl: './ingredient.component.html',
    styleUrls: ['./app.ingredient.css']
})

export class IngredientComponent {
    ingredientId = 0;
    ingredientDescription = 'Tomatoes';
}

import { Component, OnInit, Input, EventEmitter} from '@angular/core';
import { Recipe } from '../../recipe.model';
import { ShoppingListService } from '../../../shopping-list/shopping-list.service';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input()
  recipe: Recipe;

  ngOnInit() {
  }



}

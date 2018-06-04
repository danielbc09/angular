import * as shoppingListActions from './shopping-list.actions';
import { Ingredient } from '../../shared/ingredients.model';

const initialState = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ]
};
export function shoppingListReducer(state = initialState, action: shoppingListActions.ShoppingListActions) {

    switch (action.type) {
        case shoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            };
        default:
            return state;
    }
}

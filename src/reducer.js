//jshint esversion:6

export const initialState = {
    basket: [],
    user: null,
};

//  building selector to be used in basket
export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);


//  create reducer which is only listen to our state and action ( what you figure out and what you want to do with it)


const reducer = (state, action) => {
    // console.log(state); to know what is exact the state is?
    // console.log(action); to test the action from product button.
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case 'EMPTY_BASKET':
            return {
                ...state,
                basket:[],
            }

        case "REMOVE_FROM_BASKET":
            // to avoid delete more than one item if they had same id we need to find index first then we can delete the only clicked

            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            let newBasket = [...state.basket];

            if (index >= 0){
                newBasket.splice(index, 1);

            }else {
                console.warn(
                    `Can't remove prduct (id: ${action.id}) as it's not in basket!`
                )
            }

            return {
                ...state,
                basket: newBasket
            }

            //  adding listener for user to track login process and remember auth
            case "SET_USER":
                return {
                    ...state,
                    user: action.user
                }

            default:
                return state;
    }
};


export default reducer;
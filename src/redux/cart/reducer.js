import CartActionTypes from "./action-type";

const inicialState = {
    products: [],
}

const cartReducer = (state = inicialState, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCT:
            // Verificar se o produto já esta no carrinho
              const produtoEstaNoCarrinho = state.products.some(
                (product) => product.id === action.payload.id
              );
            // se ele estiver, aumentar a sua quantidade
              if (produtoEstaNoCarrinho) {
                return {...state, products: state.products.map((product) =>
                  product.id === action.payload.id
                  ? { ...product, quantity: product.quantity + 1 }
                  : product
                ),
              };
            }
            // se não, adicionar o novo produto ao carrinho
            return {
              ...state,
              products: [ ...state.products, { ...action.payload, quantity: 1 }],
            };

            case CartActionTypes.REMOVE_PRODUCT:
              return {
                ...state,
                products: state.products.filter(
                  product => product.id !== action.payload)
              }

              case CartActionTypes.INCREASE_QUANTITY:
                return {
                    ...state,
                    products: state.products.map((product) =>
                      product.id === action.payload
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
                  ),
                };

                case CartActionTypes.DECREASE_QUANTITY:
                return {
                    ...state,
                    products: state.products.map((product) =>
                      product.id === action.payload
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
                  ).filter((product) => product.quantity > 0),
                };

        default:
            return state;
    }
}

export default cartReducer;

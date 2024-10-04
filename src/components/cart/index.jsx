import  { useSelector } from 'react-redux'

// Styles
import * as S from "./styles";

import CartItem from '../cart-item/index';
import { selectProductTotalPrice } from '../../redux/cart/cart.selectors';

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const { products } = useSelector(rootReducer => rootReducer.cartReducer)

  const productsTotalPrice = useSelector(selectProductTotalPrice)

  return (
    <S.CartContainer isVisible={isVisible}>
      <S.CartEscapeArea onClick={handleEscapeAreaClick} />
      <S.CartContent>
        <S.CartTitle>Seu Carrinho</S.CartTitle>

        {products.map((product) => (
          <CartItem product={product} />
        ))}
        <S.CartTotal>Total: R$ {productsTotalPrice}</S.CartTotal>
      </S.CartContent>
    </S.CartContainer>
  );
};

export default Cart;

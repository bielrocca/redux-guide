// Styles
import * as S from "./styles";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  return (
    <S.CartContainer isVisible={isVisible}>
      <S.CartEscapeArea onClick={handleEscapeAreaClick} />
      <S.CartContent>
        <S.CartTitle>Seu Carrinho</S.CartTitle>
      </S.CartContent>
    </S.CartContainer>
  );
};

export default Cart;

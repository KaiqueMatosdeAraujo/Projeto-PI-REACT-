import CardProduct from "../cardProduct/CardProduct";
import ItemCart from "../itemCart/itemCart";
import "./ProductList.css";
import CartContext from "../../context/cart.provider";
import React, { useContext } from "react";

function ProductList(props) {

  const { alterarQuantidade } = useContext(CartContext);

  const products = props.products || [];

  // const casa =  localStorage.getItem('cart')

  // console.log(casa)

 

  const listProducts = () => {
    return products.length == 0 ? (
      <div className="carrinhoVazio">Seu Carrinho está vazio!</div>
    ) : (
      products.map((item) => {
        return (
          <>
            {props.cart ? (
              <div className="cart-item">
                <div className="form" style={{ backgroundColor: "white" }}>
                  <ItemCart
                  
                    key={item.codProduto}
                    doll1={item.imgProduto}
                    id={item.codProduto}
                    name={item.nome}
                    price={item.preco}
                    product={item}
                    incrementar={alterarQuantidade}
                    decrementar={alterarQuantidade}
                    quantidade={item.quantidade}
                    total={item.total}
                  />
                </div>
              </div>
            ) : (
              <div className="cardsHome">
                <CardProduct
                  Image={item.imgProduto}
                  Name={item.nome}
                  price={item.preco}
                  product={item}
                  parcel={item.parcela}
                  qtdEstoque={item.qtdEstoque}
                ></CardProduct>
              </div>
              
            )}
          </>
        );
      })
    );
  };

  return <>{listProducts()}</>;
}

export default ProductList;

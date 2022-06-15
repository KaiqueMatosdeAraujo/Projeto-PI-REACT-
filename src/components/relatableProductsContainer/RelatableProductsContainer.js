import "./RelatableProductsContainer.css";
import RelatableProduct from "../../components/relatableProduct/RelatableProduct";
import React, { useEffect, useState } from "react";
import axios from "axios";


function RelatableProductsContainer(props) {
  const [relatableProduct, setRelatableProduct] = useState([]);

  const listRelatableProduct = () => {
    axios.get("http://localhost:8080/produto?size=4").then((response) => {
      setRelatableProduct(response.data.content);
      
    });
  };

  useEffect(() => {
    listRelatableProduct();
  }, []);



  const listRelatable = () => {
    return (
      relatableProduct.map((item) => {
        return(
          <>
            <RelatableProduct
              key={item.codProduto}
              name={item.nome}
              price={item.preco}
              image={item.imgProduto}
              productRelatable={item}
              link={`/itemPage/${item.codProduto}`}
            />
          </>
        )
      }) 
    );
  };

  return (
    <>
      <div className="container containerConteudo col-11">
        <h4 className="nomeBebe">Aproveite também:</h4>
        <div className="row row-cards-relatable-products justify-content-evenly">
          {listRelatable()}
        </div>
      </div>
    </>
  );
}
export default RelatableProductsContainer;

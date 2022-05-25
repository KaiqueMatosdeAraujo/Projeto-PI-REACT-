import './RelatableProductsContainer.css'
import RelatableProduct from '../../components/relatableProduct/RelatableProduct'
import Product1 from '../../pages/product/imgs/renata.jpg'
import Product2 from '../../pages/product/imgs/mayara.jpg'
import Product3 from '../../pages/product/imgs/joelma.jpg'
import Product4 from '../../pages/product/imgs/camila.jpg'
function RelatableProductsContainer(props) {
  return (
    <>
      <div className="container containerConteudo col-11">
        <h4 className="nomeBebe">Produtos Relacionados</h4>
        <div className="row row-cards-relatable-products justify-content-evenly">

          <RelatableProduct
            rProductName="Bebê Reborn Renata"
            rProductPrice="659,00"
            rProductParcel="65,90"
            image={Product1} />
          <RelatableProduct
           rProductName="Bebê Reborn Camila"
           rProductPrice="459,00"
           rProductParcel="45,90"
           image={Product4} />
          <RelatableProduct
            rProductName="Bebê Reborn Renata"
            rProductPrice="659,00"
            rProductParcel="65,90"
            image={Product1} />
          <RelatableProduct
            rProductName="Bebê Reborn Camila"
            rProductPrice="459,00"
            rProductParcel="45,90"
            image={Product4} />
        </div>
      </div>
    </>
  );
}
export default RelatableProductsContainer
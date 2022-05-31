import'./ProductInfoDescription.css'

function ProductInfoDescription (props) {
    return (
        <>
    
    <div class="container  containerConteudo col-11">
      
        <h4 class="nomeBebe ">Descrição técnica:</h4>
        <div class="row ">
  
  
  
          <div class="row">
            <div class="descricaoTecSubTitles nomeBebe">Sexo:</div>
              <div class="descricaoTecContent">{props.sex}</div>
          </div>
  
          <div class="row">
            <span class="descricaoTecSubTitles nomeBebe">Tamanho:</span>
            <span class="descricaoTecContent">{props.size} Centímetros</span>
          </div>
  
  
  
  
          <div class="descricaoTecSubTitles nomeBebe"> Material:</div>
          <div class="descricaoTecContent">{props.material}</div>
  
          <div class="descricaoTecSubTitles nomeBebe"> Peso:</div>
          <div class="descricaoTecContent"> Cerca de {props.weight}</div>
  
          <div class="descricaoTecSubTitles nomeBebe"> Acompanha:</div>
          <div class="descricaoTecContent">{props.content} </div>
        </div>
      
    </div>


        </>
    
    );
  } 

  export default ProductInfoDescription
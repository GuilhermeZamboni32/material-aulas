import './produto.css'
import { SiFireship } from "react-icons/si";

function Produto({img, nome, preco, descricao}) {
  return (
    <div className='container-produto'>
        <h2>{nome}</h2>
        <img src={img} className='img-produto'/>
        <p>R${preco.toFixed(2)}</p>
        <p>{descricao}</p>

        {preco<100 && 

         <div className='promo'> 
        
         <p>Promoção</p>
         <SiFireship />

         </div>
            }

       
        
    </div>
  )
}

export default Produto
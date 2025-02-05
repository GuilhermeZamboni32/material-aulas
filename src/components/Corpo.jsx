import { useState } from 'react';
import './Corpo.css'
import Produto from './Produto';

function Corpo() {

  const [inputNome, setInputNome] = useState('')
  const [inputPreco, setInputPreco] = useState('')
  const [inputDescricao, setInputDescricao] = useState('')
  const [inputImagem, setInputImagem] = useState('')

const [produtos, setprodutos] = useState([
  {
    id: Date.now(),
    nome: "Sapato",
    preco: 1230.45,
    descricao: "A mais bela junção de sapato e carro já vista na historia!!!",
    img: "./sapata.webp"
   

  },
  {
    id: Date.now() +1,
    nome: "Sela",
    preco: 120.55,
    descricao: "A mais bela sela",
    img: "./sela 3.jpg"
   

  },
  {
    id: Date.now() +2,
    nome: "Caneca",
    preco: 12.85,
    descricao: "A mais bela Caneca!!!",
    img: "./caneca.webp"
   

  },
  {
    id: Date.now() +3,
    nome: "Curso de java",
    preco: 150.99,
    descricao: "Um otimo curso de Java",
    img: "./curso de java.jpg"
   

  }
])

function CadastrarProduto(){
  const produto = {

    id: Date.now(),
    nome: inputNome,
    preco: Number(inputPreco),
    descricao: inputDescricao,
    img: inputImagem

  }

  setprodutos([...produtos, produto])
}

    let pontos = 0;
    const [pontosEstado, setPontosEstado] = useState(0)

    function aumentarPontos(){
        pontos++
        console.log(pontos);
    }
    function tratarClique1(){
        alert("Clicou mesmo, olha só...")
    }
  return (
    <div className='container-corpo'>
       <h1>Corpo</h1>
        <button  className='button' onClick={tratarClique1}>Clique aqui</button>
        <button className='button' onClick={() => alert("arrow function")}>Com arrow function</button>

        <div>
                <button className='button' onClick={aumentarPontos}>Pontos-var</button>
               {pontos}
        </div>

        <div>
                <button className='button' onClick={() => setPontosEstado(pontosEstado + 1)}>Pontos-state</button>
                {pontosEstado}
        </div>

        <p>Paramos em estado***</p>


    {/*

    <div className='container-cards'>

           <Produto nome={"Sapato"} preco={1230.45} descricao={"A mais bela junção de sapato e carro já vista na historia!!!"} img={"./sapata.webp"}/>

           <Produto nome={"Sela"} preco={120.55} descricao={"A mais bela sela"} img={"./sela 3.jpg"}/>

      </div>

    */}  



    <div className='lista-cards'>
      {produtos.map((produto) => (
            <Produto key={produto.id} nome={produto.nome} preco={produto.preco} descricao={produto.descricao} img={produto.img}/>

      ))}
    </div>


      <div className='formCadastro'>
        <div className="input-contaner">
           <label htmlFor="">Produto:</label>
           <input type="text" 
           value={inputNome}
           onChange={(Event) => setInputNome(Event.target.value)}
           />
        </div>

        <div className="input-contaner">
            <label htmlFor="">Preço:</label>
            <input type="text" 
           value={inputPreco}
           onChange={(Event) => setInputPreco(Event.target.value)}
           />
         </div>

        <div className="input-contaner">
            <label htmlFor="">Descrição:</label>
            <input type="text" 
           value={inputDescricao}
           onChange={(Event) => setInputDescricao(Event.target.value)}
           />
        </div>

        <div className="input-contaner">
            <label htmlFor="">Imagem:</label>
            <input type="text" 
           value={inputImagem}
           onChange={(Event) => setInputImagem(Event.target.value)}
           />
        </div>
        <button onClick={CadastrarProduto}>Cadastrar</button>
       </div>


    </div>
  )
}

export default Corpo
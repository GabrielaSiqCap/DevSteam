import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Promotion from './components/Promotion'

function App() {
  
const[contadorJogos, setContadorJogos] = useState([]);
const[mostraCarrinho, setMostraCarrinho] = useState(false);

const adicionarCarrinho = (produto) => {
setCarrinhoItem((produtosAnteriores)=>{
  const existing = produtosAnteriores.find(
    (item) => item.id === produto.id
  );
  if (existing) {
    return produtosAnteriores.map((item) =>
      item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
    );
  }else {
    return [...produtosAnteriores, { ...produto, quantidade: 1 }];
  }
})
}

  return (
    <>

     <Header contadorJogos={2}/>
     <Promotion adicionarCarrinho={adicionarCarrinho}/>
    </>
  )
}

export default App


import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Promotion from './components/Promotion'

function App() {
  
  const [contador, setContador] = useState(5)

  const handleAddCarrinho = () => {
    setContador(contador + 1)
  }

  return (
    <>
     <Header contadorJogos={contador}/>
     <Promotion 
     onAddCarrinho={handleAddCarrinho} //adicionando o clique para o promoção
     />
    </>
  )
}

export default App

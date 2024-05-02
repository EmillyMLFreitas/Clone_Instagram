import logo from './logo.svg';
import './App.css';
import Esquerda from './componentes/Esquerda/ConteudoLateralEsquerda';
import Centro from './componentes/Centro/ConteudoCentral';
import Direita from './componentes/Direita/ConteudoLateralDireita';
// JSX 

function App() {
  return (
    <>
      <Esquerda />
      <Centro />
      <Direita />
    </>
  );
}

export default App;

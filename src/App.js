import logo from './logo.svg';
import './App.css';
import Esquerda from './ConteudoLateralEsquerdo';

function App() {
  return (
    <>
      <Esquerda />
      <div className="conteudoLateralEsquerda">
        {/*
      logo instagram
       menu lateral
  */}
      </div>

      <div className="conteudoCentral">
        {/*
     Storys
    */}
      </div>

      <div className="conteudoLateralDireita">
        {/*
      login
      Sugestões de amigos
  */}
      </div>
    </>

  );
}

export default App;

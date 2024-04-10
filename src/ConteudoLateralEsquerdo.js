import logo from './imagens/logoInsta.png';
import Menu from './componentes/TextMenu';
import './ConteudoLateralEsquerda.css'

export default function ConteudoLateralEsquerda() {
    return (
        
            <div className="conteudoLateralEsquerda">
                <img src={logo} alt='Logo' />
                <p>Exemplo da conteúdo da lateral esquerda</p>
                <ul>
                    <Menu nome="Home" />
                    <Menu nome="Buscar" />
                    <Menu nome="Home" />
                    <Menu nome="Home" />
                </ul>
            </div>
    
    )
}
import logo from './imagens/logoInsta.png';
import Perfil from './imagens/perfil.png';
import Menu from './componentes/TextMenu';
import './ConteudoLateralEsquerda.css';
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { BiMessageSquareCheck } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";



export default function ConteudoLateralEsquerda() {
    return (

        <div className="conteudoLateralEsquerda">
            <img src={logo} alt='Logo' />

            <ul>
                <Menu nome=" Home" icone={<GoHomeFill />} icone2={<MdKeyboardArrowDown />} />
                <Menu nome=" Buscar" icone={<IoSearch />} />
                <Menu nome=" Mensagens" icone={<BiMessageSquareCheck />} />
                <Menu nome=" Notificações" icone={<FaRegHeart />} />
                <Menu nome=" Criar" icone={<MdOutlineAddToPhotos />} icone2={<MdKeyboardArrowDown />} />
            </ul>
            <div className="perfil" >
                <img src={Perfil} alt='Perfil' />
                <p>Perfil</p>

            </div>
        </div>
    )
}
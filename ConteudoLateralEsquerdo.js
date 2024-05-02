import logo from '../../imagens/logoInsta.png';
import Menu from '../TextMenu';
import './ConteudoLateralEsquerda.css';
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { BiMessageSquareCheck } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";



export default function ConteudoLateralEsquerda() {
    return (

        <div className="conteudoLateralEsquerda">
            <img src={logo} alt='Logo' />

            <ul>
                <Menu nome=" Home" icone={<GoHomeFill />} icone1={<IoIosArrowDown />} />
                <Menu nome=" Buscar" icone={<IoSearch />} />
                <Menu nome=" Mensagens" icone={<BiMessageSquareCheck />} />
                <Menu nome=" Notificações" icone={<FaRegHeart />} />
                <Menu nome=" Criar" icone={<MdOutlineAddToPhotos />} icone1={<IoIosArrowDown />} />

                <Menu className='Profile' nome = "Profile" classe = "text-menu" icone = {<FaUserAlt/>}/>
            </ul>
        </div>
    )
}
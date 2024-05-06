import logo from '../../imagens/images.png';
import Avatar from '../../imagens/emy.png';

import Menu from '../../TextMenu';
import './ConteudoLateralEsquerda.css'
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { CgClapperBoard } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { CgAddR } from "react-icons/cg";
import { TbBrandMessenger } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { IoMenu } from "react-icons/io5";


export default function ConteudoLateralEsquerda() {
    return (
        <div className='conteudoLateralEsquerda'>
            <div className='imgLogo'>
                <img src={logo} alt='Logo' />
            </div>

            <ul>
                <Menu nome="Página inicial" icone1={<IoIosArrowDown />} classe="text-menu" icone={<GoHomeFill style={{
                    cursor: 'Pointer',
                    fontSize: 26,
                }} />} />

                <Menu nome="Pesquisa" classe="text-menu" icone={<IoSearch style={{
                    cursor: 'Pointer',
                    fontSize: 26,
                }} />} />

                <Menu nome="Explorar" classe="text-menu" icone={<MdOutlineExplore style={{
                    cursor: 'Pointer',
                    fontSize: 26,
                }} />} />

                <Menu nome="Reels" classe="text-menu" icone={<CgClapperBoard style={{
                    cursor: 'Pointer',
                    fontSize: 26,
                }} />} />

                <Menu nome="Mensagens" classe="text-menu" icone={<TbBrandMessenger style={{
                    cursor: 'Pointer',
                    fontSize: 26,
                }} />} />

                <Menu nome="Notificações" classe="text-menu" icone={<FaRegHeart style={{
                    cursor: 'Pointer',
                    fontSize: 26,
                }} />} />

                <Menu nome="Criar" classe="text-menu" icone={<CgAddR style={{
                    cursor: 'Pointer',
                    fontSize: 26,
                }} />} />


                <div className='profileImg'>
                <img src={Avatar} alt='Perfil' />
                <Menu className='Profile' nome="Perfil" classe="text-menu" />

                </div>
            </ul>

            <div className='settings'>
                <Menu nome="Mais" classe="text-menu" icone={<IoMenu style={{
                    cursor: 'Pointer',
                    fontSize: 26,
                }} />} />
            </div>

        </div>

    )
}

// export default ConteudoLateralEsquerda;
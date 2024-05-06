import './Feed.css';

import Avatar1 from '../../imagens/avatar_nasa.png';
import Avatar2 from '../../imagens/avatar_proa.png';
import Avatar3 from '../../imagens/avatar_artemPax.png';
import Avatar4 from '../../imagens/avatar_padroeira.png';

import Post1 from '../../imagens/post01.png';
import Post2 from '../../imagens/post02.png';
import Post3 from '../../imagens/post03.png';
import Post4 from '../../imagens/post04.png';

import Post from './Post/Post';

export default function Feed() {
    return (
        <div className="Feed">
            <Post
                imgUser={Avatar1}
                title="nasa"
                time="• 1d"
                imgSrc={Post1}
                likes="834.212 curtidas"
                body="You're a sky full of stars ✨"
                seeComments="Ver todos os 1.675 comentários"
                comment="Adicione um comentário..." />

            <Post
                imgUser={Avatar2}
                title="instituto.proa"
                time="• 25 de abril"
                  imgSrc={Post2}
                likes="550 curtidas"
                body="Visita à Bloomberg 💙"
                seeComments="Ver todos os 15 comentários"
                comment="Adicione um comentário..." />

            <Post
                imgUser={Avatar3}
                title="artem_pax"
                time="• 1d"
                  imgSrc={Post3} 
                likes="12.578 curtidas"
                body="Nossa Senhora da Imaculada Conceição 🤍"
                seeComments="Ver todos os 24 comentários"
                comment="Adicione um comentário..." />
            
            <Post
                imgUser={Avatar4}
                title="padroeira"
                time="• 3d"
                  imgSrc={Post4} 
                likes="23.200 curtidas"
                body="Bem-vindo, Maio: o mês dedicado a Maria! 🌹❤️"
                seeComments="Ver todos os 445 comentários"
                comment="Adicione um comentário..." />

        </div>
    )
}
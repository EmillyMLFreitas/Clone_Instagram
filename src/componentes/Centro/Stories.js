import Story from "./Story"
import './Stories.css'
import Story1 from '../../imagens/avatar_gabriel.jpg';
import Story2 from '../../imagens/avatar_padroeira.png';
import Story3 from '../../imagens/avatar_gustavo.jpg';
import Story4 from '../../imagens/avatar_proa.png';
import Story5 from '../../imagens/avatar_gabi.jpg';
import Story6 from '../../imagens/avatar_nasa.png';
import Story7 from '../../imagens/avatar_senac.png';
import Story8 from '../../imagens/avatar_etec.png';

var listaUsuarios = [
    {
        nome: "Gabriel Augusto",
        url: Story1
    },
    {
        nome: "padroeira",
        url: Story2
    },
    {
        nome: "Gustavo Salles",
        url: Story3
    },
    {
        nome: "instituto.proa",
        url: Story4
    },
    {
        nome: "Gabrielle Correa",
        url: Story5
    },
    {
        nome: "nasa",
        url: Story6
    },
    {
        nome: "senactito",
        url: Story7
    }
    ,
    {
        nome: "etecsaomateus",
        url: Story8
    }
]

export default function Stories() {
    return (
        <div className="Stories">
            {
                // Iteração -> Para cada usuário na lista de usuários, renderize um Story
                listaUsuarios.map((usuario) => {
                    return <Story nomeUsuario={usuario.nome} caminhoDaImagem={usuario.url} />
                })
            }

        </div>
    )
}
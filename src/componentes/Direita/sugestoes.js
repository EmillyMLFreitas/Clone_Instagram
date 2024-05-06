import SugestaoPerfil from "./sugestao_perfil"
import "./sugestoes.css"
import Avatar from '../../imagens/emy.png';
import Avatar1 from '../../imagens/avatar_sug_kimetsu.png';
import Avatar2 from '../../imagens/avatar_sug_skala.png';
import Avatar3 from '../../imagens/avatar_sug1.png';
import Avatar4 from '../../imagens/avatar_sug2.png';
import Avatar5 from '../../imagens/avatar_sug3.png';

var listaSugestoes = [
    {
        nomeSug: "kimetsu.no.yaiba_br",
        urlSug: Avatar1
    },
    {
        nomeSug: "skalacosmeticos",
        urlSug: Avatar2
    },
    {
        nomeSug: "Sofia",
        urlSug: Avatar3
    },
    {
        nomeSug: "Fernanda",
        urlSug: Avatar4
    },
    {
        nomeSug: "Maria",
        urlSug: Avatar5
    }
]

export default function Sugestoes() {
    return (
        <div className="sugestoes">
            <SugestaoPerfil imgSug={Avatar}
                nomePerfilSug="emillyfreitas29"
                descPerfilSug="Emilly Freitas 💜"
                azulSug="Mudar" />
            <div className="sugText">
                <p className="sugsDesc">Sugestões para você</p>
                <p className="sugsDesc2">Ver Tudo</p>
            </div>


            {
                listaSugestoes.map((sugestao) => {
                    return <SugestaoPerfil descPerfilSug="Sugestões para você" azulSug="Seguir"
                        imgSug={sugestao.urlSug} nomePerfilSug={sugestao.nomeSug} />
                })
            }
            <div className="footerDescSug">
                <p className="footerDesc1">Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Idioma • Meta Verified</p>
                <p className="footerDesc2">© 2024 INSTAGRAM FROM EMILLY</p>
            </div>

        </div>
    )
}
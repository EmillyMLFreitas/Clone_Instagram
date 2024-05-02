import SugestaoPerfil from "./sugestao_perfil"
import "./sugestoes.css"

var listaSugestoes = [
    {
        nomeSug: "Gustavo",
        urlSug: "https://avatars.githubusercontent.com/u/48858978?v=4"
    },
    {
        nomeSug: "Gabriel",
        urlSug: "https://avatars.githubusercontent.com/u/48858978?v=4"
    },
    {
        nomeSug: "Emilly",
        urlSug: "https://avatars.githubusercontent.com/u/48858978?v=4"
    },
    {
        nomeSug: "Gustavo",
        urlSug: "https://avatars.githubusercontent.com/u/48858978?v=4"
    },
    {
        nomeSug: "Gabriel",
        urlSug: "https://avatars.githubusercontent.com/u/48858978?v=4"
    }
]

export default function Sugestoes() {
    return (
        <div className="sugestoes">
            <SugestaoPerfil imgSug="https://avatars.githubusercontent.com/u/48858978?v=4"
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
                <p className="footerDesc1">Sobre
                    Ajuda
                    Imprensa
                    API
                    Carreiras
                    Privacidade
                    Termos
                    Localizações
                    Idioma
                    Meta Verified</p>
                <p className="footerDesc2">© 2024 INSTAGRAM FROM EMY</p>
            </div>

        </div>
    )
}
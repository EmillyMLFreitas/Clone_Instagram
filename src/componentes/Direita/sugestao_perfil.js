import './sugestao_perfil.css'

export default function SugestaoPerfil (props){
    return(
        <div className='conteudo-sugestao'>
            <img src={props.imgSug}/>
            
            <div className='perfil-sugestao-descricao'>
            <p className='nomePerfilSug'>{props.nomePerfilSug}</p>
            <p className='descPerfilSug'>{props.descPerfilSug}</p>
            </div>
            <p className='seguir-azul'>{props.azulSug}</p>
        </div>
    )
}
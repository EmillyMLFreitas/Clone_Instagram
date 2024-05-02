import { useState } from "react";


import './Post.css';
import { FaRegHeart } from "react-icons/fa";
import { RiChat3Line } from "react-icons/ri";
import { TbLocationShare } from "react-icons/tb";
import { FiMoreHorizontal } from "react-icons/fi";
import { TbFlag3 } from "react-icons/tb";




var color;

export default function Post(props) {

    const [likes, setLikes] = useState(0);

    //     var likes = 0;
    //     function setLikes (valor){
    //          likes = valor;
    //  }



    return (
        <div className="card Post">
            <div className="card-header">
                <div className="user">
                   <div className="imagem-perfil">
                     <img className="imgUser" src={props.imgUser} />
                   </div>
                    <h3>{props.title}</h3>
                    <h3 className="horas">{props.hour}</h3>
                </div>

                <div className="more">
                    <FiMoreHorizontal 
                    style={{
                        cursor: 'Pointer',
                        fontSize: 20,
                    }}/>
                </div>
            </div>
            <div className="card-body">
                    <img className="imgSrc" src={props.imgSrc} />
               
               <div className="interactions">
               <div className="like">
                <FaRegHeart
                    onClick={() => setLikes(likes + 1)}
                    style={{
                        color: likes % 2 === 0 ? 'black' : 'red',
                        cursor: 'Pointer',
                        fontSize: 25,
                    }}
                />

                <RiChat3Line 
                 style={{
                    cursor: 'Pointer',
                    fontSize: 25,
                }}/>
                <TbLocationShare 
                 style={{
                    cursor: 'Pointer',
                    fontSize: 25,
                }}/>
                </div>
                
                <div className="tosave">
                <TbFlag3 
                 style={{
                    cursor: 'Pointer',
                    fontSize: 25,
                }}/>
                </div>
               </div>
                

                <p>{props.body}</p>
            </div>
            <div className="card-footer">
            </div>
        </div>
    )
}
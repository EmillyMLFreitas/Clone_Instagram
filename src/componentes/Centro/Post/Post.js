import { useState } from "react";


import './Post.css';
import { FaRegHeart } from "react-icons/fa";
import { RiChat3Line } from "react-icons/ri";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FiMoreHorizontal } from "react-icons/fi";
import { RiBookmarkLine } from "react-icons/ri";
import { BsEmojiSmile } from "react-icons/bs";



// var color;

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
                    <h3 className="tempo">{props.time}</h3>
                </div>

                <div className="more">
                    <FiMoreHorizontal
                        style={{
                            cursor: 'Pointer',
                            fontSize: 20,
                        }} />
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
                                fontSize: 25
                            }}
                        />

                        <RiChat3Line
                            style={{
                                cursor: 'Pointer',
                                fontSize: 25
                            }} />
                        <IoPaperPlaneOutline
                            style={{
                                cursor: 'Pointer',
                                fontSize: 25
                            }} />
                    </div>

                    <div className="tosave">
                        <RiBookmarkLine
                            style={{
                                cursor: 'Pointer',
                                fontSize: 25
                            }} />
                    </div>
                </div>

                <h3>{props.likes}</h3>

                <div className="title-body">
                    <h3>{props.title}</h3>
                    <p>{props.body}</p>
                </div>

                <p className="comments">{props.seeComments}</p>

                <div className="addComment">
                <p className="comments">{props.comment}</p>
                <BsEmojiSmile className="comments"  style={{
                                cursor: 'Pointer',
                                fontSize: 15
                            }}/>
                </div>
            </div>
            <div className="card-footer">
            </div>
        </div>
    )
}
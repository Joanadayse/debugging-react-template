import React from "react";
import { PostContainer } from "./styled";
import  Comentario  from "../Comentario/Comentario";


export default function Post  (props)  {
  
  return (
    <PostContainer className={"post-container"}>
      <p>{props.post.texto}</p>
      <button onClick={() => props.alteraCurtida()}>
        {props.post.curtido ? "Descurtir" : "Curtir"}
      </button>
      <button onClick={() => props.apagaPost()}>Apagar</button>
      
      {/* Exercício final de debug. Descomentar só depois de finalizar o debug de post*/}
      <Comentario
        comentario={props.comentario}
        adicionaComentario={props.adicionaComentario}
        comentarioDoPost={props.comentario}
      />
    </PostContainer>
  );
};

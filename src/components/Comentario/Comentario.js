import React from 'react'
import { Coment } from './styled'

export default function Comentario(props) {
    return (
        <Coment>
            <input placeholder="Adicionar comentario" />
            <button onClick={props.adicionaComentario}>Comentar Post</button>
            <p>{props.comentario}</p>
        </Coment>
    )
}

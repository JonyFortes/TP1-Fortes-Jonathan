import React from 'react'
import {Container} from './styled'

const Card = ({pelicula}) => {
    const {personaje, año, img} = pelicula
    return(
        <Container>
            <img src={img} alt={personaje}/>
            <div className="info">
                <h2>{personaje}</h2>
                <h3>{año}</h3>
            </div>
        </Container>
    )

}

export default Card
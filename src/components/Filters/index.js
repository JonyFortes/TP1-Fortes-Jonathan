import React from 'react'
import {Container} from './styled'
import Filter from '../Filter'

const Filters = props => {
    const {onFilterChange, personaje} = props


    return(
        <Container>
            <Filter onFilterChange={onFilterChange} name="filter1" data={personaje} />
            <Filter onFilterChange={onFilterChange} name="filter2"/>
        </Container>
    )

}

export default Filters
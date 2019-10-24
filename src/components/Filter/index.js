import React from 'react'

const Filter = props => {
    const { onFilterChange, name, data = [] } = props
    return (
        <select
            onChange={onFilterChange}
            name={name}
        >
            <option value="select">Vengadores</option>
            {data.map(item => <option value={item} key={item}>{item}</option>)}
            
            
        </select>
    )

}

export default Filter
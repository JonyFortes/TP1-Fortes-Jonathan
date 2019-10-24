import React from 'react';
import './index.css';
import { Container } from './styled'
import Header from '../Header'
import Navbar from '../Navbar'
import Filters from '../Filters'
import Grilla from '../Grilla'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            peliculas:[],
            peliculasBkp:[],
            personaje:[],
            loading:true,
            filters: {
                filter1: 'select',
                filter2: 'select'
            }
        }
        this.handleFilterChange = this.handleFilterChange.bind(this) //IMPORTANTE
        this.handleFilter = this.handleFilter.bind(this) //IMPORTANTE
    }

    async componentDidMount(){

        try {
    
          const response = await fetch('https://vengadores-api-rest.herokuapp.com/vengador')
    
          if (!response.ok) {
    
            throw Error(response.statusText);
    
          }
    
          const json = await response.json()
    
          console.log(json)
    
          this.setState({
    
            peliculas:json,
    
            loading:false
    
          })
    
        } catch (error) {
    
          console.log(error)
    
        }
    
    
    
      }

    handleFilter(payload){
        const {filter1, filter2} = payload
        const {peliculasBkp} = this.state
        const filteredPeliculas = peliculasBkp.filter(pelicula => {
            return pelicula.titulo === (filter1 !== 'select' ? filter1 : pelicula.titulo )
        })
        return filteredPeliculas
    }

    handleFilterChange(event) {
        let payload = this.state.filters
        payload[event.target.name] = event.target.value
        const peliculasFiltered = this.handleFilter(payload)
        console.log(peliculasFiltered)
        this.setState({
            filters: payload,
            peliculas:peliculasFiltered
        })
    }


    render() {
        return (
            <Container>
                <Navbar />
                <Header />
                <div className="inner">
                    <Filters
                    filters={this.state.filters}
                    personaje={this.state.personaje}
                    onFilterChange={this.handleFilterChange} 
                     />
                    {!this.state.loading && <Grilla peliculas={this.state.peliculas} />}
                </div>
            </Container>
        );
    }
}

export default App;

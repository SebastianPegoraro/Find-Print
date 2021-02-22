import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext';
import axios from 'axios';

export default class Persona extends Component {
    constructor(props) {
        super(props)

        this.state = {
            persona: {
                number: ''
            },
            renaper: {
                name: '',
                gender: '',
                height: '',
                mass: ''
            }
        }
    }

    handleSubmit = (event) => {
        axios.get(`https://swapi.dev/api/people/` + this.state.persona.number)
            .then(res => {
                this.setState({ renaper: res.data });
                console.log(this.state.renaper);
            })
    }

    render() {
        return (
            <React.Fragment>

                <label className="form-label" htmlFor="number">N°:</label>
                <InputText placeholder="Ingrese 1 - 82" value={this.state.persona.number} type="number" className="form-control" id="number" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.number = parseInt(val, 10);
                        return { persona };
                    })
                }
                } />

                <br />
                
                <button onClick={e => this.handleSubmit(e)} className="btn btn-primary mb-3" >Buscar</button>

                <br />

                <label htmlFor="name" className="form-label">Nombre:</label>
                <input type="text" className="form-control-plaintext" id="name" value={this.state.renaper.name} readOnly />

                <label htmlFor="gender" className="form-label">Genero:</label>
                <input type="text" className="form-control-plaintext" id="gender" value={this.state.renaper.gender} readOnly  />

                <label htmlFor="height" className="form-label">Altura:</label>
                <input type="text" className="form-control-plaintext" id="height" value={this.state.renaper.height} readOnly  />

                <label htmlFor="mass" className="form-label">Peso:</label>
                <input type="text" className="form-control-plaintext" id="mass" value={this.state.renaper.mass} readOnly />

            </React.Fragment>
        )
    }
}

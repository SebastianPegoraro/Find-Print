import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext';
import axios from 'axios';

export default class Persona extends Component {
    constructor(props) {
        super(props)

        this.state = {
            persona: {
                number: '',
                gender: '',
                order: ''
            },
            renaper: {
                code: '',
                message: '',
                person: '',
                valid: ''
            }
        }
    }

    handleSubmit = (event) => {
        axios.get(`https://renaper.dnm.gob.ar/`,{
            headers: {
                apikey: '',
                url: 'http://onboarding.renaper.prod.vusecurity.com:8080/vu-onboardingrest/information/personData'
            }
        })
            .then(res => {
                this.setState({ renaper: res.data });
                console.log(this.state.renaper);
            })
    }

    render() {
        return (
            <React.Fragment>

                <label className="form-label" htmlFor="number">N° D.N.I.:</label>
                <InputText placeholder="Ingrese D.N.I." value={this.state.persona.number} type="number" className="form-control" id="number" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.number = parseInt(val, 10);
                        return { persona };
                    })
                }
                } />

                <br />

                <label className="form-label" htmlFor="gender">Genero:</label>
                <InputText placeholder="Ingrese 'M'-Masculino 'F'-Femenino" value={this.state.persona.gender} type="text" className="form-control" id="gender" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.number = parseInt(val, 10);
                        return { persona };
                    })
                }
                } />

                <br />

                <label className="form-label" htmlFor="number">N° Orden:</label>
                <InputText placeholder="Ingrese su numero de Orden" value={this.state.persona.order} type="number" className="form-control" id="order" onChange={(e) => {
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

                <label htmlFor="name" className="form-label">Código:</label>
                <input type="text" className="form-control-plaintext" id="name" value={this.state.renaper.code} readOnly />

                <label htmlFor="gender" className="form-label">Mensaje:</label>
                <input type="text" className="form-control-plaintext" id="gender" value={this.state.renaper.message} readOnly  />

                <label htmlFor="height" className="form-label">Persona:</label>
                <input type="text" className="form-control-plaintext" id="height" value={this.state.renaper.person} readOnly  />

                <label htmlFor="mass" className="form-label">Valido:</label>
                <input type="text" className="form-control-plaintext" id="mass" value={this.state.renaper.valid} readOnly />

            </React.Fragment>
        )
    }
}

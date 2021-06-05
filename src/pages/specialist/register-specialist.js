import React, { useEffect } from 'react'

import { PlusSquare } from 'react-feather'

import '../../styles/globalstyles.css'

import DefaultPage from '../../components/defaultpage/defaultPage'

import SearchCep from '../../scripts/searchCep'

function Dashboard() {

    useEffect(() => {
        document.title = "Clínica Pomarola | Especialista"
    }, []);
    
    return (
        <DefaultPage atualPage='Especialista' className="col-md-9 ms-sm-auto col-lg-10">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4 border-bottom">
                <h1 className="h4" style={{ marginTop:2, paddingBottom: 3 }}>Cadastro de Especialista</h1>
            </div>

            <form action="/cliente" method="POST" className="p-2">
                <div className="row g-3">  
                    <div className="col-sm-6">
                        <label htmlFor="name" className="form-label">Nome Completo</label>
                        <input type="text" className="form-control" id="name" placeholder="Insira o nome completo" required></input>
                    </div>

                    <div className="col-sm-6">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input type="email" className="form-control" id="email" placeholder="Insira e-mail" required></input>
                    </div>

                    <div className="col-sm-3">
                        <div className="select-specialist">
                            <label htmlFor="blood-type" className="form-label">Profissão</label>
                            <button className="button-add-specialist">
                                <PlusSquare size={20} />
                            </button>
                        </div>
                        <select className="form-select" id="blood-type" aria-label="Default select example">
                            <option defaultValue>Selecione a Profissão</option>
                            <option value="1">Ginecologista</option>
                            <option value="2">Oftalmologista</option>
                            <option value="3">Clínico Geral</option>
                            <option value="1">Pediátra</option>
                            <option value="2">Psicólogo</option>
                            <option value="3">Dermatologista</option>
                            <option value="1">Urologista</option>
                            <option value="2">Ortopedista</option>
                        </select>
                    </div>

                    <div className="col-sm-3">
                        <label htmlFor="register" className="form-label">Registro</label>
                        <input type="text" className="form-control" id="register" placeholder="Insira o registro" required></input>
                    </div>

                    <div className="col-sm-3">
                        <label htmlFor="cellphone" className="form-label">Celular</label>
                        <input type="tel" className="form-control" id="cellphone" placeholder="Insira o celular" required></input>
                    </div>

                    <div className="col-sm-3">
                        <label htmlFor="phone" className="form-label">Telefone<span className="text-muted"> (Opcional)</span></label>
                        <input type="tel" className="form-control" id="phone" placeholder="Insira o telefone"></input>
                    </div>

                    <div className="col-sm-2">
                        <label htmlFor="cep" className="form-label">CEP</label>
                        <input type="text" className="form-control" id="cep" placeholder="Insira o cep" onBlur={SearchCep} required></input>
                    </div>

                    <div className="col-sm-8">
                        <label htmlFor="address" className="form-label">Logradouro</label>
                        <input type="text" className="form-control" id="address" disabled required></input>
                    </div>

                    <div className="col-sm-2">
                        <label htmlFor="number" className="form-label">Número</label>
                        <input type="text" className="form-control" id="number" placeholder="Insira o número" required></input>
                    </div>

                    <div className="col-sm-3">
                        <label htmlFor="complement" className="form-label">Complemento</label>
                        <input type="text" className="form-control" id="complement" placeholder="Se houver"></input>
                    </div>

                    <div className="col-sm-4">
                        <label htmlFor="district" className="form-label">Bairro</label>
                        <input type="text" className="form-control" id="district" disabled required></input>
                    </div>

                    <div className="col-sm-4">
                        <label htmlFor="city" className="form-label">Localidade</label>
                        <input type="text" className="form-control" id="city" disabled></input>
                    </div>

                    <div className="col-sm-1">
                        <label htmlFor="state" className="form-label">UF</label>
                        <input type="text" className="form-control" id="state" disabled></input>
                    </div>

                    <hr style={{ marginTop: 50 }}></hr>

                    <button type="submit" className="register-global btn btn-primary w-100">Cadastrar Especialista</button>
                </div>
            </form>
        </DefaultPage>
    );
}

export default Dashboard;
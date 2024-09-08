import { useState } from "react";
import { alerta } from "../funtion";

const Parciales = () => {
    return(
        <section className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <div className="mb-3">
                        <h1 className="text-center">NOTAS PARCIALES</h1>
                            <div className='row align-items-center'>
                               <div className="col-auto">
                                    <labe htmlFor="nota1" className="form-label fs-3 mt-4">Nota 1:</labe>
                                </div> 
                                <div className="col">
                                    <input type="number" className="form-control mt-3" id="nota1" ></input>
                                </div>
                            </div>
                            <div className='row align-items-center'>
                               <div className="col-auto">
                                    <labe htmlFor="nota2" className="form-label fs-3 mt-4">Nota 2:</labe>
                                </div> 
                                <div className="col">
                                    <input type="number" className="form-control mt-3" id="nota2" ></input>
                                </div>
                            </div>
                            <div className='row align-items-center'>
                               <div className="col-auto">
                                    <labe htmlFor="nota3" className="form-label fs-3 mt-4">Nota 3:</labe>
                                </div> 
                                <div className="col">
                                    <input type="number" className="form-control mt-3" id="nota3" ></input>
                                </div>
                            </div>
                        </div>
                        <div className="col-8 mt-3">
                            <button type="button" className="btn btn-sucess">Calcular</button>
                            <button type="button" className="btn btn-primary">Limpiar</button>

                        </div>

                </div>
                <div className="col-6 text-center">
                    <h1>Resultado</h1>
                    <div id="mensaje" className="fs-5">{mensaje}</div>
                    <div id="porcentaje" className="fs-5">{porcentaje}</div>
                </div>
            </div>
        </section>
    )
}

export default Parciales;
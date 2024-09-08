import React, { useState } from 'react';
import { alerta } from '../funtion';

const Parciales = () => {
    const [nota1, setNota1] = useState('');
    const [nota2, setNota2] = useState('');
    const [nota3, setNota3] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [porcentaje, setPorcentaje] = useState('');

    const validarNotas = () => {
        if (nota1.trim() === '') {
            alerta('Ingrese primer número', 'warning', 'nota1');
        } else if (nota2.trim() === '') {
            alerta('Ingrese segundo número', 'warning', 'nota2');
        } else if (nota3.trim() === '') {
            alerta('Ingrese tercer número', 'warning', 'nota3');
        } else if (nota1 > 30 || nota2 > 30 || nota3 > 40) {
            alerta("Las primeras dos notas no deben ser mayor a 30% y 40% para la tercera nota.");
        } else {
            let valor1 = parseFloat(nota1);
            let valor2 = parseFloat(nota2);
            let valor3 = parseFloat(nota3);
            let total = valor1 + valor2 + valor3;
            let porcentaje = (total / 100) * 100;

            if (porcentaje >= 0 && porcentaje <= 59) {
                setMensaje('Reprobado');
            } else if (porcentaje >= 60 && porcentaje <= 79) {
                setMensaje('Bueno');
            } else if (porcentaje >= 80 && porcentaje <= 89) {
                setMensaje('Muy Bueno');
            } else if (porcentaje >= 90 && porcentaje <= 100) {
                setMensaje('Sobresaliente');
            } else {
                alerta('Las notas ingresadas no son válidas', 'warning');
            }
            setPorcentaje(`${porcentaje}%`);
        }
    };

    const limpiarFormulario = () => {
        setNota1('');
        setNota2('');
        setNota3('');
        setMensaje('');
        setPorcentaje('');
    };

    return (
        <section className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <div className="mb-3">
                        <h1 className="text-center">Notas Parciales</h1>
                        <div className='row align-items-center'>
                            <div className="col-auto">
                                <label htmlFor="nota1" className="form-label fs-3 mt-4">Nota1</label>
                            </div>
                            <div className="col">
                                <input type="number" className="form-control mt-3" id="nota1" value={nota1} onChange={(e) => setNota1(e.target.value)} style={{ width: '50%' }} />
                            </div>
                        </div>
                        <div className='row align-items-center'>
                            <div className="col-auto">
                            <label htmlFor="nota2" className="form-label fs-3 mt-4 ">Nota2</label>
                            </div>
                            <div className="col">
                            <input type="number" className="form-control  mt-3" id="nota2" value={nota2} onChange={(e) => setNota2(e.target.value)} style={{ width: '50%' }}/>
                         </div>
                        </div>
                        <div className='row align-items-center'>
                            <div className="col-auto">
                           <label htmlFor="nota3" className="form-label fs-3 mt-4">Nota3</label>
                           </div>
                            <div className="col">
                            <input type="number" className="form-control mt-3" id="nota3" value={nota3} onChange={(e) => setNota3(e.target.value)} style={{ width: '50%' }}/>
                         </div>
                        </div>
                       
                       
                    </div>
                    <div className="col-8 mt-3">
                        <button type="button" className="btn btn-success" onClick={validarNotas}>Calcular</button>
                        <button type="button" className="btn btn-primary" onClick={limpiarFormulario}>Limpiar</button>
                    </div>
                </div>
                <div className="col-6 text-center">
                    <h1>Resultado</h1>
                    <div id="mensaje" className="fs-5">{mensaje}</div>
                    <div id="porcentaje" className="fs-5">{porcentaje}</div>
                </div>
            </div>
        </section>
    );
}
export default Parciales;
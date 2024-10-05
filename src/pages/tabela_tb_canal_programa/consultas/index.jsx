
import { useState } from 'react'


import axios from 'axios'



export default function Addprograma() {

    const [id , setId] = useState(0)
    const [genero, setGenero]= useState(0)
    const [programa, setPrograma]= useState('')
    const [hora, setHora]= useState('')
 

    async function salvar() {
        const paramCorpo = {
         
            "nome": programa,
            "genero": genero,
            "hora": hora
        }

        const url = 'http://localhost:5001/programa';
        let resp = await axios.post(url, paramCorpo);

        alert('Carro adicionada na lista. Id: ' + resp.data.novoID);
    }

    return (
        <div className='pagina-cadastrar'>
            <h1> add </h1>


            <div className='form'>
           
                <div>
                    <label>programa:</label>
                    <input type='text' value={programa} onChange={e => setPrograma(e.target.value)} />
                    <p>{programa}</p>
                </div>
                <div>
                    <label>genero:</label>
                    <input type='text' value={genero} onChange={e => setGenero(e.target.value)}/>
                </div>

                <div>
                    <label>Horario:</label>
                    <input type='text' value={hora} onChange={e => setHora(e.target.value)}/>
                </div>
      
               
            </div>
            <button onClick={salvar}> SALVAR </button>

        </div>
    )
}
import { useState } from 'react'


import axios from 'axios'



export default function Alterar() {


    const [canal, setcanal]= useState('')
    const [numero, setnumero]= useState(0)
    const [id, setid]= useState('')
 

    async function salvar() {
        const paramCorpo = {
            "canal": canal,
            "numero": numero,
            "id": id
        }

        const url = 'http://localhost:5001/canal';
        let resp = await axios.post(url, paramCorpo);

        alert('Carro adicionada na lista. Id: ' + resp.data.novoID);
    }

    return (
        <div className='pagina-cadastrar'>
            <h1> Add </h1>


            <div className='form'>
           
                <div>
                    <label>canal:</label>
                    <input type='text' value={canal} onChange={e => setcanal(e.target.value)} />
                    <p>{canal}</p>
                </div>
                <div>
                    <label>numero:</label>
                    <input type='number' value={numero} onChange={e => setnumero(e.target.value)}/>
                </div>
                <div>
                    <label>id:</label>
                    <input type='text' value={id} onChange={e => setid(e.target.value)} />
                </div>
               
            </div>
            <button onClick={salvar}> SALVAR </button>

        </div>
    )
}
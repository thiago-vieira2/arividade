
    import { useState } from 'react'


    import axios from 'axios'
    
    
    
    export default function Alterarprograma() {
    
        const [id , setId] = useState(0)
        const [id2 , setId2] = useState(0)

        const [genero, setGenero]= useState(0)
        const [programa, setPrograma]= useState('')
        const [hora, setHora]= useState('')
     
    
        async function salvar() {
            const paramCorpo = {
                "id": id,
                "nome": programa,
                "genero": genero,
                "hora": hora
            };
        
            const url = 'http://localhost:5001/programa/' + id;
            let resp = await axios.put(url, paramCorpo);
        
            // Alterando a mensagem do alerta para exibir affectedRows
            alert('Programa alterado. Linhas afetadas: ' + resp.data.affectedRows);
        }
        
    
        return (
            <div className='pagina-cadastrar'>
                <h1> alterar </h1>
    
    
                <div className='form'>

                    <div>
                        <label>programa:</label>
                        <input type='text' value={id2} onChange={e => setId2(e.target.value)} />
                        
                    </div>
               
                    <div>
                        <label>programa:</label>
                        <input type='text' value={programa} onChange={e => setPrograma(e.target.value)} />
                        
                    </div>
                    <div>
                        <label>genero:</label>
                        <input type='text' value={genero} onChange={e => setGenero(e.target.value)}/>
                    </div>

                    <div>
                        <label>horario:</label>
                        <input type='text' value={hora} onChange={e => setHora(e.target.value)}/>
                    </div>
                    <div>
                        <label>id:</label>
                        <input type='text' value={id} onChange={e => setId(e.target.value)} />
                    </div>
                   
                </div>
                <button onClick={salvar}> SALVAR </button>
    
            </div>
        )
    }
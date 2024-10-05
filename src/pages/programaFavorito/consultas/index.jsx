import { useState } from 'react'


    import axios from 'axios'
    
    
    
    export default function AddprogramaFav() {
    
        const [ usuario, setUsuario] = useState('')
        const [programa,  setPrograma] = useState('')
        const [avalicao,  setAvalicao] = useState('')
        const [id , setId] = useState('')


     
    
        async function salvar() {
            const paramCorpo = {
              "usuario":  usuario,
              "programa ": programa,
              "avaliacao": avalicao,
     
            }
    
            const url = 'http://localhost:5001/programa_favorito' 
            let resp = await axios.post(url, paramCorpo);
    
            alert('ALTERADO COM SUCESSO');
        }
    
        return (
            <div className='pagina-cadastrar'>
                <h1> add </h1>
    
    
                <div className='form'>
               
                    <div>
                        <label>usuario:</label>
                        <input type='text' value={usuario} onChange={e => setUsuario(e.target.value)} />
                
                    </div>
                    <div>
                        <label>programa:</label>
                        <input type='number' value={programa} onChange={e => setPrograma(e.target.value)}/>
                    </div>

                    <div>
                        <label>avalicao:</label>
                        <input type='text' value={avalicao} onChange={e => setAvalicao(e.target.value)}/>
                    </div>
                 
                   
                </div>
                <button onClick={salvar}> SALVAR </button>
    
            </div>
        )
    }

import { useState } from 'react'


    import axios from 'axios'
    
    
    
    export default function AddUsuario() {
    
        const [id , setId] = useState(0)
        const [usuario, setusuario]= useState(0)
        const [programa, setPrograma]= useState('')
        const [hora, setHora]= useState('')
     
    
        async function salvar() {
            const paramCorpo = {
                
                "nome": usuario,
       
            }
    
            const url = 'http://localhost:5001/usuario';
            let resp = await axios.post(url, paramCorpo);
    
            alert('Carro adicionada na lista. Id: ' + resp.data.novoID);
        }
    
        return (
            <div className='pagina-cadastrar'>
                <h1> ADD </h1>
    
    
                <div className='form'>
               
                    <div>
                        <label>programa:</label>
                        <input type='text' value={usuario} onChange={e => setusuario(e.target.value)} />
                        
                    </div>
                 

                   
                </div>
                <button onClick={salvar}> SALVAR </button>
    
            </div>
        )
    }
import { useState } from 'react'


    import axios from 'axios'
    
    
    
    export default function AlterarUsuario() {
    
        const [id , setId] = useState(0)
        const [usuario, setusuario]= useState(0)
        const [programa, setPrograma]= useState('')
        const [hora, setHora]= useState('')
     
    
        async function salvar() {
            const paramCorpo = {
                "nm_usuario": usuario
            };
        
        
                const url = `http://localhost:5001/usuario/${id}`;
                let resp = await axios.put(url, paramCorpo);
        
                alert('Usuário atualizado com sucesso. Affected Rows: ' + resp.data.affectedRows);
          
        }
        
    
        return (
            <div className='pagina-cadastrar'>
                <h1> alterar </h1>
    
    
                <div className='form'>
               
                    <div>
                        <label>usuario:</label>
                        <input type='text' value={usuario} onChange={e => setusuario(e.target.value)} />
                        
                    </div>
                    <div>
                        <label>uid:</label>
                        <input type='number' value={id} onChange={e => setId(e.target.value)}/>
                    </div>

                   
                </div>
                <button onClick={salvar}> SALVAR </button>
    
            </div>
        )
    }
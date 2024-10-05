





import { useState } from 'react'

import axios from 'axios'



export default function Puxarprograma() {
    const [listaNegra, setListaNegra] = useState([]);
    const [placa, setPlaca] = useState('')
    const [id, setid] = useState('')


    async function buscar() {
        const url = `http://localhost:5001/programa ` ;
        let resp = await axios.get(url);
        console.log(resp.data)
        setListaNegra(resp.data);
    }

    




    

    return (
        <div className='pagina-consultar'>
            <h1> CONSULTAR </h1>

            
            <button onClick={buscar}>Buscar pela placa</button>
     
         
            <table>
                <thead>
                    <tr>
                
                        <th>nome</th>
                        <th>genero</th>
                        <th>hora</th>
                  
                    
                    </tr>
                </thead>

                <tbody>
                    {listaNegra.map((item,index) => 
                        <tr>
                            
                            <td>{item.nome}</td>
                            <td>{item.genero}</td>
                            <td>{item.hora}</td>
                          
                         
                        </tr>
                    )}
                </tbody>

            </table>

           
        </div>
    )
}
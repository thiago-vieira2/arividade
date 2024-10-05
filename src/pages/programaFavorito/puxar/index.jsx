





import { useState } from 'react'

import axios from 'axios'



export default function PuxarprogramaFav() {
    const [listaNegra, setListaNegra] = useState([]);
    const [placa, setPlaca] = useState('')
    const [id, setid] = useState('')


    async function buscar() {
        const url = `http://localhost:5001/programa_favorito ` ;
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
                        <th>numero</th>
                        <th>id</th>
                  
                    
                    </tr>
                </thead>

                <tbody>
                    {listaNegra.map((item,index) => 
                        <tr>
                            <td>{item.usuario}</td>
                            <td>{item.programa}</td>
                            <td>{item.avaliacao}</td>
                          
                         
                        </tr>
                    )}
                </tbody>

            </table>

           
        </div>
    )
}
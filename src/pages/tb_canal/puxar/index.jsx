import { useState } from 'react'

import axios from 'axios'



export default function Puxar() {
    const [listaNegra, setListaNegra] = useState([]);
    const [placa, setPlaca] = useState('')
    const [id, setid] = useState('')


    async function buscar() {
        const url = `http://localhost:5001/canal ` ;
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
                            <td>{item.nome}</td>
                            <td>{item.numero}</td>
                            <td>{item.id}</td>
                          
                         
                        </tr>
                    )}
                </tbody>

            </table>

           
        </div>
    )
}
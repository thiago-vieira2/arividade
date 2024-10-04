import { useState } from "react";
import axios from "axios";


export default function Deletar () {

    const [nome, setNome] = useState('')
    const [retorno, setRetorno] = useState('')
    async function DeletarCanal () {
        let url = "http://localhost:5020/deletarCanal/" + nome
        let resp = await axios.delete(url)


        let datas = resp.data
       
        setRetorno (datas )
        
    }


    return (
        <main>
            <input type="text " onChange={e => setNome(e.target.values)} />
            <button onClick={DeletarCanal}>
                deletar
            </button>
            

        </main> 

    );
}
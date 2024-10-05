import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Puxar from './pages/tb_canal/puxar';
import Delete from './pages/tb_canal/deletar';
import Alterar from './pages/tb_canal/consultas';
import Chave from './pages/tb_canal/alterar';

import UserManagement from './pages/tb_usuario';
import AlterarUsuario from './pages/tb_usuario/alterar';
import AddUsuario from './pages/tb_usuario/consultas';
import PuxarUsuario from './pages/tb_usuario/puxar';
import DeleteUsuario from './pages/tb_usuario/deletar';
import AlterarprogramaFav from './pages/programaFavorito/alterar/index'
import PuxarprogramaFav from './pages/programaFavorito/puxar';
import AddprogramaFav from './pages/programaFavorito/consultas';
import DeleteprogramaFav from './pages/programaFavorito/deletar';
import Alterarprograma from './pages/tabela_tb_canal_programa/alterar';
import Addprograma from './pages/tabela_tb_canal_programa/consultas';
import Puxarprograma from './pages/tabela_tb_canal_programa/puxar';
import DeletePrograma from './pages/tabela_tb_canal_programa/deletar';

export default function Nav() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/canal" element={
                    <div>
                        <Puxar />
                        <Delete />
                        <Alterar />
                        <Chave />
                    </div>
                } />

                <Route path="/programa" element={
                    <div>
                        <Alterarprograma/>
                        <Addprograma/>
                        <Puxarprograma/>
                        <DeletePrograma/>
                    </div>
                } />

                <Route path="/programa_fav" element={
                    <div>
                        <AlterarprogramaFav/>
                        <PuxarprogramaFav/>
                        <AddprogramaFav/>
                        <DeleteprogramaFav/>
                    </div>
                } />

                <Route path="/usuario" element={
                    <div>
                        <AlterarUsuario />

                        <DeleteUsuario />
                        <AddUsuario />
                        <PuxarUsuario />
                    </div>
                } />


            </Routes>
        </BrowserRouter>
    );
}
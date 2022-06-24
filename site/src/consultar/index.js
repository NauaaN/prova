import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { consultaPet } from "../api/petApi.js";


export default function Index(){
    const[pets, setPets]=useState([]);

    async function listarPets(){
        const resp =await consultaPet()
        setPets(resp);
    }
    useEffect(() =>{
        listarPets();
    })

    return(

        <div>
            <h1>Consultar</h1>
            <table>
                <thead>
                    <th>ID</th>
                    <th>Nome</th>
                </thead>
                <tbody>

                {pets.map(item =>

                <tr>
                    <td>{item.id}</td>
                    <td>{item.nome}</td>
                    
                </tr>

                    )} 
                </tbody>
              
            </table>
            <Link to='/'>Cadastrar</Link>
        </div>
    )
}


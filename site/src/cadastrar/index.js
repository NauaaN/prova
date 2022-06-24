import { useState } from "react";
import { Link } from "react-router-dom";
import { cadastrarPet } from "../api/petApi.js";


export default function Index(){

const[nome, setNome]=useState('');

async function salvarClick(){
    try{ 
    const r= await cadastrarPet(nome)
    alert('pet cadastrado')
    }catch(err){
        alert(err.message)
    }
   
}

    return(

        <div>
            <h1>Pet</h1>
            <input type='text' placeholder="nome" value={nome} onChange={e => setNome(e.target.value)}/>
            <button onClick={salvarClick}>Enviar</button>
            <Link to='/consultar'>Consultar</Link>
        </div>
    )
}
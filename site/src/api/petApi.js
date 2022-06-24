import axios from "axios"
const api= axios.create({
    baseURL:'http://localhost:5000'
})

export async function cadastrarPet(nome){
    const r= await api.post('/pet', {
        nome: nome
    })
    return r.data;
}

export async function consultaPet(){
    const rsp= await api.get('verPet')
    return rsp.data
}
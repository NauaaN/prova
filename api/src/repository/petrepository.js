import { con } from './connection.js'


export async function AddPet(pet) {
    const c = ` INSERT INTO PET (NM_PET)
          values (?)`
    const [r] = await con.query(c, [ pet.nome]);

    pet.id = r.insertId;
    return pet;
}


export async function Verpet() {
    const c = `
    SELECT id_pet     id,
            nm_pet    nome
            FROM PET`
    const [linha] = await con.query(c);
    return linha;
}

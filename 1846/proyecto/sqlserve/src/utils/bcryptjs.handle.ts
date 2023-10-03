//Para la encriptación de los datos 
import { hash, compare} from "bcryptjs"

const encriptar = async (pass:string) => {
    const passwordHash = await hash(pass, 8)
    return passwordHash
}

const verificar = async (pass:string, passwordHash:string) => {
    const esCorrecto = await compare(pass, passwordHash)
    return esCorrecto
}

export {encriptar, verificar}
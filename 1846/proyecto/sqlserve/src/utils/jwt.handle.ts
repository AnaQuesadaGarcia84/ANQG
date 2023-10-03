import { sign, verify } from "jsonwebtoken";

const JWT_SECRECT = process.env.JWR_SECRECT || "token.01010101"

const generarToken = (id:string) =>{
    const jwt = sign({id}, JWT_SECRECT, {expiresIn: "2h", })
    return jwt
}

const verificarToken = (jwt: string) =>{
    const esOk = verify(jwt, JWT_SECRECT)
    return esOk
}

export {generarToken, verificarToken}
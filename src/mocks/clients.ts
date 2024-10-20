import * as clients from './clients.json' 

export interface ClientProps{
    id?:number;
    nome:string;
    idade:Number;
    cpf:string;
    endereco:string;
}

export const clientesMock:ClientProps[] = clients.default;
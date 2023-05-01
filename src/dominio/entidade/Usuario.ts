export default class Usuario {
    constructor(
        readonly empresa: string,
        readonly nome: string,
        readonly email: string,
        readonly telefone: string) {
            if(empresa.trim() === null || !empresa.trim().length) throw new Error("o valor do campo empresa é inválido");
            if(nome.trim() === null || !nome.trim().length) throw new Error("o valor do campo nome é inválido");
            if(!String(email.trim()).toLocaleLowerCase().match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i)) throw new Error("o valor do campo e-mail é inválido");
            if(!String(telefone).toLocaleLowerCase().match(/(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/g)) throw new Error("o valor do campo telefone é inválido");
    }
  
}
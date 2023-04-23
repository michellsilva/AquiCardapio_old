import IUsuarioRepositorio from "../repositorio/IUsuarioRepositorio";


export default class CriarConta {
    constructor(readonly usuarioRepositorio: IUsuarioRepositorio) {
    }

    async execute(input: Input): Promise<Output> {
        await this.usuarioRepositorio.salvar(input);
        const retorno = await this.usuarioRepositorio.BuscarPorEmail(input.email);
        console.log(retorno);
        
        return { login: "barzero"};
    }
}

type Input = {
    empresa: string,
    nome: string,
    email: string,
    telefone: number
}

type Output = {
    login: string
}
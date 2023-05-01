import IUsuarioRepositorio from "../repositorio/IUsuarioRepositorio";


export default class CriarPreConta {
    constructor(readonly usuarioRepositorio: IUsuarioRepositorio) {
    }

    async execute(input: Input): Promise<void> {
        await this.usuarioRepositorio.salvar(input);
    }
}

type Input = {
    empresa: string,
    nome: string,
    email: string,
    telefone: string
}

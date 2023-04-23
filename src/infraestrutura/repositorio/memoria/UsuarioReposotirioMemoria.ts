import IUsuarioRepositorio from "../../../aplicacao/repositorio/IUsuarioRepositorio";
import Usuario from "../../../dominio/entidade/Usuario";

export default class usuarioReposotirioMemoria implements IUsuarioRepositorio {
    usuarios: Usuario[];

    constructor() {
        this.usuarios = [];
    }

    async salvar(usuario: Usuario): Promise<void> {
        this.usuarios.push(usuario);
    }

    async BuscarPorEmail(email: string): Promise<Usuario | undefined> {
        return this.usuarios.find((usuario: Usuario) => usuario.email === email);
    }

}
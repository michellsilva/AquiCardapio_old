import Usuario from "../../dominio/entidade/Usuario";

export default interface IUsuarioRepositorio {
    salvar(usuario: Usuario): Promise<void>;
    BuscarPorEmail(email: string): Promise<Usuario | undefined>;
}
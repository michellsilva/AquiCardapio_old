import {expect, test} from 'vitest'
import CriarConta from '../aplicacao/casoUso/CriarConta';
import usuarioReposotirioMemoria from '../infraestrutura/repositorio/memoria/UsuarioReposotirioMemoria';

test('Criar conta', async () => {
    const usuarioRepositorio = new usuarioReposotirioMemoria();
    const criarConta = new CriarConta(usuarioRepositorio);
    const input = {
        empresa: "bar zero",
        nome: "michel silva",
        email: "michel@gmail.com",
        telefone: 81986922755
    }

    const retorno = await criarConta.execute(input);
    expect(retorno.login).toEqual('barzero')
})
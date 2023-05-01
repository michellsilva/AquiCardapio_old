import {expect, test} from 'vitest'
import CriarPreConta from '../aplicacao/casoUso/CriarpreConta';
import Usuario from '../dominio/entidade/Usuario';
import usuarioReposotirioMemoria from '../infraestrutura/repositorio/memoria/UsuarioReposotirioMemoria';

test('Criar conta', async () => {
    const usuarioRepositorio = new usuarioReposotirioMemoria();
    const criarPreConta = new CriarPreConta(usuarioRepositorio);
    const input = {
        empresa: "bar zero",
        nome: "michel silva",
        email: "michel@gmail.com",
        telefone: "(81)98692-2755"
    }

    await criarPreConta.execute(input);

    const retorno = await usuarioRepositorio.BuscarPorEmail("michel@gmail.com");
    expect(input).toEqual(retorno);
})

test('Não deve criar usuário com a empresa inválida', () => {
    expect(() => new Usuario(" ", "michel", "michel@gmail.com", "(81)98692-2755"))
    .toThrow(new Error("o valor do campo empresa é inválido"));
})

test('Não deve criar usuário com o nome inválido', () => {
    expect(() => new Usuario("bar", "", "michel@gmail.com", "(81)98692-2755"))
    .toThrow(new Error("o valor do campo nome é inválido"));
})

test('Não deve criar usuário com o e-mail inválido', () => {
    expect(() => new Usuario("bar", "michel", "michel@", "(81)98692-2755"))
    .toThrow(new Error("o valor do campo e-mail é inválido"));
})

test('Não deve criar usuário com o telefone inválido', () => {
    expect(() => new Usuario("bar", "michel", "michel@gmail.com", "(81)98692-"))
    .toThrow(new Error("o valor do campo telefone é inválido"));
})
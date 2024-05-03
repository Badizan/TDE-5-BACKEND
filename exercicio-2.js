import { faker } from '@faker-js/faker';


function gerarDadosPessoa() {
  const nome = faker.person.fullName();
  const email = faker.internet.email(); 
  const dataNascimento = faker.date.birthdate(); 
  return {
    nome: nome,
    email: email,
    dataNascimento: dataNascimento.toISOString().split("T")[0], 
  }
}


const pessoaFalsa = gerarDadosPessoa();
console.log(pessoaFalsa);

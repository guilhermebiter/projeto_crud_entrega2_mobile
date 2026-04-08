import readlineSync from 'readline-sync';
import { Database } from './database';
import { createUF } from './entities/uf';
import { createCidade } from './entities/cidade';
import { createRegiao } from './entities/regiao';

const db = new Database();

export function showMenu() {
  console.log('\nMenu de opções:');
  console.log('1. Adicionar UF');
  console.log('2. Adicionar Cidade');
  console.log('3. Adicionar Região');
  console.log('4. Listar UFs');
  console.log('5. Listar Cidades');
  console.log('6. Listar Regiões');
  console.log('0. Sair');
}

export function addUF() {
  const nome = readlineSync.question('Digite o nome da UF: ');
  const sigla = readlineSync.question('Digite a sigla da UF: ');
  const uf = createUF(nome, sigla);
  db.addUF(uf);
  console.log(`UF ${nome} adicionada com sucesso.`);
}

export function addCidade() {
  const nome = readlineSync.question('Digite o nome da Cidade: ');
  const uf_id = readlineSync.question('Digite o ID da UF: ');
  const cidade = createCidade(nome, uf_id);
  db.addCidade(cidade);
  console.log(`Cidade ${nome} adicionada com sucesso.`);
}

export function addRegiao() {
  const nome = readlineSync.question('Digite o nome da Região: ');
  const cidade_id = readlineSync.question('Digite o ID da Cidade: ');
  const regiao = createRegiao(nome, cidade_id);
  db.addRegiao(regiao);
  console.log(`Região ${nome} adicionada com sucesso.`);
}

export function listUFs() {
  const ufs = db.getUFs();
  ufs.forEach(uf => {
    console.log(`${uf.sigla} - ${uf.nome}`);
  });
}

export function listCidades() {
  const cidades = db.getCidades();
  cidades.forEach(cidade => {
    const uf = db.getUFs().find(u => u.id === cidade.uf_id);
    console.log(`${uf?.sigla} - ${uf?.nome} - ${cidade.nome}`);
  });
}

export function listRegioes() {
  const regioes = db.getRegioes();
  regioes.forEach(regiao => {
    const cidade = db.getCidades().find(c => c.id === regiao.cidade_id);
    console.log(`${cidade?.nome} - ${regiao.nome}`);
  });
}

export function run() {
  let exit = false;
  while (!exit) {
    showMenu();
    const option = readlineSync.questionInt('Escolha uma opção: ');

    switch (option) {
      case 1:
        addUF();
        break;
      case 2:
        addCidade();
        break;
      case 3:
        addRegiao();
        break;
      case 4:
        listUFs();
        break;
      case 5:
        listCidades();
        break;
      case 6:
        listRegioes();
        break;
      case 0:
        exit = true;
        break;
      default:
        console.log('Opção inválida');
    }
  }
}
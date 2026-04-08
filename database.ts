import { UF } from './entities/uf';
import { Cidade } from './entities/cidade';
import { Regiao } from './entities/regiao';

export class Database {
  private ufs: UF[] = [];
  private cidades: Cidade[] = [];
  private regioes: Regiao[] = [];

  public addUF(uf: UF) {
    this.ufs.push(uf);
  }

  public addCidade(cidade: Cidade) {
    this.cidades.push(cidade);
  }

  public addRegiao(regiao: Regiao) {
    this.regioes.push(regiao);
  }

  public getUFs() {
    return this.ufs;
  }

  public getCidades() {
    return this.cidades;
  }

  public getRegioes() {
    return this.regioes;
  }

  public getCidadeByUF(uf_id: string) {
    return this.cidades.filter(cidade => cidade.uf_id === uf_id);
  }

  public getRegioesByCidade(cidade_id: string) {
    return this.regioes.filter(regiao => regiao.cidade_id === cidade_id);
  }
}
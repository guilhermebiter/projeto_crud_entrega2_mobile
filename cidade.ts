import { v4 as uuidv4 } from 'uuid';

export interface Cidade {
  id: string;
  nome: string;
  uf_id: string; // Relacionamento com UF
}

export function createCidade(nome: string, uf_id: string): Cidade {
  return {
    id: uuidv4(),
    nome,
    uf_id,
  };
}
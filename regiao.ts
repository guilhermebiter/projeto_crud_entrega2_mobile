import { v4 as uuidv4 } from 'uuid';

export interface Regiao {
  id: string;
  nome: string;
  cidade_id: string; // Relacionamento com Cidade
}

export function createRegiao(nome: string, cidade_id: string): Regiao {
  return {
    id: uuidv4(),
    nome,
    cidade_id,
  };
}
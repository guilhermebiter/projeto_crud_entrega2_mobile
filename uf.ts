import { v4 as uuidv4 } from 'uuid';

export interface UF {
  id: string;
  nome: string;
  sigla: string;
}

export function createUF(nome: string, sigla: string): UF {
  return {
    id: uuidv4(),
    nome,
    sigla,
  };
}
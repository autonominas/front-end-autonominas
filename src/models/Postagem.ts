import Tema from './Tema'

interface Postagem {
    id: number;
    titulo: string;
    conteudo: string;
    tema?: Tema | null;
}

export default Postagem;
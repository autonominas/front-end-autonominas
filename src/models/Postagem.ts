import Tema from './Tema'

interface Postagem {
    usuario: any;
    id: number;
    titulo: string;
    conteudo: string;
    tema?: Tema | null;
}

export default Postagem;
import Tema from './Tema'

interface Postagem {
    usuario: any;
    id: number;
    titulo: string;
    texto: string;
    tema?: Tema | null;
}

export default Postagem;
import React, { useState, useEffect } from 'react'
import Postagem from '../../models/Postagem';
import { busca } from '../../services/Service'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import './Feed.css'

function Feed() {
  let navigate = useNavigate();
  const [posts, setPosts] = useState<Postagem[]>([])
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token === "") {
      toast.error("Você precisa estar logado", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
      navigate("/login")

    }
  }, [token])

  async function getPost() {
    await busca("/postagens", setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  const userId = useSelector<TokenState, TokenState['id']>((state) => state.id);

  useEffect(() => {

    getPost()

  }, [posts.length])

  return (
    <div className="container-feed">
      <div className="cad-post">
        <ModalPostagem></ModalPostagem>
      </div>
      {
        posts.map(post => (
        <div className="card">
          <div className="container-card">
            <div className="card-infos">
                <span className="usuario-nome">{post.usuario?.nome}</span>
                <span className="postagem-tema">Tema: {post.tema?.tipo}</span>
            </div>
            <div className="container-text">
                <h2 className="post-titulo">{post.titulo}</h2>
                <p className="post-conteudo">{post.conteudo}</p>
            </div>
          </div>
        </div>
    ))}
    </div>
  )
}

export default Feed;
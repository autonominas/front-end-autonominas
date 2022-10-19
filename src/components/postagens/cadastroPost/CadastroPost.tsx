import { Button, Container, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Postagem from '../../../models/Postagem';
import Tema from '../../../models/Tema';
import User from '../../../models/User';
import { busca, buscaId, post, put } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';

function CadastroPost() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [temas, setTemas] = useState<Tema[]>([]);
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const userId = useSelector<TokenState, TokenState["id"]>(
    (state) => state.id
  );
  const [tema, setTema] = useState<Tema>({
    id: 0,
    tipo: '',
  });

  const [postagem, setPostagem] = useState<Postagem>({
    id: 0,
    titulo: '',
    conteudo: '',
    tema: null,
    usuario: null,
  });

  const [usuario, setUsuario] = useState<User>({
    id: +userId,
    nome: '',
    senha: '',
    usuario:''
  })

  useEffect(() => {
    if (token === '') {
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
      navigate('/login');
    }
  }, [token]);

  useEffect(() => {
    setPostagem({
      ...postagem,
      tema: tema,
      usuario: usuario
    });
  }, [tema]);

  async function findByIdPostagem(id: string) {
    await buscaId(`postagens/${id}`, setPostagem, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getTemas();
    if (id !== undefined) {
      findByIdPostagem(id);
    }
  }, [id]);

  async function getTemas() {
    await busca('/temas', setTemas, {
      headers: {
        Authorization: token,
      },
    });
  }


  function updatedPostagem(event: ChangeEvent<HTMLInputElement>) {
    setPostagem({
      ...postagem,
      [event.target.name]: event.target.value,
      tema: tema,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      try {
        await put(`/postagens`, postagem, setPostagem, {
          headers: {
            Authorization: token,
          },
        });
        toast.success("Postagem atualizada com sucesso", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
        });
      } catch (error) {
        alert('Erro ao atualizar, verifique os campos');
      }
    } else {
      try {
        await post(`/postagens`, postagem, setPostagem, {
          headers: {
            Authorization: token,
          },
        });
        toast.success("Postagem cadastrada com sucesso", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
        });
      } catch (error) {
        alert('Erro ao cadastrar, verifique os campos');
      }
    }
    navigate('/posts');
  }

  return (
    <>
      <Container>
        <form onSubmit={onSubmit}>
          <Typography
            variant="h3"
            color="textSecondary"
            component="h1"
            align="center"
          >
            Formulário de cadastro postagem
          </Typography>

          <TextField
            value={postagem.titulo}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
            id="titulo"
            label="titulo"
            variant="outlined"
            name="titulo"
            margin="normal"
            fullWidth
          />

          <TextField
            value={postagem.conteudo}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
            id="conteudo"
            label="texto"
            name="conteudo"
            variant="outlined"
            margin="normal"
            fullWidth
          />

          <FormControl fullWidth variant="standard">
            <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>

            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              onChange={(e) =>
                buscaId(`/temas/${e.target.value}`, setTema, {
                  headers: {
                    Authorization: token,
                  },
                })
              }
            >
              {temas.map((item) => (
                <MenuItem value={item.id} style={{ display: 'block' }}>
                  {item.tipo}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>Escolha um tema para a postagem</FormHelperText>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={tema.id === 0}
            >
              Finalizar
            </Button>
          </FormControl>
        </form>
      </Container>
    </>
  );
}

export default CadastroPost;
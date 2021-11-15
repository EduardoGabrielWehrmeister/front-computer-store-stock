import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import {
  Container,
  TopInfo,
  LeftInfo,
  RightInfo,
  FormArea,
  Form,
} from './styles';

import api from '../../services/api';
import history from '../../services/history';

export default function RecipientsRegister() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [provider, setProvider] = useState('');
  const [unity, setUnity] = useState('');

  const search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get("product");


  useEffect(() => {
    async function loadRecipient() {

      const { data } = await api.get(`/product/${id}`);

      setName(data.name);
      setDescription(data.description);
      setPrice(data.price);
      setCategory(data.category);
      setProvider(data.provider);
      setUnity(data.unity);
    }
    if (id) {
      loadRecipient();
    }
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();
    const submitData = {
      name,
      description,
      price,
      category,
      provider,
      unity,
    };
    if (!id) {
      await api.post('/product/create', submitData);

      toast.success('Produto cadastrado com sucesso!', {
        position: "bottom-center",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      return history.push('/products');
    }
    await api.put(`/product/${id}`, submitData);

    toast.success('Produto editado com sucesso!', {
      position: "bottom-center",
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    return history.push('/products');
  }

  return (
    <Container>
      <TopInfo>
        <LeftInfo>
          <h1>
            {id ? 'Edição de Produtos' : 'Cadastro de Produtos'}
          </h1>
        </LeftInfo>

        <RightInfo>
          <Link to="/products">
            <MdKeyboardArrowLeft size={24} color="#fff" />
            <b>VOLTAR</b>
          </Link>
          <button type="submit" form="my-form">
            <MdDone size={24} color="#fff" />
            <b>SALVAR</b>
          </button>
        </RightInfo>
      </TopInfo>

      <FormArea>
        <Form onSubmit={(e) => handleSubmit(e)} id="my-form">
          <div>
            <b>Nome</b>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Teclado"
            />
            <b>Descrição</b>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Teclado Gamer"
            />
            <b>Preço</b>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="99"
            />
            <b>Categoria</b>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Periférico"
            />
            <b>Fornecedor</b>
            <input
              type="text"
              value={provider}
              onChange={(e) => setProvider(e.target.value)}
              placeholder="Pichau"
            />
            <b>Unidades</b>
            <input
              type="text"
              value={unity}
              onChange={(e) => setUnity(e.target.value)}
              placeholder="10"
            />
          </div>
        </Form>
      </FormArea>
    </Container>
  );
}

RecipientsRegister.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

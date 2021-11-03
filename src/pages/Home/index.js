import React, { useEffect, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { Modal, Button } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ExclamationCircleOutlined } from '@ant-design/icons';

import {
  Background,
  TableContainer,
  TableHeader,
  InputSearch,
  Table,
  TableFooter,
} from './styles';

import api from '~/services/api';

function destroyAll() {
  Modal.destroyAll();
}

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  async function loadProducts() {
    const { data } = await api.get('/orders');
    setProducts(data);
    setFilteredProducts(data);
  }

  function handleFilterChange(e) {
    setFilteredProducts(
      products.filter((product) => String(product.id).includes(e.target.value))
    );
  }

  function confirmDeletion() {
    Modal.confirm({
      icon: <ExclamationCircleOutlined />,
      content: <Button onClick={destroyAll}>Click to destroy all</Button>,
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  async function handleDeleteProduct(id, index) {
    if (!confirmDeletion()) return;
    await api.delete(`/orders/${id}`);
    const newProducts = [...filteredProducts];
    newProducts.splice(index, 1);
    setFilteredProducts(newProducts);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <Background>
      <button type="button" onClick={handleDeleteProduct}>
        OIIII mund0
      </button>
      <TableContainer>
        <TableHeader>
          <InputSearch>
            <MdSearch color="#8B83BA;" size={20} />
            <input
              onChange={(e) => handleFilterChange(e)}
              type="text"
              placeholder="Procurar"
            />
          </InputSearch>
          <div>
            <button type="button">GERAR RELATÓRIO</button>
            <button type="button">ADICIONAR</button>
          </div>
        </TableHeader>

        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Quantidade</th>
              <th>Preço</th>
              <th>Fornecedor</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product, index) => (
              <tr
                key={product.id}
                className={
                  index % 2 === 0 ? 'table-row-light' : 'table-row-dark'
                }
              >
                <td>#{product.id}</td>
                <td>{product.Recipient.receiver_name}</td>
                <td>{product.Recipient.city}</td>
                <td>{product.Recipient.state}</td>
                <td>{product.Recipient.state}</td>
                <td>Nothing yet</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <TableFooter />
      </TableContainer>
    </Background>
  );
}

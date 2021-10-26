import React, { useEffect, useState } from 'react';
import { MdSearch } from 'react-icons/md';

import {
  Background,
  TableContainer,
  TableHeader,
  InputSearch,
  Table,
  TableFooter,
} from './styles';

import api from '~/services/api';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  async function loadProducts() {
    const { data } = await api.get('/orders', {
      params: { product: '' },
    });
    setProducts(data);
    setFilteredProducts(data);
  }

  function handleFilterChange(e) {
    setFilteredProducts(
      products.filter((product) => String(product.id).includes(e.target.value))
    );
  }

  async function handleDeleteProduct(id, index) {
    // Fazer Popup de confirmação de deleção
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

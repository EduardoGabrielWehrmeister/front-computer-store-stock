import React, { useEffect, useState } from 'react';
import { MdSearch, MdDelete, MdEdit } from 'react-icons/md';
import { toast } from 'react-toastify';
// eslint-disable-next-line import/no-extraneous-dependencies

import {
  Background,
  TableContainer,
  TableHeader,
  InputSearch,
  Table,
  TableFooter,
} from './styles';

import api from '../../services/api';
import history from '../../services/history';
import { CSVLink } from 'react-csv';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [productsToExport, setProductsToExport] = useState([]);

  async function loadProducts() {
    const { data } = await api.get('product/products');

    setProducts(data);
    setFilteredProducts(data);
  }

  async function handleExportExcelProducts() {
    const { data } = await api.get(`/product/export`);

    setProductsToExport(data);
  }

  function handleFilterChange(e) {
    setFilteredProducts(
      products.filter((product) => String(product.name).includes(e.target.value))
    );
  }

  async function handleDeleteProduct(id, index) {

    await api.delete(`/product/${id}`);

    toast.success('Produto excluido com sucesso!', {
      position: "bottom-center",
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    const newProducts = [...filteredProducts];

    newProducts.splice(index, 1);

    setProducts(newProducts);
    setFilteredProducts(newProducts);

    handleExportExcelProducts()
  }

  useEffect(() => {
    loadProducts();
    handleExportExcelProducts();
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
            <CSVLink filename={"Produtos.csv"} data={productsToExport}><button type="button">GERAR RELATÓRIO</button></CSVLink>
            <button type="button" onClick={() => history.push('/product-register')}>ADICIONAR</button>
          </div>
        </TableHeader>

        <Table>
          <thead>
            <th>ID</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Fornecedor</th>
            <th>Categoria</th>
            <th>Unidades</th>
            <th>Ações</th>
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
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.provider}</td>
                <td>{product.category}</td>
                <td>{product.unity}</td>
                <td>
                  <button type="button" onClick={() => history.push(`product-register?product=${product.id}`)} style={{ border: "none", backgroundColor: "transparent", padding: "5px" }}><MdEdit size={20}></MdEdit></button>
                  <button type="button" onClick={() => handleDeleteProduct(product.id, index)} style={{ border: "none", backgroundColor: "transparent" }}><MdDelete size={20}></MdDelete></button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <TableFooter />
      </TableContainer>
    </Background>
  );
}


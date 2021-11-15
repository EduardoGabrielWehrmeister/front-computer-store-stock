import React, { useEffect, useState } from 'react';
import { MdSearch, MdDelete, MdEdit } from 'react-icons/md';
import { Modal } from 'antd';
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

export default function User() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    async function loadUsers() {
        const { data } = await api.get('user/users');

        setUsers(data);
        setFilteredUsers(data);
    }

    function handleFilterChange(e) {
        setFilteredUsers(
            users.filter((user) => String(user.name).includes(e.target.value))
        );
    }

    function modalToConfirmDeleteProduct() {
        Modal.confirm({
            title: 'Você tem certeza que deseja excluir este produto?',
            onOk() {
                return true
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    async function handleDeleteUser(id, index) {
        // if (!modalToConfirmDeleteProduct()) return;

        await api.delete(`/user/${id}`);

        const newUsers = [...filteredUsers];

        newUsers.splice(index, 1);

        setUsers(newUsers);
        setFilteredUsers(newUsers);
    }

    useEffect(() => {
        loadUsers();
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
                        <button type="button">ADICIONAR</button>
                    </div>
                </TableHeader>

                <Table>
                    <thead>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user, index) => (
                            <tr
                                key={user.id}
                                className={
                                    index % 2 === 0 ? 'table-row-light' : 'table-row-dark'
                                }
                            >
                                <td>#{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button type="button" style={{ border: "none", backgroundColor: "transparent", padding: "5px" }}><MdEdit size={20}></MdEdit></button>
                                    <button type="button" onClick={() => handleDeleteUser(user.id, index)} style={{ border: "none", backgroundColor: "transparent" }}><MdDelete size={20}></MdDelete></button>
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

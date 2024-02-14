import React, { useState, useEffect } from 'react';
import './Global.css';
import { Button, Table } from 'reactstrap';
import { FaTrashCan } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";


const CustomListGroup = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:3000/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        };

        fetchUsers();
    }, []);

    const getRoleName = (roleId) => {
        if (roleId === 1 || roleId === "1") {
            return 'Administrador';
        } else if (roleId === 2 || roleId === "2") {
            return 'Vendedor';
        } else if (roleId === 3 || roleId === "3") {
            return 'Gerente';
        } else {
            return 'Outro';
        }
    };

    const handleRemoveUser = (userId) => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    };

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:3000/users');

            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.statusText}`);
            }

            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Erro ao buscar dados da API:', error.message);
        }
    };

    return (
        <div className="div-section-app">
            <header className="div-header">
                <h2>Consulta de usuarios</h2>

                <Button
                    color="primary"
                    size="sm"
                    className="Add"
                    onClick={fetchUsers}
                >
                    <FaPlus color="white" />
                    adicionar
                </Button>
            </header>

            <div className="div-table">
                <Table striped xs="12" md="6">
                    <tbody>
                        <tr>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Situacao</th>
                            <th>Perfil</th>
                            <th>Idioma</th>
                            <th></th>
                        </tr>

                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <td>{user.nome}</td>
                                <td>{user.cpf}</td>
                                <td>{user.ativo ? 'Ativo' : 'Desabilitado'}</td>
                                <td>{getRoleName(user.profileId)}</td>
                                <td>{user.idioma}</td>

                                <td>
                                    <Button
                                        color="danger"
                                        size="sm"
                                        className="lixeia"
                                        onClick={() => handleRemoveUser(user.id)}
                                    >
                                        <FaTrashCan color="white" />
                                    </Button>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default CustomListGroup;

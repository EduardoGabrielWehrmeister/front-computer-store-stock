import React, { useState } from "react";
import "./styles.css";
import { Button, Input } from "@material-ui/core";
import api from '../../services/api';

export default function CreateStock() {
    function initialState() {
        return {
            name: "",
            description: "",
            price: "",
            provider: "",
            category: "",
            unity: "",
        };
    }
    const [values, setValues] = useState(initialState);

    function onChange(event) {
        const { value, name } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    }

    const handleClick = async () => {
        const response = await api.post(`product/create/`, values);

        if (response?.status === 200) {
            document.location.reload(true);
        }

        setValues(initialState);
    };

    return (
        <div className="container-stock-product-modal">
            <div className="inputs-modal">
                <Input
                    id="name"
                    name="name"
                    className="nameProductModal"
                    placeholder="Nome"
                    value={values.name}
                    onChange={onChange}
                />
                <Input
                    id="description"
                    name="description"
                    className="descriptionModal"
                    placeholder="Descrição"
                    value={values.description}
                    onChange={onChange}
                />
                <Input
                    id="price"
                    name="price"
                    className="priceModal"
                    placeholder="Preço"
                    value={values.price}
                    onChange={onChange}
                />
                <Input
                    id="provider"
                    name="provider"
                    className="providerModal"
                    placeholder="Fornecedor"
                    value={values.provider}
                    onChange={onChange}
                />
                <Input
                    id="category"
                    name="category"
                    className="categoryModal"
                    placeholder="Categoria"
                    value={values.category}
                    onChange={onChange}
                />
                <Input
                    id="unity"
                    name="unity"
                    className="unityModal"
                    placeholder="Unidade"
                    value={values.unity}
                    onChange={onChange}
                />
            </div>
            <Button
                className="button-create-modal"
                type="submit"
                variant="contained"
                onClick={async () => handleClick()}
            >
                Criar produto
            </Button>
        </div>
    );
}
import React, { useState } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { ClientProps } from "../../mocks/clients";
import { LabelContent } from "../LabelContent";
import Ionicons from '@expo/vector-icons/Ionicons';

import Card from "../Card";

interface CardProps extends ClientProps {
    handleTouch: (id: number) => void;
}

export const ClientsContent: React.FC<CardProps> = ({ handleTouch, ...cliente }) => {
    const endereco = cliente.endereco.split(",")
    const logradouro = endereco[0] + " Nº" + endereco[1]
    const bairro = endereco[2]
    const cep = endereco[3]?.replace(/\D+/g,'').replace(/(\d+)(\d{2})$/, '$1-$2');
    const cidade = endereco[3]?.replace(/\d+/g,'')

    const [showAddress,setShowAddress] = useState(false);
    const toggleAddress = () => {
        setShowAddress(!showAddress);
    }
    const iconToggle = showAddress ? "arrow-up-circle" : "arrow-down-circle";       
    return (
        <TouchableHighlight onPress={() => handleTouch(cliente.id!)} underlayColor="white">
                    <Card.CardBody>
                    <LabelContent label={"Nome:"} value={cliente.nome}></LabelContent>
                    <LabelContent label={"Idade:"} value={cliente.idade.toString()}></LabelContent>
                    <LabelContent label={"CPF:"} value={cliente.cpf}></LabelContent>
                    <TouchableHighlight onPress={() => toggleAddress()} underlayColor="#5d5d5">
                        <Card.CardFotter>
                        <LabelContent label={"Endereço"}>
                            <Ionicons name={iconToggle} size={32} color="green" />
                        </LabelContent>
                        {showAddress && (
                            <>
                                <LabelContent label={"Logradouro:"} value={logradouro}></LabelContent>
                                <LabelContent label={"Bairro:"} value={bairro}></LabelContent>
                                <LabelContent label={"CEP:"} value={cep}></LabelContent>
                                <LabelContent label={"Cidade/Estado:"} value={cidade}></LabelContent>
                            </>
                        )} 
                        </Card.CardFotter>
                    </TouchableHighlight>
            </Card.CardBody>
        </TouchableHighlight>
    );
};

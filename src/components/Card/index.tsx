import React, { useState } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { ClientProps } from "../../mocks/clients";
import {styles} from './styles'
import { LabelContent } from "../LabelContent";
import Ionicons from '@expo/vector-icons/Ionicons';

interface CardProps extends ClientProps {
    handleTouch: (id: number) => void;
}

export const Card: React.FC<CardProps> = ({ handleTouch, ...cliente }) => {
    const endereco = cliente.endereco.split(",")
    const logradouro = endereco[0] + " Nº" + endereco[1]
    const bairro = endereco[2]
    const cep = endereco[3]?.replace(/\D+/g,'').replace(/(\d+)(\d{2})$/, '$1-$2');
    const cidade = endereco[3]?.replace(/\d+/g,'')

    const [showAddress,setShowAddress] = useState(false);
    const toggleAddress = () => {
        setShowAddress(!showAddress);
    }
    return (
        <TouchableHighlight onPress={() => handleTouch(cliente.id!)} underlayColor="white">
            <View style={styles.container}>
                    <LabelContent label={"Nome:"} value={cliente.nome}></LabelContent>
                    <LabelContent label={"Idade:"} value={cliente.idade.toString()}></LabelContent>
                    <LabelContent label={"CPF:"} value={cliente.cpf}></LabelContent>
                    <TouchableHighlight onPress={() => {toggleAddress(); handleTouch(cliente.id!);}} underlayColor="#5d5d5">
                        <View style={styles.subContainer}>
                        <LabelContent label={"Endereço"}>
                            {showAddress ? 
                            <Ionicons name="arrow-up-circle" size={32} color="green" />
                            :
                            <Ionicons name="arrow-down-circle" size={32} color="green" />
                        }
                        </LabelContent>
                        {showAddress && (
                            <>
                                <LabelContent label={"Logradouro:"} value={logradouro}></LabelContent>
                                <LabelContent label={"Bairro:"} value={bairro}></LabelContent>
                                <LabelContent label={"CEP:"} value={cep}></LabelContent>
                                <LabelContent label={"Cidade/Estado:"} value={cidade}></LabelContent>
                            </>
                        )} 
                        </View>
                    </TouchableHighlight>
            </View>
        </TouchableHighlight>
    );
};

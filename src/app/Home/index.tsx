import React, { useEffect, useState } from "react";
import { View,Text, ScrollView, ToastAndroid } from "react-native";
import { clientesMock, ClientProps } from "../../mocks/clients";
import { Card } from "../../components/Card";
import {styles} from './styles'
export const Home = () => {
    const [clientes, setClientes] = useState<ClientProps[]>([])
    useEffect(()=>{
        setClientes(clientesMock)
    },[])
    const selectClient=(id:number)=>{
        const client = clientes[id]
        ToastAndroid.show('O card do cliente:' + client.nome + " foi pressionado" , ToastAndroid.LONG)
    }
    return (
       <View style={styles.container}>
            <Text style={styles.title}>
                Lista de clientes:
            </Text>
        <ScrollView>
             {clientes?.map((client, index) => (
                <Card
                    key={index}
                    id={index}
                    nome={client.nome}
                    idade={client.idade}
                    endereco={client.endereco}
                    cpf={client.cpf}
                    handleTouch={selectClient}
                />
            ))}
        </ScrollView>
       </View> 
    )
}
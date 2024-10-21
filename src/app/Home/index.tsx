import React, { useEffect, useState } from "react";
import { View,Text, ScrollView, ToastAndroid, Button, TextInput } from "react-native";
import { clientesMock, ClientProps } from "../../mocks/clients";
import { ClientsContent } from "../../components/ClientsContent";
import {styles} from './styles'
import Card from "../../components/Card";
import { LabelContent } from "../../components/LabelContent";
export const Home = () => {
    const [clientes, setClientes] = useState<ClientProps[]>([])
    useEffect(()=>{
        setClientes(clientesMock)
    },[])
    const [text, onChangeText] = React.useState('');
    const selectClient=(id:number)=>{
        const client = clientes[id]
        ToastAndroid.show('O card do cliente:' + client.nome + " foi pressionado" , ToastAndroid.LONG)
    }
    const clearFilter = () =>{
        setClientes(clientesMock)
    }
    const filter =()=>{
        console.log(text)
        if(text){
            const client = clientes.find((client)=>{ return client.nome.toLocaleLowerCase().includes(text.toLocaleLowerCase())});
            console.log(client)
            if(client)
                setClientes([client])
            else{
                ToastAndroid.show("O cliente não foi encontrado" , ToastAndroid.LONG)
            }
        }  
    }

    return (
       <View style={styles.container}>
            <Text style={styles.title}>
                Gestão de clientes
            </Text>
            <Card.CardBody>
                <LabelContent label="Filtrar cliente"/>
                <ScrollView>
                    <Card.CardFotter>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                        />    
                        <Button title="Filtrar" onPress={filter}/>
                        <Button title="Limpar Filtro" onPress={clearFilter}/>
                    </Card.CardFotter>
                </ScrollView>
            </Card.CardBody>
            <Card>
                <Text style={styles.title}>
                    Lista de clientes:
                </Text>
            </Card>
            <ScrollView>
                {clientes?.map((client, index) => (
                    <ClientsContent
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
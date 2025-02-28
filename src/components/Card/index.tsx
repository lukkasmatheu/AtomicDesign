import React from "react"
import { View } from "react-native"
import {styles} from './styles'
import CardBody from "./CardBody";
import CardFotter from "./CardFotter";

interface ContentProps{
    children?: React.ReactNode;
}

export default function Card({children}: ContentProps){ 
    return(
        <View style={styles.container}>
            {children}
        </View>
)}

Card.Card = Card
Card.CardBody = CardBody
Card.CardFotter = CardFotter

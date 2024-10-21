import React from "react"
import { View } from "react-native"
import {styles} from './styles'

interface ContentProps{
    children?: React.ReactNode;
}

export default function CardBody({children}: ContentProps){ 
    return(
        <View style={styles.container}>
            {children}
        </View>
)}
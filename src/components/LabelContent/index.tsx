import React from "react";
import { Text, View } from "react-native";

import {styles} from './styles'

interface ContentProps{
    label:string;
    value?:string;
    children?: React.ReactNode;
}


export const LabelContent:React.FC<ContentProps> = ({label,value='',children},) => {
    return (
    <View style={styles.contentContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
        {children}
    </View>
    )
}


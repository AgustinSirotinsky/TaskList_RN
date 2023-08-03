import React from 'react';
import { View } from 'react-native';
import Button from 'react-native-paper';

    const Boton = () => {
    return (
        <View>
            <Button onPress={mostrarAlerta}>Add task</Button>
        </View>
    );
};
export default Boton;
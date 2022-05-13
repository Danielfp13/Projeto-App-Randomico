import React, { useState } from 'react';
import { Text, SafeAreaView, TouchableOpacity, StyleSheet, View } from 'react-native';



const App = () => {

    const [numero, setNumero] = useState(0);
    const [paridade, setParidade] = useState('Par');

    function handleNumero() {
        const novo_numero = Math.floor(Math.random() * 1000);
        setNumero(novo_numero);
        novo_numero % 2 === 0 ? setParidade('Par') : setParidade('Impar');
    }

    return (
        <SafeAreaView style={style.container} >
            <Text style={style.numero}>{numero}</Text>
            <Text style={
                numero % 2 === 0
                    ? style.textoPar
                    : style.textoImpar
            }>{paridade}</Text>
            <TouchableOpacity onPress={handleNumero} style={style.botao}>
                <Text style={style.textoBotao}>Gerar Números</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: '#13A8ED',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    numero: {
        fontSize: 38,
        color: '#FFF',
        fontWeight: 'bold',
    },
    botao: {
        marginTop: 20,
        backgroundColor: '#563AF0',
        width: '60%',
        paddingHorizontal: 4,
        paddingVertical: 10,
        borderRadius: 50,
        alignItems: 'center',
    },
    textoBotao: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    textoPar: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#1421F7',
    },
    textoImpar: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'red',
    }

});

export default App;


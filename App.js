import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './style';

const App = () => {
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemsSettings: false,
  };

  ReactNativeHapticFeedback.trigger('impactMedium', options);

  const [numero, setNumero] = useState('');
  const [resutado, setResultado] = useState();

  function calcular() {
    const resultado = eval(numero);
    setResultado(resultado);
  }

  function deletar() {
    setNumero(numero.substring(0, numero.length - 1));
  }

  function limpar() {
    setNumero('');
    setResultado();
  }

  return (
    <>
      <View style={styles.main}>
        <View style={styles.calculadora}>
          <View name="tela" style={styles.tela}>
            <TextInput
              style={styles.valores}
              editable={false}
              maxLength={10}
              keyboardType={'numeric'}
              setNumero={text => setNumero(text)}
              value={numero}
            />
            <Text style={styles.resultado} editable={false}>
              {resutado}
            </Text>
          </View>
          <View style={styles.teclasNumericas}>
            <TouchableOpacity
              style={styles.btNumero}
              onPress={() => setNumero(numero + '7')}>
              <Text style={styles.titleBt}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btNumero}
              onPress={() => setNumero(numero + '8')}>
              <Text style={styles.titleBt}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btNumero}
              onPress={() => setNumero(numero + '9')}>
              <Text style={styles.titleBt}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btNumero}
              onPress={() => setNumero(numero + '4')}>
              <Text style={styles.titleBt}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btNumero}
              onPress={() => setNumero(numero + '5')}>
              <Text style={styles.titleBt}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btNumero}
              onPress={() => setNumero(numero + '6')}>
              <Text style={styles.titleBt}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btNumero}
              onPress={() => setNumero(numero + '3')}>
              <Text style={styles.titleBt}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btNumero}
              onPress={() => setNumero(numero + '2')}>
              <Text style={styles.titleBt}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btNumero}
              onPress={() => setNumero(numero + '1')}>
              <Text style={styles.titleBt}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btZero}
              onPress={() => setNumero(numero + '0')}>
              <Text style={styles.titleBt}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btNumero}
              onPress={() => setNumero(numero + '.')}>
              <Text style={styles.titleBt}>.</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.teclasOperacoes}>
            <TouchableOpacity
              style={styles.btNumero}
              onPress={() => setNumero(numero + '+')}>
              <Text style={styles.titleBt}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btNumero}
              onPress={() => setNumero(numero + '-')}>
              <Text style={styles.titleBt}> - </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btNumero}
              onPress={() => setNumero(numero + '*')}>
              <Text style={styles.titleBt}> * </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btNumero}
              onPress={() => setNumero(numero + '/')}>
              <Text style={styles.titleBt}> / </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btNumero} onPress={limpar}>
              <Text style={styles.titleBt}> C </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btApagar} onPress={deletar}>
              <Icon name="backspace" size={18} color="#b71c1c" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btIgual} onPress={calcular}>
              <Text style={styles.titleBt}> = </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default App;

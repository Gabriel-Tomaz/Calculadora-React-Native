import React from 'react';
import {useState} from 'react';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    MainCalculator,
    CalculatorBody,
    DisplayBody,
    InputValues,Results,
    NumericKeyboard,
    OperatorsKeyboard,
    Button,
    ButtonLarge,
    ButtonClear,
    Label
} from './style';

const Calculator = () => {
        const options = {
          enableVibrateFallback: true,
          ignoreAndroidSystemsSettings: false,
        };
      
        ReactNativeHapticFeedback.trigger('impactMedium', options);
      
        const [number, setNumber] = useState('');
        const [result, setResult] = useState();
      
        function runCalc() {
          const resultado = eval(number);
          setResult(resultado);
        }
      
        function runDelete() {
          setNumber(number.substring(0, number.length - 1));
        }
      
        function clear() {
          setNumber('');
          setResult();
        }
      
        return (
    
            <MainCalculator>
                <CalculatorBody>
                    {/*Tela da calculadora*/}
                    <DisplayBody name="tela">
                        <InputValues
                            editable={false}
                            maxLength={10}
                            keyboardType={'numeric'}
                            setNumber={text => setNumber(text)}
                            value={number}
                        />
                        <Results editable={false}>
                            {result}
                        </Results>
                    </DisplayBody>

                    {/*Teclado Numérico*/}
                    <NumericKeyboard>
                        <Button onPress={() => setNumber(number + '7')}>
                            <Label>7</Label>
                        </Button>
                        <Button onPress={() => setNumber(number + '8')}>
                            <Label>8</Label>
                        </Button>
                        <Button onPress={() => setNumber(number + '9')}>
                            <Label>9</Label>
                        </Button>
                        <Button onPress={() => setNumber(number + '4')}>
                            <Label>4</Label>
                        </Button>
                        <Button onPress={() => setNumber(number + '5')}>
                            <Label>5</Label>
                        </Button>
                        <Button onPress={() => setNumber(number + '6')}>
                            <Label>6</Label>
                        </Button>
                        <Button onPress={() => setNumber(number + '3')}>
                            <Label>3</Label>
                        </Button>
                        <Button onPress={() => setNumber(number + '2')}>
                            <Label>2</Label>
                        </Button>
                        <Button onPress={() => setNumber(number + '1')}>
                            <Label>1</Label>
                        </Button>
                        <ButtonLarge onPress={() => setNumber(number + '0')}>
                            <Label>0</Label>
                        </ButtonLarge>
                        <Button onPress={() => setNumber(number + '.')}>
                            <Label>.</Label>
                        </Button>
                    </NumericKeyboard>

                    {/*Teclado de operações */}
                    <OperatorsKeyboard>
                        <Button onPress={() => setNumber(number + '+')}>
                            <Label> + </Label>
                        </Button>
                        <Button onPress={() => setNumber(number + '-')}>
                            <Label> - </Label>
                        </Button>
                        <Button onPress={() => setNumber(number + '*')}>
                            <Label> * </Label>
                        </Button>
                        <Button onPress={() => setNumber(number + '/')}>
                            <Label> / </Label>
                        </Button>
                        <Button onPress={clear}>
                            <Label> C </Label>
                        </Button>
                        <ButtonClear onPress={runDelete}>
                            <Icon name="backspace" size={21} color="#91280D" />
                        </ButtonClear>
                        <ButtonLarge onPress={runCalc}>
                            <Label> = </Label>
                        </ButtonLarge>
                    </OperatorsKeyboard>
                </CalculatorBody>
            </MainCalculator>
        );
};

export default Calculator;
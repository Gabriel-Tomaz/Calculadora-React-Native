import styled from 'styled-components/native';

export const MainCalculator = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CalculatorBody = styled.View`
    flex: 1;
    background-color: #C5CAE9;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-around;
`;

export const DisplayBody = styled.View`
    width: 95%;
    height: 300px;
    background-color: #A5D6A7;
    border: solid 8px rgba(159, 168, 218,0.8);
    justify-content: space-around;
    align-items: center;
    border-radius: 4px;
`;

export const InputValues = styled.TextInput`
    width: 95%;
    height: 150px;
    border-radius: 4px;
    text-align: right;
    font-size: 45px;
`

export const Results = styled.TextInput`
    width: 95%;
    height: 150px;
    border-radius: 4px;
    text-align: right;
    font-size: 45px;
    color: rgba(0,0,0,0.25);
`
export const NumericKeyboard = styled.View`
    width: 200px;
    height: 42%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-around;
`;

export const OperatorsKeyboard = styled.View`
    width: 150px;
    height: 42%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-around;
`;

export const Button = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    background-color: rgba(159, 168, 218,1);
    border: solid 2px rgba(121, 134, 203,1);
    justify-content: center;
    align-items: center;
    box-shadow: 2px 2px 4px #000;
    border-radius: 4px;
`;

export const ButtonLarge = styled(Button)`
    width: 135px;
`;

export const ButtonClear = styled(Button)`
    background-color: #EF5350;
    border: solid 2px #D32F2F;

`

export const Label = styled.Text`
    font-size: 21px;
    font-weight: bold;
    color: rgba(0,0,0,0.6)
`;

  
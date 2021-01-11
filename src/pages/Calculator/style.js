import styled from 'styled-components/native';

export const MainCalculator = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CalculatorBody = styled.View`
    flex: 1;
    background-color: #293241;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-around;
`;

export const DisplayBody = styled.View`
    width: 90%;
    height: 300px;
    background-color: #98C1D9;
    border:solid 5px #3D5A80;
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
    color: #3D5A80;
`;

export const Results = styled.TextInput`
    width: 95%;
    height: 150px;
    border-radius: 4px;
    text-align: right;
    font-size: 45px;
    color: #3D5A80;
`;
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
    background-color: #3D5A80;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
`;

export const ButtonLarge = styled(Button)`
    width: 135px;
`;

export const ButtonClear = styled(Button)`
    background-color: #EE6C4D;

`

export const Label = styled.Text`
    font-size: 21px;
    font-weight: bold;
    color: #FFF;
`;

  
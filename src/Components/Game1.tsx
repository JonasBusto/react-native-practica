import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  TextInput,
} from 'react-native';

const Game1 = () => {
  const [start, setStart] = useState(false);
  const [win, setWin] = useState(false);
  const [lose, setLose] = useState(false);
  const [number, setNumber] = useState('');
  const [randomNumber, setRandomNumber] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  let MAX = 100,
    MIN = 1;

  const startGame = () => {
    setAttempts(0);
    setWin(false);
    setLose(false);
    setNumber('');
    setStart(true);
    setRandomNumber(Math.floor(Math.random() * (MAX - MIN) + MIN));
  };

  const verifyNumber = (number: any) => {
    if (3 - attempts < 2 && number !== randomNumber) {
      setAttempts(attempts + 1);
      setWin(false);
      setLose(true);
      setStart(false);
    } else {
      if (number <= 0 || number > 100) {
        setErrorMessage(
          'Debe ingresar unicamente números enteros entre 1 y 100',
        );
      } else if (isNaN(number)) {
        setErrorMessage('Dato no valido. Ingrese nuevamente un número entero');
      } else if (number % 1 !== 0) {
        setErrorMessage('Debe ingresar unicamente números ENTEROS');
      } else if (number < randomNumber) {
        setErrorMessage('El número que intenta adivinar es MAYOR al ingresado');
        setAttempts(attempts + 1);
      } else if (number > randomNumber) {
        setErrorMessage('El número que intenta adivinar es MENOR al ingresado');
        setAttempts(attempts + 1);
      } else {
        setWin(true);
      }
    }

    setTimeout(() => {
      setErrorMessage('');
    }, 5000);
  };

  return (
    <ScrollView>
      <Text style={game1Styles.title}>Adivina el número</Text>
      <View style={game1Styles.viewInstructions}>
        <Text>
          <Text style={game1Styles.viewTitleInstructions}>Instrucciones: </Text>
          El juego consiste en adivinar el número ENTERO oculto, entre los
          valores {MIN} y{' ' + MAX}, con tres intentos. Si no logras adivinar
          el número en tres intentos, PIERDES, revelandote cual era dicho número
          a adivinar. BUENA SUERTE!!
        </Text>
      </View>
      {attempts < 3 ? (
        <View style={game1Styles.viewAttemps}>
          <Image
            style={game1Styles.imgAttemps}
            source={{
              uri: 'https://www.pngitem.com/pimgs/m/231-2315432_super-mario-bros-mario-super-mario-bros-1985.png',
            }}
          />
          <Text style={game1Styles.textAttemps}>X{' ' + (3 - attempts)}</Text>
        </View>
      ) : (
        <Image
          style={game1Styles.imgAttemps}
          source={{
            uri: 'https://pbs.twimg.com/media/Ev9xZOwXcAMq9mW.jpg',
          }}
        />
      )}
      {!start && attempts === 0 ? (
        <View>
          <TouchableHighlight
            onPress={() => startGame()}
            style={game1Styles.btnStartGame}>
            <Text style={game1Styles.btnTextStartGame}>Comenzar</Text>
          </TouchableHighlight>
        </View>
      ) : (
        <View>
          <TextInput
            value={number}
            onChangeText={value => setNumber(value)}
            style={game1Styles.inputStyle}
            keyboardType="numeric"
          />
          {errorMessage.trim() !== '' && (
            <Text
              style={{
                color: '#96A011',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 8,
              }}>
              {errorMessage}
            </Text>
          )}
          {!lose && !win && (
            <TouchableHighlight
              disabled={number.trim() === '' ? true : false}
              onPress={() => verifyNumber(Number(number))}
              style={{
                backgroundColor: number.trim() !== '' ? '#D10C0C' : '#BF7373',
                width: '30%',
                marginLeft: 'auto',
                marginTop: 10,
                marginRight: 'auto',
                height: 30,
                borderRadius: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={game1Styles.btnTextStartGame}>Elegir</Text>
            </TouchableHighlight>
          )}
        </View>
      )}
      {(attempts >= 3 || win) && (
        <View>
          {win && (
            <Text
              style={{
                color: 'blue',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 8,
              }}>
              Ganaste. El número a adivinar era{' ' + randomNumber}
            </Text>
          )}
          {lose && (
            <Text
              style={{
                color: 'red',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 8,
              }}>
              Perdiste. El número a adivinar era{' ' + randomNumber}
            </Text>
          )}

          <TouchableHighlight
            onPress={() => startGame()}
            style={game1Styles.btnLose}>
            <Text style={game1Styles.btnTextStartGame}>Volver a jugar</Text>
          </TouchableHighlight>
        </View>
      )}
    </ScrollView>
  );
};

const game1Styles = StyleSheet.create({
  title: {
    color: 'black',
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  viewInstructions: {
    flexDirection: 'row',
    margin: 5,
  },
  viewTitleInstructions: {
    color: 'black',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  btnStartGame: {
    backgroundColor: '#31D325',
    width: '30%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 30,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTextStartGame: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  inputStyle: {
    borderWidth: 1,
    width: '30%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    fontSize: 25,
  },
  btnLose: {
    backgroundColor: '#D10C0C',
    width: '30%',
    marginLeft: 'auto',
    marginTop: 10,
    marginRight: 'auto',
    height: 30,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewAttemps: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '4%',
  },
  imgAttemps: {
    width: 30,
    height: 40,
  },
  textAttemps: {
    color: 'black',
    fontSize: 30,
    marginLeft: 10,
    fontWeight: 'bold',
  },
});

export default Game1;

import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

const stylesCounter = StyleSheet.create({
  containerButton: {
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
  },
  buttonImg: {
    width: 50,
    height: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '5%',
    marginBottom: '0%',
  },
  buttonCustom: {
    marginLeft: '10%',
    marginRight: '10%',
  },
  counterInfo: {
    borderWidth: 1,
    borderColor: 'black',
    width: 60,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '9%',
  },
  styleInfoCounter: {
    color: 'black',
    fontSize: 30,
    fontWeight: '700',
  },
  buttonContainerFlex: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  buttonInfoText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '700',
  },
  buttonResetText: {
    textAlign: 'center',
    fontSize: 15,
    textTransform: 'uppercase',
    fontWeight: '700',
    marginBottom: '5%',
  },
});

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const sumar = () => setCounter(counter + 1);
  const restar = () => setCounter(counter - 1);
  const reiniciar = () => setCounter(0);

  return (
    <View
      style={{
        marginTop: '5%',
        borderColor: 'gray',
        borderTopWidth: 1,
      }}>
      <Text
        style={{
          marginTop: '2%',
          marginBottom: '5%',
          marginLeft: 'auto',
          marginRight: 'auto',
          fontWeight: '700',
          textTransform: 'uppercase',
        }}>
        Probando contador
      </Text>
      <View style={stylesCounter.containerButton}>
        <View style={stylesCounter.buttonContainerFlex}>
          <TouchableOpacity
            style={stylesCounter.buttonCustom}
            onPress={() => sumar()}>
            <Image
              source={{
                uri: 'https://icons.veryicon.com/128/Game/Super%20Mario%201/Retro%20Mushroom%201UP.png',
              }}
              style={stylesCounter.buttonImg}
            />
            <Text style={stylesCounter.buttonInfoText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={(stylesCounter.buttonCustom, stylesCounter.counterInfo)}>
          <Text style={stylesCounter.styleInfoCounter}>{counter}</Text>
        </View>
        <View style={stylesCounter.buttonContainerFlex}>
          <TouchableOpacity
            style={stylesCounter.buttonCustom}
            onPress={() => restar()}>
            <Image
              source={{
                uri: 'https://static.wikia.nocookie.net/mario/images/2/24/A526E43A-D04D-4E5C-A62D-B76E4D65754B.png/revision/latest?cb=20200503094411&path-prefix=es',
              }}
              style={stylesCounter.buttonImg}
            />
            <Text style={stylesCounter.buttonInfoText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={stylesCounter.buttonCustom}
          onPress={() => reiniciar()}>
          <Image
            source={{
              uri: 'https://pbs.twimg.com/media/Ei8pS9HWAAEx6eO.png',
            }}
            style={stylesCounter.buttonImg}
          />
          <Text style={stylesCounter.buttonResetText}>Reiniciar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Counter;

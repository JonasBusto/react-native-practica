import React, {useState} from 'react';
import {View, Image, Text, ScrollView, StyleSheet} from 'react-native';
import data from '../Helpers/data';

const Character = ({route, navigation}: any) => {
  const {id} = route.params;
  const array = data.find(e => e.id === id);
  const [object, setObject] = useState(array);

  return (
    <ScrollView style={characterStyle.background}>
      <View>
        <Text style={characterStyle.title}>Personaje</Text>
        <View style={characterStyle.flexContain}>
          <View style={characterStyle.containDetail}>
            <Text style={characterStyle.nameCharacter}>{object?.name}</Text>

            <Text style={characterStyle.detail}>{object?.desc}</Text>
          </View>
          <Image
            style={characterStyle.imgCharacter}
            source={{uri: object?.url}}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const characterStyle = StyleSheet.create({
  background: {
    backgroundColor: 'rgb(235,242,245,1)',
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    textTransform: 'uppercase',
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'red',
  },
  nameCharacter: {
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'black',
  },
  imgCharacter: {
    width: '50%',
    height: 200,
    borderWidth: 4,
    borderRadius: 10,
    borderColor: 'red',
    margin: 3,
    marginTop: '3%',
  },
  flexContain: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  containDetail: {
    width: '50%',
  },
  detail: {
    fontSize: 10,
    color: 'black',
  },
});

export default Character;

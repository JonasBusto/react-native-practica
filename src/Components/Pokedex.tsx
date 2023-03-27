import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import data from '../Helpers/data';

const Pokedex = () => {
  const [pokedexArray, setPokedexArray] = useState([...data]);

  console.log(pokedexArray);

  return (
    <View
      style={{
        marginTop: '5%',
        borderColor: 'gray',
        borderTopWidth: 1,
      }}>
      <Text>Pokedex</Text>
      <View>
        {pokedexArray.map(e => (
          <View key={e.name + '-' + e.url}>
            <Image source={{uri: e.url}}></Image>
            <Text>{e.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Pokedex;

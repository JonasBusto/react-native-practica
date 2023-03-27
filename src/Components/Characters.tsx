import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import data from '../Helpers/data';

const Characters = () => {
  const [pokedexArray, setPokedexArray] = useState([...data]);

  console.log(pokedexArray);

  return (
    <View>
      <Text>Personajes</Text>
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

export default Characters;

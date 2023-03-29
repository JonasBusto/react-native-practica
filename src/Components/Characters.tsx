import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import data from '../Helpers/data';

const Characters = ({navigation}: any) => {
  const [arrayData, setArrayData] = useState([...data]);

  return (
    <ScrollView>
      <ImageBackground
        source={{
          uri: 'https://i.pinimg.com/originals/b1/5f/97/b15f97463be2583c0db7f9b8df8c84fd.gif',
        }}
        style={charactersStyle.container}>
        <Text style={charactersStyle.title}>Personajes</Text>
        <View style={charactersStyle.viewContainerCharacter}>
          {arrayData.map(
            e =>
              e.url.trim() !== '' && (
                <TouchableOpacity
                  style={charactersStyle.viewCharacter}
                  key={e.name + '-' + e.url}
                  onPress={() => navigation.navigate('Character', {id: e.id})}>
                  <Image
                    style={charactersStyle.imgStyle}
                    source={{
                      uri: e.url,
                    }}
                  />
                  <Text style={charactersStyle.nameCharacter}>{e.name}</Text>
                </TouchableOpacity>
              ),
          )}
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const charactersStyle = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
  },
  title: {
    color: 'white',
    backgroundColor: 'rgba(216,74,0,1)',
    width: 290,
    height: 100,
    fontSize: 40,
    textAlign: 'center',
    verticalAlign: 'middle',
    textTransform: 'uppercase',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 15,
    fontWeight: 'bold',
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    shadowOpacity: 10,
    elevation: 10,
    borderWidth: 3,
  },
  imgStyle: {
    width: 50,
    height: 50,
  },
  viewContainerCharacter: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  viewCharacter: {
    borderWidth: 2,
    width: 127,
    height: 127,
    margin: 5,
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    shadowOpacity: 10,
    elevation: 30,
  },
  nameCharacter: {
    marginTop: 10,
    color: 'black',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default Characters;

import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Login = ({navigation}: any) => {
  return (
    <View style={authStyle.backImgCustom}>
      <View style={authStyle.authContainer}>
        <Text style={authStyle.authTitle}>Autenticación</Text>
        <TextInput
          style={authStyle.authInput}
          placeholder="Correo Electronico"
          keyboardType="email-address"
        />
        <TextInput
          style={authStyle.authInput}
          placeholder="Contraseña"
          keyboardType="visible-password"
        />
        <TouchableOpacity style={authStyle.authButton} onPress={() => {}}>
          <Text style={authStyle.authButtonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={authStyle.btnRegister}
          onPress={() => navigation.navigate('Register')}>
          <Text style={authStyle.authButtonText}>O registrate aquí</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const authStyle = StyleSheet.create({
  backImgCustom: {
    width: '100%',
    height: '100%',
    borderColor: 'gray',
    borderTopWidth: 1,
    backgroundColor: 'rgba(73,171,255,1)',
  },
  authContainer: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '6%',
    marginBottom: '6%',
    paddingTop: '5%',
    borderRadius: 10,
  },
  authInput: {
    borderColor: 'black',
    borderWidth: 2,
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '2%',
    marginBottom: '2%',
    backgroundColor: 'rgba(255,255,255,0.95)',
    color: 'white',
  },
  authTitle: {
    color: 'white',
    fontWeight: '700',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 15,
  },
  authButton: {
    backgroundColor: 'rgba(216,74,0,1)',
    width: '40%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '5%',
    marginBottom: '5%',
    borderRadius: 7,
    borderWidth: 2,
  },
  authButtonText: {
    paddingTop: '5%',
    paddingBottom: '5%',
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase',
  },
  btnRegister: {
    backgroundColor: 'rgba(139,213,13,1)',
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '5%',
    marginBottom: '5%',
    borderRadius: 7,
    borderWidth: 2,
  },
});

export default Login;

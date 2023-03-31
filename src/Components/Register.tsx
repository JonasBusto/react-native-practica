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
import {Formik} from 'formik';

const Register = ({navigation}: any) => {
  return (
    <View style={authStyle.backImgCustom}>
      <Formik
        initialValues={{email: '', fullName: '', pass: '', confirmPass: ''}}
        validate={values => {
          let errors: Record<string, any> = {};

          if (values.fullName.trim() === '') {
            errors.fullName = 'Requerido';
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.fullName)) {
            errors.fullName = 'Nombre invalido';
          }

          if (values.email.trim() === '') {
            errors.email = 'Requerido';
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              values.email,
            )
          ) {
            errors.email = 'Dirección de Email invalida';
          }

          if (values.pass.trim() === '') {
            errors.pass = 'Requerido';
          } else if (/\s/.test(values.pass)) {
            errors.pass = 'La contraseña no puede tener espacios';
          } else if (
            values.pass.split('').length < 6 ||
            values.pass.split('').length > 14
          ) {
            errors.pass = 'Contraseña entre 6 y 14 caracteres';
          }

          if (values.confirmPass.trim() === '') {
            errors.confirmPass = 'Requerido';
          } else if (values.pass !== values.confirmPass) {
            errors.confirmPass = 'Las contraseñas no coinciden.';
          } else if (/\s/.test(values.confirmPass)) {
            errors.confirmPass =
              'La confirmación de la contraseña tampoco puede tener espacios.';
          } else if (
            values.confirmPass.split('').length < 6 ||
            values.confirmPass.split('').length > 14
          ) {
            errors.confirmPass =
              'La confirmación de la contraseña debe tener entre 6 y 14 caracteres.';
          }

          return errors;
        }}
        onSubmit={values => console.log(values)}>
        {({
          handleSubmit,
          errors,
          touched,
          values,
          handleChange,
          handleBlur,
        }) => (
          <View style={authStyle.authContainer}>
            <Text style={authStyle.authTitle}>Registro</Text>
            <TextInput
              style={authStyle.authInput}
              placeholder="Correo Electronico"
              keyboardType="email-address"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {touched.email && errors.email && (
              <Text style={authStyle.authValidateInput}>{errors.email}</Text>
            )}
            <TextInput
              style={authStyle.authInput}
              placeholder="Nombre completo"
              keyboardType="default"
              onChangeText={handleChange('fullName')}
              onBlur={handleBlur('fullName')}
              value={values.fullName}
            />
            {touched.fullName && errors.fullName && (
              <Text style={authStyle.authValidateInput}>{errors.fullName}</Text>
            )}
            <TextInput
              style={authStyle.authInput}
              placeholder="Contraseña"
              secureTextEntry
              onChangeText={handleChange('pass')}
              onBlur={handleBlur('pass')}
              value={values.pass}
            />
            {touched.pass && errors.pass && (
              <Text style={authStyle.authValidateInput}>{errors.pass}</Text>
            )}
            <TextInput
              style={authStyle.authInput}
              placeholder="Confirmar contraseña"
              secureTextEntry
              onChangeText={handleChange('confirmPass')}
              onBlur={handleBlur('confirmPass')}
              value={values.confirmPass}
            />
            {touched.confirmPass && errors.confirmPass && (
              <Text style={authStyle.authValidateInput}>
                {errors.confirmPass}
              </Text>
            )}
            <TouchableOpacity
              style={authStyle.authButton}
              onPress={() => handleSubmit()}>
              <Text style={authStyle.authButtonText}>Registrarse</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={authStyle.btnLogin}
              onPress={() => navigation.navigate('Login')}>
              <Text style={authStyle.authButtonText}>O Inicia Sesión aquí</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

const authStyle = StyleSheet.create({
  backImgCustom: {
    width: '100%',
    height: '100%',
    borderColor: 'gray',
    borderTopWidth: 1,
    backgroundColor: 'rgba(0,0,0,1)',
  },
  authContainer: {
    backgroundColor: 'rgba(255,255,255,0.2)',
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
    backgroundColor: 'rgba(255,255,255,0.95)',
    color: 'black',
  },
  authValidateInput: {
    color: 'red',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: '2%',
    marginLeft: 20,
  },
  authTitle: {
    color: 'white',
    fontWeight: '700',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 15,
  },
  authButton: {
    backgroundColor: 'rgba(200,76,12,1)',
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
  btnLogin: {
    backgroundColor: 'rgba(0,128,136,1)',
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '5%',
    marginBottom: '5%',
    borderRadius: 7,
    borderWidth: 2,
  },
});

export default Register;

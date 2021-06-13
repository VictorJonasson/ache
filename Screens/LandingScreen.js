import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {
  Button,
  Input,
  Layout,
  Text,
} from '@ui-kitten/components';
import logo from '../Assets/Images/Logotype/bodo.png';
import {TouchableOpacity} from 'react-native-gesture-handler';

const LandingScreen = ({navigation}) => {
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image style={styles.logo} source={logo} />
      <Input
        style={styles.inputEmail}
        value={email}
        label='Email'
        placeholder=''
        onChangeText={(nextValue) => setEmail(nextValue)}
      />
      <Input
        style={styles.inputPassword}
        value={password}
        label='Password'
        placeholder='**********'
        secureTextEntry={true}
        onChangeText={(nextValue) => setPassword(nextValue)}
      />

      <Layout style={{flex: 0, width: '45%', justifyContent: 'center', alignItems: 'center'}}>
        <Button size={'small'} style={styles.loginButton}
          onPress={() => navigation.navigate('loginScreen')}>
        Login
        </Button>
      </Layout>

      <TouchableOpacity
        style={styles.signUp}
        onPress={() => navigation.navigate('SignUpScreen')}
      >
        <Text category='s2' >Inget konto?</Text>
      </TouchableOpacity>

    </Layout>
  );
};

const styles = StyleSheet.create({
  inputEmail: {
    width: '80%',
    marginTop: '30%',
  },
  signUp: {
    marginTop: '20%',
  },
  inputPassword: {
    width: '80%',
    marginTop: 20,
  },
  loginButton: {
    marginTop: '20%',
  },
  logo: {
    marginRight: 10,
    marginTop: '20%',
    marginBottom: 10,
    width: 340,
    height: 200,
    resizeMode: 'contain'},
});

export default LandingScreen;



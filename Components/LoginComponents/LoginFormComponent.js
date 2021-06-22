import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {
    Button,
    Input,
    Layout,
    Text,
    Icon
} from '@ui-kitten/components';
import LogoProviderComponent from "../../Components/LogoProviderComponent";
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


export const FacebookIcon = (props) => (
    <Icon style={{ width: 22, height: 22 }} name='key' pack="feather"/>
);
export const UserIcon = (props) => (
    <Icon style={{ width: 22, height: 22 }} name='user' pack="feather"/>
);


const LoginFormComponent = () => {
    const navigation = useNavigation();
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');

    return (
        <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <LogoProviderComponent />
            <Input
                accessoryLeft={UserIcon}
                style={styles.inputEmail}
                value={email}
                label='Email'
                onChangeText={(nextValue) => setEmail(nextValue)}
            />

            <Input
                accessoryLeft={FacebookIcon}
                style={styles.inputPassword}
                value={password}
                label='Password'
                secureTextEntry={true}
                onChangeText={(nextValue) => setPassword(nextValue)}
            />

            <Layout style={{flex: 0, width: '45%', justifyContent: 'center', alignItems: 'center'}}>
                <Button size={'small'} style={styles.loginButton}
                        onPress={console.log("LOGIN")}>
                    Login
                </Button>

            </Layout>
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
    }
});

export default LoginFormComponent;

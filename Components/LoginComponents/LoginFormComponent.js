import React, { useContext, useState } from "react";
import { AccountContext } from "../../Cognito/Accounts";
import { StyleSheet } from "react-native";
import { Button, Input, Layout, Text, Icon } from "@ui-kitten/components";
import { useNavigation } from '@react-navigation/native';

export const FacebookIcon = (props) => (
    <Icon style={{
        width: 22,
        height: 22,
    }} name="key" pack="feather" />
);
export const UserIcon = (props) => (
    <Icon style={{
        width: 22,
        height: 22,
    }} name="user" pack="feather" />
);

export default () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { authenticate } = useContext(AccountContext);

    const onSubmit = () => {
        authenticate(email, password)
            .then(data => {
                console.log("logged in", data);
                navigation.navigate('HomeScreen')
            })
            .catch(err => {
                console.log("Failed to login", err);
            });
    };

    return (
        <Layout style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Input
                accessoryLeft={UserIcon}
                style={styles.inputEmail}
                value={email}
                label="Email"
                onChangeText={(nextValue) => setEmail(nextValue)}
            />

            <Input
                accessoryLeft={FacebookIcon}
                style={styles.inputPassword}
                value={password}
                label="Password"
                secureTextEntry={true}
                onChangeText={(nextValue) => setPassword(nextValue)}
            />

            <Layout style={{
                flex: 0,
                width: "45%",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Button size={"small"} style={styles.loginButton}
                        onPress={() => onSubmit()}>
                    <Text appearance="alternative">
                        Logga in
                    </Text>
                </Button>

            </Layout>
        </Layout>
    );
};

const styles = StyleSheet.create({
    inputEmail: {
        width: "80%",
        marginTop: "30%",
    },
    signUp: {
        marginTop: "20%",
    },
    inputPassword: {
        width: "80%",
        marginTop: 20,
    },
    loginButton: {
        marginTop: "20%",
    },
});



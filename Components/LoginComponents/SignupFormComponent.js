import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
    Button,
    Input,
    Layout,
    Text,
    Icon,
} from "@ui-kitten/components";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs();
import UserPool from "../../Cognito/UserPool";
import { TouchableWithoutFeedback } from "@ui-kitten/components/devsupport";
import{LoginUserIcon,LoginKeyIcon,AlertIcon} from "../IconHelper/IconProvider";

const renderCaption = () => {
    return (
        <View style={styles.captionContainer}>
            <AlertIcon/>
            <Text style={styles.captionText}>Måste bestå av minst 8 tecken</Text>
        </View>
    );
};

const SignupFormComponent = () => {
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = () => {
        UserPool.signUp(email, password, [], null, (err, data) => {
            if (err) console.error(err);
            console.log(data);
        });
    };
    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };
    const renderIcon = (props) => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon {...props} name={secureTextEntry ? "eye-off" : "eye"} />
        </TouchableWithoutFeedback>

    );

    return (
        <Layout style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Input
                accessoryLeft={LoginUserIcon}
                style={styles.inputEmail}
                value={email}
                label="Email"
                onChangeText={(nextValue) => setEmail(nextValue)
                }
            />
            <Input
                value={password}
                label="Lösenord"
                style={styles.inputPassword}
                caption={renderCaption}
                accessoryLeft={LoginKeyIcon}
                accessoryRight={renderIcon}
                secureTextEntry={secureTextEntry}
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
                        Registrera
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
        color: "red",
    },
    loginButton: {
        marginTop: "20%",
        color: "#8F9BB3",
    },
    captionContainer: {
        marginTop:6,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    captionIcon: {
        width: 10,
        height: 10,
        marginRight: 5,
    },
    captionText: {
        fontSize: 12,
        fontWeight: "400",
        fontFamily: "opensans-regular",
        color: "#8F9BB3",
    },
});

export default SignupFormComponent;

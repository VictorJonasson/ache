import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
    Button,
    Input,
    Layout,
    Text,
    Icon,
} from "@ui-kitten/components";
import UserPool from "../../Cognito/UserPool";
import { TouchableWithoutFeedback } from "@ui-kitten/components/devsupport";
import { LoginUserIcon, LoginKeyIcon, AlertIcon } from "../IconHelper/IconProvider";

const SignupFormComponent = () => {

    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password1, setPassword1] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("Måste bestå av minst 8 tecken");
    const [emailMessage, setEmailMessage] = useState();

    const renderCaption = () => {
        return (
            <View style={styles.captionContainer}>
                <AlertIcon />
                <Text style={styles.captionText}>{passwordMessage}</Text>
            </View>
        );
    };
    const renderEmailCaption = () => {
        return (
            <View style={styles.captionContainer}>
                {emailMessage ? <AlertIcon /> : null}
                <Text style={styles.captionText}>{emailMessage}</Text>
            </View>
        );
    };

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

    function ValidatePassword() {
        if (!password.localeCompare(password1)) {
            if (password.match(/\W/)) {
                if (password.length >= 8) {
                    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
                        console.log("Lösen Godkänt");
                        return true;
                    } else {
                        console.log("innehåller inte");
                        setPasswordMessage("Måste bestå av minst 1 stor bokstav");
                    }
                } else {
                    setPasswordMessage("Måste bestå av minst 8 tecken");
                }
            } else {
                setPasswordMessage("Lösenord måste innehålla ett specialtecken");
            }
        } else {
            console.log("matchar inte");
            setPasswordMessage("Lösenorden stämmer ej överens");
        }
    }

    function ValidateEmail() {
        //DO NOT CHANGE THIS REGEX
        const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (email.match(re)) {
            console.log("email pass");
            setEmailMessage("")
        } else {
            console.log("email dont pass");
            setEmailMessage("Mailadressen är felformularead");
        }
    }

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
                caption={renderEmailCaption}
                onChangeText={(nextValue) => setEmail(nextValue)
                }
            />
            <Input
                size={"small"}
                value={password}
                label="Lösenord"
                style={styles.inputPassword}
                accessoryLeft={LoginKeyIcon}
                accessoryRight={renderIcon}
                secureTextEntry={secureTextEntry}
                onChangeText={(nextValue) => setPassword(nextValue)}
            />
            <Input
                size={"small"}
                caption={renderCaption}
                value={password1}
                label="Upprepa Lösenord"
                style={styles.repeatPassword}
                accessoryLeft={LoginKeyIcon}
                accessoryRight={renderIcon}
                secureTextEntry={secureTextEntry}
                onChangeText={(nextValue) => setPassword1(nextValue)}
            />
            <Layout style={{
                flex: 0,
                width: "45%",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Button size={"small"} style={styles.registerButton}
                        onPress={() => {
                            ValidateEmail();
                            ValidatePassword();
                        }}>
                    <Text category={"h5"} style={{
                        fontFamily: "AdventPro-Regular",
                    }} appearance="alternative">
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
        elevation: 3,
    },
    inputPassword: {
        width: "80%",
        elevation: 3,
    },
    repeatPassword: {
        width: "80%",
        elevation: 3,
        marginTop:"2%"
    },
    registerButton: {
        color: "#8F9BB3",
        elevation: 3,
        marginTop:"15%"
    },
    captionContainer: {
        marginTop: "5%",
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

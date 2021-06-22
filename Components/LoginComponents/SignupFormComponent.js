import React from "react";
import { Image, StyleSheet, View } from "react-native";
import {
    Button,
    Input,
    Layout,
    Text,
    Icon,
} from "@ui-kitten/components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { TouchableWithoutFeedback } from "@ui-kitten/components/devsupport";

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
const AlertIcon = (props) => (
    <Icon {...props} style={{
        width: 22,
        height: 22,
    }} name="alert-circle-outline" />
);

const SignupFormComponent = () => {

    const [value, setValue] = React.useState("");
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);
    const navigation = useNavigation();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const renderIcon = (props) => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon {...props} name={secureTextEntry ? "eye-off" : "eye"} />
        </TouchableWithoutFeedback>
    );

    const renderCaption = () => {
        return (
            <View style={styles.captionContainer}>
                {AlertIcon(styles.captionIcon)}
                <Text style={styles.captionText}>Måste bestå av minst 8 tecken</Text>
            </View>
        );
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
                value={password}
                label="Password"
                style={styles.inputPassword}
                caption={renderCaption}
                accessoryLeft={FacebookIcon}
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
                        onPress={console.log("Registrera")}>
                    <Text  appearance='alternative'>
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

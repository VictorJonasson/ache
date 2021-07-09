import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet, TouchableOpacityComponent } from "react-native";
import {
    Layout,
    Text,
} from "@ui-kitten/components";
import LogoProviderComponent from "../Components/LogoProviderComponent";
import LoginFormComponent from "../Components/LoginComponents/LoginFormComponent";
import SignupFormComponent from "../Components/LoginComponents/SignupFormComponent";
import { Account } from "../Cognito/Accounts";
import { useNavigation } from "@react-navigation/native";

const LandingScreen = () => {
    const [accountExist, setAccountExist] = useState(false);
    const navigation = useNavigation();
    return (
        <Layout style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}>
            {!accountExist ?
                (<Account>
                        <LogoProviderComponent />
                        <TouchableOpacity
                            onPress={() => navigation.navigate("HomeScreen")}
                        >
                            <Text>Bypass Login</Text>
                        </TouchableOpacity>
                        <LoginFormComponent />
                        <TouchableOpacity
                            style={styles.signUp}
                            onPress={() => setAccountExist(true)}
                        >
                            <Text style={{ marginBottom: "1%" }} category="s2">Inget konto?</Text>
                        </TouchableOpacity>
                    </Account>
                )
                : (<Account>
                        <LogoProviderComponent />
                        <SignupFormComponent />
                        <TouchableOpacity
                            onPress={() => setAccountExist(false)}
                        >
                            <Text style={{ marginBottom: "1%" }} category="s2">Logga in</Text>
                        </TouchableOpacity>
                    </Account>
                )
            }
        </Layout>
    );
};

const styles = StyleSheet.create({
    loginButton: {
        marginTop: "20%",
    },
});

export default LandingScreen;

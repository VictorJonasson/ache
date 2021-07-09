import { Text, useTheme } from "@ui-kitten/components";
import React, { useContext, useEffect } from "react";
import Slider from "@react-native-community/slider";
import Context from "../../store/context";

const IntensitySliderComponent = () => {
    const [acheIntensity, setAcheIntensity] = React.useState(0);
    const theme = useTheme();
    const store = useContext(Context);
    const {
        type,
        actions,
    } = useContext(Context);

    useEffect(() => {
        actions({
            type: "setState",
            payload: {
                ...store,
                intensityLevel: acheIntensity,
            },
        })
    }, [acheIntensity]);

    return (
        <>
            <Text status="primary" category={"h5"} appearance={"default"} style={{
                alignSelf: "center",
                fontFamily: "AdventPro-Regular",
                marginBottom: "3%",
                marginTop: "0%",
            }}>Intensitet</Text>
            <Slider
                maximumValue={10}
                minimumValue={0}
                minimumTrackTintColor={theme["color-primary-600"]}
                maximumTrackTintColor={theme["color-primary-500"]}
                step={1}
                value={acheIntensity}
                onValueChange={(sliderValue) => setAcheIntensity(sliderValue)}
            />
            <Text status="primary" category={"h6"} appearance={"default"} style={{
                marginBottom: 0,
                alignSelf: "center",
                fontFamily: "AdventPro-Regular",
            }}>{store.state.intensityLevel}</Text>
        </>
    );
};

export default IntensitySliderComponent;
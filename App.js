import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { default as theme } from "./src/Assets/CustomTheme/custom-theme.json";
import StackNavigation from "./src/Navigation/StackNavigation";
import { FeatherIconsPack } from "./src/Components/IconHelper/feather-icons";

const Ache = () => (
    <>
        <IconRegistry icons={FeatherIconsPack} />
        <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
            <StackNavigation />
        </ApplicationProvider>
    </>
);

export default Ache;

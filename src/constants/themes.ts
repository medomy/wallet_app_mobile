import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    primary: "#0F0F0F",
    tintColor: "#266A61",
    offWhite: "#f1f0f6",
    black: "#1f1f1f",
    yellowRate: "#deba40",
    offBlack: "#1b1b1b",
    offblack2: "#3b3b3b",
    white: "#FFFFFF",
    lightGray: "#F5F5F6",
    lightGray2: "#F6F6F7",
    lightGray3: "#EFEFF1",
    lightGray4: "#F8F8F9",
    transparent: "transparent",
    darkgray: '#898C95',
    danger: "#df4759",
    bgGradientLight: "#f4ebfe"
}

export const SIZES = {
    margin: 8,
    margin2: 12,
    padding: 8,
    padding2: 12,
    fullScreenWidth: width,
    fullScreenHeight: height,
    fullWidth: "100%",
    iconSize: 25,
    iconSize2: 20,
    largeTitle: 60,
    h1: 40,
    h2: 32,
    h3: 28,
    h4: 24,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,
    radius: 30,
    radius2: 15,
    bigRadius: 60,
    btnRadius: 8
}

//FontAwesome5
export const iconNamesFontAwsome5 = {
    pound: "pound-sign",
    bell: "bell",
    eyeOPen: "eye",
    eyeClosed: "eye-slash",
    back: "arrow-left",
    backspace: "backspace"

}

// IonIcons
export const iconNamesIon = {
    close: "ios-close",
    drawer: "reorder-two-sharp"
}

// MaterialIcons
export const iconNamesMaterial = {
    arrowRight: "arrow-forward-ios"
}
export const FONTS = {
    largeTitle: { fontFamily: "Lato-Black", fontSize: SIZES.largeTitle, lineHeight: 60 },
    h1: { fontFamily: "Lato-Black", fontSize: SIZES.h1, lineHeight: 40 },
    h2: { fontFamily: "Lato-Bold", fontSize: SIZES.h2, lineHeight: 34 },
    h3: { fontFamily: "Lato-Bold", fontSize: SIZES.h3, lineHeight: 30 },
    h4: { fontFamily: "Lato-Bold", fontSize: SIZES.h4, lineHeight: 30 },
    body1: { fontFamily: "Lato-Regular", fontSize: SIZES.body1 },
    body2: { fontFamily: "Lato-Regular", fontSize: SIZES.body2 },
    body3: { fontFamily: "Lato-Regular", fontSize: SIZES.body3 },
    body4: { fontFamily: "Lato-Regular", fontSize: SIZES.body4 },
    body5: { fontFamily: "Lato-Regular", fontSize: SIZES.body5 },
    logo: { fontFamily: "DancingScript-Bold", fontSize: SIZES.h2, lineHeight: 34 }
}


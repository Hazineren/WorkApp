import AnimatedLottieView from "lottie-react-native";
import React from "react";

function Error (){
    return(       
        <AnimatedLottieView source={require('../../assets/error.json')} autoPlay></AnimatedLottieView>
    )
}

export default Error;
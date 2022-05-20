import AnimatedLottieView from "lottie-react-native";
import React from "react";
import { Container } from "./style";

function Loading() {
  return (
    <Container>
      <AnimatedLottieView
        source={require("../../assets/animations/pokeball-load.json")}
        autoPlay
        loop
        style={{
          width: 75,
          height: 75,
        }}
      />
    </Container>
  );
}

export default Loading;

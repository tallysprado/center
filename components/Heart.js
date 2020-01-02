import React from "react"
import {StyleSheet, View, Animated} from 'react-native'



const Heart = ({ filled, style, ...props }) => {
    const centerNonFilled = (
    <View style={[StyleSheet.absoluteFill, styles.fit]}>
        <View style={[styles.leftHeart, styles.heartShape, styles.empty]}></View>
        <View style={[styles.rigthHeart, styles.heartShape, styles.empty]}></View>
    </View>
    );

const fillStyle = filled ? styles.filledHeart : styles.empty;

return (
    <Animated.View {...props} style={[styles.heart, style]}>
      <View style={[styles.leftHeart, styles.heartShape, fillStyle]}></View>

      <View style={[styles.rightHeart, styles.heartShape, fillStyle]}></View>

      {!filled && centerNonFilled}
    </Animated.View>
  );
};



export default Heart;

const styles = StyleSheet.create({
    heart: {
        width: 40,
        height: 40,
        backgroundColor: "transparent",
        left: 5,
        top: 145,
        opacity: 0.7
      },
      heartShape: {
        width: 22,
        height: 32,
        position: "absolute",
    
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
      },
      filledHeart: {
        backgroundColor: "#e31745"
      },
      fit: {
        transform: [{ scale: 0.2 }]
      },
      emptyFill: {
        backgroundColor: "#fff"
      },
      empty: {
        backgroundColor: "#ccc"
      },
      leftHeart: {
        backgroundColor: "#000",
        transform: [{ rotate: "-45deg" }],
        left: 5
      },
      rightHeart: {
        backgroundColor: "#000",
        transform: [{ rotate: "45deg" }],
        right: 5
      },
})
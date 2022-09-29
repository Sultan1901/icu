import { StatusBar } from 'expo-status-bar';
import {  Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState, useEffect } from "react";
export default function App() {
  const [ww, onChangeww] = React.useState(0);
const [hh, onChangehh] = React.useState(0);
const [ag, onChangeag] = React.useState(0);
const [gender, onChangegender] = React.useState('');;
const [res, onChangeres] = React.useState(0);
const [res1, onChangeres1] = React.useState(0);
const [res2, onChangeres2] = React.useState(0);
const [res3, onChangeres3] = React.useState(0);
const [res4, onChangeres4] = React.useState(0);
const [res5, onChangeres5] = React.useState(0);
const [res6, onChangeres6] = React.useState(0);
const [res7, onChangeres7] = React.useState(0);
const [show , OnChangershow] = React.useState(false)
 useEffect(() => {
   CUL();
 });
const CUL = () => {
  const BMI = (w, h) => {
    w = ww;
    h = hh;
    onChangeres(ww / hh / hh);
    const IBW = (g) => {
      g = gender;
      if (gender === "male") {
        onChangeres3(hh * hh * 24);
      } else if (gender === "female") {
        onChangeres3(hh * hh * 22.5);
      }
    };
    IBW();
    const KCAL = (g) => {
      g = gender;
      if (res < 30) {
        return onChangeres1(ww * 25) + onChangeres2(ww * 30);
      } else if (res > 30 && res < 50) {
        return onChangeres1(ww * 11) + onChangeres2(ww * 14);
      } else if (res > 50 && gender === "male") {
        return onChangeres1(hh * hh * 24 * 22) + onChangeres2(hh * hh * 24 * 25);
      } else if (res > 50 && gender === "female") {
        return onChangeres1(hh * hh * 22.5 * 22) + onChangeres2(hh * hh * 22.5 * 25);
      }
    };
    KCAL();
    const FLUID = (age) => {
      age = ag;
      if (age > 18 && res > 30 && gender === "male")
        return onChangeres6(hh * hh * 24 * 25);
      else if (age > 18 && res > 30 && gender === "female")
        return onChangeres6(hh * hh * 25 * 22.5);
      else if (age > 18 && res < 30) return onChangeres6(ww * 30);
    };
    FLUID();
    const PROTEIN = () => {
      if (res < 30) {
        return onChangeres4(ww * 1.2) + onChangeres5(ww * 2);
      } else if (res > 30) {
        return onChangeres4(res3 * 2) + onChangeres5(res3 * 2.5);
      }
    };
    PROTEIN();
    const ADW = () => {
      onChangeres7(0.25 * (ww - res3) + res3);
    };
    ADW();
  };
  BMI();
};
  return (
    <View style={styles.container}>
      <Text>icu calculator</Text>
      <Image
        source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }}
        style={{ width: 200, height: 200 }}
      />
      <TextInput
      
        onChangeText={onChangeww}
        placeholder="width"
        accessibilityLabel="input"
        accessibilityLabelledBy="formLabel"
      />
      <TextInput
        onChangeText={onChangehh}
        placeholder="height"
        accessibilityLabel="input"
        accessibilityLabelledBy="formLabel"
      />
      <TextInput
        onChangeText={onChangegender}
        placeholder="gender"
        accessibilityLabel="input"
        accessibilityLabelledBy="formLabel"
      />
      <TextInput
        onChangeText={onChangeag}
        placeholder="age"
        accessibilityLabel="input"
        accessibilityLabelledBy="formLabel"
      />
      

      {!show ? (<Text>Fluid: {Math.round(res6)}</Text>
      <Text>BMI: {res.toFixed(1)}</Text>
      <Text>IBW: {Math.round(res3)}</Text>
      <Text>ADW: {Math.round(res7)}</Text>
      <Text>
        KCAL: {res1.toFixed()} - {res2.toFixed()}
      </Text>
      <Text>
        Protien: {Math.round(res4)} - {Math.round(res5)}
      </Text>
      <Text>age {ag}</Text>):(<></>)}

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'silver',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

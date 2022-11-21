import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect } from "react";
export default function App() {
  const [ww, onChangeww] = React.useState(0);
  const [hh, onChangehh] = React.useState(0);
  const [ag, onChangeag] = React.useState(0);
  const [gender, onChangegender] = React.useState("");
  const [res, onChangeres] = React.useState(0);
  const [res1, onChangeres1] = React.useState(0);
  const [res2, onChangeres2] = React.useState(0);
  const [res3, onChangeres3] = React.useState(0);
  const [res4, onChangeres4] = React.useState(0);
  const [res5, onChangeres5] = React.useState(0);
  const [res6, onChangeres6] = React.useState(0);
  const [res7, onChangeres7] = React.useState(0);
  const [click1, onChangeclick1] = React.useState(false);
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
          return (
            onChangeres1(hh * hh * 24 * 22) + onChangeres2(hh * hh * 24 * 25)
          );
        } else if (res > 50 && gender === "female") {
          return (
            onChangeres1(hh * hh * 22.5 * 22) +
            onChangeres2(hh * hh * 22.5 * 25)
          );
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
      <Image
        source={{
          uri: "https://cdn.dribbble.com/users/689802/screenshots/2588349/media/b7b44539de81f19743581ecd243775ee.gif",
        }}
        style={{ width: 150, height: 150, marginBottom: 55 }}
      />
      <Text style={[styles.bigBlue]}>ICU Calculator</Text>
      <View style={styles.flex}>
        <TextInput
          onChangeText={onChangeww}
          style={styles.input}
          placeholder="width"
          inlineImageLeft="search_icon"
          accessibilityLabelledBy="formLabel"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangehh}
          placeholder="height"
          accessibilityLabel="input"
          accessibilityLabelledBy="formLabel"
        />
      </View>
      <View style={styles.flex}>
        <TextInput
          style={styles.input}
          onChangeText={onChangegender}
          placeholder="gender"
          accessibilityLabel="select"
          accessibilityLabelledBy="formLabel"
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeag}
          placeholder="age"
          accessibilityLabel="input"
          accessibilityLabelledBy="formLabel"
        />
      </View>

      <View style={styles.separator}>
        <Button onPress={onChangeclick1} title="Calculate" />
      </View>
      {!click1 ? (
        <></>
      ) : (
        <>
          <Text style={[styles.red]}>Fluid: {Math.round(res6)}</Text>
          <Text style={[styles.red]}>BMI: {res.toFixed(1)}</Text>
          <Text style={[styles.red]}>IBW: {Math.round(res3)}</Text>

          <Text style={[styles.red]}>ADW: {Math.round(res7)}</Text>
          <Text style={[styles.red]}>
            KCAL: {res1.toFixed()} - {res2.toFixed()}
          </Text>
          <Text style={[styles.red]}>
            Protien: {Math.round(res4)} - {Math.round(res5)}
          </Text>
          <View style={[styles.footer]}><Text  >Coded by Sultan Alharbi - results tested by Nutrition team</Text></View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffebcd",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: { marginTop: 80 },
  fontWeight: "bold",
  fontSize: 30,
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderWidth: 1,
    borderColor: "black",
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  bigBlue: {
    color: "#737373",
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 50,
  },
  red: {
    color: "red",
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 8,
    margin: 4,
    borderRadius: 6,
    width: 100,
  },
});

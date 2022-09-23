import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from "react-native";
import {useState,useEffect} from 'react'
const [ww, setww] = useState(0);
const [hh, sethh] = useState(0);
const [ag, setag] = useState(0);
const [gender, setgender] = useState("");
const [res, setres] = useState(0);
const [res1, setres1] = useState(0);
const [res2, setres2] = useState(0);
const [res3, setres3] = useState(0);
const [res4, setres4] = useState(0);
const [res5, setres5] = useState(0);
const [res6, setres6] = useState(0);
const [res7, setres7] = useState(0);
export default function App() {
  return (
    <View style={styles.container}>
      <Text>icu calculator</Text>
      <TextInput
        placeholder="width"
        accessibilityLabel="input"
        accessibilityLabelledBy="formLabel"
      />
      <TextInput
        placeholder="height"
        accessibilityLabel="input"
        accessibilityLabelledBy="formLabel"
      />
      <TextInput
        placeholder="gender"
        accessibilityLabel="input"
        accessibilityLabelledBy="formLabel"
      />
      <TextInput
        placeholder="age"
        accessibilityLabel="input"
        accessibilityLabelledBy="formLabel"
      />
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

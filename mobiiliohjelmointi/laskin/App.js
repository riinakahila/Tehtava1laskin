import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, Pressable, FlatList} from 'react-native';
import { useState } from "react";

export default function App() {

  const [luku1, setLuku1] = useState('');
  const [luku2, setLuku2] = useState('');
  const [tulos, setTulos] = useState('');
  const [historia, setHistoria] = useState([]);

  const PlusNappi = () => {
    return (
      <Pressable
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: pressed ? '#1E90FF' : '#00CED1' },
      ]}
      onPress={LaskeYhteen}
    >
      <Text style={styles.buttonText}>+</Text>
    </Pressable>
  );

    };
  const LaskeYhteen = () => {
    setTulos(Number(luku1) + Number(luku2))
    setHistoria([...historia, {key:  `${luku1} + ${luku2} = ${Number(luku1) + Number(luku2)}`}])
  };

  const MiinusNappi = () => {
    return (
      <Pressable
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: pressed ? '#1E90FF' : '#00CED1' },
      ]}
      onPress={LaskeVahennys}
    >
      <Text style={styles.buttonText}>-</Text>
    </Pressable>
  );

    };
  const LaskeVahennys = () => {
    setTulos(Number(luku1) - Number(luku2))
    setHistoria([...historia, {key:  `${luku1} - ${luku2} = ${Number(luku1) - Number(luku2)}`}])
  };
  

  return (
    <View style={styles.container}>
      <Text style={{fontSize:30, fontWeight:'bold'}}>Result: {tulos}</Text>
      <TextInput style={styles.textInput} 
      keyboardType='numeric'
      onChangeText={setLuku1}
      value={luku1} />
      <TextInput style={styles.textInput}
      keyboardType='numeric'
      onChangeText={setLuku2} 
      value={luku2} />
    <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '30%'}}>
      <PlusNappi/>
      <MiinusNappi/>
    </View>
      <Text style={{fontSize:20, marginTop: 20}}>History</Text>
      <FlatList 
      data={historia}
      renderItem={({item}) => <Text>{item.key}</Text>}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
  },
  textInput: {
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 10,
    width: '80%',
  },
  button: {
    padding: 5,
    borderRadius: 5,
    marginTop: 30,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    
  },
 
});

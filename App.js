import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';

Parse.setAsyncStorage(AsyncStorage);

const APPLICATION_ID = '4ETSbC61A032K0G25XdVCZuB8cSZ43fMbrkFNnSR';
const JAVASCRIPT_KEY = 'PbkfkmYSOoYaUWpY0KmUz3bajeNAnCl9LrLITrYP';

Parse.initialize(APPLICATION_ID,JAVASCRIPT_KEY);
Parse.serverURL = 'https://parseapi.back4app.com/';


const listarFilmes = async () => {
  const Filme = Parse.Object.extend('Filme');
  const query = new Parse.Query(Filme);
  try {
    const listaDeFilme = await query.find();
    for (const filme of listaDeFilme) {
      // Access the Parse Object attributes using the .GET method
      const title = filme.get('title')
      const popularity = filme.get('popularity')
      const vote_count = filme.get('vote_count')
      console.log(
        title+" "+popularity+" "+vote_count
      );
    }
  } catch (error) {
    console.error('Error while fetching Filme', error);
  }
};


export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title='Listar filmes'
        onPress={listarFilmes}
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
  }
});

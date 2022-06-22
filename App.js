import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React, {useState, useEffect} from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, AkayaKanadaka_400Regular, BlackAndWhitePicture_400Regular  } from '@expo-google-fonts/dev';



export default function App() {
  
    let [fontsLoaded] = useFonts({
      AkayaKanadaka_400Regular,
      BlackAndWhitePicture_400Regular,
    });
    
    if (!fontsLoaded) {
      return <AppLoading />;
    } else {
  return (
    <View style={style.container}>
      <StatusBar style="auto"/>
      <Text style={style.titulo1}>Encontros no Senac</Text>
      <Text style={style.titulo2}>Você tem um projeto integrador?</Text>
      <Text style={style.titulo2}>Quer envolver noves áreas?</Text>
      <Text style={style.titulo2}>Então...Vamos encontrar os alunos aqui. ;)</Text>
      <FlatList
      data={pessoas}
      renderItem={({item})=>
      <View>
        <Text>{item.nome}</Text>
        <Text>{item.curso}</Text>
        <Text>{item.periodo}</Text>
        <Text>{item.turma}</Text>
        <Text>{item.gosto}</Text>
        <Image style={style.img} source={item.img}/>
        
      </View>

      }
      
      />
    </View>
  );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0FFFF',
  },
  img:{


    width:150,
    height: 200,
    borderRadius:15,

  },
  titulo1:{
    marginTop: 40,
    marginVertical: 10,
    fontSize: 20,
    fontFamily: 'BlackAndWhitePicture_400Regular'
  },
  titulo2:{
    marginVertical: 10,
    fontSize: 16,
    fontFamily: 'AkayaKanadaka_400Regular'
  },
});

const pessoas = [
  {
    uid:555,
    nome:'Daniel Lacerda',
    curso:'Técnico de Informática',
    periodo:'Manhã',
    turma:'TI10m',
    gosto:'Php, Css, Design Gráfico, Games',
    bio:'Gosto de Jogar, gosto de mexer na internet, sou professor de informática, e gosto de tocar instrumentos como teclado, violão, guitarra e bateria',
    img: require('./assets/caua.png'),
    
  },
  
  {
    uid:111,
    nome:'Washington barreto',
    curso: 'Técnico de informática',
    periodo: 'Manhã',
    turma: 'Ti10',
    gosto: 'Hardware, Back-End, Redes, C#',
    bio: 'Gosto da fiona',
    img: require('./assets/shrek.png'),
  
  },
  {
    uid:17,
    nome: 'Jair Messias',
    curso: 'Enfeitador de Bolos',
    periodo: 'Manhã',
    turma: 'EB10',
    gosto: 'Bolo, Chantilly e Fuzil',
    bio: 'Presidente do Brasil, apaixonado por confeitaria. Adoro uma mulher que saiba fazer um bolinho do bom e um mousse cremoso! Geralmente me chamam de diabo, corrupto, maníaco e genocida. Mas eu acho que são apelidos carinhosos do meu povo :)',
    img: require('./assets/bosonaro.png'),
  },
  {
    uid:420,
    nome:'Bruno Galeazzo',
    curso:'Tecnico de informatica',
    periodo:'Manhã',
    turma:'TI10m',
    gosto:'Hardware, Redes',
    bio:'mais novo membro da conferencia mundial de pods no banheiro ',
    img: require('./assets/bruno.jpg'),
  },
  {
    uid:157,
    nome:'Caio elias',
    curso:'Tecnico de informatica',
    periodo:'Manhã',
    turma:'TI10m',
    gosto:'Hardware,Banco de dados,C#',
    bio:'garoto de programa junior',
    img: require('./assets/caio.png'),
  },

];


import * as React from 'react';
import { StyleSheet, TouchableOpacity} from 'react-native';

export default StyleSheet.create({

  container_tab: {
    flex:0.85, 
    display: 'flex',  
    flexwrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container_jurossimples: {
    flex:0.85,
    display: 'flex',  
    flexwrap: 'wrap',
    justifyContent: 'center',
    margin: 20,
  },

  container_juroscompostos: {
    margin: 20,
    flex:0.85,
    display: 'flex',  
    flexwrap: 'wrap',
    justifyContent: 'center',
    margin: 20,
  },

  container_historico: {
    margin: 20,
    flex:0.85,
    display: 'flex',
    flexwrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },

  container_titulo:{
    marginBottom: 20,
    alignItems: 'center',
  },

  titulo_principal:{
    fontFamily: 'Times New Roman',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'rgba(78, 0, 151, 1)',

  },

  texto_botao:{
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Arial',
    fontSize: 'auto',
  },

  botoes_principais:{
    backgroundColor: 'rgba(39, 7, 99, 1)',
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    elevation: 3,
    alignItems: 'center',
  },

  hover_botoes_principais:{
    backgroundColor: 'rgba(81, 39, 160, 1)',
  },

  text_labels:{
    fontFamily: 'Arial',
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 50,
  },

  input_fields:{
    height: 20,
    width: 130,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    marginRight: 10,
  },
});
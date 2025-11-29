import { StyleSheet, Dimensions } from 'react-native';

// Identificadores de Tipos de Telas:
const { width, height } = Dimensions.get('window');
const isSmallScreen = width < 390;
const isTallScreen = height > 720;
const isTabletScreen = width >= 768;

export default StyleSheet.create({

  /* Containers:  */
  container_tabnavigator: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#0D0D0D',
    paddingHorizontal: '1%',
    paddingVertical: '1%',
    justifyContent: 'flex-start',
  },

  container_homescreen: { 
    flex: 1,
    backgroundColor: '#1A1A1A',
    paddingHorizontal: isTabletScreen? '1%' : '4%',
    paddingVertical: isTabletScreen? '2%': '4%',
    justifyContent: 'center',
  },

  container_juros: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    paddingHorizontal: isTabletScreen ? '1%' : '4%',
    paddingVertical: isTabletScreen ? '2%' : '4%',
    justifyContent: 'center',
  },

  container_historico: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    paddingHorizontal: isTabletScreen ? '1%' : '6%',
    paddingVertical: isTabletScreen ? '6%' : '4%',
    justifyContent: 'flex-start',
  },


  /* Títulos Principais: */
  div_titulo_principal: {
    marginBottom: isSmallScreen ? 15 : 25,
    alignItems: 'center',
  },

  titulo_principal: {
    fontFamily: 'Times New Roman',
    fontSize: isTabletScreen ? 34 : isSmallScreen ? 22 : 28,
    fontWeight: 'bold',
    color: '#9B6DFF',
  },

  text_subtitulo:{
    color: '#B9B9B9',
    marginTop: 6,
    fontSize: 14,
    textAlign: 'center',
  },

  div_apresentacao:{
    backgroundColor: '#262626',
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },

  card_apresentacao:{
    color: '#EDEDED',
    fontSize: 16,
    textAlign: 'center',
  },


  /* Display da Calculadora: */
  div_valores: {
    flexDirection: isSmallScreen ? 'row' : 'column',
    gap: isSmallScreen ? 20 : 12,
    width: '100%',
    paddingVertical: '2%',
    marginBottom: 12,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },

  text_labels_valores: {
    fontFamily: 'Arial',
    fontSize: isTabletScreen? 20 : 10,
    fontWeight: 'bold',
    width: isTabletScreen? '40%' : '100%',
    marginBottom: 4,
    color: '#EDEDED',
  },

  input_fields_valores: {
    fontFamily: 'Arial',
    fontSize: isTabletScreen? 20 : 14,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginTop: 6,
    backgroundColor: '#222',
    color: '#fff',
  },

  div_alerta:{
    padding: 10, 
    marginVertical: 10, 
    backgroundColor: '#5c0000', 
    borderRadius: 8 ,
  },

  text_alerta:{
    color: '#ffb3b3',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  div_resultado: {
    // backgroundColor: "blue",
    backgroundColor: '#262626',
    flexDirection: "row",
    padding: isTabletScreen? 20 : 10,
    alignItems: 'center',
  },

  text_div_resultado: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: isTabletScreen ? 20 : 16,
    textAlign: 'center',
    color: '#FFFFFF',
  },

  campos_resultados: {
    backgroundColor: '#555555',
    padding: isTabletScreen? 20 : 10,
    flexGrow: 1,
    flexDirection: 'column',
    borderRadius: 10,
    alignItems: 'center',
    marginEnd: '2%',

  },

  text_campos_resultados: {
    color: '#EDEDED',
  },

 
  /*Estilos do Histórico*/
  div_metadados: {
    backgroundColor: "#1A1A1A",
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
  },

  text_metadados: {
    color: "#EDEDED",
  },
  


  /* ----------------------- BOTÕES ----------------------- */

  div_botoes_principais: {
    backgroundColor: "",
    flexDirection: 'column',
    marginBottom: 8,
    alignItems: 'center',
  },

  div_botao_calcular: {
    // backgroundColor: 'red',
    alignItems: 'center',
    marginBottom: 8,
  },

  texto_botao: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Arial',
    fontSize: isTabletScreen ? 20 : 16,
  },

  botoes_principais: {
    backgroundColor: '#7D4CFF',
    width: isTabletScreen ? '60%' : '90%',
    padding: isTabletScreen ? 18 : 12,
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
    // marginVertical: 10,
  },

  botoes_segundarios: {
    backgroundColor: '#808080ff',
    width: '90%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
    // marginVertical: 10,
  },

  hover_botoes_principais: {
    backgroundColor: '#6A3FE0',
  },

  hover_botoes_seundarios: {
    backgroundColor: '#383838',
  },

});

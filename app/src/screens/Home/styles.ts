import { StyleSheet } from "react-native";

export const stylesHome = StyleSheet.create({
    titulo: {
      color: "#fff",
      fontSize: 24,
      fontWeight: "bold",
      marginTop: 48,
    },
    container: {
      flex: 1,
      backgroundColor: "#131016",
      padding: 24,
    },
    texto: {
      color: "#6b6b6b",
      fontSize: 16,
    },

    input:{
      backgroundColor: '#1f1e25',
      height: 56,
      borderRadius: 5,
      color: '#fff',
      padding: 16,
      fontSize: 16,
      flex: 1, //preenche o que ta disponivel
      marginRight: 12
    },

    buttonText:{
      fontSize: 22,
      color: "#fff"
    },

    button:{
      width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor: '#31cf67',
      alignItems: 'center',
      justifyContent: 'center'
    },
    form:{
      width: '100%',
      flexDirection: 'row',
      marginTop:36,
      marginBottom:42
    },
    textEmpty:{
      fontSize: 14,
      color: "#fff",
      textAlign:'center'
    },
  });
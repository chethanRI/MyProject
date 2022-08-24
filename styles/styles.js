
import react from "react";
import{StyleSheet} from 'react-native'

  export const mystyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
      color:'black'
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    container: {
      paddingTop: 50,
      justifyContent:'center',
    },
    tinyLogo: {
      width: 50,
      height: 50,
      justifyContent:'center',
      marginHorizontal:150,
    },
      bigLogo:{
      width:100,
      height:100
    },
    logo: {
      width: 66,
      height: 58,
      justifyContent:'center',

    },
     input: {
    height: 50,
    margin: 10,
    borderWidth: 0.7,
    padding: 10,
  },
    container: {
      paddingTop: 150,
      marginHorizontal:100,
      justifyContent:'center',

    },
    button:{
    height:50,
    width:100,
    backgroundColor:'blue',
    justifyContent:'center',
    color:'blue',
borderBottomColor:'red'
    }
  

  });

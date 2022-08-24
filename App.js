import React from 'react'
 import { StyleSheet, Button, View, SafeAreaView, Text, Alert, FlatList, StatusBar,TextInput, Image } from 'react-native'
import Home from './screens/Home';
import { mystyles } from './styles/styles';

// const App = () =>{
// return (
//        <View style={{backgroundColor:'cyan',width:200,height:200,display:'flex', alignItems:'center',justifyContent:'center',marginLeft:100,marginTop:300 ,borderRadius:200/2}}>

        
//         <Text style={{textShadowColor:'black'}}>Chethan</Text>
//         <Text >Hello, world!</Text>

//        </View>

//     )


//   }
  const Separator = () => (
    <View style={styles.separator} />
  );

  const App = () => (
    <SafeAreaView style={mystyles.container}>


      <View>
        <Text style={mystyles.title}>
          The title and onPress handler are required. It is recommended to set accessibilityLabel to help make your app usable by everyone.
        </Text>
        <Button
          title="Press me"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
      <Separator />
      <Separator/>
      <Separator/>

      <View>
        <Text style={styles.title}>
          Adjust the color in a way that looks standard on each platform. On  iOS, the color prop controls the color of the text. On Android, the color adjusts the background color of the button.
        </Text>
        <Button
          title="Press me"
          color="#f194ff"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          All interaction for the component are disabled.
        </Text>
        <Button
          title="Press me"
          color="green"
          // disabled
          onPress={() => Alert.alert('Cannot press this one')}
        />
      </View>
      <Separator />
      <View>
        <Text style={mystyles.title}>
          This layout strategy lets the title define the width of the button.
        </Text>
        <View style={styles.fixToText}>
          <Button 
            title="Left button"
            color="red"
            onPress={() => Alert.alert('Left button pressed')}
          />
          <Button
            title="Right button"
            onPress={() => Alert.alert('Right button pressed')}
          />
          <Button
           title="Login"
           onPress={() => Alert.alert('logged in sucessfully...')}
          />
            <Button
           title="Login"
           onPress={() => Alert.alert('logged in sucessfully...')}
          />
        </View>
      </View>


      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}

      /> 

 <View style={[styles.center, {top: 100}]}>
        {/* <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
        <Greeting name = 'Santhosh' /> */}
      
      {/* <Home/> */}

      
    

      </View>
  
    </SafeAreaView>
  
  );
 
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  const AppMy = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />


<TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />


    </SafeAreaView>
  );
  }
const styles = StyleSheet.create({
  // input: {
  //   height: 50,
  //   margin: 10,
  //   borderWidth: 0.7,
  //   padding: 10,
  // },
  //   container: {
  //     paddingTop: 150,
  //     marginHorizontal:100,
  //   },
 
});



const myDocs = () =>{
let name = ""
let id = 0
let age = 0
let phone = 0


  }

  // const styles = StyleSheet.create({
  //   center: {
  //     alignItems: 'center',
  //     backgroundColor: 'blue',
  //   }
   
  // })

  // const styles = StyleSheet.create({
  //   container: {
  //     paddingTop: 150,
  //     marginHorizontal:100,
  //   },
  //   tinyLogo: {
  //     width: 50,
  //     height: 50,
  //   },
  //   logo: {
  //     width: 66,
  //     height: 58,
  //   },
  //   bigLogo:{
  //     width:200,
  //     height:200
  //   },
  // });
  
  const DisplayAnImage = () => {

    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);
    
    
    return (
      <SafeAreaView>

      <View style={styles.container}>
        <Image
          style={mystyles.bigLogo}
        />
        <Image
          style={mystyles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        {/* <Image
          style={mystyles.logo}
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
        /> */}
      </View>
      <TextInput
       style={mystyles.input}
       value={number}
       placeholder="EMAIL"
       autoCapitalize='none'
       
       />
    <TextInput
         style={mystyles.input}
         onChangeText={onChangeNumber}
         value={number}
         placeholder="Phone number"
         keyboardType="numeric"
         color='red'
       />

       <TextInput
         style={mystyles.input}
         onChangeText={onChangeText}
         placeholder="Password"
         value={text}
       />
          <Separator/>

      <View>
      <Button 
      style={mystyles.button}

        title="Login"
        // color='red'
        onPress={() => Alert.alert('Logged in succesfully...')}
        onHandlePress={() => console.log('Custom onHandlePress called')}
        
        

      />
      </View>
       
     </SafeAreaView>

    );
  }
  
  export default DisplayAnImage;
  

  // export default App;

// export default App
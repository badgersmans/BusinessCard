import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button, Linking } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

function DisplayInsets() {
  const insets = useSafeAreaInsets()
  return (
    <Text>Insets: Top {insets.top} - Bottom {insets.bottom} </Text>
  )
}

export default function App() {

  const links = {
    github: 'SavinVadim1312',
    email: 'vadim@notjust.dev',
    x: 'VadimNotJustDev',
  };

  const onContactMe = () => {
    Linking.openURL('mailto:shawnlaw666@proton.me')
  }

  // return (
  //   <SafeAreaProvider>

  //   <SafeAreaView edges={['top']} style={{ backgroundColor: 'red' }}>
  //       <View style={{ backgroundColor: 'palegreen', height: '100%', alignItems: 'center' }}>
  //         <Text>Title</Text>
  //         <DisplayInsets />
  //         <Text style={{ marginTop: 'auto' }}>Footer</Text>
  //       </View>
  //   </SafeAreaView >
  //   </SafeAreaProvider>
  // )


  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']}>

        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>

          <Image 
            source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg' }}
            style={{
              width: '100%',
              aspectRatio: 16/9,
            }}
          />

          <Image 
            source={require('./assets/vadim.png')} 
            style={{ 
              width: 150, 
              height: 150, 
              borderRadius: 150, 
              borderWidth: 5, 
              borderColor: 'white',
              marginTop: -75
            }} 
          />
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Shawn Law</Text>
          <Text>fgfgf</Text>

          <View style={{flexDirection: 'row', marginVertical: 10, gap: 10}}>
            {links.github && <FontAwesome6 name="github" size={24} color="black" />}
            {links.x && <FontAwesome6 name="x-twitter" size={24} color="black" />}
            {links.email && <FontAwesome6 name="at" size={24} color="black" />}
          </View>

          <Button title='Contact Me' onPress={onContactMe}/>

          <Text style={{ padding: 10, fontSize: 16, lineHeight: 20 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cumque, temporibus porro odio at ipsam praesentium voluptatum rem officia error! Fugit, aperiam cum necessitatibus soluta sint earum sed, magni, eaque voluptatibus eos modi esse repellendus! Tempore, eligendi consectetur enim pariatur illum vero, vel dolores maxime debitis libero reiciendis at laudantium. Officia dolorem animi explicabo quos amet odio nulla? Tempore, ratione quae voluptatem possimus placeat facere sequi sed reprehenderit. Ullam laboriosam quae quibusdam esse unde incidunt, tempore deserunt voluptatibus, aliquam minima quisquam sed fugit fuga nobis debitis libero similique rerum minus numquam aspernatur itaque doloribus soluta dolore? Enim cupiditate minima aut totam molestiae magni optio odit. Culpa doloribus quibusdam pariatur iusto laboriosam sapiente! Error minima tempore voluptas debitis voluptates placeat voluptate perferendis odio esse repudiandae eum quasi soluta laboriosam, ad, magnam culpa, consequuntur vitae excepturi quibusdam. Eum nesciunt veniam sequi reiciendis, laboriosam exercitationem quos magni voluptatibus. Enim debitis, nobis repellat eum optio consequuntur ipsum adipisci eaque beatae incidunt doloribus nisi iste obcaecati blanditiis labore dolor aspernatur excepturi unde aliquid accusantium perferendis, aliquam odio cumque ratione. Ullam praesentium velit illum eligendi autem magnam eos iusto inventore repellat commodi, molestias placeat a quos recusandae animi error iste rem perspiciatis laboriosam fugit delectus neque?
          </Text> 
          <StatusBar style="auto" />
        </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>

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

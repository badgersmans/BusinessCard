import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button, Linking } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import ProjectCard from './ProjectCard';

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
                aspectRatio: 16 / 9,
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

            <View style={{ flexDirection: 'row', marginVertical: 10, gap: 10 }}>
              {links.github && <FontAwesome6 name="github" size={24} color="black" />}
              {links.x && <FontAwesome6 name="x-twitter" size={24} color="black" />}
              {links.email && <FontAwesome6 name="at" size={24} color="black" />}
            </View>

            <Button title='Contact Me' onPress={onContactMe} />

            <Text style={{ padding: 10, fontSize: 16, lineHeight: 20 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cumque, temporibus porro odio at ipsam praesentium voluptatum rem officia error! Fugit, aperiam cum necessitatibus soluta sint earum sed, magni
            </Text>

            <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>Projects</Text>
            
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{gap: 15, padding: 10}}>
              <ProjectCard name="Apple Cards" image={require('./assets/projects/project1.jpeg')}/>
              <ProjectCard name="Trello" image={require('./assets/projects/project2.jpeg')}/>
              <ProjectCard name="Flappy Bird" image={require('./assets/projects/project3.jpeg')}/>
              <ProjectCard name="Todo app" image={require('./assets/projects/project4.jpeg')}/>
            </ScrollView>

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

import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  StyleSheet,
  TouchableNativeFeedback,
  Image,
  ImageBackground,
  TextInput,
  Button,
  FlatList,
  SectionList,
} from 'react-native';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title, style, onPress}): Node => {
  return (
    <TouchableNativeFeedback
      onPress={() => {
        if (onPress) onPress();
        else alert('click');
      }}>
      <View style={[styles.titleContainer, style]}>
        <Text style={styles.title}>{title}</Text>

        {/* <Text style={styles.textContent}></Text> */}
        {children}
      </View>
    </TouchableNativeFeedback>
  );
};

const CoreComponentView: () => Node = () => {
  return (
    <SafeAreaView>
      <StatusBar></StatusBar>
      <ScrollView>
        <View>
          {/* <Header /> */}
          <Section
            title="Image"
            style={{
              marginTop: 8,
            }}>
            <UsingImage></UsingImage>
          </Section>

          <Section
            title="TextInput and Button"
            style={{
              marginTop: 8,
            }}>
            <TextInputAndButton></TextInputAndButton>
          </Section>

          <Section
            title="Listview: flat list"
            style={{
              marginTop: 8,
            }}>
            <MyFlatList></MyFlatList>
          </Section>

          <Section
            title="Listview: section list"
            style={{
              marginTop: 8,
            }}>
            <MySectionList></MySectionList>
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const MyFlatList = () => {
  return (
    <FlatList
      data={[
        {secName: 'C/C++'},
        {secName: 'Java'},
        {secName: 'C#'},
        {secName: 'Kotlin'},
        {secName: 'PHP'},
      ]}
      renderItem={({item}) => (
        <Text
          style={{
            color: 'white',
          }}>
          {item.secName}
        </Text>
      )}
    />
  );
};

const MySectionList = () => {
  return (
    <SectionList
      sections={[
        {secName: 'C/C++', data: ['Item1', 'Item2', 'Item3']},
        {secName: 'Java', data: ['Item1', 'Item2', 'Item3']},
        {secName: 'C#', data: ['Item1', 'Item2', 'Item3']},
        {secName: 'Kotlin', data: ['Item1', 'Item2', 'Item3']},
        {secName: 'PHP', data: ['Item1', 'Item2', 'Item3']},
      ]}
      renderItem={({item}) => (
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            width: '100%',
          }}>
          {item}
        </Text>
      )}
      renderSectionHeader={({section}) => (
        <Text
          style={{
            color: 'white',
            fontSize: 18,
          }}>
          {section.secName}
        </Text>
      )}
      keyExtractor={(item, index) => index}
    />
  );
};

const TextInputAndButton = () => {
  const [text, onChangeText] = useState(null);
  return (
    <View>
      <TextInput
        onChangeText={onChangeText}
        value={text}
        style={{backgroundColor: 'white'}}></TextInput>

      <Button onPress={() => alert(text)} title="Show text"></Button>
    </View>
  );
};
const UsingImage = () => {
  return (
    <Image
      style={{
        backgroundColor: 'white',
        width: 240,
        height: 240,
        resizeMode: 'cover',
      }}
      source={{
        uri: 'https://image-us.24h.com.vn/upload/2-2021/images/2021-04-22/anh-1-1619081214-688-width650height813.jpg',
      }}
    />
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    padding: 8,
    backgroundColor: 'grey',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
  textContent: {color: 'white'},
});
export default CoreComponentView;

import React from 'react';
import {View, Image, StyleSheet, Text, Dimensions} from 'react-native';

export default function DetailScreen({route, navigation}) {
  const {width} = Dimensions.get('window');
  return (
    <>
      {/* {console.log(route.params.data.content)} */}
      <View>
        <Image
          style={{width: width, height: width}}
          source={{uri: route.params.data.urlToImage}}
        />
        <Text style={styles.title}>{route.params.data.title}</Text>
        <Text style={styles.author}>{route.params.data.author}</Text>
        <Text style={styles.content}>{route.params.data.content}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 5,
  },
  author: {
    fontSize: 14,
    margin: 5,
  },
  content: {
    fontSize: 16,
    marginHorizontal: 5,
    marginVertical: 15,
  },
});

import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function HomeScreen({navigation}) {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const res = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
          country: 'us',
          category: 'business',
          apiKey: '611b8db8d7854060928399ed42384ea4',
        },
      });

      setData(res.data.articles);
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* {console.log(data)} */}
      <SafeAreaView>
        <ScrollView>
          {data &&
            data.map((item, i) => {
              return (
                <View>
                  <TouchableOpacity
                    style={styles.container}
                    onPress={() =>
                      navigation.navigate('Details', {data: item})
                    }>
                    <View style={styles.view}>
                      <Image
                        style={styles.image}
                        source={{uri: item.urlToImage}}
                      />
                      <View style={styles.listContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text>{item.author}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 5,
    backgroundColor: 'white',
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
  },
  listContainer: {
    justifyContent: 'space-between',
    margin: 5,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    flex: 1,
  },
});

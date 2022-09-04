import React from 'react';
import {View, Text, StyleSheet, Image, Linking} from 'react-native';
import logoPerson from '../images/avatar.jpg';

export default function ProfileScreen({route, navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} source={logoPerson} />
        </View>
        <Text style={styles.name}>M. Bambang Sumantri</Text>
      </View>
      <View>
        <View style={styles.form}>
          <View style={styles.email}>
            <Text style={styles.inputTitle}>Email Address</Text>
            <Text style={styles.input}>mbambang10@gmail.com</Text>
          </View>
          <View style={styles.email}>
            <Text style={styles.inputTitle}>Nomor Telepon</Text>
            <Text style={styles.input}>082330882723</Text>
          </View>
          <View style={styles.email}>
            <Text style={styles.inputTitle}>Alamat</Text>
            <Text style={styles.input}>Malang</Text>
          </View>
          <View style={styles.email}>
            <Text style={styles.inputTitle}>Github</Text>
            <Text
              onPress={() =>
                Linking.openURL('https://github.com/MBambangSumantri')
              }
              style={styles.input}>
              https://github.com/MBambangSumantri
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 24,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  avatarContainer: {
    shadowColor: '#000000',
    shadowRadius: 30,
    shadowOpacity: 0.4,
  },
  avatar: {
    width: 136,
    height: 136,
    borderRadius: 68,
  },
  name: {
    marginTop: 24,
    fontSize: 16,
    fontWeight: '600',
  },
  form: {
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 50,
  },
  email: {
    marginTop: 32,
  },
  inputTitle: {
    color: '#8A8F9E',
    fontSize: 10,
    textTransform: 'uppercase',
  },
  input: {
    marginTop: 10,
    borderBottomColor: '#111111',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 30,
    fontSize: 15,
    color: '#111111',
  },
});

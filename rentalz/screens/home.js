import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Image, Text } from 'react-native-elements';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text h1>RentalZ</Text>
      <Image
        source={require('../assets/house.jpg')}
        style={styles.imageContainer}
      />
      <Text h4>Right Around the Corner,</Text>
      <Text h4>Near Everywhere You Want to Be.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 420,
    height: 350,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  buttonStyle: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 50,
  },
})
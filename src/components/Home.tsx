import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timeout = setTimeout(() => {
      // navigation.navigate('LoginOtp');
    }, 1500);
  }, []);

  return (
    <View>
      <Image source={require('../../assets/abc.png')} style={styles.img} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
  },
});

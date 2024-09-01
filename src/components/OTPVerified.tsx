import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const OTPVerified = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/done.jpg')}
        style={{height: 140, width: 140}}
      />
      <Text style={{color: 'white', fontSize: 25}}>
        OTP verified successfully
      </Text>
    </View>
  );
};

export default OTPVerified;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5F95FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import OTPTextView from 'react-native-otp-textinput';
// import { number } from 'yup'
// import {OtpInput} from 'react-native-otp-entry'

const login =
  'https://static.vecteezy.com/system/resources/thumbnails/001/991/652/small/sign-in-page-flat-design-concept-illustration-icon-account-login-user-login-abstract-metaphor-can-use-for-landing-page-mobile-app-ui-posters-banners-free-vector.jpg';

const InputOtp = ({navigation}) => {
  clearText = () => {
    this.otpInput.clear();
  };

  setText = () => {
    this.otpInput.setValue('1234');
  };
  return (
    <View style={styles.container}>
      <View style={styles.otpbox}>
        <StatusBar hidden />
        <Image
          source={require('../../assets/logo.jpg')}
          style={{height: 120, width: 140, marginTop: 50}}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            marginTop: 20,
            marginBottom: 20,
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
          }}>
          OTP Verification
        </Text>
        <Text
          style={{
            fontSize: 15,
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
          }}>
          Enter the verification code we just sent
        </Text>
        <Text
          style={{
            fontSize: 15,
            marginTop: 0,
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
          }}>
           on mobile number
        </Text>
        <View style={{marginVertical: 22, width: 300}}>
        <Text
          style={{
            fontSize: 15,
            marginTop: 0,
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
          }}>
          Enter OTP
        </Text>
          <OTPTextView ref={e => (this.otpInput = e)} />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 30,
            }}>
            <View style={styles.ViewButton}>
              <TouchableOpacity
                onPress={() => navigation.push('SighupInfo')}>
                <View style={styles.buttonbox}>
                  <Text style={{alignItems: 'center', color: 'black', fontSize:20}}>
                    Verify
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* <View style={{flexDirection: 'row', marginTop: 80}}>
          <Text style={{fontSize: 16, color: 'black'}}>
            Don't recived the code
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: 'white',
                fontWeight: '500',
                marginLeft: 10,
                fontSize: 16,
              }}>
              {' '}
              Resend Code
            </Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#376dc4',
  },
  otpbox: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#5F95FF',
    height: 700,
    borderBottomRightRadius: 70,
    borderBottomLeftRadius: 70,
  },
  ViewButton: {
    // flex: 1,
    justifyContent: 'flex-end',
    marginTop: 10,
    alignItems: 'center',
  },
  buttonbox: {
    width: 280,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#FFD600',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  btnChangeNumber: {
    width: 150,
    height: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'gray',
    marginTop: 10,
  },
  nochange: {
    color: '#2592E7',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    width: '100%',
    height: 50,
    backgroundColor: '#FFD600',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default InputOtp;

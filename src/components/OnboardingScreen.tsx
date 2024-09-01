import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text, Paragraph, Title} from 'react-native-paper';
import {FlatList} from 'react-native-gesture-handler';

const OnboardingScreen = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      key: '1',
      title: 'Welcome to Our App',
      description: 'Discover new features and experiences.',
    },
    {
      key: '2',
      title: 'Stay Connected',
      description: 'Keep in touch with friends and family.',
    },
    {
      key: '3',
      title: 'Get Started',
      description: 'Sign up now and enjoy the app.',
    },
  ];

  const renderSlide = ({item}) => (
    <View style={styles.slide}>
      <Title style={styles.title}>{item.title}</Title>
      <Paragraph style={styles.description}>{item.description}</Paragraph>
    </View>
  );

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.navigate('Login'); // Assuming you have a Login screen
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={renderSlide}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.key}
        onScroll={event => {
          const index = Math.round(
            event.nativeEvent.contentOffset.x /
              event.nativeEvent.layoutMeasurement.width,
          );
          setCurrentIndex(index);
        }}
      />

      <View style={styles.footer}>
        <Button mode="contained" onPress={handleNext} style={styles.button}>
          {currentIndex === slides.length - 1 ? 'Get Started' : 'Next'}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  slide: {
    width: '100%',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    width: '100%',
    paddingVertical: 10,
  },
});

export default OnboardingScreen;

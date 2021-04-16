import React from 'react';
import { styles } from './styles';
import { View, Text, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import LottieView from 'lottie-react-native';

const SuccessScreen = (props) => {
  const { navigation } = props;
  const { quiz } = props.route.params
  let render = quiz == 1 ? 'Quiz1' : quiz == 2 ? 'Quiz2' : 'Quiz3'

  return (
    <ImageBackground
      style={styles.container}
      source={require('../../assets/images/won.jpg')}>
      <View style={styles.mainView}>
        <SafeAreaView backgroundColor={'#92B6D4'} opacity={0.95} />
        <View style={styles.successHeader}>
          <Text style={styles.headerText}>YOU WON!</Text>
        </View>
        <View style={styles.animationBox}>
          <LottieView
            source={require('../../assets/animation/success.json')}
            autoPlay
            loop
            style={styles.animation1}
          />
        </View>
        <View style={styles.buttonBox}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(render, {quiz: quiz})}>
            <Text style={styles.txt}>Play Again</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.txt}>Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SuccessScreen;

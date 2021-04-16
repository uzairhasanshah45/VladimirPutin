import React from 'react';
import LottieView from 'lottie-react-native';
import { View, Text, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons'

const StartScreen = (props) => {
  const { navigation } = props;
  return (
    <ImageBackground
      style={styles.container}
      source={require('../../assets/images/ps.jpg')}>
      <View style={styles.mainView}>
        <SafeAreaView backgroundColor={'#023e8a'} opacity={0.95} />

        <View style={styles.header}>
          <Text style={styles.headerText}>ALL YOU NEED TO KNOW ABOUT VLADIMIR PUTIN</Text>
        </View>

        <View style={styles.buttonBox}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}>
            <Icon name={'arrow-forward'} color={'#d6d6d6'} size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default StartScreen;

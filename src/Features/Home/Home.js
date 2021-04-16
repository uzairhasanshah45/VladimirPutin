import React, { useState } from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, Modal, Image } from 'react-native'
import { styles } from "./style";
import LottieView from 'lottie-react-native';
import BackIcon from 'react-native-vector-icons/MaterialIcons';
import { ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'


export default function Home(props) {

  const [modalView, setModalView] = useState(false);
  const { navigation } = props


  const renderButtons = (name, val) => {

    return (
      <View style={styles.buttonMain}>
        <TouchableOpacity style={styles.buttonView} onPress={() => (val == 2 ? setModalView(true) : props.navigation.navigate(name))}>
          <Text style={styles.buttonText}>{name}</Text>
        </TouchableOpacity>
      </View>
    )
  }


  const levels = (level) => {
    return (
      <TouchableOpacity style={styles.levels} onPress={() => (level == 1 ? (setModalView(false), navigation.navigate('Quiz1')) : level == 2 ? (setModalView(false), navigation.navigate('Quiz2')) : (setModalView(false), navigation.navigate('Quiz3')))} >
        {level == 1 ? (
          <LottieView
            source={require('../../assets/animation/levels.json')}
            autoPlay
            loop
            style={styles.animation}
          />
        ) : (level == 2 ? (

          <View style={{ flexDirection: 'row' }}>
            <LottieView
              source={require('../../assets/animation/levels.json')}
              autoPlay
              loop
              style={styles.animation}
            />
            <LottieView
              source={require('../../assets/animation/levels.json')}
              autoPlay
              loop
              style={styles.animation}
            />
          </View>
        ) : (
          <View style={{ flexDirection: 'row' }}>
            <LottieView
              source={require('../../assets/animation/levels.json')}
              autoPlay
              loop
              style={styles.animation}
            />
            <LottieView
              source={require('../../assets/animation/levels.json')}
              autoPlay
              loop
              style={styles.animation}
            />
            <LottieView
              source={require('../../assets/animation/levels.json')}
              autoPlay
              loop
              style={styles.animation}
            />
          </View>
        ))}
      </TouchableOpacity>
    )
  }


  // const HomeAnimation = () => {

  //   return (
  //     <View style={styles.animationBox}>
  //       <LottieView
  //         source={require('../../assets/animation/spacex.json')}
  //         autoPlay
  //         loop
  //         style={styles.animation}
  //       />
  //     </View>
  //   )
  // }


  return (
    <ImageBackground
      style={styles.container}
      source={require('../../assets/images/vladimirPutin.jpeg')}>
      <View style={styles.mainView}>
        <SafeAreaView backgroundColor={'#023e8a'} opacity={0.95} />
        <View style={styles.homeHeader}>
          <TouchableOpacity style={{ position: 'absolute', left: 15 }} onPress={() => props.navigation.goBack()}>
            <BackIcon name="arrow-back" size={20} color='white' />
          </TouchableOpacity>
          <Text style={styles.headrtxt}>Home</Text>
        </View>

        {/* <View> */}

        <View style={styles.buttonContainer}>
          {renderButtons('Vladimir Putin', 1)}
          {renderButtons('TAKE QUIZ', 2)}
        </View>

        {/* </View> */}
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalView}
        onRequestClose={() => setModalView(false)}>
        <View style={[styles.container1, styles.modalBackgroundStyle]}>
          <View style={styles.modalView}>
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#3a5a7a6', width: '100%', paddingBottom: 10, position: 'absolute', top: 20 }}>
              <Text style={{ textAlign: 'center', fontSize: 16 }}>CHOOSE LEVELS</Text>
            </View>
            {levels(1)}
            {levels(2)}
            {levels(3)}
            <TouchableOpacity
              style={styles.openButton}
              onPress={() => setModalView(false)}>
              <Text style={styles.textStyle}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </ImageBackground>
  )
}

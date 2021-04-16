import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Image, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import BackIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import { Putin } from '../../shared/Putin'


const VladimirPutin = (props) => {

    const renderInfo = (head, desc) => {
        return (
            <>
                <Text style={styles.othersProtect}>{head}</Text>
                <View style={styles.desc}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Text style={styles.mainPara}>{desc} </Text>
                    </View>
                </View>
            </>
        )
    }


    return (
        <ImageBackground
            style={styles.container}
            source={require('../../assets/images/putin.jpg')}>
            <View style={styles.mainView}>
                <SafeAreaView backgroundColor={'#023e8a'} opacity={0.95} />
                <View style={styles.otherHeader}>
                    <TouchableOpacity style={{ position: 'absolute', left: 15 }} onPress={() => props.navigation.goBack()}>
                        <BackIcon name="arrow-back" size={20} color='white' />
                    </TouchableOpacity>
                    <Text style={styles.headrtxt}>VLADIMIR PUTIN</Text>
                </View>
                <ScrollView style={{ marginTop: 20 }}>

                    {renderInfo(Putin[0].head, Putin[0].desc)}
                    {renderInfo(Putin[1].head, Putin[1].desc)}
                    {renderInfo(Putin[2].head, Putin[2].desc)}
                    {renderInfo(Putin[3].head, Putin[3].desc)}

                </ScrollView>
            </View>
        </ImageBackground>
    )
}
export default VladimirPutin;

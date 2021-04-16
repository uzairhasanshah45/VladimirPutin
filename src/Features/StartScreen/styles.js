import { ScaledSheet } from 'react-native-size-matters';
import { Dimensions } from 'react-native';


const windowHeight = Dimensions.get('window').height;


export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
  },
  mainView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.30)',
    justifyContent: 'center',
  },
  header: {
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.50)',
    width: '65%',
    height: '300@ms',
    borderRadius: '10@ms',
    flex: 1, 
  },
  headerText: {
    fontSize: '65@ms',
    color: '#a5a7a6',
    padding: '10@ms',
    lineHeight: '55@ms',
    // fontWeight: 'bold'
  },
  buttonBox: { 
    position: 'absolute',
    bottom: 5,
    right: 10 
  },
  // button: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderRadius: '10@ms',
  //   backgroundColor: 'transparent',
  // },
  // txt: {
  //   fontSize: '16@ms',
  //   color: 'white'
  // },
  // animationBox: {
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   top: 100
  // },
  // animation: {
  //   height: '50@ms',
  //   width: '150@ms',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
});

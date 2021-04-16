import { ScaledSheet } from 'react-native-size-matters';


export const styles = ScaledSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.50)',
    width: '100%'
  },
  container: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    width: "90%",
    backgroundColor: 'rgba(0,0,0,0.50)',
    height: '150@ms',
    borderTopLeftRadius: '20@ms',
    borderTopRightRadius: '20@ms'
  },
  homeHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.50)',
    height: '50@ms',
  },
  headrtxt: {
    color: 'white',
  },
  homeMainView: {
    alignItems: "center",
    justifyContent: "center"
  },
  mainHeading: {
    color: 'white',
    fontSize: '50@ms',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20@ms'
  },
  buttonMain: {
    height: '40@ms',
    width: '60%',
    marginTop: '10@ms',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10@ms',
    backgroundColor: 'transparent',
    borderWidth: '1@ms',
    borderColor: '#636363',
  },
  buttonView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: '14@ms',
    color: '#999999',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  animationBox: {
    alignItems: 'center',
    top: '15@ms'
  },
  // animationBox: {
  //   alignItems: 'center',
  //   top: '15@ms'
  // },
  // animation: {
  //   height: '150@ms',
  //   width: '300@ms',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  container1: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "center",
    width: null,
    height: null,
  },
  modalBackgroundStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: '#707070',
    width: '300@ms',
    height: '400@ms',
    borderRadius: 20,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center",
    justifyContent: 'center'
  },
  openButton: {
    backgroundColor: '#4a4a4a',
    borderRadius: 10,
    height: 30,
    width: 100,
    elevation: 5,
    position: 'absolute',
    bottom: '20@ms'
  },
  textStyle: {
    color: '#c7c7c7',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5
  },
  levels: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.35)',
    marginVertical: '5@ms',
    width: '100%',
    borderRadius: '10@ms',
    height: '60@ms',
  },
  animation: {
    height: '40@vs',
    justifyContent: 'center',
  },
});

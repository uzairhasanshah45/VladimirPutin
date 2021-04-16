import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.50)',
  },
  container: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "center"
  },
  otherHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.50)',
    height: '50@ms',
  },
  headrtxt: {
    color: 'white',
  },
  subHead: {
    fontSize: '20@ms',
    color: '#292929',
    marginHorizontal: '5@ms',
    fontWeight: 'bold',
    paddingBottom: 15,
    marginTop: 35
  },
  subPara: {
    fontSize: '20@ms',
    color: '#292929',
    paddingLeft: '30@ms',
  },
  mainPara: {
    fontSize: '20@ms',
    color: '#292929',
    marginHorizontal: '10@ms',
  },
  desc: {
    marginHorizontal: '9@ms',
    width: '95%',
    backgroundColor: 'rgba(255,255,255,0.60)',
    borderWidth: '1@ms',
    borderColor: 'rgba(255,255,255,0.60)',
    padding: '15@ms',
    borderRadius: '20@ms',
    marginBottom: '15@ms'
  },
  othersProtect: {
    fontSize: '27@ms',
    fontWeight: 'bold',
    color: '#c7c7c7',
    marginHorizontal: '10@ms',
    marginBottom: '20@ms',
    padding: '10@ms',
    marginTop: '20@ms'
  },
});

export default styles;

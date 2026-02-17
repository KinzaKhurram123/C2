import { AddIcon, View } from 'native-base';
import { moderateScale, ScaledSheet } from 'react-native-size-matters';
import { windowHeight, windowWidth } from '../Utillity/utils';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import Color from '../Assets/Utilities/Color';
import { ImageBackground } from 'react-native';

const SplashScreen = () => {
  return (
    <ImageBackground source={require('../Assets/Images/splash_background.png')} imageStyle={{
      width: '100%',
      height: '100%'
    }} style={styles.container}
      resizeMode='cover'
    >
      <View style={styles.logo_Container}>
        <CustomImage
          source={require('../Assets/Images/car.png')}
          style={styles.logo}
        />
      </View>
      <CustomText isBold style={styles.heading}>
        Welcome to C2, your trusted companion for seamless transportation.
      </CustomText>
      <CustomText style={styles.text}>
        Book rides with ease and track your journey in real-time.
      </CustomText>
    </ImageBackground>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo_Container: {
    height: windowHeight * 0.28,
    width: windowWidth * 0.9,
  },
  logo: {
    height: '100%',
    width: '100%',
  },
  bottomImage: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.3,
  },
  text: {
    width: windowWidth * 0.85,
    textAlign: 'center',
    fontSize: moderateScale(14, .6),
    marginTop: moderateScale(10, 0.6),
    color: Color.lightGrey
  },
  heading: {
    width: windowWidth * 0.94,
    textAlign: 'center',
    fontSize: moderateScale(22, .6),
    color: Color.white,
    marginTop: moderateScale(26, 0.6)
  },
  LogoText: {
    fontSize: moderateScale(35, 0.3),
    fontWeight: 'bold',
  },
});

export default SplashScreen;

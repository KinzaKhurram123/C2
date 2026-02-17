import React, { useState } from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  Platform,
  ToastAndroid,
  TouchableOpacity,
  View
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch } from 'react-redux';
import Color from '../Assets/Utilities/Color';
import CustomButton from '../Components/CustomButton';
import CustomStatusBar from '../Components/CustomStatusBar';
import CustomText from '../Components/CustomText';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import { apiHeader, windowHeight, windowWidth } from '../Utillity/utils';

import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { Icon } from 'native-base';
import { Post } from '../Axios/AxiosInterceptorFunction';
import { forgotpassword } from '../Constant/schema';
import Header from '../Components/Header';

const ResetPassword = props => {
  const dispatch = useDispatch();
  const email = props?.route?.params?.email;

  const navigationN = useNavigation();
  const [password, setPassword] = useState('');
  const [ConfirmPass, setConfirmPass] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const resetPassword = async values => {
    const url = 'password/reset';
    const data = {
      email: email,
      password: values.password,
      confirm_password: values.confirmPassword,
    };
    setIsLoading(true);
    const response = await Post(url, data, apiHeader());
    setIsLoading(false);
    if (response != undefined) {
      console.log('response data =>', response?.data);
      Platform.OS == 'android'
        ? ToastAndroid.show(`Password Reset SuccessFully`, ToastAndroid.SHORT)
        : alert(`Password Reset SuccessFully`);
      navigationN.navigate('LoginScreen');
    }
  };

  return (
    <>
      <CustomStatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <ImageBackground source={require('../Assets/Images/upper_back.png')} imageStyle={{
        width: '100%',
        height: '100%'
      }} style={styles.container}
        resizeMode='cover'>
        <Header showBack headerColor={'transparent'} hideUser />
      </ImageBackground>
      <View style={styles.inner_container}>
        <CustomText isBold style={styles.heading}>
          Reset Password
        </CustomText>
        <CustomText style={styles.soc_text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
        </CustomText>
        <Formik
          initialValues={{
            password: '',
            confirmPassword: '',
          }}
          validationSchema={forgotpassword}
          onSubmit={resetPassword}>
          {({ values, handleChange, handleSubmit, touched, errors }) => {
            return (
              <>
                <TextInputWithTitle
                  title={'new password :'}
                  titleText={'New Password'}
                  placeholder={'New Password'}
                  setText={handleChange('password')}
                  value={values.password}
                  secureText={true}
                  viewHeight={0.07}
                  viewWidth={0.9}
                  inputWidth={0.9}
                  border={0.6}
                  fontSize={moderateScale(10, 0.6)}
                  borderRadius={30}
                  backgroundColor={'rgba(10, 35, 66, 0.1)'}
                  borderColor={Color.themeColor}
                  marginTop={moderateScale(10, 0.3)}
                  placeholderColor={Color.darkGray}
                  titleStlye={{ right: 10 }}
                />
                {touched.password && errors.password && (
                  <CustomText style={styles.schemaText}>
                    {errors.password}
                  </CustomText>
                )}
                <TextInputWithTitle
                  title={'confirm password :'}
                  titleText={'Confirm Password'}
                  placeholder={'Confirm Password'}
                  setText={handleChange('confirmPassword')}
                  value={values.confirmPassword}
                  secureText={true}
                  viewHeight={0.07}
                  viewWidth={0.9}
                  inputWidth={0.9}
                  border={0.6}
                  fontSize={moderateScale(10, 0.6)}
                  borderRadius={30}
                  backgroundColor={'rgba(10, 35, 66, 0.1)'}
                  borderColor={Color.themeColor}
                  placeholderColor={Color.darkGray}
                  titleStlye={{ right: 10 }}
                  marginTop={moderateScale(10, 0.3)}

                />
                {touched.password && errors.password && (
                  <CustomText style={styles.schemaText}>
                    {errors.password}
                  </CustomText>
                )}
                <CustomButton
                  text={'Submit'}
                  isBold
                  textColor={Color.white}
                  width={windowWidth * 0.9}
                  height={windowHeight * 0.07}
                  marginTop={moderateScale(20, 0.3)}
                  bgColor={Color.cartheme}
                  borderColor={Color.white}
                  borderWidth={1}
                  borderRadius={moderateScale(30, 0.3)}
                  isGradient
                  elevation
                  onPress={() =>
                    navigationN.navigate('LoginScreen')
                  }
                />
              </>
            );
          }}
        </Formik>
      </View>
    </>
  );
};

const styles = ScaledSheet.create({
  main_container: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: 'white',
  },
  heading: {
    fontSize: moderateScale(20, 0.6),
    color: Color.themeColor,
    marginTop: moderateScale(10, 0.6),
    textAlign: 'left',
    width: windowWidth * 0.9
  },
  soc_text: {
    fontSize: moderateScale(8, 6),
    textAlign: 'left',
    color: Color.themeColor,
    width: windowWidth * 0.9,
    marginTop: moderateScale(10, 0.6)
  },
  inner_container: {
    height: windowHeight * 0.6,
    width: windowWidth,
    alignItems: 'center',
    paddingTop: moderateScale(30, 0.6),
    paddingHorizontal: moderateScale(10, 0.6),
    backgroundColor: Color.white,
    top: -80,
    borderTopLeftRadius: moderateScale(30, 0.7),
    borderTopRightRadius: moderateScale(30, 0.7),
    shadowColor: '#000',
  },
  txt2: {
    color: Color.black,
    fontSize: moderateScale(24, 0.6),
  },
  txt3: {
    color: Color.themeLightGray,
    fontSize: moderateScale(11, 0.6),
    textAlign: 'center',
    width: '80%',
    marginVertical: moderateScale(10, 0.3),
    lineHeight: moderateScale(17, 0.3),
  },
  back: {
    position: 'absolute',
    top: moderateScale(20, 0.3),
    left: moderateScale(20, 0.3),
    height: moderateScale(30, 0.3),
    width: moderateScale(30, 0.3),
    borderRadius: moderateScale(5, 0.3),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.themeBlack,
    zIndex: 1,
  },
  container: {
    width: windowWidth,
    height: windowHeight * 0.5
  },
  schemaText: {
    fontSize: moderateScale(10, 0.6),
    color: Color.red,
    alignSelf: 'flex-start',
  },
});

export default ResetPassword;

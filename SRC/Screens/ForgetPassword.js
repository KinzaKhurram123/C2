import messaging from '@react-native-firebase/messaging';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import Color from '../Assets/Utilities/Color';
import { Post } from '../Axios/AxiosInterceptorFunction';
import CustomButton from '../Components/CustomButton';
import CustomImage from '../Components/CustomImage';
import CustomStatusBar from '../Components/CustomStatusBar';
import CustomText from '../Components/CustomText';
import ImagePickerModal from '../Components/ImagePickerModal';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import { loginSchema } from '../Constant/schema';
import { SetFCMToken, setUserToken } from '../Store/slices/auth-slice';
import { setUserData } from '../Store/slices/common';
import { apiHeader, windowHeight, windowWidth } from '../Utillity/utils';
import Header from '../Components/Header';
import navigationService from '../navigationService';

const ForgetPassword = props => {
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
          Forgot Password
        </CustomText>
        <CustomText style={styles.soc_text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
        </CustomText>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={loginSchema}
        >
          {({ handleChange, handleSubmit, values, errors, touched }) => {
            return (
              <>
                <TextInputWithTitle
                  title={'Enter Your Email Here :'}
                  titleText={'Username'}
                  placeholder={'Email'}
                  setText={handleChange('email')}
                  value={values.email}
                  viewHeight={0.07}
                  viewWidth={0.9}
                  inputWidth={0.9}
                  border={0.6}
                  fontSize={moderateScale(10, 0.6)}
                  borderRadius={30}
                  backgroundColor={'rgba(10, 35, 66, 0.1)'}
                  borderColor={Color.themeColor}
                  marginTop={moderateScale(15, 0.3)}
                  placeholderColor={Color.darkGray}
                  titleStlye={{ right: 10 }}
                />
                {touched.email && errors.email && (
                  <CustomText
                    textAlign={'left'}
                    style={{
                      fontSize: moderateScale(10, 0.6),
                      color: Color.red,
                      alignSelf: 'flex-start',
                    }}>
                    {errors.email}
                  </CustomText>
                )}
                <View style={{ marginTop: moderateScale(10, 0.6) }} />
                <CustomButton
                  isBold
                  text={'Submit'}
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
                  onPress={() => navigationService.navigate('VerifyNumber')}
                />
              </>
            );
          }}
        </Formik >
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight * 0.5
  },
  text: {
    fontSize: moderateScale(27, 0.6),
    color: Color.themeColor,
    paddingVertical: moderateScale(10, 0.6),
    paddingTop: windowHeight * 0.02,
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
});

export default ForgetPassword;

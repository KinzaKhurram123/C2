import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { Icon } from 'native-base';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  ImageBackground,
  Platform,
  ScrollView,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import { moderateScale, ScaledSheet } from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';
import Color from '../Assets/Utilities/Color';
import { Post } from '../Axios/AxiosInterceptorFunction';
import CustomButton from '../Components/CustomButton';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import ImagePickerModal from '../Components/ImagePickerModal';
import ScreenBoiler from '../Components/ScreenBoiler';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import { SignupSchema } from '../Constant/schema';
import { setUserData } from '../Store/slices/common';
import { apiHeader, windowHeight, windowWidth } from '../Utillity/utils';
import { setUserToken } from '../Store/slices/auth-slice';

const Signup = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [check, setCheck] = useState(false)
  const [imagePicker, setImagePicker] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { user_type } = useSelector(state => state.authReducer);

  const onPressregister = async values => {
    // const body = {
    //   name: values.name,
    //   email: values.email,
    //   password: values.password,
    //   phone: values.contact,
    //   agree_terms_condition: values.termsAccepted,
    //   confirm_password: values.confirmPassword,
    //   role: "customer",
    // };
    // const url = 'register';
    // setIsLoading(true);
    // const response = await Post(url, body, apiHeader());
    // setIsLoading(false);
    // if (response != undefined) {
    //   Platform.OS == 'android'
    //     ? ToastAndroid.show('Sign up successfully', ToastAndroid.SHORT)
    //     : Alert.alert('Sign up successfully');
    //   }
    dispatch(setUserToken({ token: '123456789' }));
    dispatch(setUserData({}));
  };

  return (
    <ImageBackground source={require('../Assets/Images/background.png')} imageStyle={{
      width: '100%',
      height: '100%'
    }} style={styles.container}
      resizeMode='cover'
    >
      <ScreenBoiler
        statusBarBackgroundColor={'white'}
        statusBarContentStyle={'dark-content'}>
        <ScrollView
          style={{
            flex: 1
          }}
          contentContainerStyle={{
            alignItems: 'center',
            paddingBottom: moderateScale(90, 0.6),
          }}
          showsVerticalScrollIndicator={false}>
          <View
            style={{
              height: windowHeight * 0.15,
              width: windowHeight * 0.2,
              marginTop: windowWidth * 0.008,
            }}>
            <CustomImage
              resizeMode="contain"
              source={require('../Assets/Images/logo.png')}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </View>
          <CustomText isBold style={styles.text}>
            Company Name Here
          </CustomText>
          {/* <Formik
            initialValues={{
              name: '',
              email: '',
              contact: 0,
              password: '',
              termsAccepted: false,
            }}
            validationSchema={SignupSchema}
            onSubmit={onPressregister}>
            {({
              values,
              handleChange,
              handleSubmit,
              errors,
              touched,
              setFieldValue,
            }) => {
              return (
              
              );
            }}
          </Formik> */}
          <View style={[styles.input_container]}>
            <CustomText isBold style={styles.heading}>
              Signin to your account
            </CustomText>
            <CustomText style={styles.soc_text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
            </CustomText>
            <TextInputWithTitle
              placeholder={'Enter Your Name'}
              // setText={handleChange('name')}
              // value={values.name}
              viewHeight={0.07}
              viewWidth={0.85}
              inputWidth={0.8}
              border={2}
              fontSize={moderateScale(10, 0.6)}
              borderRadius={30}
              backgroundColor={'transparent'}
              borderColor={Color.white}
              marginTop={moderateScale(15, 0.3)}
              placeholderColor={Color.white}
              titleStlye={{ right: 10 }}
            />
            {/* {touched.name && errors.name && (
              <CustomText style={styles.schemaText}>
                {errors.name}
              </CustomText>
            )} */}
            <TextInputWithTitle
              placeholder={'Enter Your Email '}
              // setText={handleChange('email')}
              // value={values.email}
              viewHeight={0.07}
              viewWidth={0.85}
              inputWidth={0.8}
              border={2}
              fontSize={moderateScale(10, 0.6)}
              borderRadius={30}
              backgroundColor={'transparent'}
              borderColor={Color.white}
              marginTop={moderateScale(15, 0.3)}
              placeholderColor={Color.white}
              titleStlye={{ right: 10 }}
            />
            {/* {touched.email && errors.email && (
              <CustomText
                textAlign={'left'}
                style={{
                  fontSize: moderateScale(10, 0.6),
                  color: Color.red,
                  alignSelf: 'flex-start',
                }}>
                {errors.email}
              </CustomText>
            )} */}
            <TextInputWithTitle
              showPassword
              placeholder={'Enter Your Password'}
              // setText={handleChange('password')}
              // value={values.password}
              viewHeight={0.07}
              viewWidth={0.85}
              inputWidth={0.8}
              border={2}
              fontSize={moderateScale(10, 0.6)}
              borderRadius={30}
              backgroundColor={'transparent'}
              borderColor={Color.white}
              marginTop={moderateScale(15, 0.3)}
              placeholderColor={Color.white}
              titleStlye={{ right: 10 }}
            />
            {/* {touched.password && errors.password && (
              <CustomText style={styles.schemaText}>
                {errors.password}
              </CustomText>
            )} */}
            <TextInputWithTitle
              showPassword
              placeholder={'Confirm Your Password'}
              // setText={handleChange('confirmPassword')}
              // value={values.confirmPassword}
              viewHeight={0.07}
              viewWidth={0.85}
              inputWidth={0.8}
              border={2}
              fontSize={moderateScale(10, 0.6)}
              borderRadius={30}
              backgroundColor={'transparent'}
              borderColor={Color.white}
              marginTop={moderateScale(15, 0.3)}
              placeholderColor={Color.white}
              titleStlye={{ right: 10 }}
            />
            {/* {touched.password && errors.password && (
              <CustomText style={styles.schemaText}>
                {errors.password}
              </CustomText>
            )} */}
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => {
                  setCheck(!check);
                }}
                style={styles.check_box}>
                {check && (
                  <Icon
                    as={Feather}
                    size={moderateScale(15, 0.6)}
                    color={Color.white}
                    name="check"
                  />
                )}
              </TouchableOpacity>
              <CustomText style={styles.term_text}>
                By Click You Agree To Our
                <CustomText isBold
                  style={{ fontSize: moderateScale(11, 0.6), color: Color.white }}>
                  {' '}
                  terms & conditions{' '}
                </CustomText>{' '}
                As Well As Our
                <CustomText isBold
                  style={{ fontSize: moderateScale(11, 0.6), color: Color.white }}>
                  {' '}
                  Privacy Policy.
                </CustomText>
              </CustomText>
            </View>
            {/* {touched.termsAccepted && errors.termsAccepted && (
              <CustomText style={styles.schemaText}>
                {errors.termsAccepted}
              </CustomText>
            )} */}
            <CustomButton
              // onPress={() => onPressregister()}
              text={
                isLoading ? (
                  <ActivityIndicator color={Color.white} size={'small'} />
                ) : (
                  'sign in '
                )
              }
              textColor={Color.themeColor}
              width={windowWidth * 0.8}
              height={windowHeight * 0.06}
              bgColor={Color.white}
              borderColor={Color.white}
              borderWidth={1}
              borderRadius={moderateScale(30, 0.3)}
              // isGradient
              isBold
              elevation
            />
            <CustomText style={styles.do_text}>
              Already have an account?
              <CustomText
                onPress={() => {
                  navigation.navigate('LoginScreen');
                }}
                isBold
                style={styles.Sign_text}>
                {' '}
                Sign in
              </CustomText>
            </CustomText>

          </View>
          {/* <ImagePickerModal
          show={imagePicker}
          setShow={setImagePicker}
          setFileObject={setImage}
        /> */}
        </ScrollView>
      </ScreenBoiler>
    </ImageBackground>
  );
};

const styles = ScaledSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    alignItems: 'center',
  },
  text: {
    fontSize: moderateScale(27, 0.6),
    color: Color.white,
    paddingVertical: moderateScale(10, 0.6),
    paddingTop: windowHeight * 0.02,
    top: -40
  },
  fields_box: {
    borderWidth: 0.3,
    borderColor: '#28272369',
    borderRadius: 20,
    paddingVertical: moderateScale(10, 0.6),
    width: windowWidth * 0.9,
    alignItems: 'center',
    paddingTop: moderateScale(15, 0.6),
    backgroundColor: Color.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    paddingHorizontal: moderateScale(20, 0.6),
    elevation: 8,
  },
  input_container: {
    borderTopWidth: 6,
    borderTopColor: Color.white,
    borderRadius: 20,
    height: windowHeight * 0.72,
    width: windowWidth * 0.95,
    alignItems: 'center',
    paddingTop: moderateScale(15, 0.6),
    paddingHorizontal: moderateScale(10, 0.6),
    backgroundColor: 'rgba(10, 35, 66, 0.4)',
    top: -30
  },
  row: {
    flexDirection: 'row',
    paddingVertical: moderateScale(15, 0.6),
    width: '82%',
    alignItems: 'center'
  },
  check_box: {
    height: windowHeight * 0.027,
    width: windowWidth * 0.05,
    borderWidth: 1,
    borderColor: Color.white,
    borderRadius: 2,
    marginRight: moderateScale(2, 0.3),
  },
  do_text: {
    textTransform: 'none',
    letterSpacing: 1,
    marginTop: moderateScale(10, 0.6),
    color: Color.white,
    fontSize: moderateScale(12, 0.7)
  },
  Sign_text: {
    color: Color.white,
    paddingRight: moderateScale(5, 0.6),
    fontSize: moderateScale(14, 0.7)
  },
  term_text: {
    paddingHorizontal: moderateScale(5, 0.6),
    fontSize: moderateScale(11, 0.6),
    color: Color.white
  },
  heading: {
    fontSize: moderateScale(20, 0.6),
    color: Color.white,
    marginTop: moderateScale(10, 0.6),
    textAlign: 'left',
    width: windowWidth * 0.8
  },
  soc_text: {
    fontSize: moderateScale(8, 6),
    paddingVertical: moderateScale(8, 0.6),
    textAlign: 'left',
    color: Color.white,
    width: windowWidth * 0.8,
  },
  schemaText: {
    fontSize: moderateScale(10, 0.6),
    color: 'red',
    alignSelf: 'flex-start',
  },
});

export default Signup;

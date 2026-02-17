import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  Platform,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux';
import Color from '../Assets/Utilities/Color';
import { Post } from '../Axios/AxiosInterceptorFunction';
import CustomButton from '../Components/CustomButton';
import CustomText from '../Components/CustomText';
import { apiHeader, windowHeight, windowWidth } from '../Utillity/utils';
// import CardContainer from '../Components/CardContainer';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomStatusBar from '../Components/CustomStatusBar';
import Header from '../Components/Header';

const VerifyNumber = props => {
  const SelecteduserRole = useSelector(
    state => state.commonReducer.selectedRole,
  );
  const navigationN = useNavigation();

  //params
  const email = props?.route?.params?.email;
  const phoneNumber = props?.route?.params?.phoneNumber;

  //states
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const CELL_COUNT = 4;
  const ref = useBlurOnFulfill({ code, cellCount: CELL_COUNT });
  const [abcd, getCellOnLayoutHandler] = useClearByFocusCell({
    code,
    setCode,
  });
  const [time, settime] = useState(120);
  const [timerLabel, settimerLabel] = useState('Resend In ');
  if (time > 0) {
    setTimeout(function () {
      settime(time - 1);
    }, 1000);
  }

  const label = () => {
    time == 0 && (settimerLabel('Resend otp '), settime(''));
  };

  useEffect(() => {
    label();
  }, [time]);

  // const sendOTP = async () => {
  //   const url = 'password/email';
  //   setIsLoading(true);
  //   const response = await Post(url, { email: email }, apiHeader());
  //   setIsLoading(false);
  //   if (response != undefined) {
  //     Platform.OS == 'android'
  //       ? ToastAndroid.show(`OTP sent to ${email}`, ToastAndroid.SHORT)
  //       : alert(`OTP sent to ${email}`);
  //   }
  // };

  // const VerifyOTP = async () => {
  //   const url = 'password/code/check';
  //   setIsLoading(true);
  //   console.log(code);
  //   const response = await Post(url, { code: code }, apiHeader());
  //   setIsLoading(false);
  //   if (response != undefined) {
  //     Platform.OS == 'android'
  //       ? ToastAndroid.show(`otp verified`, ToastAndroid.SHORT)
  //       : alert(`otp verified`);

  //   }
  // };

  // useEffect(() => {
  //   label();
  // }, [time]);

  // useEffect(() => {
  //   if (timerLabel == 0) {
  //     sendOTP();
  //   }
  // }, [timerLabel]);

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
          Verify Your Otp
        </CustomText>
        <CustomText style={styles.soc_text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
        </CustomText>
        <CodeField
          placeholder={'0'}
          ref={ref}
          value={code}
          onChangeText={setCode}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <View
              onLayout={getCellOnLayoutHandler(index)}
              key={index}
              style={[styles.cellRoot, isFocused && styles.focusCell]}>
              <CustomText
                style={[styles.cellText, isFocused && { color: Color.black }]}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </CustomText>
            </View>
          )}
        />
        <CustomText style={[styles.txt3, { width: windowWidth * 0.6 }]}>
          Didn’t get Code yet?
        </CustomText>
        {
          <TouchableOpacity
            disabled={timerLabel == 'Resend otp ' ? false : true}
            onPress={() => {
              settimerLabel('ReSend in '), settime(120);
            }}>
            <CustomText style={[styles.txt4]}>
              {timerLabel} {time}
            </CustomText>
          </TouchableOpacity>
        }
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
          onPress={() => {
            navigationN.navigate('ResetPassword', { email: email });
          }}
        />
      </View>
    </>
  );
};

const styles = ScaledSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight * 0.5
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
    fontSize: moderateScale(25, 0.6),
    textTransform: 'uppercase',
  },
  txt3: {
    color: Color.mediumGray,
    fontSize: moderateScale(11, 0.6),
    textAlign: 'center',
    width: '95%',
    marginTop: moderateScale(10, 0.3),
    lineHeight: moderateScale(20, 0.3),
  },
  txt4: {
    color: Color.themeBlack,
    fontSize: moderateScale(13, 0.6),
    borderBottomWidth: 1,
    borderColor: Color.white,
    fontWeight: '600',
  },
  txt5: {
    color: Color.black,
    fontSize: moderateScale(12, 0.6),
  },
  codeFieldRoot: {
    marginTop: moderateScale(20, 0.3),
    marginBottom: moderateScale(15, 0.3),
    width: windowWidth * 0.72,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: moderateScale(55, 0.3),
    height: moderateScale(55, 0.3),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(10, 35, 66, 0.1)',
    borderRadius: moderateScale(5, 0.3),
  },
  focusCell: {
    borderColor: Color.darkBlue,
    borderWidth: 1,
  },
  cellText: {
    color: Color.themeBlack,
    fontSize: moderateScale(20, 0.3),
    textAlign: 'center',
  },
  h1: {
    fontSize: moderateScale(22, 0.6),
    color: Color.themeBlack,
    textAlign: 'left',
    width: '80%',
    fontWeight: '700',
    letterSpacing: 0.6,
  },
  h2: {
    fontSize: moderateScale(20.6),
    color: Color.mediumGray,
    textAlign: 'left',
    width: '80%',
    fontWeight: '600',
    letterSpacing: 0.8,
    textTransform: 'none',
  },
});

export default VerifyNumber;

import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { useDispatch } from 'react-redux';
import Color from '../Assets/Utilities/Color';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import ScreenBoiler from '../Components/ScreenBoiler';
import { setUserToken } from '../Store/slices/auth';
import { SetUserRole } from '../Store/slices/auth-slice';
import { setUserLogOut } from '../Store/slices/common';
import { windowHeight, windowWidth } from '../Utillity/utils';
import LinearGradient from 'react-native-linear-gradient';
import { drawer_items } from '../Config/arrays';

const Drawer = React.memo(() => {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();


  return (
    <ScreenBoiler
      statusBarBackgroundColor={'white'}
      statusBarContentStyle={'dark-content'}>
      <ImageBackground source={require('../Assets/Images/drawer_bg.png')} imageStyle={{ width: '100%', height: '100%' }} resizeMode='contain'
        style={{
          height: windowHeight,
        }}>
        <View style={{ flex: 1, }}>
          <LinearGradient style={styles.profile_view} start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
            colors={Color.cartheme}>
            <View style={styles.image_view}>
              <CustomImage
                style={styles.image}
                source={require('../Assets/Images/user_image2.png')}
              />
            </View>
            <View style={{ marginLeft: moderateScale(10, 0.6) }}>
              <CustomText isBold style={styles.heading_text}>
                PAT H. JHONSON
              </CustomText>
              <CustomText style={styles.text}>jhonson@gmail.com</CustomText>
            </View>
          </LinearGradient>
          <View
            style={{
              height: '60%',
              marginTop: moderateScale(20, 0.6)
            }}>
            {drawer_items.map((item, index) => (
              <>
                <TouchableOpacity
                  key={item.id}
                  onPress={item.onPress}
                  style={{
                    width: windowWidth * 0.7,
                    borderColor: Color.black,
                    marginVertical: moderateScale(12, 0.3),
                    paddingHorizontal: moderateScale(20, 0.6),
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <CustomText
                    style={{
                      fontSize: moderateScale(15, 0.6),
                      color: Color.black,
                      fontWeight: '600'
                    }}>
                    {item.name}
                  </CustomText>
                </TouchableOpacity>
              </>
            ))}
          </View>
          <View style={styles.end_view}>
            <TouchableOpacity
              onPress={() => {
                dispatch(setUserToken(''));
                dispatch(SetUserRole(''));
                dispatch(setUserLogOut());
              }}
              style={{
                width: windowWidth * 0.7,
                borderColor: Color.black,
                margin: moderateScale(5, 0.3),
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <CustomText isBold
                style={{
                  fontSize: moderateScale(14, 0.6),
                  color: Color.veryLightGray,
                }}>
                Logout
              </CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </ScreenBoiler>
  );
});

export default Drawer;

const styles = StyleSheet.create({
  Profile: {
    width: windowWidth * 0.15,
    height: windowWidth * 0.15,
    borderRadius: (windowWidth * 0.2) / 1,
    borderWidth: 1,
    borderColor: Color.white,
    overflow: 'hidden',
  },
  menu_text: {
    color: Color.darkGray,
  },
  profile_view: {
    paddingHorizontal: moderateScale(20, 0.6),
    paddingVertical: moderateScale(25, 0.6),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: windowWidth * 0.4,
  },
  image_view: {
    width: moderateScale(70, 0.6),
    height: moderateScale(70, 0.6),
    borderRadius: windowHeight,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: windowHeight,
  },
  heading_text: {
    fontSize: moderateScale(16, 0.6),
    textTransform: 'uppercase',
    color: Color.white
  },
  text: {
    fontSize: moderateScale(11, 0.6),
    color: Color.white
  },
  end_view: {
    height: '20%',
    width: '100%',
    paddingHorizontal: moderateScale(20, 0.6),
    marginTop: moderateScale(30, 0.6)
  },
});

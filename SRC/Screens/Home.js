import { useIsFocused } from '@react-navigation/native';
import { Icon, ScrollView } from 'native-base';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  I18nManager,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import { moderateScale } from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useSelector } from 'react-redux';
import Color from '../Assets/Utilities/Color';
import { Get } from '../Axios/AxiosInterceptorFunction';
import CustomButton from '../Components/CustomButton';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import DeliveryBox from '../Components/DeliveryBox';
import Header from '../Components/Header';
import SearchbarComponent from '../Components/SearchbarComponent';
import Userbox from '../Components/Userbox';
import navigationService from '../navigationService';
import { windowHeight, windowWidth } from '../Utillity/utils';

const Home = () => {
  const token = useSelector(state => state.authReducer.token);
  const isFocused = useIsFocused();
  const [activebutton, setactivebutton] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [historyLoading, setHistoryLoading] = useState(false);
  const [histry_list, setHistoryList] = useState([]);

  const vehicle_list = [
    {
      id: 1,
      image: require('../Assets/Images/cab_card.png'),
      title: 'Cab \nBooking',
    },
    {
      id: 2,
      image: require('../Assets/Images/bike_card.png'),
      title: 'Bike \nBooking',
    },
    {
      id: 3,
      image: require('../Assets/Images/cargo_card.png'),
      title: 'Cargo \nBooking',
    },
  ];

  const pastRides = [
    {
      id: "1",
      title: "Ride to Downtown",
      date: "15 Feb 2026",
      locationName: "New York, USA",
    },
    {
      id: "2",
      title: "Airport Drop",
      date: "12 Feb 2026",
      locationName: "Los Angeles, USA",
    },
    {
      id: "3",
      title: "Evening Ride",
      date: "09 Feb 2026",
      locationName: "Chicago, USA",
    },
  ];

  return (
    <SafeAreaView style={styles.safe_area}>
      <Header title={''} hideUser />
      <View style={{
        paddingHorizontal: moderateScale(15, 0.6),
      }}>
        <CustomText isBold style={styles.heading}>Let's Book Your Ride</CustomText>
        <CustomText style={styles.soc_text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
        </CustomText>
        <View style={styles.row_con}>
          <View style={{
            width: windowWidth * 0.14,
            height: windowWidth * 0.17,
          }}>
            <CustomImage source={require('../Assets/Images/car_2.png')} style={styles.imaeg_view} resizeMode="cover" />
          </View>
          <CustomText style={styles.car_text}>Where are you going?</CustomText>
          <View style={{
            width: windowWidth * 0.07,
            height: windowWidth * 0.07,
            backgroundColor: Color.white,
            borderRadius: windowWidth / 0.2,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Icon name='chevron-right' size={moderateScale(20, 0.6)} color={Color.black} as={Entypo} />
          </View>
        </View>
        <CustomText isBold style={styles.sub_heading}>Select Your vehicle</CustomText>
        <FlatList
          data={vehicle_list}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            width: windowWidth,
          }}
          renderItem={(({ item }) => {
            return (
              <ImageBackground source={item?.image}
                imageStyle={{
                  width: '100%',
                  height: '100%',
                  borderRadius: moderateScale(12, 0.6),
                }}
                style={{
                  width: windowWidth * 0.38,
                  height: windowWidth * 0.32,
                  backgroundColor: Color.lightGrey,
                  marginTop: moderateScale(10, 0.7),
                  marginRight: moderateScale(10, 0.6),
                  borderRadius: moderateScale(12, 0.6),
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  shadowColor: "#297FAD",
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.32,
                  shadowRadius: 5.46,
                  elevation: 9,
                  borderBottomWidth: 4,
                  borderBottomColor: Color.darkBlue
                }}>
                <CustomText isBold style={styles.vehicle_text}>{item.title}</CustomText>
              </ImageBackground>
            )
          })}
        />
        <CustomText isBold style={styles.sub_heading}>Your Past Rides</CustomText>
        <FlatList
          data={pastRides}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.pastRideItem}>
              <View style={{
                width: windowWidth * 0.1,
                height: windowWidth * 0.1,
                backgroundColor: Color.white,
                borderRadius: windowWidth / 0.2,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Icon name='location' size={moderateScale(22, 0.6)} color={Color.veryLightGray} as={EvilIcons} />
              </View>
              <View style={{
                width: '60%'
              }}>
                <CustomText isBold style={styles.text}>{item.title}</CustomText>
                <CustomText style={styles.location}>{item.locationName}</CustomText>
              </View>
              <CustomText style={styles.date}>{item.date}</CustomText>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safe_area: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: Color.white,
  },
  soc_text: {
    fontSize: moderateScale(8, 6),
    paddingVertical: moderateScale(8, 0.6),
    textAlign: 'left',
    color: Color.veryLightGray,
    width: windowWidth * 0.8,
  },
  pastRideItem: {
    width: windowWidth * 0.95,
    height: windowWidth * 0.16,
    backgroundColor: Color.lightGrey,
    marginTop: moderateScale(10, 0.6),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(10, 0.6),
    borderRadius: moderateScale(10, 0.6),
  },
  indicatorStyle: {
    paddingRight: 5,
    paddingLeft: I18nManager.isRTL ? 5 : 0,
    marginTop: moderateScale(20, 0.6),
  },
  vehicle_text: {
    fontSize: moderateScale(13, 0.6),
    color: Color.black,
    padding: moderateScale(10, 0.6),
    letterSpacing: 0.6,
  },
  imaeg_view: {
    width: '100%',
    height: '100%',
    bottom: 6
  },
  main_Container: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: Color.white,
    paddingHorizontal: moderateScale(20, 0.6),
    paddingVertical: moderateScale(10, 0.6),
  },
  ridelink_Box: {
    width: windowWidth * 0.88,
    height: windowHeight * 0.25,
    alignSelf: 'center',
    borderRadius: moderateScale(17, 0.6),
    borderWidth: 1,
    borderColor: Color.boxgrey,
    marginVertical: moderateScale(10, 0.6),
  },
  link_Image: {
    width: windowWidth * 0.88,
    height: '100%',
    alignSelf: 'center',
  },
  second_Image: {
    height: windowHeight * 0.32,
    width: windowWidth * 0.52,
    right: moderateScale(25, 0.6),
    top: moderateScale(15, 0.6),
  },
  container_Style: {
    paddingVertical: moderateScale(40, 0.6),
  },
  button_Box: {
    width: windowWidth * 0.88,
    height: moderateScale(50, 0.6),
    borderWidth: 1,
    borderRadius: moderateScale(30, 0.6),
    borderColor: Color.boxgrey,
    bottom: moderateScale(20, 0.6),
    flexDirection: 'row',
    gap: moderateScale(5, 0.6),
    paddingHorizontal: moderateScale(5, 0.6),
    backgroundColor: Color.lightGrey,
  },

  text: {
    fontSize: moderateScale(14, 0.6),
    color: Color.black,
  },
  location: {
    fontSize: moderateScale(12, 0.6),
    color: Color.grey,
  },
  date: {
    fontSize: moderateScale(11, 0.6),
    color: Color.veryLightGray,
    paddingRight: moderateScale(10, 0.6)
  },

  car_text: {
    fontSize: moderateScale(14, 0.6),
    color: Color.mediumGray
  },
  row: {
    marginTop: windowHeight * 0.12,
    paddingLeft: moderateScale(10, 0.6),
  },
  txt: {
    fontSize: moderateScale(24, 0.6),
    color: Color.themeBlack,
    width: windowWidth * 0.45,
    fontWeight: 'bold',
  },
  heading: {
    fontSize: moderateScale(24, 0.6),
    color: Color.black,
    width: windowWidth * 0.46,
  },
  sub_heading: {
    fontSize: moderateScale(16, 0.6),
    marginTop: moderateScale(15, 0.6),
    color: Color.darkGray,
  },
  row_con: {
    flexDirection: 'row',
    alignItems: 'center',
    width: windowWidth * 0.92,
    height: windowHeight * 0.07,
    backgroundColor: Color.lightGrey,
    borderRadius: moderateScale(10, 0.6),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(10, 0.6)
  },
});

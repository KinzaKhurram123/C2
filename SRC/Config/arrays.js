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


const drawer_items = [
    {
        id: 1,
        name: 'Home',
        onPress: () => {
            navigation.navigate('Home');
        },
    },

    {
        id: 4,
        name: 'wallet',
        onPress: null
        // onPress: () => {
        //   navigation.navigate('MyWallet');
        // },
    },

    {
        id: 4,
        name: 'History',
        onPress: null

        // onPress: () => {
        //   navigation.navigate('History');
        // },
    },
    {
        id: 5,
        name: 'Accounts ',
        onPress: null

        // onPress: () => {
        //   navigation.navigate('Profile');
        // },
    },
    {
        id: 6,
        name: 'Change password ',
        onPress: null
        // onPress: () => {
        //   navigation.navigate('ChangePassword');
        // },
    },
    {
        id: 6,
        name: 'privacy policy ',
        onPress: null
        // onPress: () => {
        //   navigation.navigate('PrivacyPolicy');
        // },
    },
    {
        id: 6,
        name: 'terms & conditions',
        onPress: null
        // onPress: () => {
        //   navigation.navigate('TermsAndConditions');
        // },
    },
];

export { vehicle_list, pastRides, drawer_items }
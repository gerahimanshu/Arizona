const images = {
    logo: require('./logo/logo.png'),
    background: require('./background/background.png'),
    navigation: {
        home:{
            homeSelected: require('./navigation/home/selected/homeSelected.png'),
            homeUnselected: require('./navigation/home/unselected/homeUnselected.png')
        },
        bookings:{
            bookingsSelected: require('./navigation/bookings/selected/bookingsSelected.png'),
            bookingsUnselected: require('./navigation/bookings/unselected/bookingsUnselected.png')
        },
        profile:{
            profileSelected: require('./navigation/profile/selected/profileSelected.png'),
            profileUnselected: require('./navigation/profile/unselected/profileUnselected.png')
        }
    },
    downArrow: require('./downArrow/downarrow.png'),
    homeCells: {
        img1: require('./homeCells/img1.png'),
        img2: require('./homeCells/img2.png'),
        img3: require('./homeCells/img3.png'),
        img4: require('./homeCells/img4.png')
    },
    upArrowFilled: require('./upArrowFilled/up.png'),
    downArrowFilled: require('./downArrowFilled/down.png'),
    calendar: require('./calendar/calendarPageEmpty.png'),
    rightArrow: require('./rightArrow/arrow.png')
}

export default images
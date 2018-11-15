import { Dimensions, Platform } from 'react-native';

export const myWidth = Dimensions.get('window').width;
const myHeight = Dimensions.get('window').height;
const isPlatformIOS = (Platform.OS == 'ios');
const width = num => myWidth * handleSize(num);
const height = num => myHeight * handleSize(num);
const isiPhoneX = isPlatformIOS && myHeight > 800;
const totalSize = num => Math.sqrt((myHeight * myHeight) + (myWidth * myWidth)) * handleSize(num);
const handleSize = (num) => {
    if (num <= 0) return 0;
    if (num > 100) return 1;

    return num / 100;
};

const standardWidth = 375.0;
const standardHeight = 667.0;

export function widthScale (dimension) {
    return (dimension / standardWidth) * myWidth;
}

export function heightScale (dimension) {
    return (dimension / standardHeight) * myHeight;
}

export {
    width, height, isiPhoneX, totalSize, isPlatformIOS
}

export var dismissKeyboard = require('dismissKeyboard');

export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


export function parsePickerDate(date) {
    return Moment(date).format("DD MMMM, YYYY")
}

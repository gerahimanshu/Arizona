import React from 'react'
import {
    View,
    StyleSheet,
    TextInput
} from 'react-native'
import colors from '../utils/colors'
import strings from '../utils/strings'
import {heightScale, widthScale} from '../utils/utils'

const CustomTextInput = (props) => {
    const {
        onEmailChange,
        onPasswordChange
    } = props
    return (
        <View style={styles.container}>
            {
                (props.type == 'email') ? (
                    <TextInput 
                        placeholder={strings.email} 
                        placeholderTextColor={colors.white} 
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={onEmailChange}
                    />
                ) : (
                    <TextInput 
                        placeholder={strings.password} 
                        placeholderTextColor={colors.white}
                        secureTextEntry={true}
                        autoCapitalize='none'
                        style={styles.textInput}
                        onChangeText={onPasswordChange}
                    />
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        borderColor: colors.grayDivider,
        marginLeft: widthScale(10),
        marginRight: widthScale(10),
        borderWidth: widthScale(1),
        padding: widthScale(10)
    },
    textInput: {
        fontSize: 16,
        color: colors.white,

    }
}) 

export default CustomTextInput;
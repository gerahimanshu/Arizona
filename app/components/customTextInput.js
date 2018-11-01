import React from 'react'
import {
    View,
    StyleSheet,
    TextInput
} from 'react-native'
import colors from '../utils/colors'
import strings from '../utils/strings'

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
                        onChangeText={onEmailChange}
                    />
                ) : (
                    <TextInput 
                        placeholder={strings.password} 
                        placeholderTextColor={colors.white}
                        secureTextEntry={true}
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
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 1
    },
    textInput: {
        fontSize: 16,
        color: colors.white,

    }
}) 

export default CustomTextInput;
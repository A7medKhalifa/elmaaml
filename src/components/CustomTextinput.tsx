import React, { useEffect, useState } from "react"
import { Dimensions, Platform, StyleSheet, Text, TextInput, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import COLORS from "../values/colors"
import { TextInputProps } from "react-native-paper";
import { Eye } from "../assets";
const { height, } = Dimensions.get('screen')

type TInput = {
    touched?: any;
    errors?: any;
    placeholder: string;
    name: string;
    handleChange: any;
    Title: string
    secure?: boolean;
    handleBlur?: any;
    title?: string;
    values?: any;
    containerStyling?: any;
    inputContainerStyling?: ViewStyle;
    titleStyling?: any;
    stylee?: ViewStyle;
    labelStyle?: TextStyle;
    containerStyle?: ViewStyle;
};

const CustomTextInput = ({
    values,
    touched,
    errors,
    Title,
    handleChange,
    containerStyle,
    secure,
    handleBlur,
    name,
    title,
    placeholder,
    containerStyling,
    inputContainerStyling,
    titleStyling,
    labelStyle,
    stylee,
    ...props
}: TextInputProps & TInput) => {
    const [color, setcolor] = useState(COLORS.gray)
    const [Secure, setSecure] = useState(true)
    useEffect(() => {
        // (errors[name] && touched[name]) && setcolor(COLORS.red)
    }, [errors, touched])
    return (
        <>
            <View style={[styles.Container, {
                borderColor: color,
                marginBottom: (errors[name] && touched[name]) ? 0 : 20,

            }]}>
                <Text style={styles.Header}>{Title}</Text>
                <View style={styles.Row}>
                    {secure &&
                        <TouchableOpacity onPress={() => setSecure(!Secure)}>
                            <Eye />
                        </TouchableOpacity>
                    }
                    <TextInput
                        {...props}
                        placeholder={placeholder}
                        placeholderTextColor={'#87898a'}
                        value={values[name]}
                        onChangeText={handleChange(name)}
                        onFocus={() => setcolor(COLORS.green)}
                        onEndEditing={() => setcolor(COLORS.gray)}
                        textAlignVertical="bottom"
                        style={[styles.TextInput, { width: secure ? '90%' : '100%' }]}
                        secureTextEntry={secure && Secure}
                    />
                </View>
            </View>
            {
                (errors[name] && touched[name]) &&
                <Text style={{
                    marginBottom: 20,
                    textAlign: 'center',
                    color: '#f00',
                    fontSize: 12
                }}>{errors[name]}</Text>
            }

        </>

    )
}

export default CustomTextInput


const styles = StyleSheet.create({
    Container: {
        borderWidth: 1.1,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 7,
        width: '100%',
    },
    Row: {
        // height: height * .039,
        // paddingVertical: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'flex-end',
        width: '100%',
        // backgroundColor:'#f00'
    },
    Header: {
        textAlign: 'right',
        color: COLORS.green,
        fontSize: 15,
        fontWeight: '700'
    },
    TextInput: {
        // height: '100%',
        minHeight: height * .035,
        maxHeight: height * .4,
        textAlign: 'right',
        color: COLORS.black,
        fontSize: 14,
        fontWeight: '500',
        paddingTop: Platform.OS == 'android' ? 2 : 0
        // justifyContent:'flex-end'
        // alignSelf:'center'
    }
})

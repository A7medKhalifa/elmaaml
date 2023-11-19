import React, { useEffect, useState } from "react"
import { Button, Platform, StyleSheet, Text, TextInput, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import COLORS from "../values/colors"
import { TextInputProps } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

type TInput = {
    touched?: any;
    errors?: any;
    placeholder: string;
    name: string;
    handleChange: any;
    Title: string
    handleBlur?: any;
    title?: string;
    values?: any;
    containerStyling?: any;
    inputContainerStyling?: ViewStyle;
    titleStyling?: any;
    stylee?: ViewStyle;
    labelStyle?: TextStyle;
    containerStyle?: ViewStyle;
    CalenderShow?: boolean;
    setCalenderShow?: any
    setFieldValue: any
};

const CustomCalenderInput = ({
    values,
    touched,
    errors,
    Title,
    handleChange,
    containerStyle,
    handleBlur,
    name,
    title,
    placeholder,
    containerStyling,
    inputContainerStyling,
    titleStyling,
    labelStyle,
    stylee,
    CalenderShow,
    setCalenderShow,
    setFieldValue,
    ...props
}: TextInputProps & TInput) => {
    const [color, setcolor] = useState(COLORS.gray)
    const [date, setDate] = useState(new Date(Date.now()));
    useEffect(() => {
        (errors[name] && touched[name]) && setcolor(COLORS.red)
    }, [errors, touched])
    useEffect(() => {
        CalenderShow == true ? setcolor(COLORS.green) : setcolor(COLORS.gray)
    }, [CalenderShow])
    const onChange = (event, value) => {
        let Format = moment(value).format(
            'YYYY-MM-DD'
        )
        // setFieldValue(name.replace(/\s/g, ''), Format)
        setDate(value)
        if (Platform.OS === 'android') {
            setCalenderShow(false)
            // console.log(Format)
            setFieldValue(name.replace(/\s/g, ''), Format)
        } else {
            setFieldValue(name.replace(/\s/g, ''), Format)
        }
    };
    return (
        <>
            <TouchableOpacity activeOpacity={.8} onPress={() => {
                setCalenderShow(!CalenderShow)
            }} style={[styles.Container, { borderColor: color }]}>
                <Text style={styles.Header}>{Title}</Text>
                <View style={styles.Row}>


                    <View style={[styles.TextInput, { width: '100%' }]}>
                        <Text style={{
                            color: values[name] ? COLORS.black : '#87898a',
                            fontSize: 14,
                            fontWeight: '500',
                        }}>{values[name] ? values[name] : placeholder}</Text>
                    </View>

                </View>

            </TouchableOpacity>
            {CalenderShow && (
                <>
                    <DateTimePicker
                        value={date}
                        mode={'date'}
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        is24Hour={true}
                        onChange={onChange}
                    />
                    {Platform.OS == 'ios' &&
                        <View style={{ marginBottom: 20, marginTop: -20 }}>
                            <Button title="اختر" onPress={() =>
                                setCalenderShow(false)} />
                        </View>
                    }
                </>
            )}
            {/* {
                CalenderShow &&
                <>
                    <DateTimePicker
                        testID='dateTimePicker'
                        display={Platform.OS === 'ios' ? 'inline' : 'default'}
                        value={date}
                        mode={'date'}
                        maximumDate={new Date()}
                        style={{
                            alignSelf: 'center',
                            marginBottom: 20
                        }}
                        onChange={onChange
                            //     (data) => {
                            //     let FinalTime = data.nativeEvent.timestamp
                            //     let Format = moment(FinalTime).format(
                            //         'YYYY-MM-DD'
                            //     )
                            //     setFieldValue(name.replace(/\s/g, ''), Format)
                            //     // setDate(Format)
                            //     console.log(Format)
                            //     setcolor(COLORS.gray)
                            //     Platform.OS == 'android' && setCalenderShow(false)
                            // }
                        }
                    />
                    {Platform.OS == 'ios' &&
                        <View style={{ marginBottom: 20, marginTop: -20 }}>
                            <Button title="اختر" onPress={() => setCalenderShow(false)} />
                        </View>
                    }
                </>
            } */}

        </>

    )
}

export default CustomCalenderInput


const styles = StyleSheet.create({
    Container: {
        borderWidth: 1.1,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 7,
        width: '100%',
        marginBottom: 20,
    },
    Row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'flex-end',
        width: '100%',
    },
    Header: {
        textAlign: 'right',
        color: COLORS.green,
        fontSize: 15,
        fontWeight: '700'
    },
    TextInput: {
        height: 35,
        textAlign: 'right',
        color: COLORS.black,
        fontSize: 14,
        fontWeight: '500',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    CalendarStyle: {
        height: 350,
        width: '100%',
        alignSelf: 'center',
        marginBottom: 20
    },
})

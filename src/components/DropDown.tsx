import React, { useEffect, useState } from "react"
import { FlatList, StyleSheet, Text, TextInput, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import COLORS from "../values/colors"
import { TextInputProps } from "react-native-paper";
import Modal from "react-native-modal";

type TInput = {
    touched?: any;
    errors?: any;
    placeholder: string;
    name: string;
    Title: string
    values?: any;
    ModalShow?: boolean;
    setModalShow?: any
    setFieldValue: any
};

const CustomCalenderInput = ({
    values,
    touched,
    errors,
    Title,
    name,
    placeholder,
    ModalShow,
    setModalShow,
    setFieldValue,
    ...props
}: TextInputProps & TInput) => {
    const [color, setcolor] = useState(COLORS.gray)
    const [sIndex, setsIndex] = useState(-1)
    useEffect(() => {
        (errors[name] && touched[name]) && setcolor(COLORS.red)
    }, [errors, touched])
    useEffect(() => {
        ModalShow == true ? setcolor(COLORS.green) : setcolor(COLORS.gray)
    }, [ModalShow])
    return (
        <>
            <TouchableOpacity activeOpacity={.8} onPress={() => {
                setModalShow(!ModalShow)
            }} style={[styles.Container, { borderColor: color }]}>
                <Text style={styles.Header}>{Title}</Text>
                <View style={styles.Row}>
                    <View style={styles.TextInput}>
                        <Text style={{
                            color: values[name] ? COLORS.black : '#87898a',
                            fontSize: 14,
                            fontWeight: '500',
                        }}>{values[name] ? values[name] : placeholder}</Text>
                    </View>
                </View>

            </TouchableOpacity>
            <Modal
                isVisible={ModalShow}
                onBackButtonPress={()=>setModalShow(false)}
                onBackdropPress={()=>setModalShow(false)}
                style={{
                    justifyContent: 'flex-end'
                }}
            >
                <View style={{
                    paddingVertical: 10,
                    width: '100%',
                    backgroundColor: 'white',
                    borderRadius: 20,
                    marginBottom: 20
                }}>
                    <FlatList
                        data={[{
                            name: 'ذكر',
                        }, {
                            name: 'أنثي'
                        }]}
                        renderItem={({ index, item }) => (
                            <TouchableOpacity onPress={() => {
                                setsIndex(index)
                                setFieldValue(name, item.name)
                                setModalShow(false)
                            }} style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                padding: 20
                            }}>
                                <View style={{
                                    height: 20,
                                    width: 20,
                                    borderRadius: 20,
                                    borderWidth: 1,
                                    borderColor: COLORS.green,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {index == sIndex &&
                                        <View style={{
                                            height: 14,
                                            width: 14,
                                            borderRadius: 20,
                                            backgroundColor: COLORS.green
                                        }}
                                        />
                                    }

                                </View>
                                <Text style={{color:'#000'}}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                    />

                </View>
            </Modal>
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
        justifyContent: 'center',
        width: '100%'
    },
    CalendarStyle: {
        height: 350,
        width: '100%',
        alignSelf: 'center',
        marginBottom: 20
    },
})

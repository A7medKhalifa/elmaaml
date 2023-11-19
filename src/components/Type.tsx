import React, { useEffect } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import COLORS from "../values/colors";
import { Admin, User } from "../assets";
const {height,width}=Dimensions.get('screen')
const Type = ({
    index,
    Setindex
}: {
    index?: number;
    Setindex?: any;
}) => {
    return (
        <>
            <View style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                width: '100%',
            }}>
                <TouchableOpacity onPress={() => Setindex(0)} style={{
                    height: width*.43,
                    width: width*.43,
                    borderRadius: 20,
                    borderColor: COLORS.green,
                    borderWidth: 1,
                    backgroundColor: index == 0 ? COLORS.green : COLORS.white,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Admin fill={index == 0 ? COLORS.white : COLORS.green} />
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: index == 0 ? COLORS.white : COLORS.green,
                        marginTop: 15
                    }}>مدير معمل</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Setindex(1)} style={{
                    height: width*.43,
                    width: width*.43,
                    borderRadius: 20,
                    borderColor: COLORS.green,
                    backgroundColor: index == 1 ? COLORS.green : COLORS.white,
                    borderWidth: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <User fill={index == 1 ? COLORS.white : COLORS.green} />
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: index == 1 ? COLORS.white : COLORS.green,
                        marginTop: 15
                    }}>مستخدم</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Type
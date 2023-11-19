import React from "react";
import Modal from "react-native-modal";
import { FlatList, Text, View } from "react-native";
import COLORS from "../values/colors";

const Dropdown = () => {
    return (
        <>
            <Modal
                isVisible={true}
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
                            name: 'ذكر'
                        }, {
                            name: 'أنثي'
                        }]}
                        renderItem={({ index, item }) => (
                            <View style={{
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
                                    {index == 1 &&
                                        <View style={{
                                            height: 14,
                                            width: 14,
                                            borderRadius: 20,
                                            backgroundColor: COLORS.green
                                        }}
                                        />
                                    }

                                </View>
                                <Text>{item.name}</Text>
                            </View>
                        )}
                    />

                </View>
            </Modal>
        </>
    )
}
export default Dropdown